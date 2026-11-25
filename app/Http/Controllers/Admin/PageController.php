<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Page;
use App\PageBuilder\BlockRegistry;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\Rule;
use Illuminate\View\View;

class PageController extends Controller
{
    public function __construct(private BlockRegistry $blocks) {}

    public function index(Request $request): View
    {
        $pages = Page::query()
            ->withCount('sections')
            ->when($request->filled('search'), function ($q) use ($request) {
                $term = '%' . $request->string('search') . '%';
                $q->where(fn ($w) => $w->where('title', 'like', $term)->orWhere('slug', 'like', $term));
            })
            ->when($request->filled('status'), fn ($q) => $q->where('status', $request->string('status')))
            ->orderByDesc('is_home')
            ->orderBy('slug')
            ->get();

        return view('admin.pages.index', [
            'pages' => $pages,
            'counts' => [
                'all' => Page::count(),
                'published' => Page::where('status', 'published')->count(),
                'draft' => Page::where('status', 'draft')->count(),
            ],
        ]);
    }

    public function create(): View
    {
        return view('admin.pages.create', [
            'page' => new Page(['status' => 'draft']),
            'templates' => Page::orderBy('title')->get(['id', 'title', 'slug']),
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        $data = $this->validated($request);
        $copyFrom = $request->integer('copy_from') ?: null;

        $page = DB::transaction(function () use ($data, $copyFrom) {
            $page = Page::create($data);

            if ($copyFrom && $source = Page::with('sections')->find($copyFrom)) {
                foreach ($source->sections as $section) {
                    $page->sections()->create($section->only('type', 'label', 'anchor', 'data', 'order', 'is_visible'));
                }
            } else {
                // Sensible starting point: a page banner with the page title
                $page->sections()->create([
                    'type' => 'page_banner',
                    'data' => array_merge($this->blocks->defaults('page_banner'), ['title' => $page->title]),
                    'order' => 1,
                    'is_visible' => true,
                ]);
            }

            return $page;
        });

        return redirect()->route('admin.pages.edit', $page)->with('message', 'Page created. Now add and edit its sections.');
    }

    public function edit(Page $page): View
    {
        $page->load('sections');

        return view('admin.pages.edit', [
            'page' => $page,
            'library' => $this->blocks->grouped(),
        ]);
    }

    public function update(Request $request, Page $page): RedirectResponse
    {
        $page->update($this->validated($request, $page));

        return back()->with('message', 'Page settings saved.');
    }

    public function destroy(Page $page): RedirectResponse
    {
        if ($page->is_home) {
            return back()->with('error', 'The home page cannot be deleted. Set another page as home first.');
        }

        $page->delete();

        return redirect()->route('admin.pages.index')->with('message', 'Page deleted.');
    }

    public function duplicate(Page $page): RedirectResponse
    {
        $copy = DB::transaction(function () use ($page) {
            $base = $page->slug . '-copy';
            $slug = $base;
            $n = 2;
            while (Page::where('slug', $slug)->exists()) {
                $slug = $base . '-' . $n++;
            }

            $copy = Page::create([
                'title' => $page->title . ' (Copy)',
                'slug' => $slug,
                'status' => 'draft',
                'is_home' => false,
                'meta_title' => $page->meta_title,
                'meta_description' => $page->meta_description,
                'meta_image' => $page->meta_image,
            ]);

            foreach ($page->sections as $section) {
                $copy->sections()->create($section->only('type', 'label', 'anchor', 'data', 'order', 'is_visible'));
            }

            return $copy;
        });

        return redirect()->route('admin.pages.edit', $copy)->with('message', 'Page duplicated as a draft.');
    }

    public function setHome(Page $page): RedirectResponse
    {
        DB::transaction(function () use ($page) {
            Page::where('is_home', true)->update(['is_home' => false]);
            $page->update(['is_home' => true, 'status' => 'published']);
        });

        return back()->with('message', "“{$page->title}” is now the home page.");
    }

    private function validated(Request $request, ?Page $page = null): array
    {
        $request->merge(['slug' => Page::normalizeSlug((string) ($request->input('slug') ?: $request->input('title')))]);

        $data = $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'slug' => [
                'required', 'string', 'max:190', 'regex:/^[a-z0-9]+(?:[-\/][a-z0-9]+)*$/',
                Rule::unique('pages', 'slug')->ignore($page?->id),
                function ($attr, $value, $fail) {
                    $first = explode('/', $value)[0];
                    if (in_array($first, Page::RESERVED_PREFIXES, true)) {
                        $fail("The URL “/{$value}” is reserved by the system. Please choose another.");
                    }
                },
            ],
            'status' => ['required', Rule::in(array_keys(Page::STATUSES))],
            'meta_title' => ['nullable', 'string', 'max:255'],
            'meta_description' => ['nullable', 'string', 'max:500'],
            'meta_image' => ['nullable', 'string', 'max:1000'],
        ], [
            'slug.regex' => 'The URL may only contain lowercase letters, numbers, dashes and slashes.',
        ]);

        // The home page must stay published
        if ($page?->is_home) {
            $data['status'] = 'published';
        }

        return $data;
    }
}

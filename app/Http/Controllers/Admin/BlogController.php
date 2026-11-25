<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Blog;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\View\View;

class BlogController extends Controller
{
    public function index(Request $request): View
    {
        $posts = Blog::query()
            ->when($request->filled('type'), fn ($q) => $q->where('type', $request->string('type')))
            ->when($request->filled('search'), fn ($q) => $q->where('title', 'like', '%' . $request->string('search') . '%'))
            ->orderByDesc('date')->orderByDesc('id')
            ->paginate(20)->withQueryString();

        return view('admin.blogs.index', ['posts' => $posts]);
    }

    public function create(): View
    {
        return $this->form(new Blog(['type' => 'blog', 'date' => now(), 'status' => true, 'order' => 0]));
    }

    public function store(Request $request): RedirectResponse
    {
        $data = $this->validated($request);
        $data['alias'] = $this->makeAlias($data['alias'] ?: $data['title']);
        Blog::create($data);

        return redirect()->route('admin.blogs.index')->with('message', 'Post created.');
    }

    public function edit(Blog $blog): View
    {
        return $this->form($blog);
    }

    public function update(Request $request, Blog $blog): RedirectResponse
    {
        $data = $this->validated($request);
        $data['alias'] = $this->makeAlias($data['alias'] ?: $data['title'], $blog->id);
        $blog->update($data);

        return redirect()->route('admin.blogs.index')->with('message', 'Post updated.');
    }

    public function destroy(Blog $blog): RedirectResponse
    {
        $blog->delete();

        return back()->with('message', 'Post deleted.');
    }

    public function toggleStatus(Blog $blog): RedirectResponse
    {
        $blog->update(['status' => !$blog->status]);

        return back()->with('message', $blog->status ? 'Post published.' : 'Post unpublished.');
    }

    private function form(Blog $blog): View
    {
        return view('admin.crud.form', [
            'title' => $blog->exists ? 'Edit post' : 'New post',
            'back' => route('admin.blogs.index'),
            'backLabel' => 'Blogs & News',
            'action' => $blog->exists ? route('admin.blogs.update', $blog) : route('admin.blogs.store'),
            'method' => $blog->exists ? 'PUT' : 'POST',
            'viewUrl' => $blog->exists ? url($blog->path()) : null,
            'values' => array_merge($blog->toArray(), ['date' => $blog->date?->format('Y-m-d')]),
            'fields' => [
                ['name' => 'title', 'label' => 'Title', 'type' => 'text', 'required' => true],
                ['name' => 'description', 'label' => 'Full article', 'type' => 'richtext'],
                ['name' => 'short_description', 'label' => 'Short description', 'type' => 'textarea', 'help' => 'Shown on cards and listings.'],
            ],
            'sidebar' => [
                ['name' => 'status', 'label' => 'Published', 'type' => 'toggle'],
                ['name' => 'type', 'label' => 'Type', 'type' => 'select', 'options' => Blog::TYPES],
                ['name' => 'date', 'label' => 'Date', 'type' => 'date', 'required' => true],
                ['name' => 'thumbnail', 'label' => 'Thumbnail', 'type' => 'image'],
                ['name' => 'alias', 'label' => 'URL slug', 'type' => 'text', 'help' => 'Leave empty to generate from the title. Post URL: /post/{slug}'],
                ['name' => 'order', 'label' => 'Sort order', 'type' => 'number', 'help' => 'Lower numbers first when dates match.'],
            ],
        ]);
    }

    private function makeAlias(string $value, ?int $ignoreId = null): string
    {
        $base = Str::slug($value) ?: 'post';
        $alias = $base;
        $i = 2;
        while (Blog::where('alias', $alias)->when($ignoreId, fn ($q) => $q->whereKeyNot($ignoreId))->exists()) {
            $alias = $base . '-' . $i++;
        }

        return $alias;
    }

    private function validated(Request $request): array
    {
        $data = $request->validate([
            'type' => ['required', 'in:' . implode(',', array_keys(Blog::TYPES))],
            'title' => ['required', 'string', 'max:255'],
            'alias' => ['nullable', 'string', 'max:255'],
            'thumbnail' => ['nullable', 'string', 'max:1000'],
            'short_description' => ['nullable', 'string', 'max:1000'],
            'description' => ['nullable', 'string'],
            'date' => ['required', 'date'],
            'order' => ['nullable', 'integer', 'min:0'],
            'status' => ['nullable', 'boolean'],
        ]);
        $data['order'] = (int) ($data['order'] ?? 0);
        $data['status'] = $request->boolean('status');
        $data['alias'] = $data['alias'] ?? '';
        $data['description'] = app(\App\PageBuilder\BlockRegistry::class)->cleanHtml((string) ($data['description'] ?? ''));

        return $data;
    }
}

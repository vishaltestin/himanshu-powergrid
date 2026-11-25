<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Page;
use App\Models\PageSection;
use App\PageBuilder\BlockRegistry;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;
use Illuminate\View\View;

class PageSectionController extends Controller
{
    public function __construct(private BlockRegistry $blocks) {}

    /** Add a new section of the chosen type, then jump into its editor. */
    public function store(Request $request, Page $page): RedirectResponse
    {
        $request->validate([
            'type' => ['required', Rule::in(array_keys($this->blocks->all()))],
            'after' => ['nullable', 'integer'],
        ]);

        $section = DB::transaction(function () use ($request, $page) {
            $order = $page->sections()->max('order') + 1;

            // Insert directly after a given section when requested
            if ($after = $page->sections()->find($request->integer('after'))) {
                $order = $after->order + 1;
                $page->sections()->where('order', '>=', $order)->increment('order');
            }

            return $page->sections()->create([
                'type' => $request->string('type'),
                'data' => $this->blocks->defaults($request->string('type')),
                'order' => $order,
                'is_visible' => true,
            ]);
        });

        return redirect()->route('admin.pages.sections.edit', [$page, $section])
            ->with('message', $this->blocks->label($section->type) . ' added. Fill in its content below.');
    }

    public function edit(Page $page, PageSection $section): View
    {
        abort_unless($section->page_id === $page->id, 404);

        $block = $this->blocks->get($section->type);
        abort_unless($block, 404, 'Unknown section type: ' . $section->type);

        $siblings = $page->sections()->get(['id', 'type', 'label', 'order']);
        $position = $siblings->search(fn ($s) => $s->id === $section->id);

        return view('admin.pages.section', [
            'page' => $page,
            'section' => $section,
            'block' => $block,
            // Merge defaults so newly added schema fields show up for old sections
            'data' => array_replace($this->blocks->defaults($section->type), $section->data ?? []),
            'prev' => $position > 0 ? $siblings[$position - 1] : null,
            'next' => $siblings[$position + 1] ?? null,
            'position' => $position + 1,
            'total' => $siblings->count(),
        ]);
    }

    public function update(Request $request, Page $page, PageSection $section): RedirectResponse
    {
        abort_unless($section->page_id === $page->id, 404);

        $meta = $request->validate([
            'label' => ['nullable', 'string', 'max:120'],
            'anchor' => ['nullable', 'string', 'max:80'],
            'is_visible' => ['nullable', 'boolean'],
            'data' => ['nullable', 'array'],
        ]);

        $section->update([
            'label' => $meta['label'] ?? null,
            'anchor' => filled($meta['anchor'] ?? null) ? Str::slug($meta['anchor']) : null,
            'is_visible' => $request->boolean('is_visible'),
            'data' => $this->blocks->sanitize($section->type, $request->input('data', [])),
        ]);

        if ($request->input('redirect') === 'page') {
            return redirect()->route('admin.pages.edit', $page)->with('message', 'Section saved.');
        }

        return back()->with('message', 'Section saved.');
    }

    public function destroy(Page $page, PageSection $section): RedirectResponse
    {
        abort_unless($section->page_id === $page->id, 404);
        $section->delete();

        return redirect()->route('admin.pages.edit', $page)->with('message', 'Section removed.');
    }

    public function duplicate(Page $page, PageSection $section): RedirectResponse
    {
        abort_unless($section->page_id === $page->id, 404);

        DB::transaction(function () use ($page, $section) {
            $page->sections()->where('order', '>', $section->order)->increment('order');
            $copy = $section->replicate();
            $copy->order = $section->order + 1;
            $copy->label = $section->label ? $section->label . ' (copy)' : null;
            $copy->anchor = null;
            $copy->save();
        });

        return back()->with('message', 'Section duplicated.');
    }

    public function toggle(Page $page, PageSection $section): RedirectResponse|JsonResponse
    {
        abort_unless($section->page_id === $page->id, 404);
        $section->update(['is_visible' => !$section->is_visible]);

        if (request()->expectsJson()) {
            return response()->json(['visible' => $section->is_visible]);
        }

        return back()->with('message', $section->is_visible ? 'Section is now visible.' : 'Section hidden from the website.');
    }

    /** Persist drag & drop order: { ids: [3, 1, 2] } */
    public function reorder(Request $request, Page $page): JsonResponse
    {
        $ids = $request->validate(['ids' => ['required', 'array'], 'ids.*' => ['integer']])['ids'];

        DB::transaction(function () use ($ids, $page) {
            foreach (array_values($ids) as $i => $id) {
                $page->sections()->whereKey($id)->update(['order' => $i + 1]);
            }
        });
        $page->touch();

        return response()->json(['ok' => true]);
    }

    /** Move a section to another page (or copy it). */
    public function transfer(Request $request, Page $page, PageSection $section): RedirectResponse
    {
        abort_unless($section->page_id === $page->id, 404);
        $data = $request->validate([
            'target_page_id' => ['required', 'exists:pages,id'],
            'mode' => ['required', 'in:copy,move'],
        ]);

        $target = Page::findOrFail($data['target_page_id']);
        $order = $target->sections()->max('order') + 1;

        if ($data['mode'] === 'move') {
            $section->update(['page_id' => $target->id, 'order' => $order]);
            $msg = 'Section moved to “' . $target->title . '”.';
        } else {
            $copy = $section->replicate();
            $copy->page_id = $target->id;
            $copy->order = $order;
            $copy->save();
            $msg = 'Section copied to “' . $target->title . '”.';
        }

        return redirect()->route('admin.pages.edit', $page)->with('message', $msg);
    }
}

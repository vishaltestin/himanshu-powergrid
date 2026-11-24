<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Blog;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Response;
use Inertia\Inertia;

class BlogController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('admin/blogs/index', [
            'posts' => Blog::orderByDesc('date')->orderByDesc('id')->get(),
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('admin/blogs/edit', ['post' => null]);
    }

    public function store(Request $request): RedirectResponse
    {
        $validated = $this->validate($request);
        $validated['alias'] = $this->makeAlias($validated['title']);

        Blog::create($validated);

        return redirect()->route('admin.blogs.index')->with('message', 'Post created.');
    }

    public function edit(Blog $blog): Response
    {
        return Inertia::render('admin/blogs/edit', ['post' => $blog]);
    }

    public function update(Request $request, Blog $blog): RedirectResponse
    {
        $validated = $this->validate($request);
        $validated['alias'] = $blog->alias ?: $this->makeAlias($validated['title'], $blog->id);

        $blog->update($validated);

        return redirect()->route('admin.blogs.index')->with('message', 'Post updated.');
    }

    public function destroy(Blog $blog): RedirectResponse
    {
        $blog->delete();

        return redirect()->route('admin.blogs.index')->with('message', 'Post deleted.');
    }

    public function toggleStatus(Blog $blog): RedirectResponse
    {
        $blog->update(['status' => !$blog->status]);

        return back()->with('message', 'Status updated.');
    }

    private function makeAlias(string $title, ?int $ignoreId = null): string
    {
        $base = Str::slug($title) ?: 'post';
        $alias = $base;
        $i = 2;

        while (
            Blog::where('alias', $alias)
                ->when($ignoreId, fn ($q) => $q->where('id', '!=', $ignoreId))
                ->exists()
        ) {
            $alias = $base . '-' . $i++;
        }

        return $alias;
    }

    private function validate(Request $request): array
    {
        $validated = $request->validate([
            'type' => ['required', 'in:blog,news,press-release'],
            'title' => ['required', 'string', 'max:255'],
            'thumbnail' => ['nullable', 'string', 'max:1000'],
            'short_description' => ['nullable', 'string', 'max:1000'],
            'description' => ['nullable', 'string'],
            'date' => ['required', 'date'],
            'order' => ['required', 'integer', 'min:0'],
            'status' => ['required', 'boolean'],
        ]);

        return $validated;
    }
}

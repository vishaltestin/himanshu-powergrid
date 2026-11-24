<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\PageContent;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Response;
use Inertia\Inertia;

class PageContentController extends Controller
{
    public function index(): Response
    {
        $rows = PageContent::all()->keyBy('page');

        return Inertia::render('admin/pages/index', [
            'stored' => $rows->map(fn ($row) => [
                'updated_at' => $row->updated_at->format('d M Y, h:i A'),
            ]),
        ]);
    }

    public function edit(string $page): Response
    {
        $this->guard($page);

        $row = PageContent::firstOrCreate(['page' => $page], ['content' => []]);

        return Inertia::render('admin/pages/edit', [
            'page' => $row->page,
            'content' => $row->content ?? [],
            'updatedAt' => $row->updated_at?->format('d M Y, h:i A'),
        ]);
    }

    public function update(Request $request, string $page): RedirectResponse
    {
        $this->guard($page);

        $validated = $request->validate([
            'content' => ['nullable', 'array'],
        ]);

        PageContent::updateOrCreate(
            ['page' => $page],
            ['content' => $validated['content'] ?? []]
        );

        return back()->with('message', 'Page content saved.');
    }

    private function guard(string $page): void
    {
        abort_unless(preg_match('/^[a-z0-9\-_]+$/', $page), 404);
    }
}

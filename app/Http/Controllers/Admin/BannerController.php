<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Banner;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Response;
use Inertia\Inertia;

class BannerController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('admin/banners/index', [
            'banners' => Banner::orderBy('order')->get(),
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('admin/banners/edit', ['banner' => null]);
    }

    public function store(Request $request): RedirectResponse
    {
        $validated = $this->validate($request);

        Banner::create($validated);

        return redirect()->route('admin.banners.index')->with('message', 'Banner created.');
    }

    public function edit(Banner $banner): Response
    {
        return Inertia::render('admin/banners/edit', ['banner' => $banner]);
    }

    public function update(Request $request, Banner $banner): RedirectResponse
    {
        $validated = $this->validate($request);

        $banner->update($validated);

        return redirect()->route('admin.banners.index')->with('message', 'Banner updated.');
    }

    public function destroy(Banner $banner): RedirectResponse
    {
        $banner->delete();

        return redirect()->route('admin.banners.index')->with('message', 'Banner deleted.');
    }

    public function toggleStatus(Banner $banner): RedirectResponse
    {
        $banner->update(['status' => !$banner->status]);

        return back()->with('message', 'Banner status updated.');
    }

    public function move(Request $request, Banner $banner): RedirectResponse
    {
        $request->validate(['direction' => 'required|in:up,down']);

        $sibling = Banner::where('order', $request->direction === 'up' ? '<' : '>', $banner->order)
            ->orderBy('order', $request->direction === 'up' ? 'desc' : 'asc')
            ->first();

        if ($sibling) {
            $tmp = $banner->order;
            $banner->update(['order' => $sibling->order]);
            $sibling->update(['order' => $tmp]);
        }

        return back()->with('message', 'Banner order updated.');
    }

    private function validate(Request $request): array
    {
        return $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'highlight' => ['nullable', 'string', 'max:255'],
            'highlight_class' => ['nullable', 'string', 'max:100'],
            'description' => ['nullable', 'string', 'max:2000'],
            'image' => ['nullable', 'string', 'max:1000'],
            'button_text' => ['nullable', 'string', 'max:100'],
            'button_link' => ['nullable', 'string', 'max:500'],
            'order' => ['required', 'integer', 'min:0'],
            'status' => ['required', 'boolean'],
        ]);
    }
}

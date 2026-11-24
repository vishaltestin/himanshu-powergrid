<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Menu;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class MenuController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('admin/menus/index', [
            'menus' => Menu::orderBy('menu_position')->orderBy('order')->get()->map(fn ($m) => [
                'id' => $m->id,
                'title' => $m->title,
                'alias' => $m->alias,
                'menu_position' => $m->menu_position,
                'parent_id' => $m->parent_id,
                'order' => $m->order,
                'status' => (bool) $m->status,
                'children' => [],
            ]),
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        Menu::create($this->validate($request) + ['status' => $request->boolean('status', true)]);

        return back()->with('message', 'Menu item created.');
    }

    public function update(Request $request, Menu $menu): RedirectResponse
    {
        $menu->update($this->validate($request) + ['status' => $request->boolean('status', $menu->status)]);

        return back()->with('message', 'Menu item updated.');
    }

    public function destroy(Menu $menu): RedirectResponse
    {
        $menu->children()->delete();
        $menu->delete();

        return back()->with('message', 'Menu item deleted.');
    }

    public function toggleStatus(Menu $menu): RedirectResponse
    {
        $menu->update(['status' => !$menu->status]);

        return back()->with('message', 'Status updated.');
    }

    private function validate(Request $request): array
    {
        return $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'alias' => ['required', 'string', 'max:500'],
            'menu_position' => ['required', 'in:main,footer'],
            'parent_id' => ['nullable', 'exists:menus,id'],
            'order' => ['required', 'integer', 'min:0'],
        ]);
    }
}

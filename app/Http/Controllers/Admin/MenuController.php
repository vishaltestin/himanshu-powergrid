<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Menu;
use App\Models\Page;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\View\View;

class MenuController extends Controller
{
    public function index(Request $request): View
    {
        $positions = Menu::positions();
        $position = $request->input('position', 'main');
        if (!array_key_exists($position, $positions)) {
            $position = 'main';
        }

        $items = Menu::where('menu_position', $position)
            ->whereNull('parent_id')
            ->with('children')
            ->orderBy('order')
            ->get();

        return view('admin.menus.index', [
            'positions' => $positions,
            'position' => $position,
            'items' => $items,
            'counts' => Menu::selectRaw('menu_position, count(*) as total')->groupBy('menu_position')->pluck('total', 'menu_position'),
        ]);
    }

    public function create(Request $request): View
    {
        return $this->form(new Menu([
            'menu_position' => $request->input('position', 'main'),
            'parent_id' => $request->input('parent_id'),
            'status' => true,
        ]));
    }

    public function store(Request $request): RedirectResponse
    {
        $data = $this->validated($request);
        $data['order'] = (Menu::where('menu_position', $data['menu_position'])->where('parent_id', $data['parent_id'])->max('order') ?? 0) + 1;
        Menu::create($data);

        return redirect()->route('admin.menus.index', ['position' => $data['menu_position']])->with('message', 'Menu item added.');
    }

    public function edit(Menu $menu): View
    {
        return $this->form($menu);
    }

    public function update(Request $request, Menu $menu): RedirectResponse
    {
        $data = $this->validated($request, $menu);
        $menu->update($data);
        // Children follow their parent's position
        $menu->children()->update(['menu_position' => $menu->menu_position]);

        return redirect()->route('admin.menus.index', ['position' => $menu->menu_position])->with('message', 'Menu item updated.');
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

    /** Persist nested drag & drop order: { ids: [...], parent_id: null|int } */
    public function reorder(Request $request): JsonResponse
    {
        $data = $request->validate(['ids' => ['required', 'array'], 'ids.*' => ['integer']]);
        foreach (array_values($data['ids']) as $i => $id) {
            Menu::whereKey($id)->update(['order' => $i + 1]);
        }

        return response()->json(['ok' => true]);
    }

    private function form(Menu $menu): View
    {
        $parents = Menu::whereNull('parent_id')
            ->when($menu->exists, fn ($q) => $q->whereKeyNot($menu->id))
            ->orderBy('menu_position')->orderBy('order')
            ->get();

        $parentOptions = ['' => '— Top level —'];
        foreach ($parents as $p) {
            $parentOptions[$p->id] = (Menu::positions()[$p->menu_position] ?? $p->menu_position) . ' › ' . $p->title;
        }

        $pageLinks = Page::published()->orderBy('title')->get()->mapWithKeys(fn ($p) => [$p->path() => $p->title . '  (' . $p->path() . ')'])->all();

        return view('admin.menus.form', [
            'menu' => $menu,
            'positions' => Menu::positions(),
            'parentOptions' => $parentOptions,
            'pageLinks' => $pageLinks,
        ]);
    }

    private function validated(Request $request, ?Menu $menu = null): array
    {
        $data = $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'alias' => ['required', 'string', 'max:500'],
            'menu_position' => ['required', 'string', 'max:50', 'regex:/^[a-z0-9_]+$/'],
            'custom_position' => ['nullable', 'string', 'max:50'],
            'parent_id' => ['nullable', 'exists:menus,id'],
        ]);

        if ($data['menu_position'] === '_custom') {
            $data['menu_position'] = Str::snake(Str::lower($data['custom_position'] ?? '')) ?: 'main';
        }
        unset($data['custom_position']);

        // A child always lives in its parent's menu
        if (!empty($data['parent_id'])) {
            $parent = Menu::find($data['parent_id']);
            if ($menu && $parent && $parent->id === $menu->id) {
                $data['parent_id'] = null;
            } elseif ($parent) {
                $data['menu_position'] = $parent->menu_position;
            }
        } else {
            $data['parent_id'] = null;
        }

        $data['status'] = $request->boolean('status');

        return $data;
    }
}

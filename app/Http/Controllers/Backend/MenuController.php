<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\Menu;
use App\Http\Requests\StoreMenuRequest;
use App\Http\Requests\UpdateMenuRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;

class MenuController extends Controller
{
    public function index(Request $request)
    {
        $menus = Menu::with('parent')
            ->when($request->search, function ($query, $search) {
                $query->where('title', 'like', "%{$search}%")
                    ->orWhere('alias', 'like', "%{$search}%");
            })
            ->orderBy('menu_position')
            ->orderBy('order')
            ->paginate(15)
            ->withQueryString();

        return view('admin-dashboard.menus.index', compact('menus'));
    }

    public function create()
    {
        // Fetch only top-level menus to be used as potential parents
        $parentMenus = Menu::whereNull('parent_id')->orderBy('title')->get();
        return view('admin-dashboard.menus.create', compact('parentMenus'));
    }

    public function store(StoreMenuRequest $request)
    {
        $data = $request->validated();
        $data['status'] = $request->has('status');

        if ($request->hasFile('banner_image')) {
            $data['banner_image'] = $this->uploadFile($request->file('banner_image'), 'banners');
        }

        if ($request->hasFile('icon')) {
            $data['icon'] = $this->uploadFile($request->file('icon'), 'icons');
        }

        Menu::create($data);

        return redirect()->route('admin.menus.index')->with('success', 'Menu created successfully.');
    }

    public function edit(Menu $menu)
    {
        // Don't let a menu be its own parent
        $parentMenus = Menu::whereNull('parent_id')->where('id', '!=', $menu->id)->orderBy('title')->get();
        return view('admin-dashboard.menus.edit', compact('menu', 'parentMenus'));
    }

    public function update(UpdateMenuRequest $request, Menu $menu)
    {
        $data = $request->validated();
        $data['status'] = $request->has('status');

        if ($request->hasFile('banner_image')) {
            $this->deleteOldFile($menu->banner_image);
            $data['banner_image'] = $this->uploadFile($request->file('banner_image'), 'banners');
        }

        if ($request->hasFile('icon')) {
            $this->deleteOldFile($menu->icon);
            $data['icon'] = $this->uploadFile($request->file('icon'), 'icons');
        }

        $menu->update($data);

        return redirect()->route('admin.menus.index')->with('success', 'Menu updated successfully.');
    }

    /**
     * Helper to handle file uploads to the file-manager directory
     */
    private function uploadFile($file, $folder)
    {
        // Example output: 17094837_icon.png
        $filename = time() . '_' . $file->getClientOriginalName();

        // Moves to: public/file-manager/menus/banners/
        $file->move(public_path('file-manager/menus/' . $folder), $filename);

        // Saves in DB as: /file-manager/menus/banners/17094837_icon.png
        return '/file-manager/menus/' . $folder . '/' . $filename;
    }

    /**
     * Helper to safely delete old files
     */
    private function deleteOldFile($filepath)
    {
        // ltrim removes the leading '/' so public_path() resolves correctly
        if ($filepath) {
            $absolutePath = public_path(ltrim($filepath, '/'));
            if (\Illuminate\Support\Facades\File::exists($absolutePath)) {
                \Illuminate\Support\Facades\File::delete($absolutePath);
            }
        }
    }

    public function destroy(Menu $menu)
    {
        // Prevent deleting if it has sub-menus
        if ($menu->children()->count() > 0) {
            return back()->with('error', 'Cannot delete this menu because it has sub-menus. Delete them first.');
        }

        $this->deleteOldFile($menu->banner_image);
        $this->deleteOldFile($menu->icon);
        $menu->delete();

        return redirect()->route('admin.menus.index')->with('success', 'Menu deleted successfully.');
    }

}

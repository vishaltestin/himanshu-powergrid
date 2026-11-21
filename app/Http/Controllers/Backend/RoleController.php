<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Gate;

class RoleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        Gate::authorize('manage_roles');

        $roles = Role::orderBy('id', 'asc')->get();

        return view('admin-dashboard.roles.index', compact('roles'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {

        Gate::authorize('manage_roles');

        return view('admin-dashboard.roles.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        Gate::authorize('manage_roles');

        $request->validate([
            'name' => 'required|string|max:255|unique:roles,name',
        ]);

        // Format to snake_case (e.g. "Lead Biologist" -> "lead_biologist")
        $formattedName = strtolower(str_replace(' ', '_', $request->name));

        Role::create(['name' => $formattedName, 'guard_name' => 'web']);

        return redirect()->route('admin.roles.index')
            ->with('success', 'Role created successfully!');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Role $role)
    {
        Gate::authorize('manage_roles');
        if ($role->name === 'root') {
            return redirect()->route('admin.roles.index')->with('error', 'Root role cannot be edited.');
        }

        return view('admin-dashboard.roles.edit', compact('role'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Role $role)
    {
        Gate::authorize('manage_roles');
        if ($role->name === 'root') {
            return redirect()->route('admin.roles.index')->with('error', 'Root role cannot be modified.');
        }

        $request->validate([
            'name' => 'required|string|max:255|unique:roles,name,' . $role->id,
        ]);

        $formattedName = strtolower(str_replace(' ', '_', $request->name));
        $role->update(['name' => $formattedName]);

        return redirect()->route('admin.roles.index')
            ->with('success', 'Role updated successfully!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Role $role, Request $request)
    {
        Gate::authorize('manage_roles');
        if ($role->name === 'root') {
            return response()->json(['success' => false, 'message' => 'Root cannot be deleted.'], 403);
        }

        $role->delete();

        if ($request->wantsJson()) {
            return response()->json([
                'success' => true,
                'message' => 'Role deleted successfully!'
            ]);
        }

        return redirect()->route('admin.roles.index')->with('success', 'Role deleted successfully!');
    }

    public function permissions(Role $role)
    {
        Gate::authorize('manage_permissions');
        $allPermissions = Permission::all();
        $permissionGroups = [];

        foreach ($allPermissions as $permission) {
            // Split by the first underscore (e.g., 'view_udise_codes' -> ['view', 'udise_codes'])
            $parts = explode('_', $permission->name, 2);

            // If it successfully split, use the second part as the module. Otherwise, put it in 'general'
            $module = $parts[1] ?? 'general';

            // Pluralize the module name so 'udise_code' and 'udise_codes' group together perfectly
            $groupName = Str::plural($module);

            $permissionGroups[$groupName][] = $permission;
        }

        $rolePermissions = $role->permissions->pluck('name')->toArray();

        return view('admin-dashboard.roles.permissions', compact('role', 'permissionGroups', 'rolePermissions'));
    }

    public function syncPermissions(Request $request, Role $role)
    {
        $role->syncPermissions($request->permissions ?? []);

        return redirect()->route('admin.roles.index')
            ->with('success', ucfirst(str_replace('_', ' ', $role->name)) . ' permissions updated successfully!');
    }
}

@extends('layouts.app')

@section('content')
    <x-common.page-breadcrumb pageTitle="Role Permissions" />
    <x-common.component-card title="Permissions">
        <form action="{{ route('admin.roles.sync-permissions', $role->id) }}" method="POST">
    @csrf
            
    <div class="flex justify-between items-center mb-6">
        <h5 class="m-0 uppercase font-bold text-blue-600 text-xl flex items-center">
            <i class="ri-shield-user-line mr-2"></i> {{ str_replace('_', ' ', $role->name) }} Permissions
        </h5>
        <div class="flex items-center space-x-3">
            <a href="{{ route('admin.roles.index') }}" class="inline-flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md transition-colors">
                <i class="ri-arrow-left-line mr-2"></i> Back to Roles
            </a>
            <button type="submit" class="inline-flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-md transition-colors">
                <i class="ri-save-line mr-2"></i> Save Permissions
            </button>
        </div>
    </div>

    @if($role->name === 'super_admin')
    <div class="flex items-center p-4 mb-6 text-yellow-800 rounded-lg bg-yellow-50 border border-yellow-200" role="alert">
        <i class="ri-alert-line text-2xl mr-3"></i>
        <div>
            <strong class="font-bold">Note:</strong> The <em class="italic">super_admin</em> role automatically bypasses all permission checks in Laravel. Unchecking boxes here will not restrict this role's access.
        </div>
    </div>
    @endif

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    @foreach($permissionGroups as $moduleName => $permissions)
    <div class="bg-white border border-gray-200 rounded-lg flex flex-col h-full shadow-sm">
        <div class="bg-gray-50 border-b border-gray-200 py-3 px-4 rounded-t-lg">
            <h6 class="m-0 text-xs font-bold text-gray-700 uppercase tracking-wider">
                {{ str_replace('_', ' ', $moduleName) }} Module
            </h6>
        </div>
        
        <div class="p-4 flex-grow">
            <div class="flex flex-col space-y-3">
                @foreach($permissions as $permission)
                    @php 
                        // Extract just the action verb (e.g., 'view' from 'view_udise_codes')
                        $actionVerb = explode('_', $permission->name)[0];
                    @endphp
                    
                    <div class="flex items-start">
                        <div class="flex items-center h-5">
                            <input type="checkbox" 
                                   name="permissions[]" 
                                   value="{{ $permission->name }}" 
                                   id="perm_{{ $permission->id }}"
                                   class="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 focus:ring-2 cursor-pointer"
                                   {{ in_array($permission->name, $rolePermissions) ? 'checked' : '' }}>
                        </div>
                        <div class="ml-3 text-sm">
                            <label for="perm_{{ $permission->id }}" class="font-medium text-gray-700 capitalize cursor-pointer select-none">
                                Can {{ $actionVerb }}
                            </label>
                        </div>
                    </div>
                @endforeach
            </div>
        </div>
    </div>
    @endforeach
</div>

    <div class="mt-6 bg-gray-50 border border-gray-200 rounded-lg p-4 flex justify-end shadow-sm">
        <button type="submit" class="px-8 py-3 bg-green-600 hover:bg-green-700 text-white text-base font-medium rounded-lg transition-colors focus:ring-4 focus:outline-none focus:ring-green-300">
            Save All Permissions
        </button>
    </div>
</form>
    </x-common.component-card>

@endsection

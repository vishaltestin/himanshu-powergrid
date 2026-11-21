@extends('layouts.app')

@section('content')
<x-common.page-breadcrumb pageTitle="Roles Management" />
{{-- <x-common.component-card title="Roles List"> --}}
<div class="rounded-2xl border border-gray-200 bg-white pt-4">
    <div class="flex flex-col gap-2 px-5 mb-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
            <h3 class="text-lg font-semibold text-gray-800 dark:text-white/90">Roles</h3>
        </div>
        <div class="flex flex-col gap-3 sm:flex-row sm:items-center">
            <x-ui.link href="{{ route('admin.roles.create') }}" variant="primary" size="sm">Create New Role</x-ui.link>
        </div>
    </div>
    <div class="max-w-full overflow-x-auto">
        <table class="w-full">
            <thead class="px-6 py-3.5 border-t border-gray-100 border-y bg-gray-50">
                <tr>
                    <th class="px-6 py-3 font-medium text-gray-500 sm:px-6 text-theme-xs dark:text-gray-400 text-start">
                        <div class="flex items-center gap-3">
                            <!-- <div @click="handleSelectAll()"
                                class="flex h-5 w-5 cursor-pointer items-center justify-center rounded-md border-[1.25px]"
                                :class="selectAll ? 'border-blue-500 dark:border-blue-500 bg-blue-500' : 'bg-white dark:bg-white/0 border-gray-300 dark:border-gray-700'">
                                <svg :class="selectAll ? 'block' : 'hidden'" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.6668 3.5L5.25016 9.91667L2.3335 7" stroke="white" stroke-width="1.94437" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div> -->
                            <span class="font-medium text-gray-500 text-theme-sm dark:text-gray-400">ID</span>
                        </div>
                    </th>
                    <th class="px-6 py-3 font-medium text-gray-500 sm:px-6 text-theme-sm dark:text-gray-400 text-start">Role Name</th>
                    <th class="px-6 py-3 font-medium text-gray-500 sm:px-6 text-theme-sm dark:text-gray-400 text-start">Permission</th>
                    <th class="px-6 py-3 font-medium text-gray-500 sm:px-6 text-theme-sm dark:text-gray-400 text-start">Action</th>
                </tr>
            </thead>
            <tbody>
                @foreach($roles as $role)
                <tr class="border-b border-gray-100">
                    <td class="px-4 sm:px-6 py-3.5">
                        <div class="flex items-center gap-3">
                            <!-- <div @click="handleRowSelect(row.id)"
                                class="flex h-5 w-5 cursor-pointer items-center justify-center rounded-md border-[1.25px]"
                                :class="selectedRows.includes(row.id) ? 'border-blue-500 dark:border-blue-500 bg-blue-500' : 'bg-white dark:bg-white/0 border-gray-300 dark:border-gray-700'">
                                <svg :class="selectedRows.includes(row.id) ? 'block' : 'hidden'" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.6668 3.5L5.25016 9.91667L2.3335 7" stroke="white" stroke-width="1.94437" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div> -->
                            <div>
                                <span class="block font-medium text-gray-700 text-theme-sm dark:text-gray-400">{{ $role->id }}</span>
                            </div>
                        </div>
                    </td>
                    <td class="px-4 sm:px-6 py-3.5">
                        <div class="flex items-center gap-3">
                            <div>
                                <span class="mb-0.5 block text-theme-sm font-medium text-gray-700 dark:text-gray-400 capitalize">{{ $role->name }}</span>
                            </div>
                            @if($role->name === 'root')
                            <span class="inline-flex rounded-full bg-yellow-100 px-2 py-0.5 text-xs font-medium text-yellow-600">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-crown-icon lucide-crown">
                                    <path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z" />
                                    <path d="M5 21h14" />
                                </svg>
                            </span>
                            @endif
                        </div>
                    </td>
                    <td class="px-4 sm:px-6 py-3.5">
                        <a href="{{ route('admin.roles.permissions', $role->id) }}" class="inline-flex items-center px-2 py-1 rounded-full gap-1 text-sm font-medium text-blue-600 hover:text-blue-500 bg-blue-50">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-key-icon lucide-key">
                                <path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4" />
                                <path d="m21 2-9.6 9.6" />
                                <circle cx="7.5" cy="15.5" r="5.5" />
                            </svg> Edit Permissions
                        </a>
                    </td>
                    <td class="px-4 sm:px-6 py-3.5">
                        <div class="flex gap-4 items-center">
                            <a href="{{ route('admin.roles.edit', $role->id) }}">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-pen-icon lucide-square-pen size-4.5 text-gray-700 hover:text-yellow-500">
                                    <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                    <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" />
                                </svg>
                            </a>
                            <x-ui.confirm-delete-button
                                :action="route('admin.roles.destroy', $role->id)"
                                message="Are you sure you want to delete this role?" />
                        </div>
                    </td>
                </tr>
                @endforeach
            </tbody>
        </table>
    </div>
</div>

@if(session('error'))
<x-ui.alert
    variant="error"
    title="Error Message"
    :message="session('error')"
    :showLink="false" />
@endif
@if(session('success'))
<x-ui.alert
    variant="success"
    title="Success Message"
    :message="session('success')"
    :showLink="false" />
@endif
{{-- </x-common.component-card> --}}

@endsection
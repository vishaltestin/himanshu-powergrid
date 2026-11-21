@extends('layouts.app')

@section('content')
<div class="space-y-6">
    <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
            <h1 class="text-2xl font-bold text-gray-900 dark:text-white">Menu Management</h1>
            <p class="text-sm text-gray-500 dark:text-gray-400">Manage frontend navigation and hierarchy.</p>
        </div>
        <div class="flex items-center gap-3">
            <a href="{{ route('admin.menus.create') }}"
                class="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                + Create Menu Item
            </a>
        </div>
    </div>

    <x-common.component-card title="Menu Items">

        <form method="GET" action="{{ route('admin.menus.index') }}" class="mb-4 flex max-w-md gap-3">
            <input type="text" name="search" value="{{ request('search') }}" placeholder="Search titles or aliases..."
                class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white" />
            <button type="submit"
                class="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700 focus:ring-4 focus:ring-blue-300">
                Search
            </button>
            @if(request('search'))
            <a href="{{ route('admin.menus.index') }}"
                class="flex items-center text-sm text-gray-500 hover:underline">Clear</a>
            @endif
        </form>

        <div class="overflow-x-auto">
            <table class="w-full">
                <thead class="border-y border-gray-100 bg-gray-50 text-left dark:border-gray-800 dark:bg-gray-800">
                    <tr>
                        <th class="px-6 py-3 text-xs font-medium uppercase text-gray-500">ID</th>
                        <th class="px-6 py-3 text-xs font-medium uppercase text-gray-500">Order</th>
                        <th class="px-6 py-3 text-xs font-medium uppercase text-gray-500">Title & Alias</th>
                        <th class="px-6 py-3 text-xs font-medium uppercase text-gray-500">Position</th>
                        <th class="px-6 py-3 text-xs font-medium uppercase text-gray-500">Hierarchy</th>
                        <th class="px-6 py-3 text-xs font-medium uppercase text-gray-500">Status</th>
                        <th class="px-6 py-3 text-right text-xs font-medium uppercase text-gray-500">Action</th>
                    </tr>
                </thead>
                <tbody>
                    @forelse($menus as $menu)
                    <tr class="border-b border-gray-100 dark:border-gray-800">
                        <td class="px-4 sm:px-6 py-3.5">
                            <div class="flex items-center gap-3">
                                <div>
                                    <span class="block font-medium text-gray-700 text-theme-sm dark:text-gray-400">
                                        {{ $menu->id }}</span>
                                </div>
                            </div>
                        </td>
                        <td class="px-6 py-4 font-semibold text-gray-500">
                            {{ $menu->order }}
                        </td>
                        <td class="px-6 py-4">
                            <div class="flex items-center gap-3">
                                <div>
                                    <div class="text-sm font-medium text-gray-900 dark:text-white">{{ $menu->title }}
                                    </div>
                                    <div class="text-xs text-gray-500">/{{ $menu->alias }}</div>
                                </div>
                            </div>
                        </td>
                        <td class="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">
                            <span
                                class="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 uppercase">
                                {{ $menu->menu_position }}
                            </span>
                        </td>
                        <td class="px-6 py-4 text-sm">
                            @if($menu->parent_id)
                            <span class="text-gray-500">↳ Sub of: </span>
                            <span class="font-medium text-gray-800 dark:text-gray-200">{{ $menu->parent->title ??
                                'Unknown' }}</span>
                            @else
                            <span class="font-semibold text-blue-600">Main</span>
                            @endif
                        </td>
                        <td class="px-6 py-4">
                            @if($menu->status)
                            <x-ui.badge color="success">Active</x-ui.badge>
                            @else
                            <x-ui.badge color="error">Hidden</x-ui.badge>
                            @endif
                        </td>
                        <td class="px-6 py-4 text-right">
                            <div class="flex items-center justify-end gap-2">
                                <a href="{{ route('admin.menus.edit', $menu) }}"
                                    class="inline-flex items-center justify-center rounded-lg bg-gray-100 p-2 text-gray-500 hover:bg-gray-200 hover:text-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                    <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z">
                                        </path>
                                    </svg>
                                </a>

                                <x-ui.confirm-delete-button :action="route('admin.menus.destroy', $menu)"
                                    message="Are you sure you want to delete this menu item? (It cannot be deleted if it has sub-menus assigned to it)." />
                            </div>
                        </td>
                    </tr>
                    @empty
                    <tr>
                        <td colspan="6" class="px-6 py-8 text-center text-sm text-gray-500">
                            No menu items have been created yet.
                        </td>
                    </tr>
                    @endforelse
                </tbody>
            </table>
        </div>
        <div class="mt-4">
            {{ $menus->links() }}
        </div>
    </x-common.component-card>
</div>
@endsection
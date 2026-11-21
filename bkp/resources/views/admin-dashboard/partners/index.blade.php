@extends('layouts.app')

@section('content')
<div class="space-y-6">
    <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
            <h1 class="text-2xl font-bold text-gray-900 dark:text-white">Partners</h1>
            <p class="text-sm text-gray-500 dark:text-gray-400">Manage partners and affiliates.</p>
        </div>
        <div class="flex items-center gap-3">
            <a href="{{ route('admin.partners.create') }}" class="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus:ring-4 focus:ring-blue-300">
                + Add Partner
            </a>
        </div>
    </div>

    <x-common.component-card title="Partner List">
        <!-- Search -->
        <form method="GET" action="{{ route('admin.partners.index') }}" class="mb-4 flex max-w-md gap-3">
            <input type="text" name="search" value="{{ request('search') }}" placeholder="Search partners..." class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:text-white" />
            <button type="submit" class="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700 focus:ring-4 focus:ring-blue-300">Search</button>
            @if(request('search'))
                <a href="{{ route('admin.partners.index') }}" class="flex items-center text-sm text-gray-500 hover:underline">Clear</a>
            @endif
        </form>

        <div class="overflow-x-auto">
            <table class="w-full">
                <thead class="border-y border-gray-100 bg-gray-50 text-left dark:border-gray-800 dark:bg-gray-800">
                    <tr>
                        <th class="px-6 py-3 text-xs font-medium uppercase text-gray-500">Logo</th>
                        <th class="px-6 py-3 text-xs font-medium uppercase text-gray-500">Title & Desc</th>
                        <th class="px-6 py-3 text-xs font-medium uppercase text-gray-500">Status</th>
                        <th class="px-6 py-3 text-right text-xs font-medium uppercase text-gray-500">Action</th>
                    </tr>
                </thead>
                <tbody>
                    @forelse($partners as $partner)
                    <tr class="border-b border-gray-100 dark:border-gray-800">
                        <td class="px-6 py-4">
                            <img src="{{ $partner->image }}" alt="Logo" class="h-12 w-12 rounded object-contain border border-gray-200 bg-white p-1">
                        </td>
                        <td class="px-6 py-4">
                            <div class="text-sm font-medium text-gray-900 dark:text-white">{{ $partner->title }}</div>
                            <div class="text-xs text-gray-500 mt-1 max-w-xs truncate">{{ $partner->description ?: 'No description' }}</div>
                        </td>
                        <td class="px-6 py-4">
                            @if($partner->status)
                                <x-ui.badge color="success">Active</x-ui.badge>
                            @else
                                <x-ui.badge color="error">Hidden</x-ui.badge>
                            @endif
                        </td>
                        <td class="px-6 py-4 text-right">
                            <div class="flex items-center justify-end gap-2">
                                <a href="{{ route('admin.partners.edit', $partner) }}" class="inline-flex items-center justify-center rounded-lg bg-gray-100 p-2 text-gray-500 hover:bg-gray-200 hover:text-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                    <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                                </a>
                                <x-ui.confirm-delete-button
                                    :action="route('admin.partners.destroy', $partner)"
                                    message="Are you sure you want to delete this partner?" />
                            </div>
                        </td>
                    </tr>
                    @empty
                    <tr>
                        <td colspan="4" class="px-6 py-8 text-center text-sm text-gray-500">
                            No partners found.
                        </td>
                    </tr>
                    @endforelse
                </tbody>
            </table>
        </div>
        <div class="mt-4">
            {{ $partners->links() }}
        </div>
    </x-common.component-card>
</div>
@endsection
@extends('layouts.app')

@section('content')
<x-common.page-breadcrumb pageTitle="Reward Badges" />
<div class="rounded-2xl border border-gray-200 bg-white pt-4 dark:border-gray-800 dark:bg-gray-900">
    <div class="mb-4 flex flex-col gap-3 px-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <form method="GET" action="{{ route('admin.badges.index') }}" class="flex max-w-md gap-3 w-full">
            <input name="search" value="{{ request('search') }}" placeholder="Search badges..." class="h-11 w-full rounded-lg border border-gray-300 px-4 text-sm" />
            <button type="submit" class="rounded-lg bg-gray-100 px-5 text-sm font-medium hover:bg-gray-200">Search</button>
        </form>
        <x-ui.link href="{{ route('admin.badges.create') }}" variant="primary" size="sm">+ Create Badge</x-ui.link>
    </div>

    <div class="overflow-x-auto">
        <table class="w-full">
            <thead class="border-y border-gray-100 bg-gray-50 text-left dark:border-gray-800 dark:bg-gray-800">
                <tr>
                    <th class="px-6 py-3 text-xs font-medium uppercase text-gray-500">Badge</th>
                    <th class="px-6 py-3 text-xs font-medium uppercase text-gray-500">Linked Theme</th>
                    <th class="px-6 py-3 text-xs font-medium uppercase text-gray-500">Status</th>
                    <th class="px-6 py-3 text-right text-xs font-medium uppercase text-gray-500">Actions</th>
                </tr>
            </thead>
            <tbody>
                @forelse($badges as $badge)
                <tr class="border-b border-gray-100 dark:border-gray-800">
                    <td class="px-6 py-4">
                        <div class="flex items-center gap-3">
                            <img src="{{ $badge->image }}" class="h-12 w-12 rounded-full border border-gray-200 object-cover p-0.5 bg-white">
                            <div class="text-sm font-bold text-gray-900">{{ $badge->title }}</div>
                        </div>
                    </td>
                    <td class="px-6 py-4 text-sm font-medium text-blue-600">
                        {{ $badge->category->title ?? 'Theme Missing' }}
                    </td>
                    <td class="px-6 py-4">
                        <form method="POST" action="{{ route('admin.badges.toggle-status', $badge) }}">
                            @csrf <button type="submit"><x-ui.badge :color="$badge->status ? 'success' : 'error'">{{ $badge->status ? 'Active' : 'Disabled' }}</x-ui.badge></button>
                        </form>
                    </td>
                    <td class="px-6 py-4 text-right">
                        <div class="flex items-center justify-end gap-2">
                            <a href="{{ route('admin.badges.edit', $badge) }}" class="text-blue-600 hover:underline text-sm">Edit</a>
                            <x-ui.confirm-delete-button :action="route('admin.badges.destroy', $badge)" message="Delete this badge?" />
                        </div>
                    </td>
                </tr>
                @empty
                <tr><td colspan="4" class="px-6 py-10 text-center text-sm text-gray-500">No badges found.</td></tr>
                @endforelse
            </tbody>
        </table>
    </div>
    <div class="mt-4 px-6">{{ $badges->links() }}</div>
</div>
@endsection
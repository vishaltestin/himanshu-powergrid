@extends('layouts.app')
@section('content')
<x-common.page-breadcrumb pageTitle="Activity Themes" />
<div class="rounded-2xl border border-gray-200 bg-white pt-4 dark:border-gray-800 dark:bg-gray-900">
    <div class="mb-4 flex flex-col gap-3 px-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <form method="GET" action="{{ route('admin.activity-categories.index') }}"><input name="search" value="{{ request('search') }}" placeholder="Search themes..." class="h-11 rounded-lg border border-gray-300 bg-transparent px-4 text-sm dark:border-gray-700 dark:text-white" /></form>
        <x-ui.link href="{{ route('admin.activity-categories.create') }}" variant="primary" size="sm">Add Theme</x-ui.link>
    </div>
    <div class="overflow-x-auto">
        <table class="w-full">
            <thead class="border-y border-gray-100 bg-gray-50 text-left dark:border-gray-800 dark:bg-gray-800">
                <tr>
                    <th class="px-6 py-3 text-sm">Title</th>
                    <th class="px-6 py-3 text-sm">Slug</th>
                    <th class="px-6 py-3 text-sm">Activities</th>
                    <th class="px-6 py-3 text-sm">Order</th>
                    <th class="px-6 py-3 text-sm">Status</th>
                    <th class="px-6 py-3 text-sm">Actions</th>
                </tr>
            </thead>
            <tbody>
                @forelse($categories as $category)<tr class="border-b border-gray-100 dark:border-gray-800">
                    <td class="px-6 py-3 text-sm font-medium dark:text-white">{{ $category->title }}</td>
                    <td class="px-6 py-3 text-sm dark:text-gray-300">{{ $category->slug }}</td>
                    <td class="px-6 py-3 text-sm dark:text-gray-300">{{ $category->activities_count }}</td>
                    <td class="px-6 py-3 text-sm dark:text-gray-300">{{ $category->order }}</td>
                    <td class="px-6 py-3">
                        <form method="POST" action="{{ route('admin.activity-categories.toggle-status', $category) }}">@csrf <button><x-ui.badge :color="$category->status ? 'success' : 'error'">{{ $category->status ? 'Active' : 'Inactive' }}</x-ui.badge></button></form>
                    </td>
                    <td class="px-6 py-3">
                        <div class="flex gap-3"><a class="text-blue-600" href="{{ route('admin.activity-categories.edit', $category) }}">Edit</a><x-ui.confirm-delete-button :action="route('admin.activity-categories.destroy', $category)" message="Delete this activity category?" /></div>
                    </td>
                </tr>
                @empty <tr>
                    <td colspan="6" class="px-6 py-10 text-center text-sm text-gray-500">No activity categories found.</td>
                </tr>@endforelse
            </tbody>
        </table>
    </div>
    @if($categories->hasPages())<div class="border-t border-gray-200 px-6 py-4">{{ $categories->links() }}</div>@endif
</div>
@if(session('success'))<x-ui.alert variant="success" title="Success" :message="session('success')" :showLink="false" />@endif
@if(session('error'))<x-ui.alert variant="error" title="Error" :message="session('error')" :showLink="false" />@endif
@endsection
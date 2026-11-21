@extends('layouts.app')
@section('content')
<x-common.page-breadcrumb pageTitle="Activities" />
<div class="rounded-2xl border border-gray-200 bg-white pt-4 dark:border-gray-800 dark:bg-gray-900">
    <div class="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
        <!-- Alpine JS Form for Auto-Submit using x-ref -->
        <form x-data x-ref="filterForm" method="GET" action="{{ route('admin.activities.index') }}" class="mb-4 flex flex-col gap-4 px-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">

            <div class="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center w-full">
                <!-- Auto-submit Search (Debounced 500ms) -->
                <input type="text" name="search" value="{{ request('search') }}"
                    @input.debounce.500ms="$refs.filterForm.submit()"
                    onfocus="let val=this.value; this.value=''; this.value=val;"
                    {{ request('search') ? 'autofocus' : '' }}
                    placeholder="Search activities..."
                    class="h-11 w-full sm:w-56 rounded-lg border border-gray-300 bg-transparent px-4 text-sm dark:border-gray-700 dark:text-white focus:border-blue-500 focus:ring-blue-500" />

                <!-- Auto-submit Category Dropdown -->
                <select name="category_id" @change="$refs.filterForm.submit()" class="h-11 w-full sm:w-44 rounded-lg border border-gray-300 bg-transparent px-4 text-sm dark:border-gray-700 dark:text-white focus:border-blue-500 focus:ring-blue-500">
                    <option value="">All Themes</option>
                    @foreach($categories as $category)
                    <option value="{{ $category->id }}" @selected(request('category_id')==$category->id)>{{ $category->title }}</option>
                    @endforeach
                </select>

                <!-- Auto-submit Grade Dropdown -->
                <select name="grade" @change="$refs.filterForm.submit()" class="h-11 w-full sm:w-36 rounded-lg border border-gray-300 bg-transparent px-4 text-sm dark:border-gray-700 dark:text-white focus:border-blue-500 focus:ring-blue-500">
                    <option value="">All Grades</option>
                    @foreach(range(1, 12) as $grade)
                    <option value="{{ $grade }}" @selected(request('grade')==$grade)>Grade {{ $grade }}</option>
                    @endforeach
                </select>

                <!-- Auto-submit Status Dropdown -->
                <select name="status" @change="$refs.filterForm.submit()" class="h-11 w-full sm:w-36 rounded-lg border border-gray-300 bg-transparent px-4 text-sm dark:border-gray-700 dark:text-white focus:border-blue-500 focus:ring-blue-500">
                    <option value="">All Statuses</option>
                    <option value="active" @selected(request('status')==='active' )>Active</option>
                    <option value="draft" @selected(request('status')==='draft' )>Draft</option>
                    <option value="inactive" @selected(request('status')==='inactive' )>Inactive</option>
                </select>

                <!-- Clear Filters Button -->
                @if(request()->anyFilled(['search', 'category_id', 'status', 'grade']))
                <a href="{{ route('admin.activities.index') }}" class="text-sm text-gray-500 hover:text-blue-600 hover:underline dark:text-gray-400">Clear</a>
                @endif
            </div>

            <x-ui.link href="{{ route('admin.activities.create') }}" variant="primary" size="sm" class="shrink-0">Add Activity</x-ui.link>
        </form>
    </div>
    <div class="overflow-x-auto">
        <table class="w-full">
            <thead class="border-y border-gray-100 bg-gray-50 text-left dark:border-gray-800 dark:bg-gray-800">
                <tr>
                    <th class="px-6 py-3 text-sm">Title</th>
                    <th class="px-6 py-3 text-sm">Themes</th>
                    <th class="px-6 py-3 text-sm">Grades</th>
                    <th class="px-6 py-3 text-sm">Order</th>
                    <!-- <th class="px-6 py-3 text-sm">PDF</th> -->
                    <!-- <th class="px-6 py-3 text-sm">External Link</th> -->
                    <th class="px-6 py-3 text-sm">Created</th>
                    <th class="px-6 py-3 text-sm">Status</th>
                    <th class="px-6 py-3 text-sm">Actions</th>
                </tr>
            </thead>
            <tbody>
                @forelse($activities as $activity)<tr class="border-b border-gray-100 dark:border-gray-800">
                    <td class="px-6 py-3 text-sm font-medium dark:text-white">{{ $activity->title }}</td>
                    <td class="px-6 py-3 dark:text-gray-300">{{ $activity->category->title ?? '—' }}</td>
                    <td class="px-6 py-3 dark:text-gray-300">
                        <x-ui.badge color="info">{{ $activity->grade->name ?? '—' }}</x-ui.badge>
                    </td>

                    <td class="px-6 py-3 text-sm dark:text-gray-300">{{ $activity->order }}</td>
                    <!-- <td class="px-6 py-3 text-sm">@if($activity->pdf_url)<a class="text-blue-600" href="{{ $activity->pdf_url }}" target="_blank">Preview</a> <a class="ml-2 text-blue-600" href="{{ $activity->pdf_url }}" download>Download</a>@else — @endif</td> -->
                    <!-- <td class="px-6 py-3 text-sm">@if($activity->external_link)<a class="text-blue-600" href="{{ $activity->external_link }}" target="_blank">Open</a>@else — @endif</td> -->
                    <td class="px-6 py-3 text-sm dark:text-gray-300">{{ $activity->created_at->format('d M Y') }}</td>
                    <td class="px-6 py-3">
                        <form method="POST" action="{{ route('admin.activities.toggle-status', $activity) }}">@csrf <button><x-ui.badge :color="$activity->status === 'active' ? 'success' : ($activity->status === 'draft' ? 'warning' : 'error')">{{ ucfirst($activity->status) }}</x-ui.badge></button></form>
                    </td>
                    <td class="px-6 py-3">
                        <div class="flex gap-3"><a class="text-blue-600" href="{{ route('admin.activities.show', $activity) }}">View</a><a class="text-blue-600" href="{{ route('admin.activities.edit', $activity) }}">Edit</a><x-ui.confirm-delete-button :action="route('admin.activities.destroy', $activity)" message="Delete this activity?" /></div>
                    </td>
                </tr>
                @empty <tr>
                    <td colspan="8" class="px-6 py-10 text-center text-sm text-gray-500">No activities found.</td>
                </tr>@endforelse
            </tbody>
        </table>
    </div>@if($activities->hasPages())<div class="border-t border-gray-200 px-6 py-4">{{ $activities->links() }}</div>@endif
</div>
@if(session('success'))<x-ui.alert variant="success" title="Success" :message="session('success')" :showLink="false" />@endif
@endsection
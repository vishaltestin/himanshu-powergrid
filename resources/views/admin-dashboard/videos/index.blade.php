@extends('layouts.app')

@section('content')
<x-common.page-breadcrumb pageTitle="Video Resources" />
<div class="rounded-2xl border border-gray-200 bg-white pt-4 dark:border-gray-800 dark:bg-gray-900">
    
    <div class="mb-4 flex flex-col gap-3 px-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <form method="GET" action="{{ route('admin.videos.index') }}" class="flex flex-1 gap-3">
            <input name="search" value="{{ request('search') }}" placeholder="Search videos..." class="h-11 w-full max-w-xs rounded-lg border border-gray-300 px-4 text-sm" />
            
            <select name="category_id" class="h-11 rounded-lg border border-gray-300 px-4 text-sm" onchange="this.form.submit()">
                <option value="">All Themes</option>
                @foreach($categories as $cat)
                    <option value="{{ $cat->id }}" @selected(request('category_id') == $cat->id)>{{ $cat->title }}</option>
                @endforeach
            </select>

            <select name="grade_id" class="h-11 rounded-lg border border-gray-300 px-4 text-sm" onchange="this.form.submit()">
                <option value="">All Grades</option>
                @foreach($grades as $grade)
                    <option value="{{ $grade->id }}" @selected(request('grade_id') == $grade->id)>{{ $grade->name }}</option>
                @endforeach
            </select>
        </form>
        <x-ui.link href="{{ route('admin.videos.create') }}" variant="primary" size="sm">+ Add Video</x-ui.link>
    </div>

    <div class="overflow-x-auto">
        <table class="w-full">
            <thead class="border-y border-gray-100 bg-gray-50 text-left dark:border-gray-800 dark:bg-gray-800">
                <tr>
                    <th class="px-6 py-3 text-xs font-medium uppercase text-gray-500">Video</th>
                    <th class="px-6 py-3 text-xs font-medium uppercase text-gray-500">Theme & Grade</th>
                    <th class="px-6 py-3 text-xs font-medium uppercase text-gray-500">Status</th>
                    <th class="px-6 py-3 text-right text-xs font-medium uppercase text-gray-500">Actions</th>
                </tr>
            </thead>
            <tbody>
                @forelse($videos as $video)
                <tr class="border-b border-gray-100 dark:border-gray-800">
                    <td class="px-6 py-4">
                        <div class="flex items-center gap-3">
                            <img src="{{ $video->thumbnail }}" class="h-12 w-16 rounded object-cover border border-gray-200">
                            <div>
                                <div class="text-sm font-medium text-gray-900">{{ $video->title }}</div>
                                <a href="{{ $video->youtube_link }}" target="_blank" class="text-xs text-blue-600 hover:underline">Watch Link</a>
                            </div>
                        </div>
                    </td>
                    <td class="px-6 py-4">
                        <div class="text-sm text-gray-900">{{ $video->category->title ?? 'Global Theme' }}</div>
                        <div class="text-xs text-gray-500">{{ $video->grade->name ?? 'All Grades' }}</div>
                    </td>
                    <td class="px-6 py-4">
                        <form method="POST" action="{{ route('admin.videos.toggle-status', $video) }}">
                            @csrf <button type="submit"><x-ui.badge :color="$video->status ? 'success' : 'error'">{{ $video->status ? 'Active' : 'Hidden' }}</x-ui.badge></button>
                        </form>
                    </td>
                    <td class="px-6 py-4 text-right">
                        <div class="flex items-center justify-end gap-2">
                            <a href="{{ route('admin.videos.edit', $video) }}" class="text-blue-600 hover:underline text-sm">Edit</a>
                            <x-ui.confirm-delete-button :action="route('admin.videos.destroy', $video)" message="Delete this video?" />
                        </div>
                    </td>
                </tr>
                @empty
                <tr><td colspan="4" class="px-6 py-10 text-center text-sm text-gray-500">No videos found.</td></tr>
                @endforelse
            </tbody>
        </table>
    </div>
    <div class="mt-4 px-6">{{ $videos->links() }}</div>
</div>
@endsection
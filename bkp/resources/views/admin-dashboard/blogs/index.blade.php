@extends('layouts.app')

@section('content')
<x-common.page-breadcrumb pageTitle="Blog Posts" />
<div class="rounded-2xl border border-gray-200 bg-white pt-4 dark:border-gray-800 dark:bg-gray-900">
    
    <div class="mb-4 flex flex-col gap-3 px-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <form method="GET" action="{{ route('admin.blogs.index') }}" class="flex flex-1 gap-3">
            <input name="search" value="{{ request('search') }}" placeholder="Search blogs..." class="h-11 w-full max-w-xs rounded-lg border border-gray-300 px-4 text-sm" />
            
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
        <x-ui.link href="{{ route('admin.blogs.create') }}" variant="primary" size="sm">+ Write Blog</x-ui.link>
    </div>

    <div class="overflow-x-auto">
        <table class="w-full">
            <thead class="border-y border-gray-100 bg-gray-50 text-left dark:border-gray-800 dark:bg-gray-800">
                <tr>
                    <th class="px-6 py-3 text-xs font-medium uppercase text-gray-500">Post</th>
                    <th class="px-6 py-3 text-xs font-medium uppercase text-gray-500">Theme & Grade</th>
                    <th class="px-6 py-3 text-xs font-medium uppercase text-gray-500">Date</th>
                    <th class="px-6 py-3 text-xs font-medium uppercase text-gray-500">Status</th>
                    <th class="px-6 py-3 text-right text-xs font-medium uppercase text-gray-500">Actions</th>
                </tr>
            </thead>
            <tbody>
                @forelse($blogs as $blog)
                <tr class="border-b border-gray-100 dark:border-gray-800">
                    <td class="px-6 py-4">
                        <div class="flex items-center gap-3">
                            <img src="{{ $blog->thumbnail }}" class="h-12 w-16 rounded object-cover border border-gray-200">
                            <div>
                                <div class="text-sm font-medium text-gray-900">{{ $blog->title }}</div>
                                <div class="text-xs text-gray-500 max-w-xs truncate">{{ $blog->short_description }}</div>
                            </div>
                        </div>
                    </td>
                    <td class="px-6 py-4">
                        <div class="text-sm text-gray-900">{{ $blog->category->title ?? 'Global Theme' }}</div>
                        <div class="text-xs text-gray-500">{{ $blog->grade->name ?? 'All Grades' }}</div>
                    </td>
                    <td class="px-6 py-4 text-sm text-gray-600">
                        {{ $blog->date ? $blog->date->format('M d, Y') : 'N/A' }}
                    </td>
                    <td class="px-6 py-4">
                        <form method="POST" action="{{ route('admin.blogs.toggle-status', $blog) }}">
                            @csrf <button type="submit"><x-ui.badge :color="$blog->status ? 'success' : 'error'">{{ $blog->status ? 'Active' : 'Draft' }}</x-ui.badge></button>
                        </form>
                    </td>
                    <td class="px-6 py-4 text-right">
                        <div class="flex items-center justify-end gap-2">
                            <a href="{{ route('admin.blogs.edit', $blog) }}" class="text-blue-600 hover:underline text-sm">Edit</a>
                            <x-ui.confirm-delete-button :action="route('admin.blogs.destroy', $blog)" message="Delete this blog post?" />
                        </div>
                    </td>
                </tr>
                @empty
                <tr><td colspan="5" class="px-6 py-10 text-center text-sm text-gray-500">No blog posts found.</td></tr>
                @endforelse
            </tbody>
        </table>
    </div>
    <div class="mt-4 px-6">{{ $blogs->links() }}</div>
</div>
@endsection
@extends('layouts.app')

@section('content')
<x-common.page-breadcrumb pageTitle="Testimonials" />
<div class="rounded-2xl border border-gray-200 bg-white pt-4 dark:border-gray-800 dark:bg-gray-900">
    
    <div class="mb-4 flex flex-col gap-3 px-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <form method="GET" action="{{ route('admin.testimonials.index') }}" class="flex flex-1 gap-3">
            <input name="search" value="{{ request('search') }}" placeholder="Search by name or designation..." class="h-11 w-full max-w-xs rounded-lg border border-gray-300 px-4 text-sm" />
            <button type="submit" class="rounded-lg bg-gray-100 px-5 text-sm font-medium hover:bg-gray-200">Search</button>
        </form>
        <x-ui.link href="{{ route('admin.testimonials.create') }}" variant="primary" size="sm">+ Add Testimonial</x-ui.link>
    </div>

    <div class="overflow-x-auto">
        <table class="w-full">
            <thead class="border-y border-gray-100 bg-gray-50 text-left dark:border-gray-800 dark:bg-gray-800">
                <tr>
                    <th class="px-6 py-3 text-xs font-medium uppercase text-gray-500">Name & Designation</th>
                    <th class="px-6 py-3 text-xs font-medium uppercase text-gray-500">Testimonial</th>
                    <th class="px-6 py-3 text-xs font-medium uppercase text-gray-500">Date</th>
                    <th class="px-6 py-3 text-xs font-medium uppercase text-gray-500">Visibility</th>
                    <th class="px-6 py-3 text-right text-xs font-medium uppercase text-gray-500">Actions</th>
                </tr>
            </thead>
            <tbody>
                @forelse($testimonials as $item)
                <tr class="border-b border-gray-100 dark:border-gray-800">
                    <td class="px-6 py-4">
                        <div class="text-sm font-medium text-gray-900">{{ $item->name }}</div>
                        <div class="text-xs text-gray-500">{{ $item->designation ?: 'N/A' }}</div>
                    </td>
                    <td class="px-6 py-4">
                        <div class="text-sm text-gray-600 line-clamp-2 max-w-sm" title="{{ $item->testimonial }}">
                            "{{ $item->testimonial }}"
                        </div>
                    </td>
                    <td class="px-6 py-4 text-sm text-gray-600">
                        {{ $item->date ? $item->date->format('M d, Y') : 'N/A' }}
                    </td>
                    <td class="px-6 py-4">
                        <div class="flex flex-col gap-2">
                            <form method="POST" action="{{ route('admin.testimonials.toggle-status', $item) }}">
                                @csrf <button type="submit"><x-ui.badge :color="$item->status ? 'success' : 'error'">{{ $item->status ? 'Active' : 'Hidden' }}</x-ui.badge></button>
                            </form>
                            <form method="POST" action="{{ route('admin.testimonials.toggle-home', $item) }}">
                                @csrf <button type="submit"><x-ui.badge :color="$item->is_show_on_home ? 'success' : 'gray'">{{ $item->is_show_on_home ? 'On Home' : 'Not on Home' }}</x-ui.badge></button>
                            </form>
                        </div>
                    </td>
                    <td class="px-6 py-4 text-right">
                        <div class="flex items-center justify-end gap-2">
                            <a href="{{ route('admin.testimonials.edit', $item) }}" class="text-blue-600 hover:underline text-sm">Edit</a>
                            <x-ui.confirm-delete-button :action="route('admin.testimonials.destroy', $item)" message="Delete this testimonial?" />
                        </div>
                    </td>
                </tr>
                @empty
                <tr><td colspan="5" class="px-6 py-10 text-center text-sm text-gray-500">No testimonials found.</td></tr>
                @endforelse
            </tbody>
        </table>
    </div>
    <div class="mt-4 px-6">{{ $testimonials->links() }}</div>
</div>
@endsection
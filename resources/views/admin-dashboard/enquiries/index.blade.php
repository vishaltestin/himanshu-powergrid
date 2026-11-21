@extends('layouts.app')

@section('content')
<x-common.page-breadcrumb pageTitle="Website Enquiries" />
<div class="rounded-2xl border border-gray-200 bg-white pt-4 dark:border-gray-800 dark:bg-gray-900">
    
    <div class="mb-4 px-5 sm:px-6">
        <form method="GET" action="{{ route('admin.enquiries.index') }}" class="flex max-w-md gap-3">
            <input name="search" value="{{ request('search') }}" placeholder="Search name, email, or phone..." class="h-11 w-full rounded-lg border border-gray-300 px-4 text-sm" />
            <button type="submit" class="rounded-lg bg-gray-100 px-5 text-sm font-medium hover:bg-gray-200">Search</button>
        </form>
    </div>

    <div class="overflow-x-auto">
        <table class="w-full">
            <thead class="border-y border-gray-100 bg-gray-50 text-left dark:border-gray-800 dark:bg-gray-800">
                <tr>
                    <th class="px-6 py-3 text-xs font-medium uppercase text-gray-500">Date</th>
                    <th class="px-6 py-3 text-xs font-medium uppercase text-gray-500">Contact Info</th>
                    <th class="px-6 py-3 text-xs font-medium uppercase text-gray-500">Message Snippet</th>
                    <th class="px-6 py-3 text-xs font-medium uppercase text-gray-500">Status</th>
                    <th class="px-6 py-3 text-right text-xs font-medium uppercase text-gray-500">Actions</th>
                </tr>
            </thead>
            <tbody>
                @forelse($enquiries as $enquiry)
                <tr class="border-b border-gray-100 dark:border-gray-800 {{ $enquiry->is_read ? 'bg-white' : 'bg-blue-50/50' }}">
                    <td class="px-6 py-4 text-sm text-gray-600 whitespace-nowrap">
                        {{ $enquiry->created_at->format('M d, Y h:i A') }}
                    </td>
                    <td class="px-6 py-4">
                        <div class="text-sm font-bold text-gray-900">{{ $enquiry->name }}</div>
                        <div class="text-xs text-gray-500">{{ $enquiry->email }}</div>
                        <div class="text-xs text-gray-500">{{ $enquiry->phone }}</div>
                    </td>
                    <td class="px-6 py-4">
                        <div class="text-sm text-gray-600 line-clamp-2 max-w-xs">
                            {{ $enquiry->message }}
                        </div>
                    </td>
                    <td class="px-6 py-4">
                        @if($enquiry->is_read)
                            <span class="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">Read</span>
                        @else
                            <span class="inline-flex items-center rounded-md bg-blue-100 px-2 py-1 text-xs font-medium text-blue-700">New</span>
                        @endif
                    </td>
                    <td class="px-6 py-4 text-right">
                        <div class="flex items-center justify-end gap-3">
                            <a href="{{ route('admin.enquiries.show', $enquiry) }}" class="text-blue-600 hover:underline text-sm font-medium">View Message</a>
                            <x-ui.confirm-delete-button :action="route('admin.enquiries.destroy', $enquiry)" message="Delete this enquiry?" />
                        </div>
                    </td>
                </tr>
                @empty
                <tr><td colspan="5" class="px-6 py-10 text-center text-sm text-gray-500">No enquiries found.</td></tr>
                @endforelse
            </tbody>
        </table>
    </div>
    <div class="mt-4 px-6">{{ $enquiries->links() }}</div>
</div>
@endsection
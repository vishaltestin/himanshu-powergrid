@extends('layouts.app')

@section('content')
<x-common.page-breadcrumb pageTitle="Subscribers List" />

<div class="rounded-2xl border border-gray-200 bg-white pt-4 dark:border-gray-800 dark:bg-gray-900">
    <div class="mb-4 flex flex-col gap-3 px-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <form method="GET" action="{{ route('admin.subscribers.index') }}" class="flex max-w-md gap-3 w-full">
            <input name="search" value="{{ request('search') }}" placeholder="Search email address..." class="h-11 w-full rounded-lg border border-gray-300 px-4 text-sm" />
            <button type="submit" class="rounded-lg bg-gray-100 px-5 text-sm font-medium hover:bg-gray-200 shrink-0">Search</button>
            @if(request('search'))
                <a href="{{ route('admin.subscribers.index') }}" class="flex items-center text-sm text-gray-500 hover:underline shrink-0">Clear</a>
            @endif
        </form>
        
        <div class="text-sm text-gray-500 font-medium">
            Total: {{ $subscribers->total() }}
        </div>
    </div>

    <div class="overflow-x-auto">
        <table class="w-full">
            <thead class="border-y border-gray-100 bg-gray-50 text-left dark:border-gray-800 dark:bg-gray-800">
                <tr>
                    <th class="px-6 py-3 text-xs font-medium uppercase text-gray-500">Email Address</th>
                    <th class="px-6 py-3 text-xs font-medium uppercase text-gray-500">Subscribed Date</th>
                    <th class="px-6 py-3 text-right text-xs font-medium uppercase text-gray-500">Actions</th>
                </tr>
            </thead>
            <tbody>
                @forelse($subscribers as $subscriber)
                <tr class="border-b border-gray-100 dark:border-gray-800">
                    <td class="px-6 py-4">
                        <div class="text-sm font-medium text-gray-900">{{ $subscriber->email }}</div>
                    </td>
                    <td class="px-6 py-4 text-sm text-gray-600 whitespace-nowrap">
                        {{ $subscriber->created_at->format('M d, Y h:i A') }}
                    </td>
                    <td class="px-6 py-4 text-right">
                        <div class="flex items-center justify-end">
                            <x-ui.confirm-delete-button :action="route('admin.subscribers.destroy', $subscriber)" message="Remove this subscriber?" />
                        </div>
                    </td>
                </tr>
                @empty
                <tr><td colspan="3" class="px-6 py-10 text-center text-sm text-gray-500">No subscribers found.</td></tr>
                @endforelse
            </tbody>
        </table>
    </div>
    <div class="mt-4 px-6">{{ $subscribers->links() }}</div>
</div>
@endsection
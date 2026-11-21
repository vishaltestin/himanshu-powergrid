@extends('layouts.app')

@section('content')
<div class="space-y-6">
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div class="rounded-2xl border border-yellow-200 bg-yellow-50 p-6 dark:border-yellow-900/50 dark:bg-yellow-900/10">
            <div class="flex items-center justify-between">
                <div>
                    <p class="text-sm font-medium text-yellow-600 dark:text-yellow-500">Pending Reviews</p>
                    <p class="mt-2 text-3xl font-bold text-yellow-700 dark:text-yellow-400">{{ $pendingReviews }}</p>
                </div>
                <div class="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100 dark:bg-yellow-900/50">
                    <svg class="h-6 w-6 text-yellow-600 dark:text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
            </div>
        </div>

        <div class="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
            <div class="flex items-center justify-between">
                <div>
                    <p class="text-sm font-medium text-gray-500 dark:text-gray-400">Total Schools</p>
                    <p class="mt-2 text-3xl font-bold text-gray-900 dark:text-white">{{ $totalSchools }}</p>
                </div>
                <div class="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 dark:bg-blue-900/20">
                    <svg class="h-6 w-6 text-blue-600 dark:text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                </div>
            </div>
        </div>

        <div class="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
            <div class="flex items-center justify-between">
                <div>
                    <p class="text-sm font-medium text-gray-500 dark:text-gray-400">Active Activities</p>
                    <p class="mt-2 text-3xl font-bold text-gray-900 dark:text-white">{{ $totalActivities }}</p>
                </div>
                <div class="flex h-12 w-12 items-center justify-center rounded-full bg-purple-50 dark:bg-purple-900/20">
                    <svg class="h-6 w-6 text-purple-600 dark:text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
                </div>
            </div>
        </div>

        <div class="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
            <div class="flex items-center justify-between">
                <div>
                    <p class="text-sm font-medium text-gray-500 dark:text-gray-400">Approved Submissions</p>
                    <p class="mt-2 text-3xl font-bold text-gray-900 dark:text-white">{{ $approvedSubmissions }}</p>
                </div>
                <div class="flex h-12 w-12 items-center justify-center rounded-full bg-green-50 dark:bg-green-900/20">
                    <svg class="h-6 w-6 text-green-600 dark:text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
            </div>
        </div>
    </div>

    <div class="grid grid-cols-12 gap-4 md:gap-6">
        
        <div class="col-span-12 xl:col-span-8">
            <x-common.component-card title="Recent Submissions">
                <div class="overflow-x-auto">
                    <table class="w-full">
                        <thead class="border-y border-gray-100 bg-gray-50 text-left dark:border-gray-800 dark:bg-gray-800">
                            <tr>
                                <th class="px-4 py-3 text-xs font-medium uppercase text-gray-500">School</th>
                                <th class="px-4 py-3 text-xs font-medium uppercase text-gray-500">Activity</th>
                                <th class="px-4 py-3 text-xs font-medium uppercase text-gray-500 text-right">Status</th>
                                <!-- <th class="px-4 py-3 text-right text-xs font-medium uppercase text-gray-500">Action</th> -->
                            </tr>
                        </thead>
                        <tbody>
                            @forelse($recentSubmissions as $submission)
                            <tr class="border-b border-gray-100 dark:border-gray-800">
                                <td class="px-4 py-3">
                                    <div class="text-sm font-medium text-gray-900 dark:text-white">
                                        {{ $submission->user->register->school_name ?? 'Unknown School' }}
                                    </div>
                                    <div class="text-xs text-gray-500">
                                        {{ $submission->created_at->diffForHumans() }}
                                    </div>
                                </td>
                                <td class="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                                    {{ Str::limit($submission->activity->title ?? 'Deleted Activity', 30) }}
                                </td>
                                <td class="px-4 py-3 text-right">
                                    <x-ui.badge :color="$submission->status === 'approved' ? 'success' : ($submission->status === 'pending' ? 'warning' : 'error')">
                                        {{ ucfirst($submission->status) }}
                                    </x-ui.badge>
                                </td>
                                <!-- <td class="px-4 py-3 text-right">
                                    <a href="{{ route('admin.activity-submissions.show', $submission) }}" class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                                        View
                                    </a>
                                </td> -->
                            </tr>
                            @empty
                            <tr>
                                <td colspan="4" class="px-4 py-8 text-center text-sm text-gray-500">
                                    No submissions found.
                                </td>
                            </tr>
                            @endforelse
                        </tbody>
                    </table>
                </div>
                <div class="mt-4 flex justify-end">
                    <a href="{{ route('admin.activity-submissions.global') }}" class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                        View All Submissions
                    </a>
                </div>
            </x-common.component-card>
        </div>

        <div class="col-span-12 xl:col-span-4">
            <x-common.component-card title="Needs Attention (Oldest Pending)">
                <div class="space-y-4">
                    @forelse($needsAttention as $submission)
                    <div class="flex items-center justify-between rounded-lg border border-gray-100 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800/50">
                        <div class="min-w-0 flex-1 pr-4">
                            <p class="truncate text-sm font-medium text-gray-900 dark:text-white">
                                {{ $submission->user->register->school_name ?? 'Unknown School' }}
                            </p>
                            <p class="truncate text-xs text-gray-500 dark:text-gray-400">
                                {{ $submission->activity->title ?? 'Activity' }}
                            </p>
                            <p class="mt-1 text-xs font-semibold text-yellow-600 dark:text-yellow-500">
                                Waiting {{ $submission->created_at->diffForHumans(null, true) }}
                            </p>
                        </div>
                        <a href="{{ route('admin.activity-submissions.show', $submission) }}" class="shrink-0 rounded-md bg-white px-3 py-1.5 text-xs font-medium text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:bg-gray-700 dark:text-gray-200 dark:ring-gray-600 dark:hover:bg-gray-600">
                            Review
                        </a>
                    </div>
                    @empty
                    <div class="rounded-lg border border-dashed border-gray-300 p-8 text-center dark:border-gray-700">
                        <svg class="mx-auto h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p class="mt-2 text-sm font-medium text-gray-900 dark:text-white">All caught up!</p>
                        <p class="text-xs text-gray-500">There are no pending submissions.</p>
                    </div>
                    @endforelse
                </div>
            </x-common.component-card>
        </div>
    </div>
</div>
@endsection
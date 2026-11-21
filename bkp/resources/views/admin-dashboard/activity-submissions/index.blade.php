@extends('layouts.app')

@section('content')
<div class="space-y-6">
    <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
            <h1 class="text-2xl font-bold text-gray-900 dark:text-white">Activity Submissions</h1>
            <p class="text-sm text-gray-500 dark:text-gray-400">Select a school to review their uploaded activities.</p>
        </div>
    </div>

    <x-common.component-card title="Schools Directory">
        
        <form method="GET" action="{{ route('admin.activity-submissions.index') }}" class="mb-4 flex max-w-md gap-3">
            <input type="text" name="search" value="{{ request('search') }}" placeholder="Search school name, UDISE, or city..." class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white" />
            <button type="submit" class="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Search
            </button>
            @if(request('search'))
                <a href="{{ route('admin.activity-submissions.index') }}" class="flex items-center text-sm text-gray-500 hover:underline">Clear</a>
            @endif
        </form>

        <div class="overflow-x-auto">
            <table class="w-full">
                <thead class="border-y border-gray-100 bg-gray-50 text-left dark:border-gray-800 dark:bg-gray-800">
                    <tr>
                        <th class="px-6 py-3 text-xs font-medium uppercase text-gray-500">School Name</th>
                        <th class="px-6 py-3 text-xs font-medium uppercase text-gray-500">Location</th>
                        <th class="px-6 py-3 text-xs font-medium uppercase text-gray-500 text-center">Total Uploads</th>
                        <th class="px-6 py-3 text-right text-xs font-medium uppercase text-gray-500">Action</th>
                    </tr>
                </thead>
                <tbody>
                    @forelse($schools as $school)
                    <tr class="border-b border-gray-100 dark:border-gray-800">
                        <td class="px-6 py-4">
                            <div class="text-sm font-medium text-gray-900 dark:text-white">
                                {{ $school->register->school_name ?? 'Unknown School' }}
                            </div>
                            <div class="text-xs text-gray-500">
                                UDISE: {{ $school->register->udise_no ?? 'N/A' }}
                            </div>
                        </td>
                        <td class="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">
                            {{ $school->register->city ?? '—' }}<br>
                            <span class="text-xs text-gray-400">{{ $school->register->district ?? '' }}</span>
                        </td>
                        <td class="px-6 py-4 text-center">
                            <span class="text-sm font-semibold text-gray-700 dark:text-gray-300">{{ $school->total_submissions }}</span>
                        </td>
                        <td class="px-6 py-4 text-right">
                            <a href="{{ route('admin.activity-submissions.school', $school->id) }}" class="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                                View Submissions
                            </a>
                        </td>
                    </tr>
                    @empty
                    <tr>
                        <td colspan="4" class="px-6 py-8 text-center text-sm text-gray-500">
                            No schools have submitted activities yet.
                        </td>
                    </tr>
                    @endforelse
                </tbody>
            </table>
        </div>
        <div class="mt-4">
            {{ $schools->links() }}
        </div>
    </x-common.component-card>
</div>
@endsection
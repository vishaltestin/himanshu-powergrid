@extends('layouts.app')

@section('content')
<div class="space-y-6">
    <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
            <h1 class="text-2xl font-bold text-gray-900 dark:text-white">
                Submissions: {{ $user->register->school_name ?? 'Unknown School' }}
            </h1>
            <p class="text-sm text-gray-500 dark:text-gray-400">
                UDISE: {{ $user->register->udise_no ?? 'N/A' }} | {{ $user->register->city ?? '' }}, {{ $user->register->district ?? '' }}
            </p>
        </div>
        <div class="flex items-center gap-3">
            <a href="{{ route('admin.activity-submissions.index') }}" class="rounded-lg bg-gray-100 px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700">
                Back to Directory
            </a>
        </div>
    </div>

    <x-common.component-card title="School's Uploads">

        <form x-data x-ref="filterForm" method="GET" action="{{ route('admin.activity-submissions.school', $user->id) }}" class="mb-6 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">

            <div class="w-full sm:w-56">
                <input type="text" name="search" value="{{ request('search') }}"
                    @input.debounce.500ms="$refs.filterForm.submit()"
                    onfocus="let val=this.value; this.value=''; this.value=val;"
                    {{ request('search') ? 'autofocus' : '' }}
                    placeholder="Search activities..."
                    class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white" />
            </div>

            <div class="w-full sm:w-40">
                <select name="status" @change="$refs.filterForm.submit()" class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white">
                    <option value="">All Statuses</option>
                    <option value="Submitted" @selected(request('status')=='Submitted')>Submitted</option>
                    <option value="Rejected" @selected(request('status')=='Rejected')>Rejected</option>
                </select>
            </div>

            <div class="w-full sm:w-56">
                <select name="category_id" @change="$refs.filterForm.submit()" class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white">
                    <option value="">All Themes</option>
                    @foreach($categories as $category)
                    <option value="{{ $category->id }}" @selected(request('category_id')==$category->id)>{{ $category->title }}</option>
                    @endforeach
                </select>
            </div>

            <div class="w-full sm:w-36">
                <select name="grade_id" @change="$refs.filterForm.submit()" class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white">
                    <option value="">All Grades</option>
                    @foreach($grades as $grade)
                    <option value="{{ $grade->id }}" @selected(request('grade_id')==$grade->id)>{{ $grade->name }}</option>
                    @endforeach
                </select>
            </div>

            @if(request()->anyFilled(['search', 'status', 'category_id', 'grade_id']))
            <a href="{{ route('admin.activity-submissions.school', $user->id) }}" class="flex items-center text-sm text-gray-500 hover:text-blue-600 hover:underline">
                Clear Filters
            </a>
            @endif
        </form>

        <div class="overflow-x-auto">
            <table class="w-full">
                <thead class="border-y border-gray-100 bg-gray-50 text-left dark:border-gray-800 dark:bg-gray-800">
                    <tr>
                        <th class="px-6 py-3 text-xs font-medium uppercase text-gray-500">Activity & Theme</th>
                        <th class="px-6 py-3 text-xs font-medium uppercase text-gray-500">Grade</th>
                        <th class="px-6 py-3 text-xs font-medium uppercase text-gray-500">Date Uploaded</th>
                        <th class="px-6 py-3 text-xs font-medium uppercase text-gray-500">Status</th>
                        <th class="px-6 py-3 text-right text-xs font-medium uppercase text-gray-500">Action</th>
                    </tr>
                </thead>
                <tbody>
                    @forelse($submissions as $submission)
                    <tr class="border-b border-gray-100 dark:border-gray-800">
                        <td class="px-6 py-4">
                            <div class="font-semibold text-gray-800 dark:text-gray-200">{{ $submission->activity->title ?? 'Deleted Activity' }}</div>
                            <div class="mt-1">
                                <span class="inline-flex items-center rounded-full bg-blue-50 px-2 py-0.5 text-[10px] font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 dark:bg-blue-900/20 dark:text-blue-400">
                                    {{ $submission->activity->category->title ?? 'General' }}
                                </span>
                            </div>
                        </td>

                        <td class="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">
                            <x-ui.badge color="purple">{{ $submission->activity->grade->name ?? '—' }}</x-ui.badge>
                        </td>

                        <td class="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">
                            {{ $submission->created_at->format('M d, Y') }}<br>
                            <span class="text-xs text-gray-400">{{ $submission->created_at->format('h:i A') }}</span>
                        </td>

                        <td class="px-6 py-4">
                            @if($submission->status === 'Submitted')
                            <x-ui.badge color="success">Submitted</x-ui.badge>
                            @elseif($submission->status === 'Rejected')
                            <x-ui.badge color="error">Rejected</x-ui.badge>
                            @else
                            <x-ui.badge color="warning">{{ ucfirst($submission->status) }}</x-ui.badge>
                            @endif
                        </td>

                        <td class="px-6 py-4 text-right">
                            <div class="flex items-center justify-end gap-2">
                                <a href="{{ route('admin.activity-submissions.show', $submission) }}" class="inline-flex items-center gap-1 rounded-md bg-white px-3 py-1.5 text-xs font-medium text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:bg-gray-700 dark:text-gray-200 dark:ring-gray-600 dark:hover:bg-gray-600">
                                    Review
                                </a>

                                <x-ui.confirm-delete-button
                                    :action="route('admin.activity-submissions.destroy', $submission)"
                                    message="Are you sure you want to permanently delete this submission and its files?" />
                            </div>
                        </td>
                    </tr>
                    @empty
                    <tr>
                        <td colspan="5" class="px-6 py-8 text-center text-sm text-gray-500">
                            This school has not submitted any activities matching these filters.
                        </td>
                    </tr>
                    @endforelse
                </tbody>
            </table>
        </div>
        <div class="mt-4">
            {{ $submissions->links() }}
        </div>
    </x-common.component-card>
</div>
@endsection
@extends('layouts.app')
@section('content')
<x-common.page-breadcrumb pageTitle="Review Submission" />

<div class="grid grid-cols-1 gap-6 lg:grid-cols-3">

    <div class="space-y-6 lg:col-span-2">

        <x-common.component-card title="Submission Information">
            <dl class="grid grid-cols-1 gap-6 text-sm md:grid-cols-2">
                <div>
                    <dt class="text-gray-500">User</dt>
                    <dd class="mt-1 font-medium dark:text-white">{{ $activitySubmission->user->name ?? 'Unknown User' }}</dd>
                </div>
                <div>
                    <dt class="text-gray-500">Activity Title</dt>
                    <dd class="mt-1 font-medium dark:text-white">{{ $activitySubmission->activity->title ?? 'Deleted Activity' }}</dd>
                </div>
                <div>
                    <dt class="text-gray-500">Theme / Category</dt>
                    <dd class="mt-1 font-medium dark:text-white">
                        <span class="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 dark:bg-blue-900/20 dark:text-blue-400">
                            {{ $activitySubmission->activity->category->title ?? 'General' }}
                        </span>
                    </dd>
                </div>
                <div>
                    <dt class="text-gray-500">Target Grade</dt>
                    <dd class="mt-1 font-medium dark:text-white">
                        <x-ui.badge color="purple">{{ $activitySubmission->activity->grade->name ?? '—' }}</x-ui.badge>
                    </dd>
                </div>
                <div>
                    <dt class="text-gray-500">Current Status</dt>
                    <dd class="mt-1 font-medium dark:text-white">
                        @if($activitySubmission->status === 'Submitted')
                        <x-ui.badge color="success">Submitted</x-ui.badge>
                        @elseif($activitySubmission->status === 'Rejected')
                        <x-ui.badge color="error">Rejected</x-ui.badge>
                        @else
                        <x-ui.badge color="warning">{{ ucfirst($activitySubmission->status) }}</x-ui.badge>
                        @endif
                    </dd>
                </div>
                <div>
                    <dt class="text-gray-500">Submitted On</dt>
                    <dd class="mt-1 font-medium dark:text-white">{{ $activitySubmission->created_at->format('d M Y, h:i A') }}</dd>
                </div>
                <div class="md:col-span-2">
                    <dt class="text-gray-500">School's Description</dt>
                    <dd class="mt-2 whitespace-pre-line rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800 dark:text-white">
                        {{ $activitySubmission->description ?: 'No description provided.' }}
                    </dd>
                </div>
            </dl>
        </x-common.component-card>

        @if($schoolDetails)
        <x-common.component-card title="Contact Information">
            <dl class="grid grid-cols-1 gap-6 text-sm md:grid-cols-2">
                <div class="md:col-span-2">
                    <h4 class="border-b border-gray-100 pb-2 text-sm font-semibold text-gray-800 dark:border-gray-800 dark:text-gray-200">
                        School Details
                    </h4>
                </div>
                <div>
                    <dt class="text-gray-500">School Name</dt>
                    <dd class="mt-1 font-medium dark:text-white">{{ $schoolDetails->school_name ?: '—' }}</dd>
                </div>
                <div>
                    <dt class="text-gray-500">UDISE No.</dt>
                    <dd class="mt-1 font-medium dark:text-white">{{ $schoolDetails->udise_no ?: '—' }}</dd>
                </div>
                <div>
                    <dt class="text-gray-500">School Email</dt>
                    <dd class="mt-1 font-medium dark:text-white">
                        @if($schoolDetails->school_email)
                        <a href="mailto:{{ $schoolDetails->school_email }}" class="text-blue-600 hover:underline dark:text-blue-500">{{ $schoolDetails->school_email }}</a>
                        @else — @endif
                    </dd>
                </div>
                <div>
                    <dt class="text-gray-500">School Phone</dt>
                    <dd class="mt-1 font-medium dark:text-white">
                        @if($schoolDetails->school_phone)
                        <a href="tel:{{ $schoolDetails->school_phone }}" class="text-blue-600 hover:underline dark:text-blue-500">{{ $schoolDetails->school_phone }}</a>
                        @else — @endif
                    </dd>
                </div>
                <div>
                    <dt class="text-gray-500">Location</dt>
                    <dd class="mt-1 font-medium dark:text-white">
                        {{ $schoolDetails->city ? $schoolDetails->city . ', ' : '' }}{{ $schoolDetails->district ?: '—' }}
                    </dd>
                </div>

                <div class="md:col-span-2 mt-2">
                    <h4 class="border-b border-gray-100 pb-2 text-sm font-semibold text-gray-800 dark:border-gray-800 dark:text-gray-200">
                        Eco Club Coordinator
                    </h4>
                </div>
                <div>
                    <dt class="text-gray-500">Coordinator Name</dt>
                    <dd class="mt-1 font-medium dark:text-white">{{ $schoolDetails->teacher_name ?: '—' }}</dd>
                </div>
                <div>
                    <dt class="text-gray-500">Coordinator Email</dt>
                    <dd class="mt-1 font-medium dark:text-white">
                        @if($schoolDetails->teacher_email)
                        <a href="mailto:{{ $schoolDetails->teacher_email }}" class="text-blue-600 hover:underline dark:text-blue-500">{{ $schoolDetails->teacher_email }}</a>
                        @else — @endif
                    </dd>
                </div>
                <div>
                    <dt class="text-gray-500">Coordinator Phone</dt>
                    <dd class="mt-1 font-medium dark:text-white">
                        @if($schoolDetails->teacher_phone)
                        <a href="tel:{{ $schoolDetails->teacher_phone }}" class="text-blue-600 hover:underline dark:text-blue-500">{{ $schoolDetails->teacher_phone }}</a>
                        @else — @endif
                    </dd>
                </div>
            </dl>
        </x-common.component-card>
        @endif

        <x-common.component-card title="Uploaded Evidence">
            @if($activitySubmission->gdrive_link)
            <div class="mb-6 rounded-xl border border-blue-100 bg-blue-50/50 p-4 dark:border-blue-900/30 dark:bg-blue-900/10">
                <h4 class="mb-2 text-sm font-semibold text-blue-900 dark:text-blue-400">Google Drive Folder</h4>
                <a href="{{ $activitySubmission->gdrive_link }}" target="_blank" class="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-blue-700">
                    <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                    Open Google Drive Evidence
                </a>
            </div>
            @endif
            <div class="mb-8">
                <h3 class="mb-4 text-sm font-medium text-gray-700 dark:text-gray-300">Pictures</h3>
                @if(!empty($activitySubmission->images) && count($activitySubmission->images) > 0)
                <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                    @foreach($activitySubmission->images as $image)
                    <a href="{{ asset($image) }}" target="_blank" class="group block overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
                        <img src="{{ asset($image) }}" alt="Evidence Image" class="aspect-square w-full object-cover transition duration-200 group-hover:scale-105" />
                    </a>
                    @endforeach
                </div>
                @else
                <p class="text-sm italic text-gray-500">No pictures were uploaded.</p>
                @endif
            </div>

            <div>
                <h3 class="mb-4 text-sm font-medium text-gray-700 dark:text-gray-300">Videos</h3>
                @if(!empty($activitySubmission->videos) && count($activitySubmission->videos) > 0)
                <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    @foreach($activitySubmission->videos as $video)
                    <div class="overflow-hidden rounded-lg border border-gray-200 bg-black dark:border-gray-700">
                        <video controls class="aspect-video w-full">
                            <source src="{{ asset($video) }}" type="video/{{ pathinfo($video, PATHINFO_EXTENSION) }}">
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    @endforeach
                </div>
                @else
                <p class="text-sm italic text-gray-500">No videos were uploaded.</p>
                @endif
            </div>
        </x-common.component-card>
    </div>

    <div class="lg:col-span-1">
        <div class="sticky top-24">
            <x-common.component-card title="Admin Review">
                <form method="POST" action="{{ route('admin.activity-submissions.update', $activitySubmission) }}" class="space-y-5">
                    @csrf
                    @method('PUT')

                    <div>
                        <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Update Status <span class="text-red-500">*</span></label>
                        <select name="status" id="status_select" required class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm dark:border-gray-700 dark:bg-gray-900 dark:text-white">
                            <option value="Submitted" @selected(old('status', $activitySubmission->status) === 'Submitted')>Submitted</option>
                            <!-- <option value="Rejected" @selected(old('status', $activitySubmission->status) === 'Rejected')>Rejected</option> -->
                        </select>
                        @error('status')<p class="mt-1 text-sm text-red-500">{{ $message }}</p>@enderror
                    </div>

                    <div class="h-0 opacity-0 invisible">
                        <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                            Remarks <span id="remarks_asterisk" class="hidden text-red-500">*</span>
                        </label>
                        <textarea name="admin_remarks" rows="5" placeholder="Provide feedback or reasons for rejection..." class="w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm dark:border-gray-700 dark:bg-gray-900 dark:text-white">{{ old('admin_remarks', $activitySubmission->admin_remarks) }}</textarea>
                        @error('admin_remarks')<p class="mt-1 text-sm text-red-500">{{ $message }}</p>@enderror
                    </div>

                    <div class="pt-2">
                        <x-ui.button type="submit" variant="primary" class="w-full justify-center">Save Review</x-ui.button>
                    </div>
                </form>
            </x-common.component-card>
        </div>
    </div>
</div>

@push('scripts')
<script>
    document.addEventListener('DOMContentLoaded', function() {
        const statusSelect = document.getElementById('status_select');
        const asterisk = document.getElementById('remarks_asterisk');

        // Dynamically show the required asterisk if "Rejected" is selected
        function toggleAsterisk() {
            if (statusSelect.value === 'Rejected') {
                asterisk.classList.remove('hidden');
            } else {
                asterisk.classList.add('hidden');
            }
        }

        statusSelect.addEventListener('change', toggleAsterisk);
        toggleAsterisk(); // Run on initial load to catch validation errors
    });
</script>
@endpush
@endsection
@extends('layouts.app')
@section('content')
<x-common.page-breadcrumb pageTitle="Activity Details" />
<x-common.component-card :title="$activity->title">
    <dl class="grid grid-cols-1 gap-6 text-sm md:grid-cols-2">
        <div>
            <dt class="text-gray-500">Theme (Category)</dt>
            <dd class="mt-1 font-medium dark:text-white">
                {{ $activity->category->title ?? '—' }}
            </dd>
        </div>
        <div>
            <dt class="text-gray-500">Target Grade</dt>
            <dd class="mt-1 font-medium dark:text-white">
                <x-ui.badge color="info">{{ $activity->grade->name ?? '—' }}</x-ui.badge>
            </dd>
        </div>
        <div class="md:col-span-2 border-t border-gray-100 dark:border-gray-800 pt-6">
            <dt class="text-gray-500 mb-3">Thumbnail</dt>
            <dd>
                @if($activity->image)
                    <img src="{{ $activity->image }}" alt="{{ $activity->title }}" class="h-48 w-auto rounded-xl object-cover border border-gray-200 dark:border-gray-700 shadow-sm">
                @else
                    <span class="text-gray-400 italic">No thumbnail selected</span>
                @endif
            </dd>
        </div>
        <div>
            <dt class="text-gray-500">Status</dt>
            <dd class="mt-1 font-medium dark:text-white">{{ ucfirst($activity->status) }}</dd>
        </div>
        <div>
            <dt class="text-gray-500">Order</dt>
            <dd class="mt-1 font-medium dark:text-white">{{ $activity->order }}</dd>
        </div>
        <div>
            <dt class="text-gray-500">External Link</dt>
            <dd class="mt-1">@if($activity->external_link)<a class="text-blue-600" href="{{ $activity->external_link }}" target="_blank">Open external link</a>@else — @endif</dd>
        </div>
        <div class="md:col-span-2">
            <dt class="text-gray-500">PDF</dt>
            <dd class="mt-1">@if($activity->pdf_url)<a class="text-blue-600" href="{{ $activity->pdf_url }}" target="_blank">Preview PDF</a><a class="ml-3 text-blue-600" href="{{ $activity->pdf_url }}" download>Download PDF</a>@else — @endif</dd>
        </div>
        <div class="md:col-span-2">
            <dt class="text-gray-500">Description</dt>
            <dd class="mt-1 whitespace-pre-line dark:text-white">{{ $activity->description ?: '—' }}</dd>
        </div>
    </dl>
    <div class="mt-6 flex justify-end"><x-ui.link href="{{ route('admin.activities.edit', $activity) }}" variant="primary" size="sm">Edit Activity</x-ui.link></div>
</x-common.component-card>
@endsection
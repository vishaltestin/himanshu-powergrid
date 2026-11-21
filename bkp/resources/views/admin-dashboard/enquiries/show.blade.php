@extends('layouts.app')

@section('content')
<x-common.page-breadcrumb pageTitle="View Enquiry" />

    <x-common.component-card title="Enquiry Details">
        <div class="space-y-6">
            <div class="grid grid-cols-2 gap-4 border-b border-gray-100 pb-6">
                <div>
                    <h4 class="text-xs font-medium uppercase tracking-wider text-gray-500">Submitted By</h4>
                    <p class="mt-1 text-base font-medium text-gray-900">{{ $enquiry->name }}</p>
                </div>
                <div>
                    <h4 class="text-xs font-medium uppercase tracking-wider text-gray-500">Date Received</h4>
                    <p class="mt-1 text-base text-gray-900">{{ $enquiry->created_at->format('F d, Y \a\t h:i A') }}</p>
                </div>
                <div>
                    <h4 class="text-xs font-medium uppercase tracking-wider text-gray-500">Email Address</h4>
                    <p class="mt-1 text-base text-blue-600"><a href="mailto:{{ $enquiry->email }}">{{ $enquiry->email }}</a></p>
                </div>
                <div>
                    <h4 class="text-xs font-medium uppercase tracking-wider text-gray-500">Phone Number</h4>
                    <p class="mt-1 text-base text-gray-900"><a href="tel:{{ $enquiry->phone }}">{{ $enquiry->phone }}</a></p>
                </div>
            </div>

            <div>
                <h4 class="text-xs font-medium uppercase tracking-wider text-gray-500 mb-3">Message Content</h4>
                <div class="rounded-lg bg-gray-50 p-5 text-gray-800 border border-gray-200 leading-relaxed whitespace-pre-wrap">
                    {{ $enquiry->message }}
                </div>
            </div>

            <div class="mt-8 flex items-center justify-end gap-3 border-t border-gray-100 pt-5">
                <a href="{{ route('admin.enquiries.index') }}" class="rounded-lg bg-gray-100 px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-200">
                    Back to List
                </a>
            </div>
        </div>
    </x-common.component-card>
@endsection
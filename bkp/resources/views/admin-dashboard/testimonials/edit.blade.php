@extends('layouts.app')
@section('content')
<x-common.page-breadcrumb pageTitle="Edit Testimonial: {{ $testimonial->name }}" />
    <x-common.component-card title="Update Testimonial Details">
        <form action="{{ route('admin.testimonials.update', $testimonial->id) }}" method="POST">
            @csrf @method('PUT')
            @include('admin-dashboard.testimonials._form', ['testimonial' => $testimonial])
            <div class="mt-8 flex items-center justify-end gap-3 border-t border-gray-100 pt-5 dark:border-gray-800">
                <a href="{{ route('admin.testimonials.index') }}" class="rounded-lg px-5 py-2.5 text-sm text-gray-600 hover:bg-gray-50">Cancel</a>
                <x-ui.button type="submit" variant="primary">Update Testimonial</x-ui.button>
            </div>
        </form>
    </x-common.component-card>
@endsection
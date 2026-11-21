@extends('layouts.app')
@section('content')
<x-common.page-breadcrumb pageTitle="Add Testimonial" />
    <x-common.component-card title="Testimonial Details">
        <form action="{{ route('admin.testimonials.store') }}" method="POST">
            @csrf
            @include('admin-dashboard.testimonials._form')
            <div class="mt-8 flex items-center justify-end gap-3 border-t border-gray-100 pt-5 dark:border-gray-800">
                <a href="{{ route('admin.testimonials.index') }}" class="rounded-lg px-5 py-2.5 text-sm text-gray-600 hover:bg-gray-50">Cancel</a>
                <x-ui.button type="submit" variant="primary">Save Testimonial</x-ui.button>
            </div>
        </form>
    </x-common.component-card>
@endsection
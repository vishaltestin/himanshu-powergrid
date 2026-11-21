@extends('layouts.app')
@section('content')

<x-common.page-breadcrumb pageTitle="Edit Partner: {{ $partner->title }}" />

<x-common.component-card title="Update Partner Details">
    <form action="{{ route('admin.partners.update', $partner->id) }}" method="POST">
        @csrf
        @method('PUT')

        @include('admin-dashboard.partners._form')

        <div class="mt-8 flex items-center justify-end gap-3 border-t border-gray-100 pt-5 dark:border-gray-800">
            <a href="{{ route('admin.partners.index') }}"
                class="rounded-lg px-5 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800">
                Cancel
            </a>
            <x-ui.button type="submit" variant="primary">Update Partner</x-ui.button>
        </div>
    </form>
</x-common.component-card>

@endsection
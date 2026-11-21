@extends('layouts.app')
@section('content')

<x-common.page-breadcrumb pageTitle="Edit Master Trainer: {{ $masterTrainer->name }}" />

<x-common.component-card title="Update Master Trainer Details">
    <form action="{{ route('admin.master-trainers.update', $masterTrainer->id) }}" method="POST">
        @csrf
        @method('PUT')

        @include('admin-dashboard.master-trainers._form')

        <div class="mt-8 flex items-center justify-end gap-3 border-t border-gray-100 pt-5 dark:border-gray-800">
            <a href="{{ route('admin.master-trainers.index') }}"
                class="rounded-lg px-5 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800">
                Cancel
            </a>
            <x-ui.button type="submit" variant="primary">Update Master Trainer</x-ui.button>
        </div>
    </form>
</x-common.component-card>

@endsection
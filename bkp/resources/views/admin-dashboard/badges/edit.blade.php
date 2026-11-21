@extends('layouts.app')
@section('content')
<x-common.page-breadcrumb pageTitle="Edit Blog: {{ $blog->title }}" />
    <x-common.component-card title="Update Blog Details">
        <form action="{{ route('admin.badges.update', $blog->id) }}" method="POST">
            @csrf @method('PUT')
            @include('admin-dashboard.badges._form', ['blog' => $blog])
            <div class="mt-8 flex items-center justify-end gap-3 border-t border-gray-100 pt-5 dark:border-gray-800">
                <a href="{{ route('admin.badges.index') }}" class="rounded-lg px-5 py-2.5 text-sm text-gray-600 hover:bg-gray-50">Cancel</a>
                <x-ui.button type="submit" variant="primary">Update Badge</x-ui.button>
            </div>
        </form>
    </x-common.component-card>
@endsection
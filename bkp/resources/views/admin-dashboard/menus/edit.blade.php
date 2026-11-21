@extends('layouts.app')
@section('content')

<x-common.page-breadcrumb pageTitle="Edit Menu: {{ $menu->title }}" />

    <x-common.component-card title="Update Menu Details">
        <form action="{{ route('admin.menus.update', $menu->id) }}" method="POST" enctype="multipart/form-data">
            @csrf
            @method('PUT')
            
            @include('admin-dashboard.menus._form')

            <div class="mt-8 flex items-center justify-end gap-3 border-t border-gray-100 pt-5 dark:border-gray-800">
                <a href="{{ route('admin.menus.index') }}" class="rounded-lg px-5 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white">
                    Cancel
                </a>
                <x-ui.button type="submit" variant="primary">
                    Update Menu
                </x-ui.button>
            </div>
        </form>
    </x-common.component-card>

@endsection
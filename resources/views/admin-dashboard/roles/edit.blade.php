@extends('layouts.app')

@section('content')
<x-common.page-breadcrumb pageTitle="Roles Management" />
<x-common.component-card title="Edit Role">
    <form action="{{ route('admin.roles.update', $role->id) }}" method="POST">
        @csrf
        @method('PUT')
        <div class="flex flex-col gap-6">
            <div>
                <label for='name' class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                    Role Name
                </label>
                <input type="text"
                    id="name"
                    name="name"
                    value="{{ old('name', ucwords(str_replace('_', ' ', $role->name))) }}"
                    class="dark:bg-dark-900 shadow-theme-xs focus:border-brand-300 focus:ring-brand-500/10 dark:focus:border-brand-800 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 focus:ring-3 focus:outline-hidden dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30" />
                @error('name')
                <p class="mt-2 text-sm text-red-500 flex items-center">
                    <svg class="mr-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    {{ $message }}
                </p>
                @enderror
            </div>
            <div class="flex gap-4 items-center justify-end">
                <x-ui.link size="sm" variant="outline" href="{{ route('admin.roles.index') }}">Cancel</x-ui.link>
                <x-ui.button size="sm" variant="primary" type='submit'>Update</x-ui.button>
            </div>
        </div>
    </form>
</x-common.component-card>

@endsection
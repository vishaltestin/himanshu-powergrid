@extends('layouts.app')

@section('content')
<x-common.page-breadcrumb pageTitle="Roles Management" />
<x-common.component-card title="Create Role">
    <form action="{{ route('admin.roles.store') }}" method="POST">
        @csrf

        <div class="flex flex-col gap-6">
            <div>
                <label for="name" class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Role Name <span class="text-danger">*</span></label>
                <input type="text"
                    class="dark:bg-dark-900 shadow-theme-xs focus:border-brand-300 focus:ring-brand-500/10 dark:focus:border-brand-800 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 focus:ring-3 focus:outline-hidden dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30"
                    id="name"
                    name="name"
                    value="{{ old('name') }}"
                    placeholder="Student, Master, Trainer etc."
                    required>

                @error('name')
                <p class="mt-2 text-sm text-red-500 flex items-center">
                    <svg class="mr-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    {{ $message }}
                </p>
                @enderror
                <div class="mt-4 text-sm mb-6 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-info-icon lucide-info text-yellow-500">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 16v-4" />
                        <path d="M12 8h.01" />
                    </svg>
                    The system will automatically format this into lowercase with underscores (e.g., "Master Trainer" becomes "master_trainer") for database compatibility.
                </div>
            </div>
        </div>
        <div class="flex gap-4 items-center justify-end">
            <x-ui.link size="sm" variant="outline" href="{{ route('admin.roles.index') }}">Cancel</x-ui.link>
            <x-ui.button size="sm" variant="primary" type='submit'>Create Role</x-ui.button>
        </div>
    </form>
</x-common.component-card>

@endsection
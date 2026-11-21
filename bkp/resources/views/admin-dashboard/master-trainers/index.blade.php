@extends('layouts.app')

@section('content')
<div class="space-y-6" x-data="{ isImportModalOpen: false }">
    <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
            <h1 class="text-2xl font-bold text-gray-900 dark:text-white">Master Trainers</h1>
            <p class="text-sm text-gray-500 dark:text-gray-400">Manage master trainers and eco-club schools.</p>
        </div>
        <div class="flex items-center gap-3">
            <button @click="isImportModalOpen = true" class="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700">
                <svg class="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>
                Import Excel
            </button>
            <a href="{{ route('admin.master-trainers.create') }}" class="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus:ring-4 focus:ring-blue-300">
                + Add Trainer
            </a>
        </div>
    </div>

    @if(session('success'))
        <div class="rounded-lg bg-green-50 p-4 text-sm text-green-800 border border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800">
            {{ session('success') }}
        </div>
    @endif
    @if(session('error'))
        <div class="rounded-lg bg-red-50 p-4 text-sm text-red-800 border border-red-200 dark:bg-red-900/30 dark:text-red-400 dark:border-red-800">
            {{ session('error') }}
        </div>
    @endif

    <x-common.component-card title="Master Trainer List">
        <!-- Search -->
        <form method="GET" action="{{ route('admin.master-trainers.index') }}" class="mb-4 flex max-w-md gap-3">
            <input type="text" name="search" value="{{ request('search') }}" placeholder="Search name, district or school..." class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:text-white" />
            <button type="submit" class="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700 focus:ring-4 focus:ring-blue-300">Search</button>
            @if(request('search'))
                <a href="{{ route('admin.master-trainers.index') }}" class="flex items-center text-sm text-gray-500 hover:underline">Clear</a>
            @endif
        </form>

        <div class="overflow-x-auto">
            <table class="w-full">
                <thead class="border-y border-gray-100 bg-gray-50 text-left dark:border-gray-800 dark:bg-gray-800">
                    <tr>
                        <th class="px-6 py-3 text-xs font-medium uppercase text-gray-500">Master Trainer</th>
                        <th class="px-6 py-3 text-xs font-medium uppercase text-gray-500">District</th>
                        <th class="px-6 py-3 text-xs font-medium uppercase text-gray-500">School Name</th>
                        <th class="px-6 py-3 text-xs font-medium uppercase text-gray-500">Contact</th>
                        <th class="px-6 py-3 text-right text-xs font-medium uppercase text-gray-500">Action</th>
                    </tr>
                </thead>
                <tbody>
                    @forelse($trainers as $trainer)
                    <tr class="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                        <td class="px-6 py-4">
                            <div class="text-sm font-medium text-gray-900 dark:text-white">{{ $trainer->name }}</div>
                            <div class="text-xs text-gray-500 mt-1">{{ $trainer->email ?: 'No Email' }}</div>
                        </td>
                        <td class="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">{{ $trainer->district ?: '-' }}</td>
                        <td class="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">{{ $trainer->school_name ?: '-' }}</td>
                        <td class="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">{{ $trainer->contact_number ?: '-' }}</td>
                        <td class="px-6 py-4 text-right">
                            <div class="flex items-center justify-end gap-2">
                                <a href="{{ route('admin.master-trainers.edit', $trainer) }}" class="inline-flex items-center justify-center rounded-lg bg-gray-100 p-2 text-gray-500 hover:bg-gray-200 hover:text-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                    <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                                </a>
                                <x-ui.confirm-delete-button
                                    :action="route('admin.master-trainers.destroy', $trainer)"
                                    message="Are you sure you want to delete this Master Trainer?" />
                            </div>
                        </td>
                    </tr>
                    @empty
                    <tr>
                        <td colspan="5" class="px-6 py-8 text-center text-sm text-gray-500">
                            No master trainers found. Click "Add Trainer" or "Import Excel" to get started.
                        </td>
                    </tr>
                    @endforelse
                </tbody>
            </table>
        </div>
        <div class="mt-4">
            {{ $trainers->links() }}
        </div>
    </x-common.component-card>

    <!-- EXCEL IMPORT MODAL (Alpine.js) -->
    <div x-show="isImportModalOpen" style="display: none;" class="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/50 backdrop-blur-sm"
        x-transition:enter="transition ease-out duration-200" x-transition:enter-start="opacity-0" x-transition:enter-end="opacity-100"
        x-transition:leave="transition ease-in duration-150" x-transition:leave-start="opacity-100" x-transition:leave-end="opacity-0">
        
        <div @click.away="isImportModalOpen = false" class="w-full max-w-md rounded-xl bg-white p-6 shadow-xl dark:bg-gray-800"
            x-transition:enter="transition ease-out duration-200" x-transition:enter-start="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" x-transition:enter-end="opacity-100 translate-y-0 sm:scale-100">
            
            <div class="mb-4 flex items-center justify-between">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Import Master Trainers</h3>
                <button @click="isImportModalOpen = false" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                    <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
            </div>

            <form action="{{ route('admin.master-trainers.import') }}" method="POST" enctype="multipart/form-data">
                @csrf
                <div class="mb-6">
                    <label class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Upload Excel File <span class="text-red-500">*</span>
                    </label>
                    <input type="file" name="file" accept=".xlsx,.xls,.csv" required
                        class="block w-full text-sm text-gray-500 file:mr-4 file:rounded-lg file:border-0 file:bg-blue-50 file:px-4 file:py-2.5 file:text-sm file:font-semibold file:text-blue-700 hover:file:bg-blue-100 dark:file:bg-gray-700 dark:file:text-gray-300">
                    <p class="mt-2 text-xs text-gray-500">Supported formats: .xlsx, .xls, .csv</p>
                </div>

                <div class="flex items-center justify-end gap-3 border-t border-gray-100 pt-4 dark:border-gray-700">
                    <button type="button" @click="isImportModalOpen = false" class="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700">
                        Cancel
                    </button>
                    <button type="submit" class="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
                        Upload & Import
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>
@endsection
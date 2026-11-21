@extends('layouts.app')
@section('content')
<x-common.page-breadcrumb pageTitle="Grades" />

<div class="rounded-2xl border border-gray-200 bg-white pt-4 dark:border-gray-800 dark:bg-gray-900">
    <div class="mb-4 flex flex-col gap-3 px-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <h2 class="text-lg font-semibold text-gray-900 dark:text-white">Manage Grades</h2>
        <x-ui.link href="{{ route('admin.grades.create') }}" variant="primary" size="sm">
            Add New Grade
        </x-ui.link>
    </div>

    <div class="overflow-x-auto custom-scrollbar">
        <table class="w-full text-left text-sm text-gray-500 dark:text-gray-400">
            <thead class="border-y border-gray-200 bg-gray-50 text-xs font-medium uppercase text-gray-700 dark:border-gray-800 dark:bg-gray-800/50 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3">Grade Name</th>
                    <th scope="col" class="px-6 py-3">Order</th>
                    <th scope="col" class="px-6 py-3">Status</th>
                    <th scope="col" class="px-6 py-3">Created</th>
                    <th scope="col" class="px-6 py-3 text-right">Actions</th>
                </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 dark:divide-gray-800">
                @forelse($grades as $grade)
                <tr class="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                    <td class="px-6 py-3 font-medium text-gray-900 dark:text-white">{{ $grade->name }}</td>
                    <td class="px-6 py-3 dark:text-gray-300">{{ $grade->order }}</td>
                    <td class="px-6 py-3">
                        <x-ui.badge :color="$grade->status === 'active' ? 'success' : 'error'">
                            {{ ucfirst($grade->status) }}
                        </x-ui.badge>
                    </td>
                    <td class="px-6 py-3 text-sm dark:text-gray-300">{{ $grade->created_at->format('d M Y') }}</td>
                    <td class="px-6 py-3 text-right">
                        <div class="flex items-center justify-end gap-3">
                            <a class="font-medium text-blue-600 hover:underline dark:text-blue-500" href="{{ route('admin.grades.edit', $grade) }}">Edit</a>
                            
                            <x-ui.confirm-delete-button 
                                :action="route('admin.grades.destroy', $grade)" 
                                message="Delete this grade?" />
                        </div>
                    </td>
                </tr>
                @empty 
                <tr>
                    <td colspan="5" class="px-6 py-10 text-center text-sm text-gray-500">No grades found. Click 'Add New Grade' to create one.</td>
                </tr>
                @endforelse
            </tbody>
        </table>
    </div>
    
    @if($grades->hasPages())
    <div class="border-t border-gray-200 px-6 py-4 dark:border-gray-800">
        {{ $grades->links() }}
    </div>
    @endif
</div>
@endsection
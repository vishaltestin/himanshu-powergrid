@extends('layouts.app')

@section('content')
<x-common.page-breadcrumb pageTitle="User Management" />
<div class="rounded-2xl border border-gray-200 bg-white pt-4">
    <div class="flex flex-col gap-2 px-5 mb-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
            <h3 class="text-lg font-semibold text-gray-800 dark:text-white/90">Users</h3>
        </div>
        <div class="flex gap-3 items-center">
            <form x-data
                method="GET"
                action="{{ route('admin.users.index') }}">
                <div class="relative">
                    <button type="button" class="absolute -translate-y-1/2 left-4 top-1/2">
                        <svg class="fill-gray-500 dark:fill-gray-400" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.04199 9.37381C3.04199 5.87712 5.87735 3.04218 9.37533 3.04218C12.8733 3.04218 15.7087 5.87712 15.7087 9.37381C15.7087 12.8705 12.8733 15.7055 9.37533 15.7055C5.87735 15.7055 3.04199 12.8705 3.04199 9.37381ZM9.37533 1.54218C5.04926 1.54218 1.54199 5.04835 1.54199 9.37381C1.54199 13.6993 5.04926 17.2055 9.37533 17.2055C11.2676 17.2055 13.0032 16.5346 14.3572 15.4178L17.1773 18.2381C17.4702 18.531 17.945 18.5311 18.2379 18.2382C18.5308 17.9453 18.5309 17.4704 18.238 17.1775L15.4182 14.3575C16.5367 13.0035 17.2087 11.2671 17.2087 9.37381C17.2087 5.04835 13.7014 1.54218 9.37533 1.54218Z" fill="" />
                        </svg>
                    </button>
                    <input
                        ype="text"
                        name="search"
                        value="{{ request('search') }}"
                        placeholder="Search users..."
                        class="h-11 w-full rounded-lg border border-gray-300 bg-transparent py-2.5 pl-[42px] pr-4 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-blue-800 xl:w-[300px]"
                        @input.debounce.500ms="$el.form.submit()" />
                    @if(request('search'))
                    <a
                        href="{{ route('admin.users.index') }}"
                        class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-500">
                        ✕
                    </a>
                    @endif
                </div>
            </form>
            @can('create_user')
            <div class="flex flex-col gap-3 sm:flex-row sm:items-center">
                <x-ui.link href="{{ route('admin.users.create') }}" variant="primary" size="sm">Create New User</x-ui.link>
            </div>
            @endcan
        </div>
    </div>
    <div class="max-w-full overflow-x-auto">
        <table class="w-full">
            <thead class="px-6 py-3.5 border-t border-gray-100 border-y bg-gray-50">
                <tr>
                    <th class="px-6 py-3 text-start">
                        <div class="flex items-center gap-3">
                            <div
                                @click="handleSelectAll()"
                                class="flex h-5 w-5 cursor-pointer items-center justify-center rounded-md border-[1.25px]"
                                :class="selectAll
                        ? 'border-blue-500 bg-blue-500'
                        : 'border-gray-300 bg-white dark:border-gray-700 dark:bg-white/0'">
                                <svg
                                    :class="selectAll ? 'block' : 'hidden'"
                                    width="14"
                                    height="14"
                                    viewBox="0 0 14 14"
                                    fill="none">
                                    <path
                                        d="M11.6668 3.5L5.25016 9.91667L2.3335 7"
                                        stroke="white"
                                        stroke-width="1.94437"
                                        stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </div>

                            <span class="text-sm font-medium text-gray-500">
                                ID
                            </span>
                        </div>
                    </th>
                    <th class="px-6 py-3 text-start text-sm font-medium text-gray-500">
                        Name
                    </th>
                    <th class="px-6 py-3 text-start text-sm font-medium text-gray-500">
                        Email/Phone
                    </th>
                    <!-- <th class="px-6 py-3 text-start text-sm font-medium text-gray-500">
                        Phone
                    </th> -->
                    <th class="px-6 py-3 text-start text-sm font-medium text-gray-500">
                        Created At
                    </th>

                    <th class="px-6 py-3 text-start text-sm font-medium text-gray-500">
                        Updated At
                    </th>
                    <th class="px-6 py-3 text-start text-sm font-medium text-gray-500">
                        Status
                    </th>
                    @can('edit_user')
                    <th class="px-6 py-3 text-start text-sm font-medium text-gray-500">
                        Actions
                    </th>
                    @endcan

                </tr>
            </thead>
            <tbody>
                @foreach($users as $user)
                @if(!auth()->user()->hasRole('root') && $user->hasRole('root'))
                @continue
                @endif
                <tr class="border-b border-gray-100">
                    <td class="px-4 sm:px-6 py-3.5">
                        <div class="flex items-center gap-3">
                            <div @click="handleRowSelect(row.id)"
                                class="flex h-5 w-5 cursor-pointer items-center justify-center rounded-md border-[1.25px]"
                                :class="selectedRows.includes(row.id) ? 'border-blue-500 dark:border-blue-500 bg-blue-500' : 'bg-white dark:bg-white/0 border-gray-300 dark:border-gray-700'">
                                <svg :class="selectedRows.includes(row.id) ? 'block' : 'hidden'" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.6668 3.5L5.25016 9.91667L2.3335 7" stroke="white" stroke-width="1.94437" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <div>
                                <span class="block font-medium text-gray-700 text-theme-sm dark:text-gray-400">{{ $user->id }}</span>
                            </div>
                        </div>
                    </td>
                    <td class="px-4 sm:px-6 py-3.5">
                        <div class="flex flex-col">
                            <div>
                                <span class="mb-0.5 block text-theme-sm font-medium text-gray-700 dark:text-gray-400 capitalize">{{ $user->name }}</span>
                            </div>
                            <div class="text-[12px] text-orange-500">
                                @forelse($user->roles as $role)
                                <span>{{ $role->name }}</span>
                                @empty
                                <span>No Role</span>
                                @endforelse
                            </div>
                        </div>
                    </td>
                    <td class="px-4 sm:px-6 py-3.5">
                        <p class="text-gray-700 text-theme-sm mb-1">{{ $user->email }}</p>
                        <p class="text-gray-700 text-theme-sm">
                            {{ $user->phone }}
                        </p>
                    </td>
                    <!-- <td class="px-4 sm:px-6 py-3.5">
                        @if($user->phone)
                        <p class="text-gray-700 text-theme-sm">
                            {{ $user->phone }}
                        </p>
                        @else
                        <p class="text-gray-500 text-theme-sm italic">
                            No phone number
                        </p>
                        @endif
                    </td> -->

                    <td class="px-4 sm:px-6 py-3.5">
                        <p class="text-gray-700 text-theme-sm">{{ $user->created_at->format('d-m-Y H:i:s') }}</p>
                    </td>
                    <td class="px-4 sm:px-6 py-3.5">
                        <p class="text-gray-700 text-theme-sm">{{ $user->updated_at->format('d-m-Y H:i:s') }}</p>
                    </td>
                    <td class="px-4 sm:px-6 py-3.5">
                        @can('edit_user')
                        <x-ui.toggle-status-button
                            :action="route('admin.users.toggle-status', $user->id)"
                            :status="$user->status"
                            message="Are you sure you want to change this user's status?" />
                        @else

                        @if($user->status)
                        <span class="inline-flex rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800">
                            Active
                        </span>
                        @else
                        <span class="inline-flex rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-800">
                            InActive
                        </span>
                        @endif
                        @endcan
                    </td>
                    @can('edit_user')
                    <td class="px-4 sm:px-6 py-3.5">
                        <div class="flex gap-4 items-center">
                            <a href="{{ route('admin.users.edit', $user->id) }}">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-pen-icon lucide-square-pen size-4.5 text-gray-700 hover:text-yellow-500">
                                    <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                    <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" />
                                </svg>
                            </a>
                            <x-ui.confirm-delete-button
                                :action="route('admin.users.destroy', $user->id)"
                                message="Are you sure you want to delete this user?" />
                        </div>
                    </td>
                    @endcan
                </tr>
                @endforeach
            </tbody>
        </table>
    </div>
    @if($users->hasPages())
    <div class="px-6 py-4 border-t border-gray-200">
        {{ $users->links() }}
    </div>
    @endif
</div>

@if(session('error'))
<x-ui.alert
    variant="error"
    title="Error Message"
    :message="session('error')"
    :showLink="false" />
@endif
@if(session('success'))
<x-ui.alert
    variant="success"
    title="Success Message"
    :message="session('success')"
    :showLink="false" />
@endif

@endsection
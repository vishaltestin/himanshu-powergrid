@extends('layouts.app')

@php
use Illuminate\Support\HtmlString;

$BoxIcon = new HtmlString('
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd"
        d="M9.77692 3.24224C9.91768 3.17186 10.0834 3.17186 10.2241 3.24224L15.3713 5.81573L10.3359 8.33331C10.1248 8.43888 9.87626 8.43888 9.66512 8.33331L4.6298 5.81573L9.77692 3.24224ZM3.70264 7.0292V13.4124C3.70264 13.6018 3.80964 13.775 3.97903 13.8597L9.25016 16.4952L9.25016 9.7837C9.16327 9.75296 9.07782 9.71671 8.99432 9.67496L3.70264 7.0292ZM10.7502 16.4955V9.78396C10.8373 9.75316 10.923 9.71683 11.0067 9.67496L16.2984 7.0292V13.4124C16.2984 13.6018 16.1914 13.775 16.022 13.8597L10.7502 16.4955ZM9.41463 17.4831L9.10612 18.1002C9.66916 18.3817 10.3319 18.3817 10.8949 18.1002L16.6928 15.2013C17.3704 14.8625 17.7984 14.17 17.7984 13.4124V6.58831C17.7984 5.83076 17.3704 5.13823 16.6928 4.79945L10.8949 1.90059C10.3319 1.61908 9.66916 1.61907 9.10612 1.90059L9.44152 2.57141L9.10612 1.90059L3.30823 4.79945C2.63065 5.13823 2.20264 5.83076 2.20264 6.58831V13.4124C2.20264 14.17 2.63065 14.8625 3.30823 15.2013L9.10612 18.1002L9.41463 17.4831Z"
        fill="currentColor" />
</svg>
');
@endphp

@section('content')
<x-common.page-breadcrumb :pageTitle="'UDISE Codes'" />
<div class="rounded-2xl border border-gray-200 bg-white pt-4" x-data="{
        selectAll: false,
        selectedRows: [],
        allIds: {{ json_encode($codes->pluck('id')->toArray()) }},
        handleSelectAll() {
            this.selectAll = !this.selectAll;
            this.selectedRows = this.selectAll ? [...this.allIds] : [];
        },
        handleRowSelect(id) {
            if (this.selectedRows.includes(id)) {
                this.selectedRows = this.selectedRows.filter(rowId => rowId !== id);
            } else {
                this.selectedRows.push(id);
            }
            this.selectAll = this.selectedRows.length === this.allIds.length && this.allIds.length > 0;
        },
        submitBulkDelete() {
            if(confirm('Are you sure you want to delete the selected codes?')) {
                this.$refs.bulkDeleteForm.submit();
            }
        }
    }">
    <div class="flex flex-col gap-2 px-5 mb-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
            <h3 class="text-lg font-semibold text-gray-800 dark:text-white/90">Codes List</h3>
        </div>
        <div class="flex flex-col gap-3 sm:flex-row sm:items-center">
            <form x-data method="GET" action="{{ route('admin.udise.index') }}">
                <div class="relative">
                    <button type="button" class="absolute -translate-y-1/2 left-4 top-1/2">
                        <svg class="fill-gray-500 dark:fill-gray-400" width="20" height="20" viewBox="0 0 20 20"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M3.04199 9.37381C3.04199 5.87712 5.87735 3.04218 9.37533 3.04218C12.8733 3.04218 15.7087 5.87712 15.7087 9.37381C15.7087 12.8705 12.8733 15.7055 9.37533 15.7055C5.87735 15.7055 3.04199 12.8705 3.04199 9.37381ZM9.37533 1.54218C5.04926 1.54218 1.54199 5.04835 1.54199 9.37381C1.54199 13.6993 5.04926 17.2055 9.37533 17.2055C11.2676 17.2055 13.0032 16.5346 14.3572 15.4178L17.1773 18.238１C１７．４７０２ １８．５３１ １７．９４５ １８．５３１１ １８．２３７９ １８．２３８２C１８．５３０８ １７．９４５３ １８．５３０９ １７．４７０４ １８．２３８　１７．１７７５L１５．４１８２　１４．３５７５C１６．５３６７　１３．００３５　１７．２０８７　１１．２６７１　１７．２０８７　９．３７３８１C１７．２０８７　５．０４８３５　１３．７０１４　１．５４２１８　９．３７５３３　１．５４２１８Z"
                                fill="" />
                        </svg>
                    </button>
                    <input type="text" name="search" value="{{ request('search') }}" placeholder="Search Codes..."
                        class="h-11 w-full rounded-lg border border-gray-300 bg-transparent py-2.5 pl-[42px] pr-4 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-blue-800 xl:w-[300px]"
                        @input.debounce.500ms="$el.form.submit()" />
                    @if(request('search'))
                    <a href="{{ route('admin.udise.index') }}"
                        class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-500">
                        ✕
                    </a>
                    @endif
                </div>
            </form>
            <!-- <x-ui.button size="sm" variant="outline" :startIcon="$BoxIcon">Import</x-ui.button> -->
            <form action="{{ route('admin.udise.import') }}" method="POST" enctype="multipart/form-data"
                class="flex items-center gap-2">
                @csrf

                <input type="file" name="file" id="excel_file" class="hidden"
                    accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                    onchange="this.form.submit()">

                <label for="excel_file"
                    class="cursor-pointer inline-flex items-center justify-center font-medium gap-2 rounded-lg transition px-4 py-3 text-sm bg-white text-gray-700 ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                    <svg class="mr-2 h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path>
                    </svg>
                    Import Excel
                </label>
            </form>
            <x-ui.link href="{{ route('admin.udise.create') }}" variant="primary" size="sm">Add New Code</x-ui.link>
            <template x-if="selectedRows.length > 0">
                <form x-ref="bulkDeleteForm" action="{{ route('admin.udise.bulk-delete') }}" method="POST"
                    class="inline-block">
                    @csrf
                    @method('DELETE')
                    <input type="hidden" name="ids" :value="JSON.stringify(selectedRows)">

                    <button type="button" @click="submitBulkDelete"
                        class="inline-flex items-center justify-center font-medium gap-2 rounded-lg transition px-4 py-3 text-sm bg-red-600 text-white hover:bg-red-700">
                        <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16">
                            </path>
                        </svg>
                        Delete Selected (<span x-text="selectedRows.length"></span>)
                    </button>
                </form>
            </template>
        </div>
    </div>
    <div class="max-w-full overflow-x-auto">
        <table class="w-full">
            <thead class="px-6 py-3.5 border-t border-gray-100 border-y bg-gray-50">
                <tr>
                    <th class="px-6 py-3 font-medium text-gray-500 sm:px-6 text-theme-xs dark:text-gray-400 text-start">
                        <div class="flex items-center gap-3">
                            <div @click="handleSelectAll()"
                                class="flex h-5 w-5 cursor-pointer items-center justify-center rounded-md border-[1.25px]"
                                :class="selectAll
                        ? 'border-blue-500 bg-blue-500'
                        : 'border-gray-300 bg-white dark:border-gray-700 dark:bg-white/0'">
                                <svg :class="selectAll ? 'block' : 'hidden'" width="14" height="14" viewBox="0 0 14 14"
                                    fill="none">
                                    <path d="M11.6668 3.5L5.25016 9.91667L2.3335 7" stroke="white"
                                        stroke-width="1.94437" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <span class="font-medium text-gray-500 text-theme-sm dark:text-gray-400">ID</span>
                        </div>
                    </th>
                    <th class="px-6 py-3 font-medium text-gray-500 sm:px-6 text-theme-sm dark:text-gray-400 text-start">
                        Code</th>
                    <th class="px-6 py-3 font-medium text-gray-500 sm:px-6 text-theme-sm dark:text-gray-400 text-start">
                        School Name</th>
                    <th class="px-6 py-3 font-medium text-gray-500 sm:px-6 text-theme-sm dark:text-gray-400 text-start">
                        District
                    </th>
                    <th class="px-6 py-3 font-medium text-gray-500 sm:px-6 text-theme-sm dark:text-gray-400 text-start">
                        Registration Status</th>
                    <th class="px-6 py-3 font-medium text-gray-500 sm:px-6 text-theme-sm dark:text-gray-400 text-start">
                        Action</th>
                </tr>
            </thead>
            <tbody>
                @foreach($codes as $code)
                <tr class="border-b border-gray-100">
                    <td class="px-4 sm:px-6 py-3.5">
                        <div class="flex items-center gap-3">
                            <div @click="handleRowSelect({{ $code->id }})"
                                class="flex h-5 w-5 cursor-pointer items-center justify-center rounded-md border-[1.25px] transition-colors"
                                :class="selectedRows.includes({{ $code->id }}) ? 'border-blue-500 bg-blue-500' : 'bg-white border-gray-300 dark:border-gray-700 dark:bg-transparent'">
                                <svg :class="selectedRows.includes({{ $code->id }}) ? 'block' : 'hidden'" width="14"
                                    height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.6668 3.5L5.25016 9.91667L2.3335 7" stroke="white"
                                        stroke-width="1.94437" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <div>
                                <span class="block font-medium text-gray-700 text-theme-sm dark:text-gray-400">{{
                                    $code->id }}</span>
                            </div>
                        </div>
                    </td>
                    <td class="px-4 sm:px-6 py-3.5">
                        <span
                            class="mb-0.5 block text-theme-sm font-medium text-gray-700 dark:text-gray-400 capitalize">{{
                            $code->udise_code }}</span>
                    </td>
                    <td class="px-4 sm:px-6 py-3.5">
                        <span
                            class="mb-0.5 block text-theme-sm font-medium text-gray-700 dark:text-gray-400 capitalize">{{
                            $code->school_name }}</span>
                    </td>
                    <td class="px-4 sm:px-6 py-3.5">
                        <span
                            class="mb-0.5 block text-theme-sm font-medium text-gray-700 dark:text-gray-400 capitalize">
                            {{ $code->district ?? '-' }}
                        </span>
                    </td>
                    <td class="px-4 sm:px-6 py-3.5">
                        @if($code->is_used)
                        <x-ui.badge :color="'light'">
                            Claimed
                        </x-ui.badge>
                        @else
                        <!-- <span class="inline-flex rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-800">Available</span> -->
                        <x-ui.badge :color="'primary'">
                            Available
                        </x-ui.badge>
                        @endif
                    </td>
                    <td class="px-4 sm:px-6 py-3.5">
                        <div class="flex gap-4 items-center">
                            @if(!$code->is_used)
                            <x-ui.confirm-delete-button :action="route('admin.udise.destroy', $code->id)"
                                message="Are you sure you want to delete this code?" />
                            @else
                            <span class="text-sm text-red-600">Locked</span>
                            @endif
                        </div>
                    </td>
                </tr>
                @endforeach
            </tbody>
        </table>
    </div>
    @if($codes->hasPages())
    <div class="px-6 py-4 border-t border-gray-200">
        {{ $codes->links() }}
    </div>
    @endif
</div>

@if(session('error'))
<x-ui.alert variant="error" title="Error Message" :message="session('error')" :showLink="false" />
@endif
@if(session('success'))
<x-ui.alert variant="success" title="Success Message" :message="session('success')" :showLink="false" />
@endif
@endsection
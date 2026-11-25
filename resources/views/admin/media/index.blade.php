@extends('admin.layouts.app')
@section('title', 'Media library')
@section('breadcrumbs')<span class="font-medium text-slate-800">Media library</span>@endsection

@section('content')
    <div class="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
            <h1 class="text-2xl font-semibold tracking-tight text-slate-900">Media library</h1>
            <p class="mt-1 text-sm text-slate-500">Upload images, videos and documents, then pick them in any section.</p>
        </div>
        <form method="POST" action="{{ route('admin.media.store') }}" enctype="multipart/form-data" x-data>
            @csrf
            <label class="a-btn-primary cursor-pointer"><x-admin.icon name="upload" class="size-4"/> Upload file
                <input type="file" name="file" class="hidden" @change="$el.form.submit()">
            </label>
        </form>
    </div>

    <div class="a-card overflow-hidden">
        <form method="GET" class="flex flex-wrap items-center gap-3 border-b border-slate-200 px-4 py-3">
            <div class="flex gap-1 rounded-lg bg-slate-100 p-1 text-sm">
                <a href="{{ route('admin.media.index') }}" @class(['rounded-md px-3 py-1 font-medium', 'bg-white text-slate-900 shadow-sm' => $source === 'uploads', 'text-slate-500' => $source !== 'uploads'])>Uploads <span class="text-slate-400">{{ $counts['uploads'] }}</span></a>
                <a href="{{ route('admin.media.index', ['source' => 'bundled']) }}" @class(['rounded-md px-3 py-1 font-medium', 'bg-white text-slate-900 shadow-sm' => $source === 'bundled', 'text-slate-500' => $source !== 'bundled'])>Site assets <span class="text-slate-400">{{ $counts['bundled'] }}</span></a>
            </div>
            <input type="hidden" name="source" value="{{ $source }}">
            <select name="kind" class="a-input w-36" onchange="this.form.submit()">
                <option value="">All types</option>
                @foreach (['image' => 'Images', 'video' => 'Videos', 'file' => 'Documents'] as $k => $l)<option value="{{ $k }}" @selected(request('kind') === $k)>{{ $l }}</option>@endforeach
            </select>
            <div class="relative ml-auto">
                <x-admin.icon name="search" class="pointer-events-none absolute top-2.5 left-3 size-4 text-slate-400"/>
                <input type="search" name="search" value="{{ request('search') }}" placeholder="Search files…" class="a-input w-60 pl-9">
            </div>
        </form>

        <div class="grid grid-cols-2 gap-4 p-4 sm:grid-cols-3 lg:grid-cols-5 2xl:grid-cols-7">
            @forelse ($files as $file)
                <div class="group overflow-hidden rounded-lg bg-white ring-1 ring-slate-200" x-data="{ copied: false }">
                    <div class="relative flex aspect-square items-center justify-center overflow-hidden bg-slate-100">
                        @if ($file['kind'] === 'image')<img src="{{ $file['url'] }}" class="h-full w-full object-cover" loading="lazy" alt="">
                        @elseif ($file['kind'] === 'video')<video src="{{ $file['url'] }}" class="h-full w-full object-cover" muted preload="metadata"></video>
                        @else<span class="text-sm font-semibold text-slate-500">{{ $file['ext'] }}</span>@endif
                        <div class="absolute inset-0 flex items-center justify-center gap-1.5 bg-slate-900/60 opacity-0 transition group-hover:opacity-100">
                            <button type="button" class="a-btn-secondary px-2 py-1 text-xs" @click="navigator.clipboard.writeText(@js($file['url'])); copied = true; setTimeout(() => copied = false, 1500)"><span x-text="copied ? 'Copied!' : 'Copy URL'"></span></button>
                            <a href="{{ $file['url'] }}" target="_blank" class="a-btn-secondary px-2 py-1 text-xs"><x-admin.icon name="external-link" class="size-3.5"/></a>
                            @if ($file['deletable'])
                                <form method="POST" action="{{ route('admin.media.destroy') }}" data-confirm="Delete this file? Pages that use it will show a broken image.">
                                    @csrf @method('DELETE')
                                    <input type="hidden" name="url" value="{{ $file['url'] }}">
                                    <button class="a-btn-danger px-2 py-1 text-xs"><x-admin.icon name="trash" class="size-3.5"/></button>
                                </form>
                            @endif
                        </div>
                    </div>
                    <div class="px-2 py-1.5">
                        <p class="truncate text-xs font-medium text-slate-700" title="{{ $file['url'] }}">{{ $file['name'] }}</p>
                        <p class="text-[11px] text-slate-400">{{ $file['ext'] }} · {{ number_format($file['size'] / 1024, 0) }} KB</p>
                    </div>
                </div>
            @empty
                <p class="col-span-full py-12 text-center text-slate-500">No files here yet.</p>
            @endforelse
        </div>
    </div>
@endsection

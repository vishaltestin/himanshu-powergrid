@extends('admin.layouts.app')
@section('title', 'Pages')
@section('breadcrumbs')<span class="font-medium text-slate-800">Pages</span>@endsection

@section('content')
    <div class="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
            <h1 class="text-2xl font-semibold tracking-tight text-slate-900">Pages</h1>
            <p class="mt-1 text-sm text-slate-500">Every page of the website is built from sections. Open a page to edit any text, image or link on it.</p>
        </div>
        <a href="{{ route('admin.pages.create') }}" class="a-btn-primary"><x-admin.icon name="plus" class="size-4"/> New page</a>
    </div>

    <div class="a-card overflow-hidden">
        <form method="GET" class="flex flex-wrap items-center gap-3 border-b border-slate-200 px-4 py-3">
            <div class="flex gap-1 rounded-lg bg-slate-100 p-1 text-sm">
                @foreach (['' => 'All', 'published' => 'Published', 'draft' => 'Draft'] as $value => $label)
                    <a href="{{ request()->fullUrlWithQuery(['status' => $value ?: null]) }}"
                       @class(['rounded-md px-3 py-1 font-medium', 'bg-white text-slate-900 shadow-sm' => request('status', '') === $value, 'text-slate-500 hover:text-slate-800' => request('status', '') !== $value])>
                        {{ $label }} <span class="text-slate-400">{{ $counts[$value ?: 'all'] }}</span>
                    </a>
                @endforeach
            </div>
            <div class="relative ml-auto">
                <x-admin.icon name="search" class="pointer-events-none absolute top-2.5 left-3 size-4 text-slate-400"/>
                <input type="search" name="search" value="{{ request('search') }}" placeholder="Search pages…" class="a-input w-64 pl-9">
                @if (request('status'))<input type="hidden" name="status" value="{{ request('status') }}">@endif
            </div>
        </form>

        <div class="overflow-x-auto">
            <table class="a-table">
                <thead class="bg-slate-50">
                <tr>
                    <th>Page</th>
                    <th>URL</th>
                    <th class="text-center">Sections</th>
                    <th>Status</th>
                    <th>Last edited</th>
                    <th class="text-right">Actions</th>
                </tr>
                </thead>
                <tbody class="divide-y divide-slate-100 bg-white">
                @forelse ($pages as $page)
                    <tr class="hover:bg-slate-50/60">
                        <td>
                            <a href="{{ route('admin.pages.edit', $page) }}" class="flex items-center gap-2 font-medium text-slate-900 hover:text-brand-600">
                                @if ($page->is_home)
                                    <span title="Home page" class="text-amber-500"><x-admin.icon name="home" class="size-4"/></span>
                                @endif
                                {{ $page->title }}
                            </a>
                        </td>
                        <td><a href="{{ $page->url() }}" target="_blank" class="font-mono text-xs text-slate-500 hover:text-brand-600">{{ $page->path() }}</a></td>
                        <td class="text-center text-slate-500">{{ $page->sections_count }}</td>
                        <td>
                            @if ($page->isPublished())
                                <span class="a-badge bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200"><span class="size-1.5 rounded-full bg-emerald-500"></span>Published</span>
                            @else
                                <span class="a-badge bg-slate-100 text-slate-600 ring-1 ring-slate-200"><span class="size-1.5 rounded-full bg-slate-400"></span>Draft</span>
                            @endif
                        </td>
                        <td class="text-xs whitespace-nowrap text-slate-500" title="{{ $page->updated_at }}">{{ $page->updated_at?->diffForHumans() }}</td>
                        <td>
                            <div class="flex items-center justify-end gap-1">
                                <a href="{{ route('admin.pages.edit', $page) }}" class="a-btn-secondary px-2.5 py-1 text-xs"><x-admin.icon name="edit" class="size-3.5"/> Edit</a>
                                <a href="{{ $page->url() }}" target="_blank" class="a-icon-btn" title="View on site"><x-admin.icon name="external-link" class="size-4"/></a>
                                <form method="POST" action="{{ route('admin.pages.duplicate', $page) }}">@csrf
                                    <button class="a-icon-btn" title="Duplicate"><x-admin.icon name="copy" class="size-4"/></button>
                                </form>
                                @unless ($page->is_home)
                                    <form method="POST" action="{{ route('admin.pages.destroy', $page) }}" data-confirm="Delete “{{ $page->title }}” and all of its sections? This cannot be undone.">
                                        @csrf @method('DELETE')
                                        <button class="a-icon-btn hover:!text-red-600" title="Delete"><x-admin.icon name="trash" class="size-4"/></button>
                                    </form>
                                @endunless
                            </div>
                        </td>
                    </tr>
                @empty
                    <tr><td colspan="6" class="py-12 text-center text-slate-500">No pages found.</td></tr>
                @endforelse
                </tbody>
            </table>
        </div>
    </div>
@endsection

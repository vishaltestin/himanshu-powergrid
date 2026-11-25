@extends('admin.layouts.app')
@section('title', 'Blogs & News')
@section('breadcrumbs')<span class="font-medium text-slate-800">Blogs & News</span>@endsection

@section('content')
    @include('admin.partials.page-header', [
        'title' => 'Blogs & News',
        'subtitle' => 'Posts appear in “Posts grid” sections (e.g. the Blogs and News pages, and the home page).',
        'actions' => '<a href="' . route('admin.blogs.create') . '" class="a-btn-primary">+ New post</a>',
    ])

    <div class="a-card overflow-hidden">
        <form method="GET" class="flex flex-wrap items-center gap-3 border-b border-slate-200 px-4 py-3">
            <div class="flex gap-1 rounded-lg bg-slate-100 p-1 text-sm">
                @foreach (['' => 'All'] + \App\Models\Blog::TYPES as $value => $label)
                    <a href="{{ request()->fullUrlWithQuery(['type' => $value ?: null, 'page' => null]) }}" @class(['rounded-md px-3 py-1 font-medium', 'bg-white text-slate-900 shadow-sm' => request('type', '') === $value, 'text-slate-500 hover:text-slate-800' => request('type', '') !== $value])>{{ $label }}</a>
                @endforeach
            </div>
            <div class="relative ml-auto">
                <x-admin.icon name="search" class="pointer-events-none absolute top-2.5 left-3 size-4 text-slate-400"/>
                <input type="search" name="search" value="{{ request('search') }}" placeholder="Search posts…" class="a-input w-64 pl-9">
                @if (request('type'))<input type="hidden" name="type" value="{{ request('type') }}">@endif
            </div>
        </form>
        <div class="overflow-x-auto">
            <table class="a-table">
                <thead class="bg-slate-50"><tr><th>Post</th><th>Type</th><th>Date</th><th>Status</th><th></th></tr></thead>
                <tbody class="divide-y divide-slate-100 bg-white">
                @forelse ($posts as $post)
                    <tr class="hover:bg-slate-50/60">
                        <td>
                            <div class="flex items-center gap-3">
                                <img src="{{ $post->thumbnail ?: '/images/news.jpg' }}" class="size-12 shrink-0 rounded-lg object-cover ring-1 ring-slate-200" alt="">
                                <div class="min-w-0">
                                    <a href="{{ route('admin.blogs.edit', $post) }}" class="font-medium text-slate-900 hover:text-brand-600">{{ $post->title }}</a>
                                    <p class="max-w-md truncate text-xs text-slate-500">{{ $post->short_description }}</p>
                                </div>
                            </div>
                        </td>
                        <td><span class="a-badge bg-slate-100 text-slate-700">{{ $post->typeLabel() }}</span></td>
                        <td class="text-xs whitespace-nowrap text-slate-500">{{ $post->date?->format('d M Y') }}</td>
                        <td>@include('admin.partials.status-toggle', ['action' => route('admin.blogs.toggle-status', $post), 'on' => $post->status, 'onLabel' => 'Published', 'offLabel' => 'Draft'])</td>
                        <td>@include('admin.partials.row-actions', ['edit' => route('admin.blogs.edit', $post), 'delete' => route('admin.blogs.destroy', $post)])</td>
                    </tr>
                @empty
                    <tr><td colspan="5" class="py-12 text-center text-slate-500">No posts found.</td></tr>
                @endforelse
                </tbody>
            </table>
        </div>
        @if ($posts->hasPages())<div class="border-t border-slate-200 px-4 py-3">{{ $posts->links() }}</div>@endif
    </div>
@endsection

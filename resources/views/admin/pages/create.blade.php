@extends('admin.layouts.app')
@section('title', 'New page')
@section('breadcrumbs')
    <a href="{{ route('admin.pages.index') }}" class="hover:text-slate-800">Pages</a>
    <x-admin.icon name="chevron-right" class="size-4 text-slate-300"/>
    <span class="font-medium text-slate-800">New page</span>
@endsection

@section('content')
    <div class="mx-auto max-w-2xl">
        @include('admin.partials.page-header', ['title' => 'Create a new page', 'subtitle' => 'Give it a title and URL. You will add content sections on the next screen.'])

        <form method="POST" action="{{ route('admin.pages.store') }}" class="a-card space-y-5 p-6" x-data="slugField(@js(old('slug', '')))">
            @csrf
            <div>
                <label class="a-label" for="title">Page title <span class="text-red-500">*</span></label>
                <input id="title" name="title" value="{{ old('title') }}" class="a-input" required autofocus @input="fromTitle($event.target.value)" placeholder="e.g. Our Partners">
            </div>
            <div>
                <label class="a-label" for="slug">URL <span class="text-red-500">*</span></label>
                <div class="flex rounded-lg ring-1 ring-slate-300 focus-within:ring-2 focus-within:ring-brand-500">
                    <span class="flex items-center rounded-l-lg bg-slate-50 px-3 text-sm text-slate-500">{{ rtrim(url('/'), '/') }}/</span>
                    <input id="slug" name="slug" x-model="slug" @input="touched = true" class="block w-full rounded-r-lg border-0 px-3 py-2 font-mono text-sm focus:ring-0 focus:outline-none" placeholder="our-partners">
                </div>
                <p class="a-help">Lowercase letters, numbers and dashes. Use “/” for nested URLs, e.g. <code>pillar/solar</code>.</p>
            </div>
            <div>
                <label class="a-label" for="copy_from">Start from</label>
                <select id="copy_from" name="copy_from" class="a-input">
                    <option value="">A blank page (with a page banner)</option>
                    @foreach ($templates as $tpl)
                        <option value="{{ $tpl->id }}" @selected(old('copy_from') == $tpl->id)>Copy sections of “{{ $tpl->title }}” ({{ $tpl->slug }})</option>
                    @endforeach
                </select>
                <p class="a-help">Copying an existing page is the quickest way to get a page that matches the site’s design.</p>
            </div>
            <div>
                <span class="a-label">Status</span>
                <div class="flex gap-4 text-sm">
                    @foreach (\App\Models\Page::STATUSES as $value => $label)
                        <label class="flex items-center gap-2"><input type="radio" name="status" value="{{ $value }}" @checked(old('status', 'draft') === $value) class="text-brand-600"> {{ $label }}</label>
                    @endforeach
                </div>
            </div>
            <div class="flex justify-end gap-2 border-t border-slate-100 pt-5">
                <a href="{{ route('admin.pages.index') }}" class="a-btn-secondary">Cancel</a>
                <button class="a-btn-primary">Create page & add sections</button>
            </div>
        </form>
    </div>
@endsection

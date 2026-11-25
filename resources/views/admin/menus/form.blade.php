@extends('admin.layouts.app')
@section('title', $menu->exists ? 'Edit link' : 'Add link')
@section('breadcrumbs')
    <a href="{{ route('admin.menus.index', ['position' => $menu->menu_position]) }}" class="hover:text-slate-800">Menus</a>
    <x-admin.icon name="chevron-right" class="size-4 text-slate-300"/>
    <span class="font-medium text-slate-800">{{ $menu->exists ? 'Edit link' : 'Add link' }}</span>
@endsection

@section('content')
<div class="mx-auto max-w-2xl">
    @include('admin.partials.page-header', ['title' => $menu->exists ? 'Edit link' : 'Add link'])

    <form method="POST" action="{{ $menu->exists ? route('admin.menus.update', $menu) : route('admin.menus.store') }}" class="a-card space-y-5 p-6"
          x-data="{ position: @js(old('menu_position', $menu->menu_position ?: 'main')), alias: @js(old('alias', $menu->alias)) }">
        @csrf
        @if ($menu->exists) @method('PUT') @endif

        <div>
            <label class="a-label" for="title">Link text <span class="text-red-500">*</span></label>
            <input id="title" name="title" value="{{ old('title', $menu->title) }}" class="a-input" required>
        </div>

        <div>
            <label class="a-label" for="alias">Link URL <span class="text-red-500">*</span></label>
            <input id="alias" name="alias" x-model="alias" class="a-input font-mono" required placeholder="/about-us  or  https://…  or  #">
            <div class="mt-2 flex items-center gap-2">
                <select class="a-input py-1.5 text-xs" @change="if ($event.target.value) { alias = $event.target.value; $event.target.value = '' }">
                    <option value="">Pick an existing page…</option>
                    @foreach ($pageLinks as $path => $label)
                        <option value="{{ $path }}">{{ $label }}</option>
                    @endforeach
                </select>
            </div>
            <p class="a-help">Use <code>#</code> for a dropdown parent that isn’t a link itself. Add <code>#anchor</code> to jump to a section.</p>
        </div>

        <div class="grid gap-5 sm:grid-cols-2">
            <div>
                <label class="a-label" for="menu_position">Menu</label>
                <select id="menu_position" name="menu_position" class="a-input" x-model="position">
                    @foreach ($positions as $key => $label)
                        <option value="{{ $key }}">{{ $label }}</option>
                    @endforeach
                    <option value="_custom">+ New custom menu…</option>
                </select>
                <input x-show="position === '_custom'" x-cloak name="custom_position" value="{{ old('custom_position') }}" class="a-input mt-2" placeholder="e.g. sidebar_links">
            </div>
            <div>
                <label class="a-label" for="parent_id">Parent</label>
                <select id="parent_id" name="parent_id" class="a-input">
                    @foreach ($parentOptions as $id => $label)
                        <option value="{{ $id }}" @selected((string) old('parent_id', $menu->parent_id) === (string) $id)>{{ $label }}</option>
                    @endforeach
                </select>
                <p class="a-help">Pick a parent to show this link in its dropdown.</p>
            </div>
        </div>

        <label class="flex items-center gap-3">
            <input type="hidden" name="status" value="0">
            <input type="checkbox" name="status" value="1" @checked(old('status', $menu->status ?? true)) class="rounded border-slate-300 text-brand-600">
            <span class="text-sm font-medium text-slate-700">Active (shown on website)</span>
        </label>

        <div class="flex justify-end gap-2 border-t border-slate-100 pt-5">
            <a href="{{ route('admin.menus.index', ['position' => $menu->menu_position]) }}" class="a-btn-secondary">Cancel</a>
            <button class="a-btn-primary">Save link</button>
        </div>
    </form>
</div>
@endsection

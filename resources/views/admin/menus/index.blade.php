@extends('admin.layouts.app')
@section('title', 'Menus')
@section('breadcrumbs')<span class="font-medium text-slate-800">Menus</span>@endsection

@section('content')
    @include('admin.partials.page-header', [
        'title' => 'Menus',
        'subtitle' => 'Links in the header and footer. Drag to reorder; add sub-items to create dropdowns.',
        'actions' => '<a href="' . route('admin.menus.create', ['position' => $position]) . '" class="a-btn-primary">+ Add link</a>',
    ])

    <div class="mb-5 flex flex-wrap gap-1 rounded-xl bg-white p-1 ring-1 ring-slate-200">
        @foreach ($positions as $key => $label)
            <a href="{{ route('admin.menus.index', ['position' => $key]) }}" @class(['rounded-lg px-4 py-2 text-sm font-medium', 'bg-brand-600 text-white' => $position === $key, 'text-slate-600 hover:bg-slate-100' => $position !== $key])>
                {{ $label }} <span @class(['ml-1 text-xs', 'text-white/70' => $position === $key, 'text-slate-400' => $position !== $key])>{{ $counts[$key] ?? 0 }}</span>
            </a>
        @endforeach
    </div>

    @if ($items->isEmpty())
        <div class="a-card py-16 text-center">
            <p class="text-slate-500">This menu is empty.</p>
            <a href="{{ route('admin.menus.create', ['position' => $position]) }}" class="a-btn-primary mt-4">+ Add the first link</a>
        </div>
    @else
        <ul class="space-y-2" data-sortable-url="{{ route('admin.menus.reorder') }}">
            @foreach ($items as $item)
                <li data-id="{{ $item->id }}" class="a-card overflow-hidden">
                    <div class="flex items-center gap-3 p-3">
                        <button type="button" data-drag-handle class="a-icon-btn cursor-grab"><x-admin.icon name="grip" class="size-4"/></button>
                        <div class="min-w-0 flex-1">
                            <a href="{{ route('admin.menus.edit', $item) }}" class="font-medium text-slate-900 hover:text-brand-600">{{ $item->title }}</a>
                            <p class="font-mono text-xs text-slate-500">{{ $item->alias }}</p>
                        </div>
                        <a href="{{ route('admin.menus.create', ['position' => $position, 'parent_id' => $item->id]) }}" class="a-btn-ghost px-2.5 py-1 text-xs"><x-admin.icon name="plus" class="size-3.5"/> Sub-item</a>
                        @include('admin.partials.status-toggle', ['action' => route('admin.menus.toggle-status', $item), 'on' => $item->status, 'onLabel' => 'Active'])
                        @include('admin.partials.row-actions', ['edit' => route('admin.menus.edit', $item), 'delete' => route('admin.menus.destroy', $item), 'confirm' => 'Delete this link and its sub-items?'])
                    </div>
                    @if ($item->children->isNotEmpty())
                        <ul class="space-y-1 border-t border-slate-100 bg-slate-50/70 py-2 pr-3 pl-12" data-sortable-url="{{ route('admin.menus.reorder') }}">
                            @foreach ($item->children as $child)
                                <li data-id="{{ $child->id }}" class="flex items-center gap-3 rounded-lg bg-white p-2 ring-1 ring-slate-200">
                                    <button type="button" data-drag-handle class="a-icon-btn size-7 cursor-grab"><x-admin.icon name="grip" class="size-4"/></button>
                                    <div class="min-w-0 flex-1">
                                        <a href="{{ route('admin.menus.edit', $child) }}" class="text-sm font-medium text-slate-800 hover:text-brand-600">{{ $child->title }}</a>
                                        <span class="ml-2 font-mono text-xs text-slate-500">{{ $child->alias }}</span>
                                    </div>
                                    @include('admin.partials.status-toggle', ['action' => route('admin.menus.toggle-status', $child), 'on' => $child->status, 'onLabel' => 'Active'])
                                    @include('admin.partials.row-actions', ['edit' => route('admin.menus.edit', $child), 'delete' => route('admin.menus.destroy', $child)])
                                </li>
                            @endforeach
                        </ul>
                    @endif
                </li>
            @endforeach
        </ul>
    @endif
@endsection

@extends('admin.layouts.app')
@section('title', ($section->label ?: $block['label']) . ' · ' . $page->title)
@section('breadcrumbs')
    <a href="{{ route('admin.pages.index') }}" class="hover:text-slate-800">Pages</a>
    <x-admin.icon name="chevron-right" class="size-4 text-slate-300"/>
    <a href="{{ route('admin.pages.edit', $page) }}" class="truncate hover:text-slate-800">{{ $page->title }}</a>
    <x-admin.icon name="chevron-right" class="size-4 text-slate-300"/>
    <span class="truncate font-medium text-slate-800">{{ $section->label ?: $block['label'] }}</span>
@endsection

@section('content')
<form method="POST" action="{{ route('admin.pages.sections.update', [$page, $section]) }}" data-dirty-guard id="section-form">
    @csrf @method('PUT')

    {{-- Sticky action bar --}}
    <div class="sticky top-16 z-20 -mx-4 mb-6 border-b border-slate-200 bg-slate-50/95 px-4 py-3 backdrop-blur sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div class="flex flex-wrap items-center gap-3">
            <a href="{{ route('admin.pages.edit', $page) }}" class="a-icon-btn" title="Back to page"><x-admin.icon name="arrow-left"/></a>
            <span class="flex size-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600"><x-admin.icon :name="$block['icon'] ?? 'layers'"/></span>
            <div class="min-w-0 flex-1">
                <h1 class="truncate text-lg leading-tight font-semibold text-slate-900">{{ $block['label'] }}</h1>
                <p class="text-xs text-slate-500">Section {{ $position }} of {{ $total }} on <span class="font-medium">{{ $page->title }}</span></p>
            </div>
            <div class="flex items-center gap-1">
                @if ($prev)
                    <a href="{{ route('admin.pages.sections.edit', [$page, $prev]) }}" class="a-btn-ghost px-2.5 text-xs" title="Previous section"><x-admin.icon name="chevron-up" class="size-4"/> Prev</a>
                @endif
                @if ($next)
                    <a href="{{ route('admin.pages.sections.edit', [$page, $next]) }}" class="a-btn-ghost px-2.5 text-xs" title="Next section">Next <x-admin.icon name="chevron-down" class="size-4"/></a>
                @endif
            </div>
            <a href="{{ $page->url() }}{{ $section->anchor ? '#' . $section->anchor : '' }}" target="_blank" class="a-btn-secondary"><x-admin.icon name="eye" class="size-4"/> View</a>
            <button name="redirect" value="page" class="a-btn-secondary">Save & close</button>
            <button class="a-btn-primary"><x-admin.icon name="save" class="size-4"/> Save</button>
        </div>
    </div>

    <div class="grid gap-6 xl:grid-cols-[minmax(0,1fr)_300px]">
        <div class="a-card p-6">
            @if (!empty($block['description']))
                <p class="mb-5 rounded-lg bg-slate-50 px-4 py-3 text-sm text-slate-600 ring-1 ring-slate-200">{{ $block['description'] }}</p>
            @endif
            <div class="grid grid-cols-2 gap-x-5 gap-y-4">
                @foreach ($block['fields'] as $field)
                    @include('admin.partials.field', [
                        'field' => $field,
                        'name' => isset($field['name']) ? 'data[' . $field['name'] . ']' : 'heading',
                        'value' => isset($field['name']) ? ($data[$field['name']] ?? null) : null,
                        'depth' => 0,
                    ])
                @endforeach
            </div>
        </div>

        <aside class="space-y-6">
            <div class="a-card space-y-4 p-5">
                <h2 class="text-sm font-semibold text-slate-900">Section options</h2>
                <label class="flex cursor-pointer items-center justify-between gap-3">
                    <span>
                        <span class="block text-sm font-medium text-slate-700">Visible on website</span>
                        <span class="block text-xs text-slate-500">Hidden sections keep their content.</span>
                    </span>
                    <span class="relative inline-flex">
                        <input type="hidden" name="is_visible" value="0">
                        <input type="checkbox" name="is_visible" value="1" @checked(old('is_visible', $section->is_visible)) class="peer sr-only">
                        <span class="h-5 w-9 rounded-full bg-slate-300 transition peer-checked:bg-brand-600"></span>
                        <span class="absolute top-0.5 left-0.5 size-4 rounded-full bg-white shadow transition peer-checked:translate-x-4"></span>
                    </span>
                </label>
                <div>
                    <label class="a-label" for="label">Admin label</label>
                    <input id="label" name="label" value="{{ old('label', $section->label) }}" class="a-input" placeholder="{{ $block['label'] }}">
                    <p class="a-help">Only shown in the admin, to tell sections apart.</p>
                </div>
                <div>
                    <label class="a-label" for="anchor">Anchor ID</label>
                    <div class="flex rounded-lg ring-1 ring-slate-300 focus-within:ring-2 focus-within:ring-brand-500">
                        <span class="flex items-center rounded-l-lg bg-slate-50 px-2.5 text-sm text-slate-500">#</span>
                        <input id="anchor" name="anchor" value="{{ old('anchor', $section->anchor) }}" class="block w-full rounded-r-lg border-0 px-2.5 py-2 font-mono text-sm focus:ring-0 focus:outline-none" placeholder="e.g. apply-form">
                    </div>
                    <p class="a-help">Lets buttons link straight to this section, e.g. <code>/career#apply-form</code>.</p>
                </div>
            </div>
        </aside>
    </div>
</form>

<div class="mt-6 grid gap-6 xl:grid-cols-[minmax(0,1fr)_300px]">
    <div></div>
    <div class="a-card divide-y divide-slate-100 text-sm">
        <form method="POST" action="{{ route('admin.pages.sections.duplicate', [$page, $section]) }}">@csrf
            <button class="flex w-full items-center gap-2 px-5 py-3 text-left hover:bg-slate-50"><x-admin.icon name="copy" class="size-4 text-slate-500"/> Duplicate section</button>
        </form>
        <form method="POST" action="{{ route('admin.pages.sections.transfer', [$page, $section]) }}" class="space-y-2 px-5 py-3" x-data="{ open: false }">
            @csrf
            <button type="button" @click="open = !open" class="flex w-full items-center gap-2 text-left"><x-admin.icon name="layers" class="size-4 text-slate-500"/> Copy / move to another page</button>
            <div x-show="open" x-cloak class="space-y-2 pt-1">
                <select name="target_page_id" class="a-input">
                    @foreach (\App\Models\Page::orderBy('title')->where('id', '!=', $page->id)->get(['id', 'title']) as $p)
                        <option value="{{ $p->id }}">{{ $p->title }}</option>
                    @endforeach
                </select>
                <div class="flex gap-2">
                    <button name="mode" value="copy" class="a-btn-secondary flex-1 py-1.5 text-xs">Copy</button>
                    <button name="mode" value="move" class="a-btn-secondary flex-1 py-1.5 text-xs">Move</button>
                </div>
            </div>
        </form>
        <form method="POST" action="{{ route('admin.pages.sections.destroy', [$page, $section]) }}" data-confirm="Delete this section? Its content will be lost.">
            @csrf @method('DELETE')
            <button class="flex w-full items-center gap-2 px-5 py-3 text-left text-red-600 hover:bg-red-50"><x-admin.icon name="trash" class="size-4"/> Delete section</button>
        </form>
    </div>
</div>
@endsection

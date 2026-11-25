@extends('admin.layouts.app')
@section('title', $page->title)
@section('breadcrumbs')
    <a href="{{ route('admin.pages.index') }}" class="hover:text-slate-800">Pages</a>
    <x-admin.icon name="chevron-right" class="size-4 text-slate-300"/>
    <span class="truncate font-medium text-slate-800">{{ $page->title }}</span>
@endsection

@section('content')
<div x-data="{ library: false, insertAfter: null, q: '' }" @keydown.escape.window="library = false">

    {{-- Header --}}
    <div class="mb-6 flex flex-wrap items-start justify-between gap-4">
        <div class="min-w-0">
            <div class="flex items-center gap-2">
                <h1 class="truncate text-2xl font-semibold tracking-tight text-slate-900">{{ $page->title }}</h1>
                @if ($page->is_home)<span class="a-badge bg-amber-50 text-amber-700 ring-1 ring-amber-200"><x-admin.icon name="home" class="size-3"/> Home page</span>@endif
                @if ($page->isPublished())
                    <span class="a-badge bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200">Published</span>
                @else
                    <span class="a-badge bg-slate-100 text-slate-600 ring-1 ring-slate-200">Draft</span>
                @endif
            </div>
            <a href="{{ $page->url() }}" target="_blank" class="mt-1 inline-flex items-center gap-1 font-mono text-sm text-slate-500 hover:text-brand-600">{{ $page->url() }} <x-admin.icon name="external-link" class="size-3.5"/></a>
        </div>
        <div class="flex flex-wrap gap-2">
            <a href="{{ $page->url() }}{{ $page->isPublished() ? '' : '?preview=1' }}" target="_blank" class="a-btn-secondary"><x-admin.icon name="eye" class="size-4"/> {{ $page->isPublished() ? 'View page' : 'Preview' }}</a>
            <button type="button" class="a-btn-primary" @click="insertAfter = null; library = true"><x-admin.icon name="plus" class="size-4"/> Add section</button>
        </div>
    </div>

    <div class="grid gap-6 xl:grid-cols-[minmax(0,1fr)_340px]">

        {{-- Sections --}}
        <div>
            <div class="mb-3 flex items-center justify-between">
                <h2 class="text-sm font-semibold text-slate-900">Sections <span class="font-normal text-slate-400">({{ $page->sections->count() }})</span></h2>
                <p class="text-xs text-slate-500">Drag <x-admin.icon name="grip" class="inline size-3.5"/> to reorder · top to bottom = page order</p>
            </div>

            @if ($page->sections->isEmpty())
                <div class="a-card flex flex-col items-center justify-center px-6 py-16 text-center">
                    <span class="flex size-12 items-center justify-center rounded-full bg-brand-50 text-brand-600"><x-admin.icon name="layers"/></span>
                    <p class="mt-4 font-medium text-slate-900">This page has no sections yet</p>
                    <p class="mt-1 text-sm text-slate-500">Add a banner, text blocks, cards, forms and more.</p>
                    <button type="button" class="a-btn-primary mt-5" @click="insertAfter = null; library = true"><x-admin.icon name="plus" class="size-4"/> Add first section</button>
                </div>
            @else
                <ol class="space-y-2" data-sortable-url="{{ route('admin.pages.sections.reorder', $page) }}">
                    @foreach ($page->sections as $section)
                        @php $block = config('page-blocks.blocks.' . $section->type); @endphp
                        <li data-id="{{ $section->id }}" @class(['group a-card flex items-center gap-3 py-2.5 pr-2 pl-2 transition hover:ring-slate-300', 'opacity-60' => !$section->is_visible])>
                            <button type="button" data-drag-handle class="a-icon-btn cursor-grab active:cursor-grabbing" title="Drag to reorder"><x-admin.icon name="grip" class="size-4"/></button>
                            <span class="flex size-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
                                <x-admin.icon :name="$block['icon'] ?? 'layers'" class="size-5"/>
                            </span>
                            <a href="{{ route('admin.pages.sections.edit', [$page, $section]) }}" class="min-w-0 flex-1">
                                <p class="flex items-center gap-2 text-sm font-medium text-slate-900">
                                    <span class="truncate">{{ $section->label ?: ($block['label'] ?? $section->type) }}</span>
                                    @if ($section->label)<span class="shrink-0 text-xs font-normal text-slate-400">{{ $block['label'] ?? $section->type }}</span>@endif
                                    @unless ($section->is_visible)<span class="a-badge shrink-0 bg-slate-100 text-slate-500">Hidden</span>@endunless
                                    @if (!$block)<span class="a-badge shrink-0 bg-red-50 text-red-600">Unknown type</span>@endif
                                </p>
                                <p class="truncate text-xs text-slate-500">{{ $section->summary() ?: ($block['description'] ?? '') }}</p>
                            </a>
                            <div class="flex shrink-0 items-center gap-0.5">
                                <a href="{{ route('admin.pages.sections.edit', [$page, $section]) }}" class="a-btn-secondary px-2.5 py-1 text-xs"><x-admin.icon name="edit" class="size-3.5"/> Edit</a>
                                <form method="POST" action="{{ route('admin.pages.sections.toggle', [$page, $section]) }}">@csrf
                                    <button class="a-icon-btn" title="{{ $section->is_visible ? 'Hide from website' : 'Show on website' }}">
                                        <x-admin.icon :name="$section->is_visible ? 'eye' : 'eye-off'" class="size-4"/>
                                    </button>
                                </form>
                                <div class="relative" x-data="{ open: false }" @click.outside="open = false">
                                    <button type="button" class="a-icon-btn" @click="open = !open" title="More"><x-admin.icon name="more" class="size-4"/></button>
                                    <div x-cloak x-show="open" x-transition class="absolute right-0 z-20 mt-1 w-48 overflow-hidden rounded-lg bg-white py-1 text-sm shadow-lg ring-1 ring-slate-200">
                                        <button type="button" class="flex w-full items-center gap-2 px-3 py-2 hover:bg-slate-50" @click="open = false; insertAfter = {{ $section->id }}; library = true"><x-admin.icon name="plus" class="size-4"/> Insert section below</button>
                                        <form method="POST" action="{{ route('admin.pages.sections.duplicate', [$page, $section]) }}">@csrf
                                            <button class="flex w-full items-center gap-2 px-3 py-2 hover:bg-slate-50"><x-admin.icon name="copy" class="size-4"/> Duplicate</button>
                                        </form>
                                        <form method="POST" action="{{ route('admin.pages.sections.destroy', [$page, $section]) }}" data-confirm="Delete this section? Its content will be lost.">
                                            @csrf @method('DELETE')
                                            <button class="flex w-full items-center gap-2 px-3 py-2 text-red-600 hover:bg-red-50"><x-admin.icon name="trash" class="size-4"/> Delete</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </li>
                    @endforeach
                </ol>
                <button type="button" @click="insertAfter = null; library = true" class="mt-3 flex w-full items-center justify-center gap-2 rounded-xl border-2 border-dashed border-slate-300 py-4 text-sm font-medium text-slate-500 hover:border-brand-500 hover:text-brand-600">
                    <x-admin.icon name="plus" class="size-4"/> Add section at the end
                </button>
            @endif
        </div>

        {{-- Page settings --}}
        <aside class="space-y-6">
            <form method="POST" action="{{ route('admin.pages.update', $page) }}" class="a-card" x-data="slugField(@js(old('slug', $page->slug)), true)" data-dirty-guard>
                @csrf @method('PUT')
                <div class="border-b border-slate-100 px-5 py-3.5"><h2 class="text-sm font-semibold text-slate-900">Page settings</h2></div>
                <div class="space-y-4 p-5">
                    <div>
                        <label class="a-label" for="title">Title</label>
                        <input id="title" name="title" value="{{ old('title', $page->title) }}" class="a-input" required>
                    </div>
                    <div>
                        <label class="a-label" for="slug">URL</label>
                        @if ($page->is_home)
                            <input type="hidden" name="slug" value="{{ $page->slug }}">
                            <p class="a-input bg-slate-50 font-mono text-slate-500">/ <span class="text-xs">(home page)</span></p>
                        @else
                            <div class="flex rounded-lg ring-1 ring-slate-300 focus-within:ring-2 focus-within:ring-brand-500">
                                <span class="flex items-center rounded-l-lg bg-slate-50 px-2.5 text-sm text-slate-500">/</span>
                                <input id="slug" name="slug" x-model="slug" class="block w-full rounded-r-lg border-0 px-2.5 py-2 font-mono text-sm focus:ring-0 focus:outline-none">
                            </div>
                        @endif
                    </div>
                    <div>
                        <label class="a-label" for="status">Status</label>
                        <select id="status" name="status" class="a-input" @disabled($page->is_home)>
                            @foreach (\App\Models\Page::STATUSES as $value => $label)
                                <option value="{{ $value }}" @selected(old('status', $page->status) === $value)>{{ $label }}</option>
                            @endforeach
                        </select>
                        @if ($page->is_home)<input type="hidden" name="status" value="published"><p class="a-help">The home page is always published.</p>@endif
                    </div>
                    <details class="group rounded-lg ring-1 ring-slate-200" @if($errors->hasAny(['meta_title','meta_description'])) open @endif>
                        <summary class="flex cursor-pointer list-none items-center justify-between px-3 py-2.5 text-sm font-medium text-slate-700">
                            SEO & sharing <x-admin.icon name="chevron-down" class="size-4 text-slate-400 transition group-open:rotate-180"/>
                        </summary>
                        <div class="grid grid-cols-2 gap-4 border-t border-slate-100 p-3">
                            @include('admin.partials.field', ['field' => ['name' => 'meta_title', 'label' => 'Meta title', 'type' => 'text', 'help' => 'Defaults to the page title.'], 'name' => 'meta_title', 'value' => $page->meta_title])
                            @include('admin.partials.field', ['field' => ['name' => 'meta_description', 'label' => 'Meta description', 'type' => 'textarea', 'rows' => 3], 'name' => 'meta_description', 'value' => $page->meta_description])
                            @include('admin.partials.field', ['field' => ['name' => 'meta_image', 'label' => 'Share image', 'type' => 'image'], 'name' => 'meta_image', 'value' => $page->meta_image])
                        </div>
                    </details>
                </div>
                <div class="flex justify-end border-t border-slate-100 px-5 py-3">
                    <button class="a-btn-primary"><x-admin.icon name="save" class="size-4"/> Save settings</button>
                </div>
            </form>

            <div class="a-card divide-y divide-slate-100 text-sm">
                @unless ($page->is_home)
                    <form method="POST" action="{{ route('admin.pages.home', $page) }}" data-confirm="Make “{{ $page->title }}” the website’s home page?">@csrf
                        <button class="flex w-full items-center gap-2 px-5 py-3 text-left hover:bg-slate-50"><x-admin.icon name="home" class="size-4 text-slate-500"/> Set as home page</button>
                    </form>
                @endunless
                <form method="POST" action="{{ route('admin.pages.duplicate', $page) }}">@csrf
                    <button class="flex w-full items-center gap-2 px-5 py-3 text-left hover:bg-slate-50"><x-admin.icon name="copy" class="size-4 text-slate-500"/> Duplicate page</button>
                </form>
                @unless ($page->is_home)
                    <form method="POST" action="{{ route('admin.pages.destroy', $page) }}" data-confirm="Delete “{{ $page->title }}” and all of its sections? This cannot be undone.">
                        @csrf @method('DELETE')
                        <button class="flex w-full items-center gap-2 px-5 py-3 text-left text-red-600 hover:bg-red-50"><x-admin.icon name="trash" class="size-4"/> Delete page</button>
                    </form>
                @endunless
            </div>
        </aside>
    </div>

    {{-- Section library modal --}}
    <div x-cloak x-show="library" class="fixed inset-0 z-[80]">
        <div x-show="library" x-transition.opacity class="absolute inset-0 bg-slate-900/60" @click="library = false"></div>
        <div x-show="library" x-transition class="absolute inset-4 mx-auto flex max-w-5xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl sm:inset-10">
            <div class="flex items-center gap-3 border-b border-slate-200 px-6 py-4">
                <div class="flex-1">
                    <h3 class="text-base font-semibold text-slate-900">Add a section</h3>
                    <p class="text-xs text-slate-500" x-text="insertAfter ? 'It will be inserted below the selected section.' : 'It will be added at the end of the page.'"></p>
                </div>
                <div class="relative">
                    <x-admin.icon name="search" class="pointer-events-none absolute top-2.5 left-3 size-4 text-slate-400"/>
                    <input type="search" x-model="q" placeholder="Search sections…" class="a-input w-60 pl-9" x-ref="q" x-effect="library && $nextTick(() => $refs.q.focus())">
                </div>
                <button type="button" class="a-icon-btn" @click="library = false"><x-admin.icon name="x"/></button>
            </div>
            <div class="flex-1 space-y-8 overflow-y-auto bg-slate-50 p-6">
                @foreach ($library as $catKey => $cat)
                    <section x-show="!q || $el.textContent.toLowerCase().includes(q.toLowerCase())">
                        <h4 class="mb-3 text-xs font-semibold tracking-wider text-slate-500 uppercase">{{ $cat['label'] }}</h4>
                        <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                            @foreach ($cat['blocks'] as $type => $block)
                                <form method="POST" action="{{ route('admin.pages.sections.store', $page) }}" x-show="!q || $el.textContent.toLowerCase().includes(q.toLowerCase())">
                                    @csrf
                                    <input type="hidden" name="type" value="{{ $type }}">
                                    <input type="hidden" name="after" :value="insertAfter ?? ''">
                                    <button class="flex h-full w-full items-start gap-3 rounded-xl bg-white p-4 text-left ring-1 ring-slate-200 transition hover:shadow-md hover:ring-2 hover:ring-brand-500">
                                        <span class="flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600"><x-admin.icon :name="$block['icon'] ?? 'layers'"/></span>
                                        <span class="min-w-0">
                                            <span class="block text-sm font-semibold text-slate-900">{{ $block['label'] }}</span>
                                            <span class="mt-0.5 block text-xs leading-relaxed text-slate-500">{{ $block['description'] ?? '' }}</span>
                                        </span>
                                    </button>
                                </form>
                            @endforeach
                        </div>
                    </section>
                @endforeach
            </div>
        </div>
    </div>
</div>
@endsection

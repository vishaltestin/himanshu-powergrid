{{-- Generic create/edit screen driven by field schemas. --}}
@extends('admin.layouts.app')
@section('title', $title)
@section('breadcrumbs')
    <a href="{{ $back }}" class="hover:text-slate-800">{{ $backLabel }}</a>
    <x-admin.icon name="chevron-right" class="size-4 text-slate-300"/>
    <span class="font-medium text-slate-800">{{ $title }}</span>
@endsection

@section('content')
<form method="POST" action="{{ $action }}" data-dirty-guard>
    @csrf
    @if ($method !== 'POST') @method($method) @endif

    <div class="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div class="flex items-center gap-2">
            <a href="{{ $back }}" class="a-icon-btn"><x-admin.icon name="arrow-left"/></a>
            <h1 class="text-2xl font-semibold tracking-tight text-slate-900">{{ $title }}</h1>
        </div>
        <div class="flex gap-2">
            @if (!empty($viewUrl))<a href="{{ $viewUrl }}" target="_blank" class="a-btn-secondary"><x-admin.icon name="eye" class="size-4"/> View</a>@endif
            <a href="{{ $back }}" class="a-btn-secondary">Cancel</a>
            <button class="a-btn-primary"><x-admin.icon name="save" class="size-4"/> Save</button>
        </div>
    </div>

    <div @class(['grid gap-6', 'xl:grid-cols-[minmax(0,1fr)_320px]' => !empty($sidebar)])>
        <div class="a-card grid grid-cols-2 content-start gap-x-5 gap-y-4 p-6">
            @foreach ($fields as $field)
                @include('admin.partials.field', ['field' => $field, 'name' => $field['name'] ?? 'heading', 'value' => isset($field['name']) ? ($values[$field['name']] ?? null) : null, 'depth' => 0])
            @endforeach
        </div>
        @if (!empty($sidebar))
            <aside class="a-card grid grid-cols-2 content-start gap-x-5 gap-y-4 self-start p-5">
                @foreach ($sidebar as $field)
                    @include('admin.partials.field', ['field' => $field, 'name' => $field['name'], 'value' => $values[$field['name']] ?? null, 'depth' => 0])
                @endforeach
            </aside>
        @endif
    </div>
</form>
@endsection

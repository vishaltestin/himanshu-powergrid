@extends('admin.layouts.app')
@section('title', 'Settings')
@section('breadcrumbs')<span class="font-medium text-slate-800">Settings</span>@endsection

@section('content')
    @include('admin.partials.page-header', ['title' => 'Site settings', 'subtitle' => 'Logos, contact details, footer texts and other words shown on every page.'])

    <div class="grid gap-6 lg:grid-cols-[220px_minmax(0,1fr)]">
        <nav class="a-card self-start p-2">
            @foreach ($groups as $key => $group)
                <a href="{{ route('admin.settings.index', ['tab' => $key]) }}" @class(['flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium', 'bg-brand-50 text-brand-700' => $tab === $key, 'text-slate-600 hover:bg-slate-50' => $tab !== $key])>
                    <x-admin.icon :name="$group['icon']" class="size-4"/> {{ $group['label'] }}
                </a>
            @endforeach
        </nav>

        <form method="POST" action="{{ route('admin.settings.update') }}" class="a-card" data-dirty-guard>
            @csrf @method('PUT')
            <input type="hidden" name="tab" value="{{ $tab }}">
            <div class="border-b border-slate-100 px-6 py-4"><h2 class="font-semibold text-slate-900">{{ $groups[$tab]['label'] }}</h2></div>
            <div class="grid grid-cols-2 gap-x-5 gap-y-4 p-6">
                @foreach ($groups[$tab]['fields'] as $field)
                    @include('admin.partials.field', ['field' => $field, 'name' => isset($field['name']) ? 'settings[' . $field['name'] . ']' : 'heading', 'value' => isset($field['name']) ? ($values[$field['name']] ?? null) : null, 'depth' => 0])
                @endforeach
            </div>
            <div class="flex justify-end border-t border-slate-100 px-6 py-4">
                <button class="a-btn-primary"><x-admin.icon name="save" class="size-4"/> Save {{ strtolower($groups[$tab]['label']) }}</button>
            </div>
        </form>
    </div>
@endsection

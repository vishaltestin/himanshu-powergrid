@extends('admin.layouts.app')
@section('title', 'Submission #' . $submission->id)
@section('breadcrumbs')
    <a href="{{ route('admin.submissions.index') }}" class="hover:text-slate-800">Submissions</a>
    <x-admin.icon name="chevron-right" class="size-4 text-slate-300"/>
    <span class="font-medium text-slate-800">#{{ $submission->id }}</span>
@endsection

@php
    $data = $submission->data ?? [];
    $isUrl = fn ($v) => is_string($v) && (str_starts_with($v, 'http') || str_starts_with($v, '/storage/'));
@endphp

@section('content')
<div class="mx-auto max-w-4xl">
    <div class="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div class="flex items-center gap-2">
            <a href="{{ route('admin.submissions.index') }}" class="a-icon-btn"><x-admin.icon name="arrow-left"/></a>
            <div>
                <h1 class="text-2xl font-semibold tracking-tight text-slate-900">{{ $submission->name ?: 'Anonymous' }}</h1>
                <p class="text-sm text-slate-500">{{ $types[$submission->type] ?? ucfirst($submission->type) }} · {{ $submission->created_at->format('d M Y, h:i A') }}</p>
            </div>
        </div>
        <div class="flex items-center gap-2">
            @if ($prev)<a href="{{ route('admin.submissions.show', $prev) }}" class="a-btn-ghost text-xs">← Newer</a>@endif
            @if ($next)<a href="{{ route('admin.submissions.show', $next) }}" class="a-btn-ghost text-xs">Older →</a>@endif
            <form method="POST" action="{{ route('admin.submissions.update', $submission) }}" class="flex items-center gap-2">
                @csrf @method('PATCH')
                <select name="status" class="a-input w-32" onchange="this.form.submit()">
                    @foreach ($statuses as $key => $label)<option value="{{ $key }}" @selected($submission->status === $key)>{{ $label }}</option>@endforeach
                </select>
            </form>
            <form method="POST" action="{{ route('admin.submissions.destroy', $submission) }}" data-confirm="Delete this submission?">
                @csrf @method('DELETE')
                <button class="a-btn-danger"><x-admin.icon name="trash" class="size-4"/></button>
            </form>
        </div>
    </div>

    <div class="grid gap-6 md:grid-cols-3">
        <div class="a-card space-y-5 p-6 md:col-span-2">
            @if ($submission->subject)
                <div><p class="text-xs font-semibold tracking-wide text-slate-500 uppercase">Subject</p><p class="mt-1 text-slate-900">{{ $submission->subject }}</p></div>
            @endif
            <div>
                <p class="text-xs font-semibold tracking-wide text-slate-500 uppercase">Message</p>
                <p class="mt-1 whitespace-pre-line text-slate-800">{{ $submission->message ?: '—' }}</p>
            </div>
            @if ($data)
                <div class="border-t border-slate-100 pt-5">
                    <p class="mb-3 text-xs font-semibold tracking-wide text-slate-500 uppercase">Additional details</p>
                    <dl class="grid gap-x-6 gap-y-3 sm:grid-cols-2">
                        @foreach ($data as $key => $value)
                            @continue(str_ends_with($key, '_name') && isset($data[\Illuminate\Support\Str::beforeLast($key, '_name')]))
                            <div>
                                <dt class="text-xs text-slate-500">{{ \Illuminate\Support\Str::headline($key) }}</dt>
                                <dd class="text-sm text-slate-900">
                                    @if ($isUrl($value))
                                        <a href="{{ $value }}" target="_blank" class="inline-flex items-center gap-1 font-medium text-brand-600 hover:underline"><x-admin.icon name="download" class="size-4"/> {{ $data[$key . '_name'] ?? 'Download file' }}</a>
                                    @else
                                        {{ is_array($value) ? implode(', ', $value) : $value }}
                                    @endif
                                </dd>
                            </div>
                        @endforeach
                    </dl>
                </div>
            @endif
        </div>
        <div class="a-card space-y-4 self-start p-6 text-sm">
            <div><p class="text-xs text-slate-500">Email</p>@if($submission->email)<a href="mailto:{{ $submission->email }}" class="font-medium text-brand-600 hover:underline">{{ $submission->email }}</a>@else — @endif</div>
            <div><p class="text-xs text-slate-500">Phone</p>@if($submission->phone)<a href="tel:{{ $submission->phone }}" class="font-medium text-slate-900">{{ $submission->phone }}</a>@else — @endif</div>
            <div><p class="text-xs text-slate-500">IP address</p><p class="font-mono text-xs text-slate-700">{{ $submission->ip ?: '—' }}</p></div>
            @if ($submission->email)
                <a href="mailto:{{ $submission->email }}?subject={{ rawurlencode('Re: ' . ($submission->subject ?: 'Your enquiry')) }}" class="a-btn-primary w-full"><x-admin.icon name="mail" class="size-4"/> Reply by email</a>
            @endif
        </div>
    </div>
</div>
@endsection

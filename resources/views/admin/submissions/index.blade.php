@extends('admin.layouts.app')
@section('title', 'Submissions')
@section('breadcrumbs')<span class="font-medium text-slate-800">Submissions</span>@endsection

@section('content')
    @include('admin.partials.page-header', [
        'title' => 'Submissions',
        'subtitle' => $total . ' total · ' . $newCount . ' new',
        'actions' => '<a href="' . route('admin.submissions.export', request()->query()) . '" class="a-btn-secondary">Export CSV</a>',
    ])

    <div class="a-card overflow-hidden" x-data="{ selected: [], all: false }">
        <form method="GET" class="flex flex-wrap items-center gap-3 border-b border-slate-200 px-4 py-3">
            <div class="flex flex-wrap gap-1 rounded-lg bg-slate-100 p-1 text-sm">
                <a href="{{ request()->fullUrlWithQuery(['type' => null, 'page' => null]) }}" @class(['rounded-md px-3 py-1 font-medium', 'bg-white text-slate-900 shadow-sm' => !request('type'), 'text-slate-500 hover:text-slate-800' => request('type')])>All</a>
                @foreach ($types as $key => $label)
                    <a href="{{ request()->fullUrlWithQuery(['type' => $key, 'page' => null]) }}" @class(['rounded-md px-3 py-1 font-medium', 'bg-white text-slate-900 shadow-sm' => request('type') === $key, 'text-slate-500 hover:text-slate-800' => request('type') !== $key])>
                        {{ $label }} <span class="text-slate-400">{{ $typeCounts[$key] ?? 0 }}</span>
                    </a>
                @endforeach
            </div>
            <select name="status" class="a-input w-36" onchange="this.form.submit()">
                <option value="">Any status</option>
                @foreach ($statuses as $key => $label)<option value="{{ $key }}" @selected(request('status') === $key)>{{ $label }}</option>@endforeach
            </select>
            @if (request('type'))<input type="hidden" name="type" value="{{ request('type') }}">@endif
            <div class="relative ml-auto">
                <x-admin.icon name="search" class="pointer-events-none absolute top-2.5 left-3 size-4 text-slate-400"/>
                <input type="search" name="search" value="{{ request('search') }}" placeholder="Search name, email, message…" class="a-input w-72 pl-9">
            </div>
        </form>

        <form method="POST" action="{{ route('admin.submissions.bulk') }}" id="bulk-form" data-confirm="Apply this action to the selected submissions?">
            @csrf
            <div x-show="selected.length" x-cloak class="flex items-center gap-2 border-b border-slate-200 bg-brand-50 px-4 py-2 text-sm">
                <span class="font-medium text-brand-700" x-text="selected.length + ' selected'"></span>
                <button name="action" value="read" class="a-btn-secondary px-2.5 py-1 text-xs">Mark read</button>
                <button name="action" value="new" class="a-btn-secondary px-2.5 py-1 text-xs">Mark new</button>
                <button name="action" value="archived" class="a-btn-secondary px-2.5 py-1 text-xs">Archive</button>
                <button name="action" value="delete" class="a-btn-danger px-2.5 py-1 text-xs">Delete</button>
            </div>
            <div class="overflow-x-auto">
                <table class="a-table">
                    <thead class="bg-slate-50">
                    <tr>
                        <th class="w-0"><input type="checkbox" class="rounded border-slate-300" @change="all = $event.target.checked; selected = all ? [...document.querySelectorAll('[data-sub-id]')].map(e => e.value) : []"></th>
                        <th>From</th><th>Type</th><th>Subject / message</th><th>Status</th><th class="text-right">Received</th>
                    </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-100 bg-white">
                    @forelse ($submissions as $s)
                        <tr @class(['hover:bg-slate-50', 'bg-amber-50/40' => $s->status === 'new'])>
                            <td><input type="checkbox" name="ids[]" value="{{ $s->id }}" data-sub-id x-model="selected" class="rounded border-slate-300"></td>
                            <td>
                                <a href="{{ route('admin.submissions.show', $s) }}" @class(['text-slate-900 hover:text-brand-600', 'font-semibold' => $s->status === 'new', 'font-medium' => $s->status !== 'new'])>{{ $s->name ?: '—' }}</a>
                                <p class="text-xs text-slate-500">{{ $s->email }} @if($s->phone) · {{ $s->phone }} @endif</p>
                            </td>
                            <td><span class="a-badge bg-slate-100 text-slate-700">{{ $types[$s->type] ?? ucfirst($s->type) }}</span></td>
                            <td class="max-w-sm truncate text-slate-600">
                                @if ($s->subject)<span class="font-medium text-slate-800">{{ $s->subject }}</span> — @endif{{ \Illuminate\Support\Str::limit($s->message, 80) }}
                            </td>
                            <td>
                                <span @class(['a-badge', 'bg-amber-100 text-amber-800' => $s->status === 'new', 'bg-slate-100 text-slate-600' => $s->status === 'read', 'bg-slate-200 text-slate-500' => $s->status === 'archived'])>{{ $statuses[$s->status] ?? $s->status }}</span>
                            </td>
                            <td class="text-right text-xs whitespace-nowrap text-slate-500" title="{{ $s->created_at }}">{{ $s->created_at->format('d M Y, h:i A') }}</td>
                        </tr>
                    @empty
                        <tr><td colspan="6" class="py-12 text-center text-slate-500">No submissions found.</td></tr>
                    @endforelse
                    </tbody>
                </table>
            </div>
        </form>
        @if ($submissions->hasPages())<div class="border-t border-slate-200 px-4 py-3">{{ $submissions->links() }}</div>@endif
    </div>
@endsection

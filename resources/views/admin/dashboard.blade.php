@extends('admin.layouts.app')
@section('title', 'Dashboard')
@section('breadcrumbs')<span class="font-medium text-slate-800">Dashboard</span>@endsection

@php
    $tones = [
        'amber' => 'bg-amber-50 text-amber-600', 'brand' => 'bg-brand-50 text-brand-600', 'emerald' => 'bg-emerald-50 text-emerald-600',
        'violet' => 'bg-violet-50 text-violet-600', 'sky' => 'bg-sky-50 text-sky-600', 'slate' => 'bg-slate-100 text-slate-600',
    ];
@endphp

@section('content')
    <div class="mb-8">
        <h1 class="text-2xl font-semibold tracking-tight text-slate-900">Welcome back, {{ \Illuminate\Support\Str::before(auth()->user()->name, ' ') }}</h1>
        <p class="mt-1 text-sm text-slate-500">Here’s what’s happening on your website.</p>
    </div>

    <div class="grid gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6">
        @foreach ($stats as $stat)
            <a href="{{ $stat['route'] }}" class="a-card group flex items-center gap-4 p-5 transition hover:shadow-md">
                <span class="flex size-11 items-center justify-center rounded-xl {{ $tones[$stat['tone']] }}"><x-admin.icon :name="$stat['icon']"/></span>
                <span>
                    <span class="block text-2xl font-semibold text-slate-900">{{ number_format($stat['value']) }}</span>
                    <span class="block text-xs text-slate-500">{{ $stat['label'] }}</span>
                </span>
            </a>
        @endforeach
    </div>

    <div class="mt-8 grid gap-6 xl:grid-cols-3">
        <div class="a-card overflow-hidden xl:col-span-2">
            <div class="flex items-center justify-between border-b border-slate-100 px-5 py-4">
                <h2 class="font-semibold text-slate-900">Recent submissions</h2>
                <a href="{{ route('admin.submissions.index') }}" class="text-sm font-medium text-brand-600 hover:text-brand-700">View all →</a>
            </div>
            <div class="overflow-x-auto">
                <table class="a-table">
                    <tbody class="divide-y divide-slate-100">
                    @forelse ($recentSubmissions as $s)
                        <tr class="cursor-pointer hover:bg-slate-50" onclick="location.href='{{ route('admin.submissions.show', $s) }}'">
                            <td class="w-0">
                                @if ($s->status === 'new')<span class="block size-2 rounded-full bg-amber-500" title="New"></span>@endif
                            </td>
                            <td>
                                <p class="font-medium text-slate-900">{{ $s->name ?: '—' }}</p>
                                <p class="text-xs text-slate-500">{{ $s->email }}</p>
                            </td>
                            <td><span class="a-badge bg-slate-100 text-slate-700 capitalize">{{ $s->type }}</span></td>
                            <td class="max-w-xs truncate text-slate-500">{{ \Illuminate\Support\Str::limit($s->subject ?: $s->message, 60) }}</td>
                            <td class="text-right text-xs whitespace-nowrap text-slate-500">{{ $s->created_at->diffForHumans() }}</td>
                        </tr>
                    @empty
                        <tr><td class="py-10 text-center text-slate-500">No submissions yet.</td></tr>
                    @endforelse
                    </tbody>
                </table>
            </div>
        </div>

        <div class="space-y-6">
            <div class="a-card">
                <div class="border-b border-slate-100 px-5 py-4"><h2 class="font-semibold text-slate-900">Quick actions</h2></div>
                <div class="grid grid-cols-2 gap-2 p-4 text-sm">
                    <a href="{{ route('admin.pages.create') }}" class="flex flex-col items-center gap-2 rounded-lg p-3 text-center ring-1 ring-slate-200 hover:bg-slate-50"><x-admin.icon name="layers" class="text-brand-600"/> New page</a>
                    <a href="{{ route('admin.blogs.create') }}" class="flex flex-col items-center gap-2 rounded-lg p-3 text-center ring-1 ring-slate-200 hover:bg-slate-50"><x-admin.icon name="newspaper" class="text-brand-600"/> New post</a>
                    <a href="{{ route('admin.events.create') }}" class="flex flex-col items-center gap-2 rounded-lg p-3 text-center ring-1 ring-slate-200 hover:bg-slate-50"><x-admin.icon name="calendar" class="text-brand-600"/> New event</a>
                    <a href="{{ route('admin.settings.index') }}" class="flex flex-col items-center gap-2 rounded-lg p-3 text-center ring-1 ring-slate-200 hover:bg-slate-50"><x-admin.icon name="settings" class="text-brand-600"/> Settings</a>
                </div>
            </div>
            <div class="a-card">
                <div class="border-b border-slate-100 px-5 py-4"><h2 class="font-semibold text-slate-900">Recently edited pages</h2></div>
                <ul class="divide-y divide-slate-100 text-sm">
                    @foreach ($recentPages as $p)
                        <li><a href="{{ route('admin.pages.edit', $p) }}" class="flex items-center justify-between px-5 py-2.5 hover:bg-slate-50">
                            <span class="truncate font-medium text-slate-800">{{ $p->title }}</span>
                            <span class="shrink-0 text-xs text-slate-400">{{ $p->updated_at->diffForHumans() }}</span>
                        </a></li>
                    @endforeach
                </ul>
            </div>
        </div>
    </div>
@endsection

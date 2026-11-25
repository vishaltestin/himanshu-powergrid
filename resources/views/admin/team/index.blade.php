@extends('admin.layouts.app')
@section('title', 'Team')
@section('breadcrumbs')<span class="font-medium text-slate-800">Team</span>@endsection

@section('content')
    @include('admin.partials.page-header', [
        'title' => 'Team',
        'subtitle' => 'Members appear in “Team grid” sections. Drag to reorder within a group.',
    ])

    <div class="grid gap-6 xl:grid-cols-2">
        @foreach ($groups as $key => $label)
            <div>
                <div class="mb-3 flex items-center justify-between">
                    <h2 class="font-semibold text-slate-900">{{ $label }} <span class="font-normal text-slate-400">({{ count($members[$key] ?? []) }})</span></h2>
                    <a href="{{ route('admin.team-members.create', ['group' => $key]) }}" class="a-btn-secondary px-3 py-1.5 text-xs"><x-admin.icon name="plus" class="size-3.5"/> Add member</a>
                </div>
                <ul class="space-y-2" data-sortable-url="{{ route('admin.team-members.reorder') }}">
                    @forelse ($members[$key] ?? [] as $m)
                        <li data-id="{{ $m->id }}" class="a-card flex items-center gap-3 p-3">
                            <button type="button" data-drag-handle class="a-icon-btn cursor-grab"><x-admin.icon name="grip" class="size-4"/></button>
                            <img src="{{ $m->image ?: '/images/user/user.png' }}" class="size-12 shrink-0 rounded-full object-cover ring-1 ring-slate-200" alt="">
                            <div class="min-w-0 flex-1">
                                <a href="{{ route('admin.team-members.edit', $m) }}" class="font-medium text-slate-900 hover:text-brand-600">{{ $m->name }}</a>
                                <p class="truncate text-xs text-slate-500">{{ $m->designation }}</p>
                            </div>
                            @include('admin.partials.status-toggle', ['action' => route('admin.team-members.toggle-status', $m), 'on' => $m->status, 'onLabel' => 'Visible'])
                            @include('admin.partials.row-actions', ['edit' => route('admin.team-members.edit', $m), 'delete' => route('admin.team-members.destroy', $m)])
                        </li>
                    @empty
                        <li class="a-card py-10 text-center text-sm text-slate-500">No members in this group.</li>
                    @endforelse
                </ul>
            </div>
        @endforeach
    </div>
@endsection

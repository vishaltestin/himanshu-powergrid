@extends('admin.layouts.app')
@section('title', 'Events')
@section('breadcrumbs')<span class="font-medium text-slate-800">Events</span>@endsection

@section('content')
    @include('admin.partials.page-header', [
        'title' => 'Events',
        'subtitle' => 'Published events appear in “Events list” sections. Drag to change their order.',
        'actions' => '<a href="' . route('admin.events.create') . '" class="a-btn-primary">+ New event</a>',
    ])

    @if ($events->isEmpty())
        <div class="a-card py-16 text-center text-slate-500">No events yet.</div>
    @else
        <ul class="space-y-2" data-sortable-url="{{ route('admin.events.reorder') }}">
            @foreach ($events as $event)
                <li data-id="{{ $event->id }}" class="a-card flex items-center gap-4 p-3">
                    <button type="button" data-drag-handle class="a-icon-btn cursor-grab"><x-admin.icon name="grip" class="size-4"/></button>
                    <img src="{{ $event->image ?: '/images/news.jpg' }}" class="h-14 w-20 shrink-0 rounded-lg object-cover ring-1 ring-slate-200" alt="">
                    <div class="min-w-0 flex-1">
                        <a href="{{ route('admin.events.edit', $event) }}" class="font-medium text-slate-900 hover:text-brand-600">{{ $event->title }}</a>
                        <p class="mt-0.5 flex flex-wrap gap-x-4 text-xs text-slate-500">
                            @if ($event->date)<span>📅 {{ $event->date }}</span>@endif
                            @if ($event->location)<span>📍 {{ $event->location }}</span>@endif
                            @if ($event->badge)<span class="font-medium text-brand-600">{{ $event->badge }}</span>@endif
                        </p>
                    </div>
                    @include('admin.partials.status-toggle', ['action' => route('admin.events.toggle-status', $event), 'on' => $event->status])
                    @include('admin.partials.row-actions', ['edit' => route('admin.events.edit', $event), 'delete' => route('admin.events.destroy', $event)])
                </li>
            @endforeach
        </ul>
    @endif
@endsection

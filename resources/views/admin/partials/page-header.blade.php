{{-- @param string $title, ?string $subtitle; slot via $actions (html string) --}}
<div class="mb-6 flex flex-wrap items-end justify-between gap-4">
    <div class="min-w-0">
        <h1 class="text-2xl font-semibold tracking-tight text-slate-900">{{ $title }}</h1>
        @if (!empty($subtitle))<p class="mt-1 text-sm text-slate-500">{{ $subtitle }}</p>@endif
    </div>
    @if (!empty($actions))<div class="flex flex-wrap items-center gap-2">{!! $actions !!}</div>@endif
</div>

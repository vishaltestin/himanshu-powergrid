{{-- @param string $action, bool $on, string $onLabel, string $offLabel --}}
<form method="POST" action="{{ $action }}" class="inline">@csrf
    <button @class(['a-badge cursor-pointer ring-1 transition', 'bg-emerald-50 text-emerald-700 ring-emerald-200 hover:bg-emerald-100' => $on, 'bg-slate-100 text-slate-600 ring-slate-200 hover:bg-slate-200' => !$on]) title="Click to toggle">
        <span @class(['size-1.5 rounded-full', 'bg-emerald-500' => $on, 'bg-slate-400' => !$on])></span>{{ $on ? ($onLabel ?? 'Published') : ($offLabel ?? 'Hidden') }}
    </button>
</form>

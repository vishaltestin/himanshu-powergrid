{{-- One repeater row. Expects: $field, $name, $depth, $subFields, $titleKey, $singular, $index, $row --}}
@php $fresh = $fresh ?? false; @endphp
<div data-repeater-row class="overflow-hidden rounded-lg bg-white ring-1 ring-slate-200">
    <div class="flex items-center gap-1 border-b border-slate-100 bg-white px-2 py-1.5">
        <button type="button" data-drag-handle class="a-icon-btn size-7 cursor-grab active:cursor-grabbing" title="Drag to reorder"><x-admin.icon name="grip" class="size-4"/></button>
        <button type="button" data-repeater-toggle class="flex min-w-0 flex-1 items-center gap-2 text-left">
            <x-admin.icon name="chevron-down" @class(['size-4 shrink-0 text-slate-400 transition', '-rotate-90' => !$fresh && count($rows ?? []) > 3])/>
            <span class="text-xs font-semibold text-slate-400">#<span data-row-number>{{ is_int($index) ? $index + 1 : '' }}</span></span>
            <span data-row-title data-placeholder="{{ $singular }}" class="truncate text-sm font-medium text-slate-700">{{ $titleKey && !empty($row[$titleKey]) && is_string($row[$titleKey]) ? \Illuminate\Support\Str::limit(strip_tags($row[$titleKey]), 70) : $singular }}</span>
        </button>
        <button type="button" data-repeater-duplicate class="a-icon-btn size-7" title="Duplicate"><x-admin.icon name="copy" class="size-4"/></button>
        <button type="button" data-repeater-remove class="a-icon-btn size-7 hover:!text-red-600" title="Remove"><x-admin.icon name="trash" class="size-4"/></button>
    </div>
    <div data-row-body @class(['grid grid-cols-2 gap-x-4 gap-y-3 p-3', 'hidden' => !$fresh && count($rows ?? []) > 3])>
        @foreach ($subFields as $sub)
            @include('admin.partials.field', [
                'field' => $sub,
                'name' => $name . '[' . $index . '][' . ($sub['name'] ?? '') . ']',
                'value' => isset($sub['name']) ? ($row[$sub['name']] ?? null) : null,
                'depth' => $depth + 1,
                'isTitle' => isset($sub['name']) && $sub['name'] === $titleKey,
            ])
        @endforeach
    </div>
</div>

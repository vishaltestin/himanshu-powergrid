{{--
    Renders one schema-driven form field (see config/page-blocks.php).
    @param array  $field  ['name','label','type',...]
    @param string $name   full input name, e.g. data[slides][0][title]
    @param mixed  $value  current value
    @param int    $depth  repeater nesting depth (for template placeholders)
    @param bool   $isTitle  marks the field used as the repeater row title
--}}
@php
    $type = $field['type'] ?? 'text';
    $depth = $depth ?? 0;
    $isTitle = $isTitle ?? false;
    $label = $field['label'] ?? \Illuminate\Support\Str::headline($field['name'] ?? '');
    $dot = trim(str_replace(['[', ']'], ['.', ''], $name), '.');
    $inTemplate = str_contains($name, '__I');
    // Repopulate after validation errors (not inside row templates)
    if (!$inTemplate && session()->hasOldInput()) {
        $value = old($dot, $value);
    }
    $value = $value ?? ($field['default'] ?? ($type === 'repeater' || $type === 'lines' ? [] : ''));
    $id = 'f_' . preg_replace('/[^A-Za-z0-9_]+/', '_', $name);
    $placeholder = $field['placeholder'] ?? '';
    $required = !empty($field['required']);
    $help = $field['help'] ?? null;
@endphp

@if ($type === 'heading')
    <div class="col-span-2 -mb-1 border-b border-slate-200 pt-3 pb-2">
        <p class="text-[13px] font-semibold tracking-wide text-slate-900 uppercase">{{ $label }}</p>
        @if ($help)<p class="mt-0.5 text-xs text-slate-500">{{ $help }}</p>@endif
    </div>
@else
<div @class(['col-span-2' => ($field['width'] ?? 'full') === 'full' || in_array($type, ['repeater', 'richtext', 'lines']), 'col-span-2 sm:col-span-1' => ($field['width'] ?? 'full') === 'half' && !in_array($type, ['repeater', 'richtext', 'lines'])])>
    @if ($type === 'toggle')
        <label class="flex cursor-pointer items-center gap-3 rounded-lg py-1.5">
            <input type="hidden" name="{{ $name }}" value="0">
            <span class="relative inline-flex">
                <input type="checkbox" name="{{ $name }}" value="1" @checked(filter_var($value, FILTER_VALIDATE_BOOLEAN)) class="peer sr-only">
                <span class="h-5 w-9 rounded-full bg-slate-300 transition peer-checked:bg-brand-600"></span>
                <span class="absolute top-0.5 left-0.5 size-4 rounded-full bg-white shadow transition peer-checked:translate-x-4"></span>
            </span>
            <span class="text-sm font-medium text-slate-700">{{ $label }}</span>
        </label>
        @if ($help)<p class="a-help">{{ $help }}</p>@endif

    @elseif ($type === 'repeater')
        @php
            $placeholderToken = '__I' . $depth . '__';
            $rows = is_array($value) ? array_values($value) : [];
            $subFields = $field['fields'] ?? [];
            $titleKey = $field['item_label'] ?? collect($subFields)->first(fn ($f) => in_array($f['type'] ?? 'text', ['text']))['name'] ?? null;
            $singular = $field['singular'] ?? \Illuminate\Support\Str::singular($label);
        @endphp
        <div data-repeater class="rounded-xl bg-slate-50/80 p-3 ring-1 ring-slate-200">
            <div class="mb-2 flex items-center justify-between gap-2 px-1">
                <div>
                    <p class="text-[13px] font-semibold text-slate-800">{{ $label }}</p>
                    @if ($help)<p class="text-xs text-slate-500">{{ $help }}</p>@endif
                </div>
                <button type="button" data-repeater-collapse-all class="text-xs font-medium text-slate-500 hover:text-slate-800">Collapse / expand</button>
            </div>

            <div data-repeater-rows class="space-y-2">
                @foreach ($rows as $i => $row)
                    @include('admin.partials.repeater-row', ['index' => $i, 'row' => (array) $row])
                @endforeach
            </div>

            <template data-placeholder="{{ $placeholderToken }}">
                @include('admin.partials.repeater-row', ['index' => $placeholderToken, 'row' => [], 'fresh' => true])
            </template>

            <button type="button" data-repeater-add class="mt-2 flex w-full items-center justify-center gap-1.5 rounded-lg border border-dashed border-slate-300 bg-white py-2 text-sm font-medium text-slate-600 hover:border-brand-500 hover:text-brand-600">
                <x-admin.icon name="plus" class="size-4"/> Add {{ strtolower($singular) }}
            </button>
        </div>

    @else
        <label for="{{ $id }}" class="a-label">
            {{ $label }} @if ($required)<span class="text-red-500">*</span>@endif
        </label>

        @switch($type)
            @case('textarea')
                <textarea id="{{ $id }}" name="{{ $name }}" rows="{{ $field['rows'] ?? 3 }}" class="a-input" placeholder="{{ $placeholder }}" @required($required) @if($isTitle) data-row-title-source @endif>{{ is_array($value) ? implode("\n", $value) : $value }}</textarea>
                @break

            @case('lines')
                <textarea id="{{ $id }}" name="{{ $name }}" rows="{{ $field['rows'] ?? 4 }}" class="a-input font-[450]" placeholder="{{ $placeholder ?: 'One item per line' }}">{{ is_array($value) ? implode("\n", $value) : $value }}</textarea>
                @if (!$help)<p class="a-help">One item per line.</p>@endif
                @break

            @case('richtext')
                <div data-richtext data-placeholder="{{ $placeholder }}" class="rich-editor">
                    <input type="hidden" name="{{ $name }}" value="{{ $value }}">
                    <div data-editor></div>
                </div>
                @break

            @case('number')
                <input id="{{ $id }}" type="number" step="{{ $field['step'] ?? 'any' }}" name="{{ $name }}" value="{{ $value }}" class="a-input" placeholder="{{ $placeholder }}" @required($required)>
                @break

            @case('select')
                <select id="{{ $id }}" name="{{ $name }}" class="a-input" @if($isTitle) data-row-title-source @endif>
                    @foreach (($field['options'] ?? []) as $optValue => $optLabel)
                        <option value="{{ $optValue }}" @selected((string) $value === (string) $optValue)>{{ $optLabel }}</option>
                    @endforeach
                </select>
                @break

            @case('icon')
                <select id="{{ $id }}" name="{{ $name }}" class="a-input">
                    <option value="">— None —</option>
                    @foreach (config('page-blocks.icons', []) as $icon)
                        <option value="{{ $icon }}" @selected($value === $icon)>{{ \Illuminate\Support\Str::headline($icon) }}</option>
                    @endforeach
                </select>
                @break

            @case('color')
                <div class="flex items-center gap-2" x-data="{ c: @js($value ?: ($field['default'] ?? '#000000')) }">
                    <input type="color" x-model="c" class="h-9 w-12 cursor-pointer rounded-md border-0 p-0 ring-1 ring-slate-300">
                    <input id="{{ $id }}" type="text" name="{{ $name }}" x-model="c" class="a-input font-mono">
                </div>
                @break

            @case('image')
            @case('file')
            @case('video')
                <div data-media-field data-accept="{{ $type === 'image' ? 'image' : 'any' }}" class="flex items-stretch gap-3">
                    <div data-media-preview class="flex size-[74px] shrink-0 items-center justify-center overflow-hidden rounded-lg bg-slate-100 ring-1 ring-slate-200"></div>
                    <div class="min-w-0 flex-1 space-y-2">
                        <input id="{{ $id }}" type="text" data-media-input name="{{ $name }}" value="{{ $value }}" class="a-input font-mono text-xs" placeholder="{{ $placeholder ?: '/images/… or https://…' }}">
                        <div class="flex flex-wrap gap-1.5">
                            <button type="button" data-media-pick class="a-btn-secondary px-2.5 py-1 text-xs"><x-admin.icon name="images" class="size-3.5"/> Library</button>
                            <label class="a-btn-secondary cursor-pointer px-2.5 py-1 text-xs">
                                <x-admin.icon name="upload" class="size-3.5"/> <span data-upload-label>Upload</span>
                                <input type="file" data-media-upload class="hidden" @if($type === 'image') accept="image/*" @endif>
                            </label>
                            <button type="button" data-media-clear class="a-btn-ghost px-2.5 py-1 text-xs">Clear</button>
                        </div>
                    </div>
                </div>
                @break

            @default
                <input id="{{ $id }}" type="{{ in_array($type, ['email', 'url', 'date', 'time', 'password', 'tel']) ? $type : 'text' }}" name="{{ $name }}" value="{{ is_array($value) ? '' : $value }}" class="a-input" placeholder="{{ $placeholder }}" @required($required) @if($isTitle) data-row-title-source @endif @if(isset($field['maxlength'])) maxlength="{{ $field['maxlength'] }}" @endif>
        @endswitch

        @if ($help && $type !== 'lines')<p class="a-help">{{ $help }}</p>@endif
        @error($dot)<p class="mt-1 text-xs text-red-600">{{ $message }}</p>@enderror
    @endif
</div>
@endif

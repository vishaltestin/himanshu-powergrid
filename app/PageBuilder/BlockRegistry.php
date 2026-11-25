<?php

namespace App\PageBuilder;

use Illuminate\Support\Arr;

/**
 * Reads the block library from config/page-blocks.php and turns raw admin
 * form input into clean, typed section data.
 */
class BlockRegistry
{
    /** @return array<string, array> */
    public function all(): array
    {
        return config('page-blocks.blocks', []);
    }

    public function has(string $type): bool
    {
        return array_key_exists($type, $this->all());
    }

    public function get(string $type): ?array
    {
        return $this->all()[$type] ?? null;
    }

    public function label(string $type): string
    {
        return $this->get($type)['label'] ?? ucwords(str_replace('_', ' ', $type));
    }

    /** Blocks grouped by category for the "Add section" library. */
    public function grouped(): array
    {
        $groups = [];

        foreach (config('page-blocks.categories', []) as $key => $label) {
            $groups[$key] = ['label' => $label, 'blocks' => []];
        }

        foreach ($this->all() as $type => $block) {
            $cat = $block['category'] ?? 'content';
            $groups[$cat] ??= ['label' => ucfirst($cat), 'blocks' => []];
            $groups[$cat]['blocks'][$type] = $block;
        }

        return array_filter($groups, fn ($g) => count($g['blocks']) > 0);
    }

    public function icons(): array
    {
        return config('page-blocks.icons', []);
    }

    /** Fields of a block, without the admin-only "heading" dividers. */
    public function dataFields(array $fields): array
    {
        return array_values(array_filter($fields, fn ($f) => ($f['type'] ?? '') !== 'heading' && isset($f['name'])));
    }

    /** Default data for a freshly added section. */
    public function defaults(string $type): array
    {
        $block = $this->get($type);

        return $block ? $this->defaultsFor($block['fields']) : [];
    }

    public function defaultsFor(array $fields): array
    {
        $data = [];

        foreach ($this->dataFields($fields) as $field) {
            $data[$field['name']] = match ($field['type']) {
                'repeater' => [],
                'lines' => (array) ($field['default'] ?? []),
                'toggle' => (bool) ($field['default'] ?? false),
                default => $field['default'] ?? '',
            };
        }

        return $data;
    }

    /** Clean the posted `data` array against the block's field schema. */
    public function sanitize(string $type, array $input): array
    {
        $block = $this->get($type);

        return $block ? $this->sanitizeFields($block['fields'], $input) : [];
    }

    /** Sanitize input against an arbitrary field schema (used by settings & forms). */
    public function sanitizeFields(array $fields, array $input): array
    {
        $clean = [];

        foreach ($this->dataFields($fields) as $field) {
            $name = $field['name'];
            $value = $input[$name] ?? null;

            $clean[$name] = match ($field['type']) {
                'repeater' => $this->sanitizeRepeater($field, $value),
                'lines' => $this->toLines($value),
                'toggle' => filter_var($value, FILTER_VALIDATE_BOOLEAN),
                'number' => is_numeric($value) ? $value + 0 : ($value === null || $value === '' ? null : 0),
                'richtext' => $this->cleanHtml((string) $value),
                'select' => $this->sanitizeSelect($field, $value),
                default => is_string($value) ? trim($value) : ($value === null ? '' : (string) $value),
            };
        }

        return $clean;
    }

    private function sanitizeRepeater(array $field, mixed $rows): array
    {
        if (!is_array($rows)) {
            return [];
        }

        $out = [];

        foreach ($rows as $row) {
            if (!is_array($row)) {
                continue;
            }

            $item = $this->sanitizeFields($field['fields'] ?? [], $row);

            // Drop rows where every field is empty
            $hasContent = collect($item)->contains(fn ($v) => is_array($v) ? count($v) > 0 : ($v !== '' && $v !== null && $v !== false));

            if ($hasContent) {
                $out[] = $item;
            }
        }

        return $out;
    }

    private function sanitizeSelect(array $field, mixed $value): string
    {
        $value = (string) ($value ?? '');
        $options = array_map('strval', array_keys($field['options'] ?? []));

        if (in_array($value, $options, true)) {
            return $value;
        }

        return (string) ($field['default'] ?? Arr::first($options) ?? '');
    }

    private function toLines(mixed $value): array
    {
        if (is_array($value)) {
            return array_values(array_filter(array_map(fn ($v) => trim((string) $v), $value), 'strlen'));
        }

        return array_values(array_filter(array_map('trim', preg_split('/\r\n|\r|\n/', (string) $value)), 'strlen'));
    }

    /**
     * Light HTML sanitising for admin-authored rich text: strips scripts,
     * event handlers and javascript: URLs while keeping formatting.
     */
    public function cleanHtml(string $html): string
    {
        $html = trim($html);

        if ($html === '' || $html === '<p><br></p>') {
            return '';
        }

        $html = preg_replace('#<(script|style|iframe|object|embed)\b[^>]*>.*?</\1>#is', '', $html);
        $html = preg_replace('#<(script|style|iframe|object|embed)\b[^>]*/?>#is', '', $html);
        $html = preg_replace('/\son\w+\s*=\s*("[^"]*"|\'[^\']*\'|[^\s>]+)/i', '', $html);
        $html = preg_replace('/(href|src)\s*=\s*(["\'])\s*javascript:[^"\']*\2/i', '$1="#"', $html);

        return strip_tags($html, '<p><br><strong><b><em><i><u><s><a><ul><ol><li><h2><h3><h4><h5><blockquote><span><sup><sub><section><hr>');
    }
}

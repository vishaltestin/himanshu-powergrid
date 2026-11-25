<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Cache;

class Setting extends Model
{
    use HasFactory;

    private const CACHE_KEY = 'settings.map';

    protected $fillable = ['key', 'value', 'group', 'type'];

    protected static function booted(): void
    {
        static::saved(fn () => static::flushCache());
        static::deleted(fn () => static::flushCache());
    }

    public static function flushCache(): void
    {
        Cache::forget(self::CACHE_KEY);
    }

    /** All settings as key => raw string value. */
    public static function allMap(): array
    {
        return Cache::rememberForever(self::CACHE_KEY, fn () => static::pluck('value', 'key')->all());
    }

    /**
     * Settings for the public site: defaults from config/site-settings.php
     * merged with stored values; JSON values decoded.
     */
    public static function publicMap(): array
    {
        $stored = static::allMap();
        $out = [];

        foreach (config('site-settings') as $group) {
            foreach ($group['fields'] as $field) {
                if (!isset($field['name'])) {
                    continue;
                }
                $out[$field['name']] = static::cast($field, $stored[$field['name']] ?? null);
            }
        }

        // Keep any extra keys that are stored but not in the schema
        foreach ($stored as $key => $value) {
            if (!array_key_exists($key, $out)) {
                $decoded = is_string($value) ? json_decode($value, true) : null;
                $out[$key] = is_array($decoded) ? $decoded : $value;
            }
        }

        $out['footer_copyright'] = str_replace('{year}', date('Y'), (string) ($out['footer_copyright'] ?? ''));

        return $out;
    }

    /** Values for a list of schema fields, cast for the admin form. */
    public static function valuesFor(array $fields): array
    {
        $stored = static::allMap();
        $values = [];
        foreach ($fields as $field) {
            if (isset($field['name'])) {
                $values[$field['name']] = static::cast($field, $stored[$field['name']] ?? null);
            }
        }

        return $values;
    }

    private static function cast(array $field, ?string $raw): mixed
    {
        $type = $field['type'] ?? 'text';

        if ($raw === null) {
            return $field['default'] ?? (in_array($type, ['repeater', 'lines']) ? [] : ($type === 'toggle' ? false : ''));
        }

        return match ($type) {
            'repeater', 'lines' => json_decode($raw, true) ?: [],
            'toggle' => $raw === '1' || $raw === 'true',
            default => $raw,
        };
    }

    public static function getValue(string $key, $default = null)
    {
        return static::allMap()[$key] ?? $default;
    }
}

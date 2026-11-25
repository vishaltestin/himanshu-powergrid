<?php

namespace App\Models;

use App\PageBuilder\BlockRegistry;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Str;

class PageSection extends Model
{
    use HasFactory;

    protected $fillable = ['page_id', 'type', 'label', 'anchor', 'data', 'order', 'is_visible'];

    protected function casts(): array
    {
        return [
            'data' => 'array',
            'is_visible' => 'boolean',
            'order' => 'integer',
        ];
    }

    protected static function booted(): void
    {
        // Keep the page's "last edited" time accurate for the admin list
        static::saved(fn (PageSection $s) => $s->page?->touch());
        static::deleted(fn (PageSection $s) => $s->page?->touch());
    }

    public function page(): BelongsTo
    {
        return $this->belongsTo(Page::class);
    }

    public function blockLabel(): string
    {
        return app(BlockRegistry::class)->label($this->type);
    }

    /** A short human summary for the admin section list. */
    public function summary(): string
    {
        $data = $this->data ?? [];

        foreach (['heading', 'title', 'label', 'intro', 'body', 'text'] as $key) {
            if (!empty($data[$key]) && is_string($data[$key])) {
                return Str::limit(trim(strip_tags($data[$key])), 80);
            }
        }

        foreach ($data as $value) {
            if (is_array($value) && isset($value[0]) && is_array($value[0])) {
                $first = collect($value[0])->first(fn ($v) => is_string($v) && $v !== '');
                if ($first) {
                    return count($value) . ' items — ' . Str::limit(strip_tags($first), 60);
                }
            }
        }

        return '';
    }
}

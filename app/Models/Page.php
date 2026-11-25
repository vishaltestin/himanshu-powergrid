<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Page extends Model
{
    use HasFactory;

    public const STATUSES = ['published' => 'Published', 'draft' => 'Draft'];

    /** Slugs that clash with application routes and can't be used for pages. */
    public const RESERVED_PREFIXES = ['admin', 'storage', 'up', 'form-submissions', 'site-build', 'build', 'images', 'post'];

    protected $fillable = [
        'title', 'slug', 'is_home', 'status',
        'meta_title', 'meta_description', 'meta_image',
    ];

    protected function casts(): array
    {
        return [
            'is_home' => 'boolean',
        ];
    }

    public function sections(): HasMany
    {
        return $this->hasMany(PageSection::class)->orderBy('order')->orderBy('id');
    }

    public function scopePublished($query)
    {
        return $query->where('status', 'published');
    }

    public function isPublished(): bool
    {
        return $this->status === 'published';
    }

    /** Public URL of the page. */
    public function url(): string
    {
        return $this->is_home ? url('/') : url($this->slug);
    }

    public function path(): string
    {
        return $this->is_home ? '/' : '/' . ltrim($this->slug, '/');
    }

    /** Make a page slug from free text. Allows "/" for nested paths (pillar/green-hydrogen). */
    public static function normalizeSlug(string $value): string
    {
        $parts = array_map(fn ($p) => \Illuminate\Support\Str::slug($p), explode('/', strtolower(trim($value, " /"))));

        return implode('/', array_filter($parts, 'strlen'));
    }
}

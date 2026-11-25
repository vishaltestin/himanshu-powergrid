<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    use HasFactory;

    public const TYPES = ['blog' => 'Blog', 'news' => 'News', 'press-release' => 'Press Release'];

    protected $fillable = [
        'type', 'title', 'alias', 'thumbnail',
        'short_description', 'description', 'date', 'order', 'status',
    ];

    protected function casts(): array
    {
        return [
            'date' => 'date',
            'status' => 'boolean',
        ];
    }

    public function scopePublished($query)
    {
        return $query->where('status', 1);
    }

    public function typeLabel(): string
    {
        return self::TYPES[$this->type] ?? ucfirst(str_replace('-', ' ', (string) $this->type));
    }

    public function path(): string
    {
        return '/post/' . $this->alias;
    }

    /** Shape used by the posts_grid block. */
    public function toCard(): array
    {
        return [
            'id' => $this->id,
            'type' => $this->typeLabel(),
            'date' => $this->date?->format('d M Y'),
            'title' => $this->title,
            'description' => $this->short_description,
            'image' => $this->thumbnail ?: '/images/news.jpg',
            'href' => $this->path(),
        ];
    }
}

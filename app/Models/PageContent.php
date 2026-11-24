<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PageContent extends Model
{
    use HasFactory;

    protected $fillable = ['page', 'content'];

    protected function casts(): array
    {
        return [
            'content' => 'array',
        ];
    }

    /**
     * Get the content for a page, merged over the given defaults.
     */
    public static function forPage(string $page, array $defaults = []): array
    {
        $stored = static::where('page', $page)->first();

        if (!$stored || !is_array($stored->content)) {
            return $defaults;
        }

        return array_replace_recursive($defaults, $stored->content);
    }
}

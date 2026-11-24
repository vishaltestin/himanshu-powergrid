<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TeamMember extends Model
{
    use HasFactory;

    protected $fillable = [
        'group', 'name', 'designation', 'image', 'description',
        'paragraphs', 'highlights', 'order', 'status',
    ];

    protected function casts(): array
    {
        return [
            'paragraphs' => 'array',
            'highlights' => 'array',
            'status' => 'boolean',
            'order' => 'integer',
        ];
    }

    public function scopeActive($query)
    {
        return $query->where('status', 1)->orderBy('order');
    }
}

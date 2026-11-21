<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Testimonial extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'designation',
        'testimonial',
        'is_show_on_home',
        'date',
        'status',
    ];

    protected function casts(): array
    {
        return [
            'status' => 'boolean',
            'is_show_on_home' => 'boolean',
            'date' => 'date',
        ];
    }
}
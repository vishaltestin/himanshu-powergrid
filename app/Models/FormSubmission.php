<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FormSubmission extends Model
{
    use HasFactory;

    public const TYPES = ['contact', 'enquiry', 'career', 'newsletter', 'other'];

    public const STATUSES = ['new', 'read', 'archived'];

    protected $fillable = [
        'type', 'name', 'email', 'phone', 'subject', 'message',
        'data', 'status', 'ip', 'user_agent',
    ];

    protected function casts(): array
    {
        return [
            'data' => 'array',
        ];
    }

    public function scopeActive($query)
    {
        return $query->orderByDesc('created_at');
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AllowedUdiseCode extends Model
{
    protected $fillable = [
        'udise_code',
        'school_name',
        'district',
        'is_used',
        'status',
    ];

    protected $casts = [
        'is_used' => 'boolean',
        'status' => 'boolean',
    ];

    /**
     * Scope to get only available (unused) codes
     */
    public function scopeAvailable($query)
    {
        return $query->where('is_used', false)->where('status', true);
    }
}
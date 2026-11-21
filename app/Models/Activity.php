<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Activity extends Model
{
    use HasFactory;

    protected $attributes = ['status' => 'draft', 'order' => 0];

    // 1. UPDATED: Removed 'grades', added 'grade_id' and 'category_id'
    protected $fillable = [
        'title', 'slug', 'description', 'image', 'pdf', 
        'external_link', 'status', 'order', 'grade_id', 'category_id', 'deadline',
    ];

    protected function casts(): array
    {
        return [
            'deadline' => 'date', // This tells Laravel to convert it to a Carbon instance automatically!
        ];
    }

    // 3. UPDATED: Changed from categories() BelongsToMany to singular BelongsTo
    public function category(): BelongsTo
    {
        return $this->belongsTo(ActivityCategory::class, 'category_id');
    }

    // 4. NEW: Added the Grade relationship
    public function grade(): BelongsTo
    {
        return $this->belongsTo(Grade::class, 'grade_id');
    }

    public function scopeActive(Builder $query): Builder
    {
        return $query->where('status', 'active');
    }

    public function getPdfUrlAttribute(): ?string
    {
        return $this->pdf ? asset($this->pdf) : null;
    }

    public function submissions()
    {
        return $this->hasMany(ActivitySubmission::class);
    }
}
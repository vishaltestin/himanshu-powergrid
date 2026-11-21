<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
// use Illuminate\Database\Eloquent\SoftDeletes;

class ActivityCategory extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'slug', 'description', 'pdf', 'status', 'order'];

    protected function casts(): array
    {
        return ['status' => 'boolean'];
    }

    public function activities(): HasMany
    {
        return $this->hasMany(Activity::class, 'category_id'); 
    }

    public function scopeActive(Builder $query): Builder
    {
        return $query->where('status', true);
    }
}

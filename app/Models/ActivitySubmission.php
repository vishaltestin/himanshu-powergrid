<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ActivitySubmission extends Model
{
    use HasFactory;

    protected $fillable = [
        'activity_id',
        'user_id',
        'description',
        'gdrive_link',
        'images',
        'videos',
        'status',
        'admin_remarks'
    ];

    // Automatically convert JSON from the database into PHP Arrays
    protected $casts = [
        'images' => 'array',
        'videos' => 'array',
    ];

    /**
     * Get the activity that this submission belongs to.
     */
    public function activity(): BelongsTo
    {
        return $this->belongsTo(Activity::class);
    }

    /**
     * Get the user (school) that submitted this activity.
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
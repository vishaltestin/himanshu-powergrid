<?php

namespace App\Models;

use Database\Factories\UserFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable
{
    /** @use HasFactory<UserFactory> */
    use HasFactory, Notifiable, HasRoles;

    protected $fillable = [
        'name',
        'email',
        'phone',
        'password',
        'last_login',
        'status'
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    public function school()
    {
        return $this->hasOne(Register::class, 'user_id');
    }

    public function activitySubmissions()
    {
        return $this->hasMany(ActivitySubmission::class);
    }

    public function register()
    {
        return $this->hasOne(Register::class);
    }

    public function badges()
    {
        return $this->belongsToMany(Badge::class, 'badge_user')->withTimestamps();
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Grade extends Model
{
    protected $fillable = ['name', 'order', 'status'];

    public function activities()
    {
        return $this->hasMany(Activity::class);
    }
}

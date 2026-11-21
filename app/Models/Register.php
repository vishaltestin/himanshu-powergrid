<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Register extends Model
{
    protected $fillable = [
        'user_id',
        'school_name',
        'udise_no',
        'principal_name',
        'principal_email',
        'school_email',
        'school_phone',
        'city',
        'district',
        'state',
        'teacher_name',
        'teacher_email',
        'teacher_phone',
        'terms_accepted',
        'status'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
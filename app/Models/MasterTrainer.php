<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MasterTrainer extends Model
{
    use HasFactory;

    protected $fillable = [
        'district',
        'name',
        'school_name',
        'contact_number',
        'email',
    ];
}
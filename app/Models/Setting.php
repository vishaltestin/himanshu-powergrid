<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Setting extends Model
{
    use HasFactory;

    protected $fillable = ['key', 'value', 'group', 'type'];

    /**
     * Get all settings as a simple key => value map.
     */
    public static function allMap(): array
    {
        return static::pluck('value', 'key')->all();
    }

    /**
     * Get a single setting value with an optional default.
     */
    public static function getValue(string $key, $default = null)
    {
        $value = static::where('key', $key)->value('value');

        return $value === null ? $default : $value;
    }
}

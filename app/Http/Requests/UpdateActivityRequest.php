<?php

namespace App\Http\Requests;

use Illuminate\Validation\Rule;

class UpdateActivityRequest extends StoreActivityRequest
{
    public function rules(): array
    {
        return array_merge(parent::rules(), [
            'slug' => ['required', 'string', 'max:255', Rule::unique('activities', 'slug')->ignore($this->route('activity'))],
        ]);
    }
}

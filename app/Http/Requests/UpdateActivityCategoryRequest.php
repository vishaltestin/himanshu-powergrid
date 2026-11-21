<?php

namespace App\Http\Requests;

use Illuminate\Validation\Rule;

class UpdateActivityCategoryRequest extends StoreActivityCategoryRequest
{
    public function rules(): array
    {
        return array_merge(parent::rules(), [
            'slug' => ['required', 'string', 'max:255', Rule::unique('activity_categories', 'slug')->ignore($this->route('activity_category'))],
        ]);
    }
}

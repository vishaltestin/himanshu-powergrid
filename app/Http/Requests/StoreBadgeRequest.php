<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreBadgeRequest extends FormRequest
{
    public function authorize(): bool { return true; }

    public function rules(): array
    {
        return [
            'title'       => ['required', 'string', 'max:255'],
            'image'       => ['required', 'string'], // LFM URL
            'category_id' => ['required', 'exists:activity_categories,id'],
            'description' => ['nullable', 'string', 'max:500'],
        ];
    }
}
<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class UpdateVideoRequest extends FormRequest
{
    public function authorize(): bool { return true; }

    public function rules(): array
    {
        return [
            'title'             => ['required', 'string', 'max:255'],
            'alias' => ['required', 'string', 'max:255', 'unique:videos,alias,' . $this->route('video')->id],
            'thumbnail'         => ['required', 'string'],
            'short_description' => ['nullable', 'string', 'max:500'],
            'description'       => ['nullable', 'string'],
            'grade_id'          => ['nullable', 'exists:grades,id'],
            'category_id'       => ['nullable', 'exists:activity_categories,id'],
            'youtube_link'      => ['required', 'string'],
            'external_link'     => ['nullable', 'string'],
            'order'             => ['nullable', 'integer', 'min:0'],
        ];
    }
}

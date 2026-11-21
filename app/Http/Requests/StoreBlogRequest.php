<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreBlogRequest extends FormRequest
{
    public function authorize(): bool { return true; }

    public function rules(): array
    {
        return [
            'title'             => ['required', 'string', 'max:255'],
            'alias'             => ['required', 'string', 'max:255', 'unique:blogs,alias'],
            'thumbnail'         => ['required', 'string'],
            'grade_id'          => ['nullable', 'exists:grades,id'],
            'category_id'       => ['nullable', 'exists:activity_categories,id'],
            'short_description' => ['nullable', 'string', 'max:500'],
            'description'       => ['nullable', 'string'],
            'date'              => ['required', 'date'],
            'order'             => ['nullable', 'integer', 'min:0'],
        ];
    }
}
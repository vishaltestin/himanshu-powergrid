<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;

class StoreActivityCategoryRequest extends FormRequest
{
    public function authorize(): bool
    {
        return $this->user()?->hasAnyRole(['root', 'admin']) ?? false;
    }

    protected function prepareForValidation(): void
    {
        if (! $this->filled('slug') && $this->filled('title')) {
            $this->merge(['slug' => Str::slug($this->string('title')->toString())]);
        }
    }

    public function rules(): array
    {
        return [
            'title' => ['required', 'string', 'max:255'],
            'slug' => ['required', 'string', 'max:255', Rule::unique('activity_categories', 'slug')->ignore($this->route('activity_category'))],
            'description' => ['nullable', 'string'],
            'status' => ['boolean'],
            'order' => ['nullable', 'integer', 'min:0'],
            
            'pdf' => ['nullable', 'file', 'mimes:pdf', 'max:10240'],
        ];
    }
}

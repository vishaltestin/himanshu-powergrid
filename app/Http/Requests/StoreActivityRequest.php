<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;

class StoreActivityRequest extends FormRequest
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
            // NEW: Strict 1-to-1 Foreign Keys
            'category_id' => ['required', 'integer', 'exists:activity_categories,id'],
            'grade_id'    => ['required', 'integer', 'exists:grades,id'],

            // Existing rules...
            'title' => ['required', 'string', 'max:255'],
            'slug' => ['required', 'string', 'max:255', Rule::unique('activities', 'slug')],
            'description' => ['nullable', 'string'],
            'pdf' => ['nullable', 'file', 'mimes:pdf', 'max:10240'],
            'image' => ['required', 'string', 'max:1000'],
            'external_link' => ['nullable', 'url', 'max:2048'],
            'status' => ['required', Rule::in(['active', 'draft', 'inactive'])],
            'deadline' => ['nullable', 'date'],
            'order' => ['nullable', 'integer', 'min:0'],
        ];
    }

    public function messages(): array
    {
        return [
            'pdf.max' => 'The PDF is too large. It must be smaller than 10MB.',
            'pdf.mimes' => 'The uploaded file must be a valid PDF document.',
            'pdf.file' => 'The system encountered an error reading the file. Please ensure it is a valid file.',
        ];
    }
}

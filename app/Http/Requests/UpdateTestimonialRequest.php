<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class UpdateTestimonialRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'name'            => ['required', 'string', 'max:255'],
            'designation'     => ['nullable', 'string', 'max:255'],
            'testimonial'     => ['required', 'string'],
            'date'            => ['required', 'date'],
        ];
    }
}

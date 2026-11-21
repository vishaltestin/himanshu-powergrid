<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateMenuRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true; 
    }

    public function rules(): array
    {
        return [
            'title'         => ['required', 'string', 'max:255'],
            // Ignore the current menu item's ID for the unique check
            'alias'         => ['required', 'string', 'max:255', 'unique:menus,alias,' . $this->route('menu')->id],
            'menu_position' => ['required', 'in:main,footer'],
            'parent_id'     => ['nullable', 'exists:menus,id'],
            'order'         => ['required', 'integer', 'min:1'],
            'status'        => ['boolean'],
            'banner_image'  => ['nullable', 'image', 'mimes:jpeg,png,jpg,webp,svg', 'max:2048'],
            'icon'          => ['nullable', 'image', 'mimes:jpeg,png,jpg,webp,svg', 'max:1024'],
        ];
    }
}
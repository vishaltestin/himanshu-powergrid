<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\FormSubmission;
use App\Models\PageSection;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

/**
 * Handles every public form. Forms are built in the admin (form_section /
 * contact_split blocks), so validation rules are derived from the section's
 * own field definitions — any field the admin adds is accepted and stored.
 */
class FormSubmissionController extends Controller
{
    /** Field keys that map onto real submission columns. */
    private const COLUMNS = ['name', 'email', 'phone', 'subject', 'message'];

    public function store(Request $request): JsonResponse
    {
        $request->validate(['section_id' => ['required', 'integer']]);

        $section = PageSection::query()
            ->whereIn('type', ['form_section', 'contact_split'])
            ->where('is_visible', true)
            ->whereHas('page', fn ($q) => $q->where('status', 'published'))
            ->findOrFail($request->integer('section_id'));

        $fields = collect($section->data['fields'] ?? [])->filter(fn ($f) => !empty($f['name']))->values();

        $rules = [];
        $attributes = [];
        foreach ($fields as $field) {
            $key = $field['name'];
            $required = !empty($field['required']) ? 'required' : 'nullable';
            $attributes[$key] = $field['label'] ?: $key;

            $rules[$key] = match ($field['type'] ?? 'text') {
                'email' => [$required, 'email', 'max:255'],
                'tel' => [$required, 'string', 'max:30'],
                'number' => [$required, 'numeric'],
                'textarea' => [$required, 'string', 'max:5000'],
                'select' => array_filter([$required, 'string', 'max:255', !empty($field['options']) ? 'in:' . implode(',', array_map(fn ($o) => str_replace(',', '\,', $o), (array) $field['options'])) : null]),
                'file' => [$required, 'file', 'mimes:pdf,doc,docx', 'max:5120'],
                default => [$required, 'string', 'max:255'],
            };
        }

        $validated = $request->validate($rules, [], $attributes);

        $columns = [];
        $data = [];

        foreach ($fields as $field) {
            $key = $field['name'];

            if (($field['type'] ?? '') === 'file') {
                if ($request->hasFile($key)) {
                    $path = $request->file($key)->store('resumes', 'public');
                    // Store a root-relative URL so links keep working whatever the domain is
                    $data[$key] = '/storage/' . $path;
                    $data[$key . '_name'] = $request->file($key)->getClientOriginalName();
                }
                continue;
            }

            $value = $validated[$key] ?? null;
            if ($value === null || $value === '') {
                continue;
            }

            if (in_array($key, self::COLUMNS, true)) {
                $columns[$key] = $value;
            } else {
                $data[$field['label'] ?: $key] = $value;
            }
        }

        // Friendly fallbacks: first/last name → name, role/service → subject
        if (empty($columns['name'])) {
            $full = trim(($validated['first_name'] ?? '') . ' ' . ($validated['last_name'] ?? ''));
            $columns['name'] = $full ?: null;
        }
        if (empty($columns['subject'])) {
            $columns['subject'] = $validated['role'] ?? $validated['enquiry_type'] ?? $validated['service'] ?? null;
        }

        $data['page'] = $section->page?->title;

        FormSubmission::create(array_merge($columns, [
            'type' => $section->data['form_type'] ?? 'contact',
            'data' => array_filter($data, fn ($v) => $v !== null && $v !== ''),
            'status' => 'new',
            'ip' => $request->ip(),
            'user_agent' => substr((string) $request->userAgent(), 0, 1000),
        ]));

        return response()->json([
            'success' => true,
            'message' => $section->data['success_message'] ?? 'Thank you! Your submission has been received.',
        ]);
    }
}

<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class FormSubmissionController extends Controller
{
    /**
     * Store a public form submission (contact, enquiry, career, newsletter).
     */
    public function store(Request $request): JsonResponse
    {
        $type = $request->input('type', 'contact');

        $rules = match ($type) {
            'career' => [
                'type' => ['required', 'in:career'],
                'first_name' => ['required', 'string', 'max:255'],
                'last_name' => ['required', 'string', 'max:255'],
                'email' => ['required', 'email', 'max:255'],
                'phone' => ['required', 'string', 'max:30'],
                'role' => ['required', 'string', 'max:255'],
                'message' => ['nullable', 'string', 'max:5000'],
                'resume' => ['nullable', 'file', 'mimes:pdf,doc,docx', 'max:5120'],
            ],
            'newsletter' => [
                'type' => ['required', 'in:newsletter'],
                'email' => ['required', 'email', 'max:255'],
            ],
            'enquiry', 'contact' => [
                'type' => ['required', 'in:contact,enquiry'],
                'name' => ['required', 'string', 'max:255'],
                'email' => ['required', 'email', 'max:255'],
                'phone' => ['nullable', 'string', 'max:30'],
                'company' => ['nullable', 'string', 'max:255'],
                'enquiry_type' => ['nullable', 'string', 'max:100'],
                'state' => ['nullable', 'string', 'max:100'],
                'city' => ['nullable', 'string', 'max:100'],
                'message' => ['required', 'string', 'max:5000'],
            ],
            default => [
                'type' => ['required', 'in:contact,enquiry,career,newsletter,other'],
                'name' => ['nullable', 'string', 'max:255'],
                'email' => ['nullable', 'email', 'max:255'],
                'message' => ['nullable', 'string', 'max:5000'],
            ],
        };

        $validated = $request->validate($rules);

        $data = [];
        foreach (['company', 'enquiry_type', 'state', 'city', 'role'] as $key) {
            if ($request->filled($key)) {
                $data[$key] = $request->input($key);
            }
        }

        // Career: persist the resume and keep its path in the payload
        if ($type === 'career' && $request->hasFile('resume')) {
            $path = $request->file('resume')->store('resumes', 'public');
            $data['resume'] = Storage::disk('public')->url($path);
            $data['resume_name'] = $request->file('resume')->getClientOriginalName();
        }

        $name = $validated['name'] ?? trim(($validated['first_name'] ?? '') . ' ' . ($validated['last_name'] ?? ''));

        \App\Models\FormSubmission::create([
            'type' => $type,
            'name' => $name ?: null,
            'email' => $validated['email'] ?? null,
            'phone' => $validated['phone'] ?? null,
            'subject' => $validated['role'] ?? null,
            'message' => $validated['message'] ?? null,
            'data' => $data ?: null,
            'status' => 'new',
            'ip' => $request->ip(),
            'user_agent' => Str::limit((string) $request->userAgent(), 500, ''),
        ]);

        return response()->json([
            'success' => true,
            'message' => $type === 'career'
                ? 'Your application has been submitted. Our team will get back to you soon!'
                : 'Thanks for reaching out. Our team will get back to you soon!',
        ], 201);
    }
}

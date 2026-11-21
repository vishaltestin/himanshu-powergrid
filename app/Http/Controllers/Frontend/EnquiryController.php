<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Enquiry;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class EnquiryController extends Controller
{
    public function store(Request $request): JsonResponse
    {
        // Notice we map 'firstName' from your React form to 'name' in the DB
        $validated = $request->validate([
            'firstName' => ['required', 'string', 'max:255'],
            'email'     => ['required', 'email', 'max:255'],
            'phone'     => ['required', 'string', 'max:20'],
            'message'   => ['required', 'string', 'max:2000'],
        ]);

        Enquiry::create([
            'name'    => $validated['firstName'],
            'email'   => $validated['email'],
            'phone'   => $validated['phone'],
            'message' => $validated['message'],
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Thanks for reaching out. Our team will get back to you soon!'
        ]);
    }
}
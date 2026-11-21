<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class LoginController extends Controller
{
    /**
     * Handle the incoming login request.
     */
    public function store(Request $request)
    {
        // 1. Validate the incoming data
        $credentials = $request->validate([
            'phone' => ['required', 'string', 'regex:/^\+?[1-9]\d{1,14}$/'],
            'password' => ['required', 'string'],
        ]);

        // 2. Attempt Authentication (Ensuring the account is active: status => 1)
        if (Auth::attempt(['phone' => $credentials['phone'], 'password' => $credentials['password'], 'status' => 1])) {
            
            // 3. Security: Regenerate session to prevent fixation attacks
            $request->session()->regenerate();

            return response()->json([
                'message' => 'Logged in successfully.',
            ]);
        }

        // 4. Return standard error if credentials fail
        throw ValidationException::withMessages([
            'phone' => 'The provided credentials do not match our records or your account is inactive.',
        ]);
    }

    /**
     * Destroy the authenticated session (Logout).
     */
    public function destroy(Request $request)
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect('/');
    }
}
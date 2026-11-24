<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Response;
use Inertia\Inertia;

class AuthController extends Controller
{
    public function create(): Response
    {
        return Inertia::render('admin/login');
    }

    public function store(Request $request): RedirectResponse
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        if (Auth::attempt(['email' => $credentials['email'], 'password' => $credentials['password'], 'status' => 1], $request->boolean('remember'))) {
            $user = Auth::user();

            if ($user->hasRole('root') || $user->hasRole('admin')) {
                $request->session()->regenerate();
                $user->update(['last_login' => now()]);

                return redirect()->intended(route('admin.dashboard.index'));
            }

            Auth::logout();
            $request->session()->invalidate();
            $request->session()->regenerateToken();

            return back()->withErrors([
                'email' => 'Access Denied. You do not have administrative privileges.',
            ]);
        }

        return back()->withErrors([
            'email' => 'Invalid credentials or your account has been suspended.',
        ])->onlyInput('email');
    }

    public function destroy(Request $request): RedirectResponse
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect()->route('admin.login');
    }
}

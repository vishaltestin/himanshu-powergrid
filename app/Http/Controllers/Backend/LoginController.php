<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function create()
    {
        return view('admin-dashboard.auth.signin');
    }

    public function store(Request $request)
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
                
                return redirect()->route('admin.dashboard.index'); 
            }

            Auth::logout();
            return back()->withErrors([
                'email' => 'Access Denied. You do not have administrative privileges.',
            ]);
        }

        return back()->withErrors([
            'email' => 'Invalid credentials or your account has been suspended.',
        ])->onlyInput('email');
    }

    public function destroy(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect()->route('admin.login'); 
    }
}
<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Otp; // <-- Import your new model
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class ForgotPasswordController extends Controller
{
    public function sendOtp(Request $request)
    {
        $request->validate(['email' => 'required|email|exists:users,email']);

        $otpCode = rand(100000, 999999);

        Otp::updateOrCreate(
            ['email' => $request->email], 
            [
                'otp' => $otpCode, 
                'expires_at' => now()->addMinutes(15) 
            ]
        );

        // TODO: Send Email here
        \Log::info("OTP for {$request->email} is {$otpCode}");

        return response()->json(['message' => 'OTP sent successfully to your email.']);
    }

    
    public function verifyOtp(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'otp'   => 'required|digits:6',
        ]);

        $otpRecord = Otp::where('email', $request->email)->first();

        if (!$otpRecord || $otpRecord->otp !== $request->otp || $otpRecord->expires_at->isPast()) {
            throw ValidationException::withMessages([
                'otp' => 'The provided code is invalid or has expired.',
            ]);
        }

        return response()->json(['message' => 'OTP verified.']);
    }

    public function reset(Request $request)
    {
        $request->validate([
            'email'    => 'required|email|exists:users,email',
            'otp'      => 'required|digits:6',
            'password' => 'required|min:8|confirmed',
        ]);

        $otpRecord = Otp::where('email', $request->email)->first();

        if (!$otpRecord || $otpRecord->otp !== $request->otp || $otpRecord->expires_at->isPast()) {
            return response()->json(['message' => 'Invalid or expired OTP.'], 400);
        }

        $user = User::where('email', $request->email)->first();
        $user->password = Hash::make($request->password);
        $user->save();

        $otpRecord->delete();

        return response()->json(['message' => 'Password reset successfully.']);
    }
}
<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\AllowedUdiseCode;
use App\Models\Register;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;
use Illuminate\Support\Facades\Auth;

class RegisteredUserController extends Controller
{
    public function checkAvailability(Request $request)
    {
        $field = $request->input('field');
        $value = $request->input('value');

        if (! $field || ! $value) {
            return response()->json(['error' => 'Field and value are required.'], 400);
        }

        switch ($field) {
            case 'udise_no':
                $udiseRecord = AllowedUdiseCode::where('udise_code', $value)->first();

                if (!$udiseRecord) {
                    return response()->json(['available' => false, 'message' => 'This UDISE code is not available or does not exist.']);
                }
                if ($udiseRecord->status == 0) {
                    return response()->json(['available' => false, 'message' => 'This UDISE code is currently inactive.']);
                }
                if ($udiseRecord->is_used == 1) {
                    return response()->json(['available' => false, 'message' => 'This UDISE code has already been used/taken.']);
                }
                if (Register::where('udise_no', $value)->exists()) {
                    return response()->json(['available' => false, 'message' => 'This UDISE code is already registered.']);
                }

                return response()->json([
                    'available' => true,
                    'message' => 'Great! UDISE code matched successfully.',
                    'school_name' => $udiseRecord->school_name,
                    'district' => $udiseRecord->district,
                ]);

            case 'principal_email':
                $exists = Register::where('principal_email', $value)->exists();
                return response()->json([
                    'available' => ! $exists,
                    'message' => $exists ? 'This email is already in use.' : 'Perfect, this email is ready to use!',
                ]);

            case 'school_email':
                // Now checking User table for school_email
                $existsInUser = User::where('email', $value)->exists();
                $existsInRegister = Register::where('school_email', $value)->exists();
                $exists = $existsInUser || $existsInRegister;
                return response()->json([
                    'available' => ! $exists,
                    'message' => $exists ? 'This school email is already in use.' : 'Looks good! This school email is available.',
                ]);

            case 'school_phone':
                // Now checking User table for school_phone
                $existsInUser = User::where('phone', $value)->exists();
                $existsInRegister = Register::where('school_phone', $value)->exists();
                $exists = $existsInUser || $existsInRegister;
                return response()->json([
                    'available' => ! $exists,
                    'message' => $exists ? 'This school phone number is already in use.' : 'Great, this phone number is ready to use.',
                ]);

            case 'teacher_email':
                // Removed User table check, only checking Register table
                $exists = Register::where('teacher_email', $value)->exists();
                return response()->json([
                    'available' => ! $exists,
                    'message' => $exists ? 'This email is already taken.' : 'Perfect, this teacher email is available.',
                ]);

            case 'teacher_phone':
                // Removed User table check, only checking Register table
                $exists = Register::where('teacher_phone', $value)->exists();
                return response()->json([
                    'available' => ! $exists,
                    'message' => $exists ? 'This phone number is already taken.' : 'Looks good! This phone number is available.',
                ]);

            default:
                return response()->json(['error' => 'Invalid field.'], 400);
        }
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'school_name' => ['required', 'string', 'max:255'],
            'udise_no' => [
                'required',
                'string',
                function ($attribute, $value, $fail) {
                    $udiseRecord = AllowedUdiseCode::where('udise_code', $value)->first();

                    if (! $udiseRecord) {
                        $fail('This UDISE code is not available or does not exist.');
                        return;
                    }

                    if ($udiseRecord->status == 0) {
                        $fail('This UDISE code is currently inactive.');
                        return;
                    }

                    if ($udiseRecord->is_used == 1) {
                        $fail('This UDISE code has already been used/taken.');
                    }
                },
                'unique:registers,udise_no',
            ],
            'principal_name' => ['required', 'string', 'max:255'],
            'principal_email' => ['required', 'email', 'max:255', 'unique:registers,principal_email'],
            
            // Added unique:users rules to school fields
            'school_email' => ['required', 'email', 'max:255', 'unique:users,email', 'unique:registers,school_email'],
            'school_phone' => ['required', 'string', 'max:20', 'unique:users,phone', 'unique:registers,school_phone'],
            'city' => ['required', 'string', 'max:255'],
            'district' => ['required', 'string', 'max:255'],
            'state' => ['required', 'string', 'max:255'],
            
            'teacher_name' => ['required', 'string', 'max:255'],
            // Removed unique:users rules from teacher fields
            'teacher_email' => ['required', 'email', 'max:255', 'unique:registers,teacher_email'],
            'teacher_phone' => ['required', 'string', 'max:20', 'unique:registers,teacher_phone'],
            
            'password' => ['required', 'confirmed', Password::defaults()],
            'terms_accepted' => ['accepted'],
        ]);

        $user = DB::transaction(function () use ($validated) {

            $allowedUdise = AllowedUdiseCode::where('udise_code', $validated['udise_no'])
                ->where('is_used', 0)
                ->firstOrFail();

            // Modified to save school details to the User table
            $createdUser = User::create([
                'name' => $validated['school_name'],
                'email' => $validated['school_email'],
                'phone' => $validated['school_phone'],
                'password' => Hash::make($validated['password']),
                'status' => 1,
            ]);

            $createdUser->assignRole('teacher');

            Register::create([
                'user_id' => $createdUser->id,
                'school_name' => $allowedUdise->school_name,
                'udise_no' => $validated['udise_no'],
                'principal_name' => $validated['principal_name'],
                'principal_email' => $validated['principal_email'],
                'school_email' => $validated['school_email'],
                'school_phone' => $validated['school_phone'],
                'city' => $validated['city'],
                'district' => $validated['district'],
                'state' => 'Maharashtra',
                'teacher_name' => $validated['teacher_name'],
                'teacher_email' => $validated['teacher_email'],
                'teacher_phone' => $validated['teacher_phone'],
                'terms_accepted' => $validated['terms_accepted'],
                'status' => 1,
            ]);

            $allowedUdise->update([
                'is_used' => 1,
            ]);

            return $createdUser;
        });

        Auth::login($user);

        $request->session()->regenerate();

        return response()->json([
            'message' => 'Registration successful.',
        ], 201);
    }
}
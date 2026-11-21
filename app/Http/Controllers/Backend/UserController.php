<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\AllowedUdiseCode;
use App\Models\Register;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;
use Illuminate\Support\Facades\Gate;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        Gate::authorize('view_users');

        $search = $request->search;

        $users = User::with('roles')
            ->when($search, function ($query) use ($search) {

                $query->where(function ($q) use ($search) {

                    $q->where('name', 'like', "%{$search}%")
                        ->orWhere('email', 'like', "%{$search}%")
                        ->orWhere('phone', 'like', "%{$search}%")
                        ->orWhereDate('created_at', $search)
                        ->orWhereDate('updated_at', $search);
                });
            })
            ->orderBy('id', 'asc')
            ->paginate(10)
            ->withQueryString();

        return view('admin-dashboard.users.index', compact('users'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        Gate::authorize('create_user');

        return view('admin-dashboard.users.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        Gate::authorize('create_user');

        $rules = [
            'name' => ['required', 'string', 'max:255'],

            'email' => [
                'required',
                'string',
                'email',
                'max:255',
                'unique:users,email',
                'unique:registers,teacher_email',
            ],

            'phone' => [
                'nullable',
                'string',
                'max:20',
                'unique:users,phone',
                'unique:registers,teacher_phone',
            ],

            'password' => ['required', 'confirmed', Password::defaults()],

            'role' => ['required', 'string', 'in:admin,teacher'],
        ];

        if ($request->role === 'teacher') {

            $rules['udise_no'] = [
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
                        return;
                    }
                },

                'unique:registers,udise_no',
            ];

            $rules['principal_name'] = [
                'required',
                'string',
                'max:255',
            ];

            $rules['principal_email'] = [
                'required',
                'email',
                'max:255',
                'unique:registers,principal_email',
            ];

            $rules['principal_phone'] = [
                'required',
                'string',
                'max:20',
                'unique:registers,principal_phone',
            ];
        }

        $validated = $request->validate($rules);

        DB::transaction(function () use ($validated) {

            $user = User::create([
                'name' => $validated['name'],
                'email' => $validated['email'],
                'phone' => $validated['phone'] ?? null,
                'password' => Hash::make($validated['password']),
                'status' => 1,
            ]);

            $user->assignRole($validated['role']);

            if ($validated['role'] === 'teacher') {

                $allowedUdise = AllowedUdiseCode::where('udise_code', $validated['udise_no'])
                    ->where('status', 1)
                    ->where('is_used', 0)
                    ->lockForUpdate()
                    ->first();

                if (! $allowedUdise) {
                    throw \Illuminate\Validation\ValidationException::withMessages([
                        'udise_no' => 'This UDISE code is invalid, inactive, or already used.',
                    ]);
                }

                Register::create([
                    'user_id' => $user->id,

                    'school_name' => $allowedUdise->school_name,

                    'udise_no' => $validated['udise_no'],

                    'principal_name' => $validated['principal_name'],
                    'principal_email' => $validated['principal_email'],
                    'principal_phone' => $validated['principal_phone'],

                    'teacher_name' => $validated['name'],
                    'teacher_email' => $validated['email'],
                    'teacher_phone' => $validated['phone'] ?? null,

                    'terms_one_accepted' => 1,
                    'terms_two_accepted' => 1,
                    'terms_three_accepted' => 1,

                    'status' => 1,
                ]);

                $allowedUdise->update([
                    'is_used' => 1,
                ]);
            }
        });

        return redirect()
            ->route('admin.users.index')
            ->with('success', 'User has been created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        Gate::authorize('edit_user');
        // Fetch the user, their role, and their school/register data (if any)
        $user = User::with(['roles', 'school'])->findOrFail($id);

        return view('admin-dashboard.users.edit', compact('user'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        Gate::authorize('edit_user');
        $user = User::with('school')->findOrFail($id);

        $registerId = $user->school?->id;



        $rules = [
            'name' => ['required', 'string', 'max:255'],

            'email' => [
                'required',
                'string',
                'email',
                'max:255',

                // Ignore current user email
                'unique:users,email,' . $user->id,

                // Prevent duplicate teacher email in registers table
                'unique:registers,teacher_email,' . ($registerId ?? 'NULL'),
            ],

            'phone' => [
                'nullable',
                'string',
                'max:20',

                // Ignore current user phone
                'unique:users,phone,' . $user->id,

                // Prevent duplicate teacher phone in registers table
                'unique:registers,teacher_phone,' . ($registerId ?? 'NULL'),
            ],

            'password' => [
                'nullable',
                'confirmed',
                Password::defaults(),
            ],

            'role' => [
                'required',
                'string',
                'in:admin,teacher',
            ],
        ];



        if ($request->role === 'teacher') {

            $rules['udise_no'] = [
                'required',
                'string',

                function ($attribute, $value, $fail) use ($user) {

                    // Allow current UDISE
                    if ($user->school && $user->school->udise_no === $value) {
                        return;
                    }

                    $udiseRecord = AllowedUdiseCode::where('udise_code', $value)->first();

                    if (! $udiseRecord) {
                        $fail('This UDISE code does not exist.');
                        return;
                    }

                    if ($udiseRecord->status == 0) {
                        $fail('This UDISE code is inactive.');
                        return;
                    }

                    if ($udiseRecord->is_used == 1) {
                        $fail('This UDISE code has already been used.');
                        return;
                    }
                },

                'unique:registers,udise_no,' . ($registerId ?? 'NULL'),
            ];

            $rules['principal_name'] = [
                'required',
                'string',
                'max:255',
            ];

            $rules['principal_email'] = [
                'required',
                'email',
                'max:255',

                'unique:registers,principal_email,' . ($registerId ?? 'NULL'),
            ];

            $rules['principal_phone'] = [
                'required',
                'string',
                'max:20',

                'unique:registers,principal_phone,' . ($registerId ?? 'NULL'),
            ];
        }

        $validated = $request->validate($rules);



        DB::transaction(function () use ($validated, $user, $request) {

            $oldUdise = $user->school?->udise_no;



            $userData = [
                'name' => $validated['name'],
                'email' => $validated['email'],
                'phone' => $validated['phone'] ?? null,
            ];

            // Update password only if provided
            if ($request->filled('password')) {
                $userData['password'] = Hash::make($validated['password']);
            }

            $user->update($userData);



            $user->syncRoles([$validated['role']]);



            if ($validated['role'] === 'teacher') {

                $newUdise = $validated['udise_no'];



                if ($oldUdise === $newUdise) {

                    $allowedUdise = AllowedUdiseCode::where('udise_code', $newUdise)
                        ->where('status', 1)
                        ->first();

                    if (! $allowedUdise) {
                        throw ValidationException::withMessages([
                            'udise_no' => 'The selected UDISE code is invalid.',
                        ]);
                    }
                } else {

                    // Free old UDISE
                    if ($oldUdise) {
                        AllowedUdiseCode::where('udise_code', $oldUdise)
                            ->update([
                                'is_used' => 0,
                            ]);
                    }

                    // Lock & validate new UDISE
                    $allowedUdise = AllowedUdiseCode::where('udise_code', $newUdise)
                        ->where('status', 1)
                        ->where('is_used', 0)
                        ->lockForUpdate()
                        ->first();

                    if (! $allowedUdise) {

                        throw ValidationException::withMessages([
                            'udise_no' => 'This UDISE code is invalid, inactive, or already used.',
                        ]);
                    }

                    // Mark as used
                    $allowedUdise->update([
                        'is_used' => 1,
                    ]);
                }



                Register::updateOrCreate(

                    [
                        'user_id' => $user->id,
                    ],

                    [
                        'school_name' => $allowedUdise->school_name,

                        'udise_no' => $newUdise,

                        'principal_name' => $validated['principal_name'],
                        'principal_email' => $validated['principal_email'],
                        'principal_phone' => $validated['principal_phone'],

                        // Sync teacher details
                        'teacher_name' => $validated['name'],
                        'teacher_email' => $validated['email'],
                        'teacher_phone' => $validated['phone'] ?? null,

                        // Defaults
                        'terms_one_accepted' => 1,
                        'terms_two_accepted' => 1,
                        'terms_three_accepted' => 1,

                        'status' => 1,
                    ]
                );
            } else {

                if ($user->school) {

                    // Free UDISE
                    AllowedUdiseCode::where('udise_code', $user->school->udise_no)
                        ->update([
                            'is_used' => 0,
                        ]);

                    // Delete register
                    $user->school()->delete();
                }
            }
        });

        return redirect()
            ->route('admin.users.index')
            ->with('success', 'User updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Gate::authorize('delete_user');
        if (auth()->id() == $id) {
            return redirect()
                ->back()
                ->with('error', 'You cannot delelte your own account.');
        }

        $user = User::with('school')->findOrFail($id);

        DB::transaction(function () use ($user) {


            if ($user->school) {

                // Mark UDISE as reusable again
                AllowedUdiseCode::where(
                    'udise_code',
                    $user->school->udise_no
                )->update([
                    'is_used' => 0,
                ]);

                $user->school()->delete();
            }

            $user->syncRoles([]);
            $user->delete();
        });

        return redirect()
            ->route('admin.users.index')
            ->with('success', 'User deleted successfully.');
    }

    public function toggleStatus(Request $request, $id)
    {
        if (auth()->id() == $id) {
            return redirect()
                ->back()
                ->with('error', 'You cannot change your own status.');
        }

        $user = User::findOrFail($id);

        $user->status = !$user->status;
        $user->save();

        return redirect()
            ->back()
            ->with('success', 'User status updated successfully!');
    }
}

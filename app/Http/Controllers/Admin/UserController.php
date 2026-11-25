<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules\Password;
use Illuminate\View\View;

/** Admin accounts — only visible to the root role. */
class UserController extends Controller
{
    public function index(): View
    {
        return view('admin.users.index', ['users' => User::role(['root', 'admin'])->with('roles')->orderBy('name')->get()]);
    }

    public function create(): View
    {
        return view('admin.users.form', ['user' => new User(['status' => true])]);
    }

    public function store(Request $request): RedirectResponse
    {
        $data = $this->validated($request);
        $user = User::create([...$data, 'password' => Hash::make($data['password'])]);
        $user->syncRoles([$request->input('role', 'admin')]);

        return redirect()->route('admin.users.index')->with('message', 'Admin user created.');
    }

    public function edit(User $user): View
    {
        return view('admin.users.form', ['user' => $user]);
    }

    public function update(Request $request, User $user): RedirectResponse
    {
        $data = $this->validated($request, $user);
        if (!empty($data['password'])) {
            $data['password'] = Hash::make($data['password']);
        } else {
            unset($data['password']);
        }

        // Never let the last root lock themselves out
        if ($user->id === auth()->id()) {
            $data['status'] = true;
        }

        $user->update($data);
        if ($user->id !== auth()->id()) {
            $user->syncRoles([$request->input('role', 'admin')]);
        }

        return redirect()->route('admin.users.index')->with('message', 'Admin user updated.');
    }

    public function destroy(User $user): RedirectResponse
    {
        if ($user->id === auth()->id()) {
            return back()->with('error', 'You cannot delete your own account.');
        }
        $user->delete();

        return back()->with('message', 'Admin user deleted.');
    }

    private function validated(Request $request, ?User $user = null): array
    {
        $data = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email', 'max:255', Rule::unique('users')->ignore($user?->id)],
            'phone' => ['nullable', 'string', 'max:30'],
            'role' => ['required', 'in:root,admin'],
            'password' => [$user ? 'nullable' : 'required', 'confirmed', Password::min(8)],
        ]);
        unset($data['role']);
        $data['status'] = $request->boolean('status');

        return $data;
    }
}

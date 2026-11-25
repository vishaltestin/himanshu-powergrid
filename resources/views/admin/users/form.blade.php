@extends('admin.layouts.app')
@section('title', $user->exists ? 'Edit admin' : 'New admin')
@section('breadcrumbs')
    <a href="{{ route('admin.users.index') }}" class="hover:text-slate-800">Admin users</a>
    <x-admin.icon name="chevron-right" class="size-4 text-slate-300"/>
    <span class="font-medium text-slate-800">{{ $user->exists ? $user->name : 'New admin' }}</span>
@endsection

@section('content')
<div class="mx-auto max-w-2xl">
    @include('admin.partials.page-header', ['title' => $user->exists ? 'Edit admin' : 'New admin'])
    <form method="POST" action="{{ $user->exists ? route('admin.users.update', $user) : route('admin.users.store') }}" class="a-card space-y-5 p-6">
        @csrf @if($user->exists) @method('PUT') @endif
        <div class="grid gap-5 sm:grid-cols-2">
            <div><label class="a-label">Name *</label><input name="name" value="{{ old('name', $user->name) }}" class="a-input" required></div>
            <div><label class="a-label">Phone</label><input name="phone" value="{{ old('phone', $user->phone) }}" class="a-input"></div>
        </div>
        <div><label class="a-label">Email *</label><input type="email" name="email" value="{{ old('email', $user->email) }}" class="a-input" required></div>
        <div class="grid gap-5 sm:grid-cols-2">
            <div>
                <label class="a-label">Role</label>
                <select name="role" class="a-input" @disabled($user->id === auth()->id())>
                    <option value="admin" @selected(old('role', $user->roles->first()?->name) === 'admin')>Admin</option>
                    <option value="root" @selected(old('role', $user->roles->first()?->name) === 'root')>Root (can manage admins)</option>
                </select>
                @if($user->id === auth()->id())<input type="hidden" name="role" value="{{ $user->roles->first()?->name }}">@endif
            </div>
            <label class="flex items-center gap-3 pt-7">
                <input type="hidden" name="status" value="0">
                <input type="checkbox" name="status" value="1" @checked(old('status', $user->status ?? true)) class="rounded border-slate-300 text-brand-600">
                <span class="text-sm font-medium text-slate-700">Account active</span>
            </label>
        </div>
        <div class="grid gap-5 border-t border-slate-100 pt-5 sm:grid-cols-2">
            <div><label class="a-label">Password {{ $user->exists ? '(leave blank to keep)' : '*' }}</label><input type="password" name="password" class="a-input" autocomplete="new-password" @required(!$user->exists)></div>
            <div><label class="a-label">Confirm password</label><input type="password" name="password_confirmation" class="a-input" autocomplete="new-password"></div>
        </div>
        <div class="flex justify-end gap-2 border-t border-slate-100 pt-5">
            <a href="{{ route('admin.users.index') }}" class="a-btn-secondary">Cancel</a>
            <button class="a-btn-primary">Save</button>
        </div>
    </form>
</div>
@endsection

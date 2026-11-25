@extends('admin.layouts.app')
@section('title', 'My profile')
@section('breadcrumbs')<span class="font-medium text-slate-800">My profile</span>@endsection

@section('content')
<div class="mx-auto max-w-2xl">
    @include('admin.partials.page-header', ['title' => 'My profile'])
    <form method="POST" action="{{ route('admin.profile.update') }}" class="a-card space-y-5 p-6">
        @csrf @method('PUT')
        <div class="grid gap-5 sm:grid-cols-2">
            <div><label class="a-label">Name</label><input name="name" value="{{ old('name', $user->name) }}" class="a-input" required></div>
            <div><label class="a-label">Phone</label><input name="phone" value="{{ old('phone', $user->phone) }}" class="a-input"></div>
        </div>
        <div><label class="a-label">Email</label><input type="email" name="email" value="{{ old('email', $user->email) }}" class="a-input" required></div>
        <div class="border-t border-slate-100 pt-5">
            <p class="mb-3 text-sm font-semibold text-slate-900">Change password <span class="font-normal text-slate-400">(optional)</span></p>
            <div class="space-y-4">
                <div><label class="a-label">Current password</label><input type="password" name="current_password" class="a-input" autocomplete="current-password"></div>
                <div class="grid gap-4 sm:grid-cols-2">
                    <div><label class="a-label">New password</label><input type="password" name="password" class="a-input" autocomplete="new-password"></div>
                    <div><label class="a-label">Confirm new password</label><input type="password" name="password_confirmation" class="a-input" autocomplete="new-password"></div>
                </div>
            </div>
        </div>
        <div class="flex justify-end border-t border-slate-100 pt-5"><button class="a-btn-primary">Save profile</button></div>
    </form>
</div>
@endsection

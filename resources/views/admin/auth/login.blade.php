<!DOCTYPE html>
<html lang="en" class="h-full">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="robots" content="noindex, nofollow">
    <title>Sign in · {{ $siteName ?? config('app.name') }} Admin</title>
    <link rel="icon" href="/favicon.png">
    @vite(['resources/css/admin.css'])
</head>
<body class="h-full font-sans antialiased">
<div class="grid min-h-full lg:grid-cols-2">
    <div class="relative hidden overflow-hidden bg-[#0b1b33] lg:block">
        <img src="/images/about-us.jpg" alt="" class="absolute inset-0 h-full w-full object-cover opacity-30">
        <div class="absolute inset-0 bg-gradient-to-t from-[#0b1b33] via-[#0b1b33]/60 to-transparent"></div>
        <div class="relative flex h-full flex-col justify-between p-12">
            <img src="{{ $siteLogoWhite ?? '/images/logo-new-white.png' }}" alt="" class="h-10 w-auto self-start">
            <div class="max-w-md text-white">
                <p class="text-3xl leading-tight font-semibold">Manage every page, every word.</p>
                <p class="mt-3 text-slate-300">Pages, sections, menus, posts, team and enquiries — all in one place.</p>
            </div>
        </div>
    </div>
    <div class="flex items-center justify-center bg-slate-50 px-6 py-12">
        <div class="w-full max-w-sm">
            <img src="{{ $siteLogo ?? '/images/logo-new.png' }}" alt="" class="mb-10 h-9 w-auto lg:hidden">
            <h1 class="text-2xl font-semibold tracking-tight text-slate-900">Sign in to admin</h1>
            <p class="mt-1 text-sm text-slate-500">Enter your credentials to continue.</p>

            @if (session('message'))
                <div class="mt-6 rounded-lg bg-emerald-50 px-4 py-3 text-sm text-emerald-700 ring-1 ring-emerald-200">{{ session('message') }}</div>
            @endif

            <form method="POST" action="{{ route('admin.login.submit') }}" class="mt-8 space-y-5">
                @csrf
                <div>
                    <label for="email" class="a-label">Email</label>
                    <input id="email" type="email" name="email" value="{{ old('email') }}" required autofocus autocomplete="username" class="a-input py-2.5">
                    @error('email')<p class="mt-1.5 text-sm text-red-600">{{ $message }}</p>@enderror
                </div>
                <div>
                    <label for="password" class="a-label">Password</label>
                    <input id="password" type="password" name="password" required autocomplete="current-password" class="a-input py-2.5">
                    @error('password')<p class="mt-1.5 text-sm text-red-600">{{ $message }}</p>@enderror
                </div>
                <label class="flex items-center gap-2 text-sm text-slate-600">
                    <input type="checkbox" name="remember" value="1" class="rounded border-slate-300 text-brand-600"> Keep me signed in
                </label>
                <button class="a-btn-primary w-full py-2.5">Sign in</button>
            </form>
            <p class="mt-10 text-center text-xs text-slate-400"><a href="{{ url('/') }}" class="hover:text-slate-600">← Back to website</a></p>
        </div>
    </div>
</div>
</body>
</html>

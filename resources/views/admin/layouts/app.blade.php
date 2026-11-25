@php
    $nav = [
        ['label' => 'Dashboard', 'route' => 'admin.dashboard', 'icon' => 'dashboard', 'match' => 'admin.dashboard'],
        ['heading' => 'Content'],
        ['label' => 'Pages', 'route' => 'admin.pages.index', 'icon' => 'layers', 'match' => 'admin.pages.*'],
        ['label' => 'Blogs & News', 'route' => 'admin.blogs.index', 'icon' => 'newspaper', 'match' => 'admin.blogs.*'],
        ['label' => 'Events', 'route' => 'admin.events.index', 'icon' => 'calendar', 'match' => 'admin.events.*'],
        ['label' => 'Team', 'route' => 'admin.team-members.index', 'icon' => 'users', 'match' => 'admin.team-members.*'],
        ['heading' => 'Site'],
        ['label' => 'Menus', 'route' => 'admin.menus.index', 'icon' => 'menu', 'match' => 'admin.menus.*'],
        ['label' => 'Media Library', 'route' => 'admin.media.index', 'icon' => 'images', 'match' => 'admin.media.*'],
        ['label' => 'Settings', 'route' => 'admin.settings.index', 'icon' => 'settings', 'match' => 'admin.settings.*'],
        ['heading' => 'Inbox'],
        ['label' => 'Submissions', 'route' => 'admin.submissions.index', 'icon' => 'inbox', 'match' => 'admin.submissions.*', 'badge' => $newSubmissionCount ?? 0],
    ];
    if (auth()->user()?->hasRole('root')) {
        $nav[] = ['heading' => 'Access'];
        $nav[] = ['label' => 'Admin Users', 'route' => 'admin.users.index', 'icon' => 'shield', 'match' => 'admin.users.*'];
    }
@endphp
<!DOCTYPE html>
<html lang="en" class="h-full bg-slate-50">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="robots" content="noindex, nofollow">
    <title>{{ trim($__env->yieldContent('title', 'Admin')) }} · {{ $siteName ?? config('app.name') }} Admin</title>
    <link rel="icon" href="/favicon.png">
    @vite(['resources/css/admin.css', 'resources/js/admin/admin.js'])
    <script>
        window.adminConfig = {
            mediaUploadUrl: @json(route('admin.media.store')),
            mediaListUrl: @json(route('admin.media.index', ['format' => 'json'])),
        };
    </script>
    @stack('head')
</head>
<body class="h-full font-sans text-slate-800 antialiased" x-data="{ sidebar: false }">

<div class="flex min-h-full">
    {{-- Sidebar --}}
    <div x-cloak x-show="sidebar" x-transition.opacity class="fixed inset-0 z-40 bg-slate-900/50 lg:hidden" @click="sidebar = false"></div>
    <aside class="fixed inset-y-0 left-0 z-50 flex w-64 -translate-x-full flex-col bg-[#0b1b33] transition-transform lg:translate-x-0"
           :class="sidebar ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'">
        <div class="flex h-16 shrink-0 items-center gap-3 border-b border-white/10 px-5">
            <img src="{{ $siteLogoWhite ?? '/images/logo-new-white.png' }}" alt="" class="h-8 w-auto">
        </div>
        <nav class="flex-1 space-y-0.5 overflow-y-auto px-3 py-4">
            @foreach ($nav as $item)
                @if (isset($item['heading']))
                    <p class="px-3 pt-5 pb-1.5 text-[11px] font-semibold tracking-wider text-slate-500 uppercase">{{ $item['heading'] }}</p>
                @else
                    <a href="{{ route($item['route']) }}" @class(['a-nav-link', 'active' => request()->routeIs($item['match'])])>
                        <x-admin.icon :name="$item['icon']" class="size-[18px] shrink-0"/>
                        <span class="flex-1">{{ $item['label'] }}</span>
                        @if (!empty($item['badge']))
                            <span class="rounded-full bg-amber-400 px-1.5 py-px text-[11px] font-semibold text-slate-900">{{ $item['badge'] }}</span>
                        @endif
                    </a>
                @endif
            @endforeach
        </nav>
        <div class="border-t border-white/10 p-3">
            <a href="{{ url('/') }}" target="_blank" class="a-nav-link">
                <x-admin.icon name="external-link" class="size-[18px]"/> View website
            </a>
        </div>
    </aside>

    {{-- Main --}}
    <div class="flex min-w-0 flex-1 flex-col lg:pl-64">
        <header class="sticky top-0 z-30 flex h-16 shrink-0 items-center gap-3 border-b border-slate-200 bg-white/90 px-4 backdrop-blur sm:px-6">
            <button type="button" class="a-icon-btn lg:hidden" @click="sidebar = true" aria-label="Open menu">
                <x-admin.icon name="menu"/>
            </button>
            <div class="min-w-0 flex-1">
                @hasSection('breadcrumbs')
                    <nav class="flex items-center gap-1.5 truncate text-sm text-slate-500">@yield('breadcrumbs')</nav>
                @endif
            </div>
            <div class="relative" x-data="{ open: false }" @click.outside="open = false">
                <button type="button" @click="open = !open" class="flex items-center gap-2 rounded-lg px-2 py-1.5 hover:bg-slate-100">
                    <span class="flex size-8 items-center justify-center rounded-full bg-brand-600 text-sm font-semibold text-white">
                        {{ strtoupper(mb_substr(auth()->user()->name ?? 'A', 0, 1)) }}
                    </span>
                    <span class="hidden text-left sm:block">
                        <span class="block text-sm leading-tight font-medium text-slate-800">{{ auth()->user()->name }}</span>
                        <span class="block text-xs leading-tight text-slate-500">{{ auth()->user()->email }}</span>
                    </span>
                    <x-admin.icon name="chevron-down" class="size-4 text-slate-400"/>
                </button>
                <div x-cloak x-show="open" x-transition class="absolute right-0 mt-2 w-52 overflow-hidden rounded-xl bg-white py-1 shadow-lg ring-1 ring-slate-200">
                    <a href="{{ route('admin.profile.edit') }}" class="flex items-center gap-2 px-4 py-2 text-sm hover:bg-slate-50">
                        <x-admin.icon name="user" class="size-4"/> My profile
                    </a>
                    <form method="POST" action="{{ route('admin.logout') }}">
                        @csrf
                        <button class="flex w-full items-center gap-2 px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50">
                            <x-admin.icon name="logout" class="size-4"/> Sign out
                        </button>
                    </form>
                </div>
            </div>
        </header>

        <main class="flex-1 px-4 py-6 sm:px-6 lg:px-8">
            @if ($errors->any())
                <div class="mb-6 rounded-xl bg-red-50 p-4 text-sm text-red-700 ring-1 ring-red-200">
                    <p class="font-semibold">Please fix the following:</p>
                    <ul class="mt-1 list-disc pl-5">
                        @foreach ($errors->all() as $error)<li>{{ $error }}</li>@endforeach
                    </ul>
                </div>
            @endif

            @yield('content')
        </main>
    </div>
</div>

{{-- Toasts --}}
<div x-data="toaster" @toast.window="add($event.detail)" x-init="@if (session('message')) add({ message: @js(session('message')), type: 'success' }) @endif @if (session('error')) add({ message: @js(session('error')), type: 'error' }) @endif"
     class="pointer-events-none fixed right-4 bottom-4 z-[100] flex w-80 flex-col gap-2">
    <template x-for="t in items" :key="t.id">
        <div x-transition class="pointer-events-auto flex items-start gap-3 rounded-xl px-4 py-3 text-sm shadow-lg ring-1"
             :class="t.type === 'error' ? 'bg-red-50 text-red-800 ring-red-200' : 'bg-slate-900 text-white ring-slate-800'">
            <span class="flex-1" x-text="t.message"></span>
            <button type="button" @click="remove(t.id)" class="opacity-60 hover:opacity-100">&times;</button>
        </div>
    </template>
</div>

@include('admin.partials.media-picker')
@stack('scripts')
</body>
</html>

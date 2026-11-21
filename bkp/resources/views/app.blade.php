<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" @class(['dark' => ($appearance ?? 'system') == 'dark'])>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="icon" href="/favicon.png" sizes="any">
        <!-- <link rel="icon" href="/favicon.svg" type="image/svg+xml"> -->
        <link rel="apple-touch-icon" href="/favicon.png">

        @fonts

        @viteReactRefresh
        @vite(['resources/css/app.css', 'resources/js/app.tsx'])
        <x-inertia::head>
            <title>{{ config('app.name', 'Cube Grid') }} | Powering India's Green Transition</title>
        </x-inertia::head>
    </head>
    <body class="font-sans antialiased flex min-h-screen flex-col overflow-x-hidden w-full">
        <x-inertia::app />
    </body>
</html>

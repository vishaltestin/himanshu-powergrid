<?php

namespace App\Http\Middleware;

use App\Models\Menu;
use App\Models\Setting;
use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    protected $rootView = 'app';

    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /** Shared with every public page: site settings and menus. */
    public function share(Request $request): array
    {
        return array_merge(parent::share($request), [
            'settings' => fn () => Setting::publicMap(),
            'menus' => fn () => Menu::tree(),
            'flash' => [
                'message' => fn () => $request->session()->get('message'),
            ],
        ]);
    }
}

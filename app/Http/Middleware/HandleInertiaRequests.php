<?php

namespace App\Http\Middleware;

use App\Models\Menu;
use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return array_merge(parent::share($request), [
            'auth' => [
                'user' => $request->user() ? $request->user()->only('id', 'name', 'email',) : null,
            ],
            
            'flash' => [
                'message' => fn () => $request->session()->get('message')
            ],

            'globalMenus' => Menu::where('status', 1)
                ->where('menu_position', 'main')
                ->whereNull('parent_id')
                ->with(['children' => function($query) {
                    $query->where('status', 1)->orderBy('order');
                }])
                ->orderBy('order')
                ->get(),
        ]);
    }
}

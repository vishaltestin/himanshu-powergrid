<?php

namespace App\Providers;

use Carbon\CarbonImmutable;
use Illuminate\Pagination\Paginator;
use Illuminate\Support\Facades\Date;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\ServiceProvider;
use Illuminate\Validation\Rules\Password;
use Illuminate\Support\Facades\Gate;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        // assets live in public/site-build ('public/build' is not persisted in the workspace)
        app(\Illuminate\Foundation\Vite::class)->useBuildDirectory('site-build');
        $this->configureDefaults();

        Gate::before(function ($user, $ability) {
            return $user->hasRole('root') ? true : null;
        });

        Paginator::useTailwind();

        $this->app->singleton(\App\PageBuilder\BlockRegistry::class);

        // Shared data for the Blade admin layout
        \Illuminate\Support\Facades\View::composer(['admin.layouts.app', 'admin.auth.login'], function ($view) {
            $settings = \App\Models\Setting::allMap();
            $view->with([
                'siteName' => $settings['site_name'] ?? config('app.name'),
                'siteLogo' => $settings['logo'] ?? '/images/logo-new.png',
                'siteLogoWhite' => $settings['logo_white'] ?? '/images/logo-new-white.png',
                'newSubmissionCount' => auth()->check() ? \App\Models\FormSubmission::where('status', 'new')->count() : 0,
            ]);
        });
    }

    /**
     * Configure default behaviors for production-ready applications.
     */
    protected function configureDefaults(): void
    {
        Date::use(CarbonImmutable::class);

        DB::prohibitDestructiveCommands(
            app()->isProduction(),
        );

        Password::defaults(
            fn(): ?Password => app()->isProduction()
                ? Password::min(12)
                ->mixedCase()
                ->letters()
                ->numbers()
                ->symbols()
                ->uncompromised()
                : null,
        );
    }
}

<?php

use App\Http\Controllers\Admin;
use App\Http\Controllers\Frontend\FormSubmissionController;
use App\Http\Controllers\Frontend\PageController;
use App\Http\Controllers\Frontend\SearchController;
use Illuminate\Support\Facades\Route;

// ───────────────────────────────────────────────────────────────
// Admin portal (/admin) — Blade
// ───────────────────────────────────────────────────────────────
Route::prefix('admin')->name('admin.')->group(function () {

    Route::middleware('guest')->group(function () {
        Route::get('/login', [Admin\AuthController::class, 'create'])->name('login');
        Route::post('/login', [Admin\AuthController::class, 'store'])->name('login.submit');
    });

    Route::middleware(['auth', 'role:root|admin'])->group(function () {
        Route::post('/logout', [Admin\AuthController::class, 'destroy'])->name('logout');
        Route::get('/', [Admin\DashboardController::class, 'index'])->name('dashboard');

        Route::get('/profile', [Admin\ProfileController::class, 'edit'])->name('profile.edit');
        Route::put('/profile', [Admin\ProfileController::class, 'update'])->name('profile.update');

        // Pages & sections (page builder)
        Route::resource('pages', Admin\PageController::class)->except('show');
        Route::post('/pages/{page}/duplicate', [Admin\PageController::class, 'duplicate'])->name('pages.duplicate');
        Route::post('/pages/{page}/home', [Admin\PageController::class, 'setHome'])->name('pages.home');

        Route::prefix('pages/{page}/sections')->name('pages.sections.')->controller(Admin\PageSectionController::class)->group(function () {
            Route::post('/', 'store')->name('store');
            Route::post('/reorder', 'reorder')->name('reorder');
            Route::get('/{section}', 'edit')->name('edit');
            Route::put('/{section}', 'update')->name('update');
            Route::delete('/{section}', 'destroy')->name('destroy');
            Route::post('/{section}/duplicate', 'duplicate')->name('duplicate');
            Route::post('/{section}/toggle', 'toggle')->name('toggle');
            Route::post('/{section}/transfer', 'transfer')->name('transfer');
        });

        // Modules
        Route::resource('blogs', Admin\BlogController::class)->except('show');
        Route::post('/blogs/{blog}/toggle-status', [Admin\BlogController::class, 'toggleStatus'])->name('blogs.toggle-status');

        Route::post('/events/reorder', [Admin\EventController::class, 'reorder'])->name('events.reorder');
        Route::resource('events', Admin\EventController::class)->except('show');
        Route::post('/events/{event}/toggle-status', [Admin\EventController::class, 'toggleStatus'])->name('events.toggle-status');

        Route::post('/team-members/reorder', [Admin\TeamMemberController::class, 'reorder'])->name('team-members.reorder');
        Route::resource('team-members', Admin\TeamMemberController::class)->except('show')->parameters(['team-members' => 'teamMember']);
        Route::post('/team-members/{teamMember}/toggle-status', [Admin\TeamMemberController::class, 'toggleStatus'])->name('team-members.toggle-status');

        Route::post('/menus/reorder', [Admin\MenuController::class, 'reorder'])->name('menus.reorder');
        Route::resource('menus', Admin\MenuController::class)->except('show');
        Route::post('/menus/{menu}/toggle-status', [Admin\MenuController::class, 'toggleStatus'])->name('menus.toggle-status');

        // Inbox
        Route::get('/submissions', [Admin\FormSubmissionController::class, 'index'])->name('submissions.index');
        Route::get('/submissions/export', [Admin\FormSubmissionController::class, 'export'])->name('submissions.export');
        Route::post('/submissions/bulk', [Admin\FormSubmissionController::class, 'bulk'])->name('submissions.bulk');
        Route::get('/submissions/{submission}', [Admin\FormSubmissionController::class, 'show'])->name('submissions.show');
        Route::match(['put', 'patch'], '/submissions/{submission}', [Admin\FormSubmissionController::class, 'update'])->name('submissions.update');
        Route::delete('/submissions/{submission}', [Admin\FormSubmissionController::class, 'destroy'])->name('submissions.destroy');

        // Site
        Route::get('/settings', [Admin\SettingsController::class, 'index'])->name('settings.index');
        Route::put('/settings', [Admin\SettingsController::class, 'update'])->name('settings.update');

        Route::get('/media', [Admin\MediaController::class, 'index'])->name('media.index');
        Route::post('/media', [Admin\MediaController::class, 'store'])->name('media.store');
        Route::delete('/media', [Admin\MediaController::class, 'destroy'])->name('media.destroy');

        // Admin accounts (root only)
        Route::resource('users', Admin\UserController::class)->except('show')->middleware('role:root');
    });
});

// ───────────────────────────────────────────────────────────────
// Public site — Inertia + React, content from the page builder
// ───────────────────────────────────────────────────────────────
Route::post('/form-submissions', [FormSubmissionController::class, 'store'])
    ->middleware('throttle:20,1')
    ->name('form-submissions.store');

Route::get('/search', SearchController::class)->middleware('throttle:60,1')->name('search');

Route::get('/post/{alias}', [PageController::class, 'post'])->name('post.show');

Route::get('/', [PageController::class, 'home'])->name('home');

// Catch-all: any page created in the admin, including nested slugs (pillar/solar)
Route::get('/{slug}', [PageController::class, 'show'])
    ->where('slug', '^(?!admin|storage|site-build|build|up$).+')
    ->name('page.show');

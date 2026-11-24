<?php

use App\Http\Controllers\Admin\AuthController as AdminAuthController;
use App\Http\Controllers\Admin\BannerController;
use App\Http\Controllers\Admin\BlogController as AdminBlogController;
use App\Http\Controllers\Admin\DashboardController as AdminDashboardController;
use App\Http\Controllers\Admin\EventController as AdminEventController;
use App\Http\Controllers\Admin\FormSubmissionController as AdminFormSubmissionController;
use App\Http\Controllers\Admin\MenuController as AdminMenuController;
use App\Http\Controllers\Admin\MediaController;
use App\Http\Controllers\Admin\PageContentController;
use App\Http\Controllers\Admin\SettingsController;
use App\Http\Controllers\Admin\TeamMemberController;
use App\Http\Controllers\Frontend\BlogController;
use App\Http\Controllers\Frontend\EventController;
use App\Http\Controllers\Frontend\FormSubmissionController;
use App\Http\Controllers\Frontend\HomeController;
use App\Http\Controllers\Frontend\TeamController;
use Illuminate\Support\Facades\Route;

// ───────────────────────────────────────────────────────────────
// Public site
// ───────────────────────────────────────────────────────────────
Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/home-2', 'App\Http\Controllers\Frontend\PageController@home2')->name('home-2');
Route::get('/home-3', 'App\Http\Controllers\Frontend\PageController@home3')->name('home-3');
Route::get('/teams', [TeamController::class, 'index'])->name('teams');
Route::get('/blogs', [BlogController::class, 'index'])->name('blogs');
Route::get('/news', [BlogController::class, 'news'])->name('news');
Route::get('/events', [EventController::class, 'index'])->name('events');

// Static content pages — each receives its editable `content` from page_contents
$staticPages = [
    '/milestones' => 'milestones',
    '/projects' => 'projects',
    '/contact-us' => 'contact-us',
    '/enquiry' => 'enquiry',
    '/about-us' => 'about-us',
    '/our-values' => 'our-values',
    '/pillers' => 'pillers',
    '/investors' => 'investors',
    '/career' => 'career',
    '/certificates' => 'certificates',
    '/sustainability' => 'sustainability',
    '/csr' => 'csr',
    '/privacy-policy' => 'privacy-policy',
    '/terms-service' => 'terms-service',
    '/life-at-cubegrid' => 'life-at-cubegrid',
];

foreach ($staticPages as $path => $page) {
    Route::get($path, fn () => inertia($page, [
        'content' => \App\Models\PageContent::forPage($page),
    ]))->name($page);
}

Route::get('/pillar/{alias}', function ($alias) {
    return inertia('pillar-detail', [
        'alias' => $alias,
        'content' => \App\Models\PageContent::forPage('pillar-' . $alias),
    ]);
})->name('pillar.show');

// Public form submissions (contact, enquiry, career, newsletter)
Route::post('/form-submissions', [FormSubmissionController::class, 'store'])
    ->middleware('throttle:60,1')
    ->name('form-submissions.store');

// ───────────────────────────────────────────────────────────────
// Admin portal (/admin)
// ───────────────────────────────────────────────────────────────
Route::prefix('admin')->name('admin.')->group(function () {

    Route::middleware('guest')->group(function () {
        Route::get('/login', [AdminAuthController::class, 'create'])->name('login');
        Route::post('/login', [AdminAuthController::class, 'store'])->name('login.submit');
    });

    Route::middleware(['auth', 'role:root|admin'])->group(function () {
        Route::post('/logout', [AdminAuthController::class, 'destroy'])->name('logout');

        Route::get('/', [AdminDashboardController::class, 'index'])->name('dashboard.index');

        // Content
        Route::resource('banners', BannerController::class)->except('show');
        Route::post('/banners/{banner}/toggle-status', [BannerController::class, 'toggleStatus'])->name('banners.toggle-status');
        Route::post('/banners/{banner}/move', [BannerController::class, 'move'])->name('banners.move');

        Route::get('/pages', [PageContentController::class, 'index'])->name('pages.index');
        Route::get('/pages/{page}/edit', [PageContentController::class, 'edit'])->name('pages.edit');
        Route::put('/pages/{page}', [PageContentController::class, 'update'])->name('pages.update');

        Route::resource('team-members', TeamMemberController::class)->except('show')->parameters(['team-members' => 'teamMember']);
        Route::post('/team-members/{teamMember}/toggle-status', [TeamMemberController::class, 'toggleStatus'])->name('team-members.toggle-status');

        Route::resource('blogs', AdminBlogController::class)->except('show');
        Route::post('/blogs/{blog}/toggle-status', [AdminBlogController::class, 'toggleStatus'])->name('blogs.toggle-status');

        Route::resource('events', AdminEventController::class)->except('show');
        Route::post('/events/{event}/toggle-status', [AdminEventController::class, 'toggleStatus'])->name('events.toggle-status');

        Route::resource('menus', AdminMenuController::class)->except('show');
        Route::post('/menus/{menu}/toggle-status', [AdminMenuController::class, 'toggleStatus'])->name('menus.toggle-status');

        // Form submissions inbox
        Route::get('/submissions', [AdminFormSubmissionController::class, 'index'])->name('submissions.index');
        Route::get('/submissions/export', [AdminFormSubmissionController::class, 'export'])->name('submissions.export');
        Route::get('/submissions/{submission}', [AdminFormSubmissionController::class, 'show'])->name('submissions.show');
        Route::match(['put', 'patch'], '/submissions/{submission}', [AdminFormSubmissionController::class, 'update'])->name('submissions.update');
        Route::delete('/submissions/{submission}', [AdminFormSubmissionController::class, 'destroy'])->name('submissions.destroy');

        // Settings & media
        Route::get('/settings', [SettingsController::class, 'index'])->name('settings.index');
        Route::put('/settings', [SettingsController::class, 'update'])->name('settings.update');

        Route::get('/media', [MediaController::class, 'index'])->name('media.index');
        Route::post('/media', [MediaController::class, 'store'])->name('media.store');
        Route::delete('/media', [MediaController::class, 'destroy'])->name('media.destroy');
    });
});

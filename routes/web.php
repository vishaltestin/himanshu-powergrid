<?php

use App\Http\Controllers\Backend\LoginController;
use App\Http\Controllers\Backend\RoleController;
// MUST BE ADDED
use App\Http\Controllers\Backend\UdiseController;
use App\Http\Controllers\Backend\UserController;
use App\Http\Controllers\Backend\ActivityCategoryController;
use App\Http\Controllers\Backend\ActivityController;
use App\Http\Controllers\Backend\ActivitySubmissionController as AdminActivitySubmissionController;
use App\Http\Controllers\Backend\BadgeController;
use App\Http\Controllers\Backend\BlogController;
use App\Http\Controllers\Backend\EnquiryController;
use App\Http\Controllers\Backend\GradeController;
use App\Http\Controllers\Backend\MasterTrainerController as BackendMasterTrainerController;
use App\Http\Controllers\Backend\MenuController;
use App\Http\Controllers\Backend\PartnerController;
use App\Http\Controllers\Backend\SubscriberController;
use App\Http\Controllers\Backend\TestimonialController;
use App\Http\Controllers\Backend\VideoController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\Frontend\ActivitySubmissionController;
use App\Http\Controllers\Frontend\ForgotPasswordController;
use App\Http\Controllers\Frontend\LoginController as FrontendLoginController;
use App\Http\Controllers\Frontend\MasterTrainerController;
use App\Http\Controllers\Frontend\RegisteredUserController;
use App\Http\Controllers\Frontend\SchoolDashboardController;
use Illuminate\Support\Facades\Route;
use UniSharp\LaravelFilemanager\Lfm;

Route::inertia('/', 'welcome')->name('home');
Route::inertia('/home-2', 'home-2')->name('home-2');
Route::inertia('/home-3', 'home-3')->name('home-3');
Route::inertia('/teams', 'teams')->name('teams');
Route::inertia('/milestones', 'milestones')->name('milestones');
Route::inertia('/projects', 'projects')->name('projects');
Route::inertia('/contact-us', 'contact-us')->name('contact-us');
Route::inertia('/enquiry', 'enquiry')->name('enquiry');
Route::inertia('/about-us', 'about-us')->name('about-us');
Route::inertia('/our-values', 'our-values')->name('our-values');
Route::inertia('/pillers', 'pillers')->name('pillers');
Route::inertia('/investors', 'investors')->name('investors');
Route::inertia('/career', 'career')->name('career');
Route::inertia('/news', 'news')->name('news');
Route::inertia('/events', 'events')->name('events');
Route::inertia('/blogs', 'blogs')->name('blogs');
Route::inertia('/certificates', 'certificates')->name('certificates');
Route::inertia('/sustainability', 'sustainability')->name('sustainability');
Route::inertia('/csr', 'csr')->name('csr');
Route::inertia('/privacy-policy', 'privacy-policy')->name('privacy-policy');
Route::inertia('/terms-service', 'terms-service')->name('terms-service');
Route::inertia('/life-at-cubegrid', 'life-at-cubegrid')->name('life-at-cubegrid');
Route::get('/pillar/{alias}', function ($alias) {
    return inertia('pillar-detail', ['alias' => $alias]);
})->name('pillar.show');
// Route::get('/news/{alias}', function ($alias) {
//     return inertia('news-detail', ['alias' => $alias]);
// })->name('news.show');

// Route::middleware('guest')->group(function () {
//     Route::inertia('/login', 'login')->name('login');
//     Route::inertia('/register', 'register')->name('register');
//     Route::inertia('/forget-password', 'forget-password')->name('forget-password');

//     Route::post('/login', [FrontendLoginController::class, 'store'])->name('login.store');

//     Route::post('/register', [RegisteredUserController::class, 'store'])->name('api.register.store');

//     Route::post('/forgot-password/send-otp', [ForgotPasswordController::class, 'sendOtp'])->name('api.forgotPassword.sendOtp');
//     Route::post('/forgot-password/verify-otp', [ForgotPasswordController::class, 'verifyOtp'])->name('api.forgotPassword.verifyOtp');
//     Route::post('/forgot-password/reset', [ForgotPasswordController::class, 'reset'])->name('api.forgotPassword.reset');

//     Route::post('/check-availability', [RegisteredUserController::class, 'checkAvailability'])->name('api.check.availability');
// });



Route::middleware(['auth'])->group(function () {
    Route::get('/school-dashboard', [SchoolDashboardController::class, 'index'])->name('school-dashboard');
    Route::post('/activity-submissions', [ActivitySubmissionController::class, 'store'])->name('api.activity_submissions.store');
    Route::get('/activity/{slug}', [SchoolDashboardController::class, 'showActivity'])->name('activity.show');
});

Route::post('/logout', [FrontendLoginController::class, 'destroy'])
    ->middleware('auth')
    ->name('logout');

// Admin
Route::prefix('admin-dashboard')
    ->name('admin.')
    ->group(function () {

        Route::middleware('guest')->group(function () {

            Route::get('/login', function () {
                return view('admin-dashboard.auth.signin', ['title' => 'Log In']);
            })->name('login');

            Route::post('/login', [LoginController::class, 'store'])->name('login.submit');
        });

        Route::middleware(['auth', 'role:root|admin'])->group(function () {

            Route::post('/logout', [LoginController::class, 'destroy'])->name('logout');

            // Route::get('/', function () {
            //     return view('admin-dashboard.dashboard.index', [
            //         'title' => 'Admin Dashboard',
            //     ]);
            // })->name('dashboard');

            Route::get('/', [DashboardController::class, 'index'])->name('dashboard.index');

            Route::get('/roles', [RoleController::class, 'index'])->name('roles.index');
            Route::get('/roles/create', [RoleController::class, 'create'])->name('roles.create');
            Route::post('/roles', [RoleController::class, 'store'])->name('roles.store');
            Route::get('/roles/{role}/edit', [RoleController::class, 'edit'])->name('roles.edit');
            Route::put('/roles/{role}', [RoleController::class, 'update'])->name('roles.update');
            Route::delete('/roles/{role}', [RoleController::class, 'destroy'])->name('roles.destroy');

            Route::get('/roles/{role}/permissions', [RoleController::class, 'permissions'])->name('roles.permissions');
            Route::post('/roles/{role}/permissions', [RoleController::class, 'syncPermissions'])->name('roles.sync-permissions');



            Route::get('/users', [UserController::class, 'index'])->name('users.index');
            Route::get('/users/create', [UserController::class, 'create'])->name('users.create');
            Route::post('/users', [UserController::class, 'store'])->name('users.store');
            Route::get('/users/{id}/edit', [UserController::class, 'edit'])->name('users.edit');
            Route::put('/users/{id}', [UserController::class, 'update'])->name('users.update');
            Route::delete('/users/{id}', [UserController::class, 'destroy'])->name('users.destroy');
            // Route::get('/users/{id}/show', [UserController::class, 'show'])->name('users.show');
            Route::post('/users/{id}/toggle-status', [UserController::class, 'toggleStatus'])->name('users.toggle-status');


            Route::get('/udise-codes', [UdiseController::class, 'index'])->name('udise.index');

            Route::get('/udise-codes/create', [UdiseController::class, 'create'])->name('udise.create');

            Route::post('/udise-codes', [UdiseController::class, 'store'])->name('udise.store');
            Route::patch('/udise-codes/{udise}/toggle', [UdiseController::class, 'toggleStatus'])->name('udise.toggle');
            Route::delete('/udise-codes/{udise}', [UdiseController::class, 'destroy'])->name('udise.destroy');

            Route::post('/udise-codes/import', [UdiseController::class, 'import'])->name('udise.import');
            Route::delete('udise/bulk-delete', [UdiseController::class, 'bulkDestroy'])->name('udise.bulk-delete');

            Route::resource('activity-categories', ActivityCategoryController::class)
                ->except('show');
            Route::post('/activity-categories/{activity_category}/toggle-status', [ActivityCategoryController::class, 'toggleStatus'])
                ->name('activity-categories.toggle-status');

            Route::resource('activities', ActivityController::class);
            Route::post('/activities/{activity}/toggle-status', [ActivityController::class, 'toggleStatus'])
                ->name('activities.toggle-status');


            Route::get('activity-submissions/global', [AdminActivitySubmissionController::class, 'globalSubmissions'])->name('activity-submissions.global');
            Route::get('activity-submissions/school/{user}', [AdminActivitySubmissionController::class, 'schoolSubmissions'])->name('activity-submissions.school');
            Route::resource('activity-submissions', AdminActivitySubmissionController::class)->only(['index', 'show', 'update', 'destroy']);

            Route::resource('grades', GradeController::class)->except(['show']);

            Route::resource('menus', MenuController::class);

            Route::resource('partners', PartnerController::class);

            Route::resource('videos', VideoController::class);
            Route::post('/videos/{video}/toggle-status', [VideoController::class, 'toggleStatus'])->name('videos.toggle-status');

            Route::resource('testimonials', TestimonialController::class);
            Route::post('/testimonials/{testimonial}/toggle-status', [TestimonialController::class, 'toggleStatus'])->name('testimonials.toggle-status');
            Route::post('/testimonials/{testimonial}/toggle-home', [TestimonialController::class, 'toggleHome'])->name('testimonials.toggle-home');

            Route::get('enquiries', [EnquiryController::class, 'index'])->name('enquiries.index');
            Route::get('enquiries/{enquiry}', [EnquiryController::class, 'show'])->name('enquiries.show');
            Route::delete('enquiries/{enquiry}', [EnquiryController::class, 'destroy'])->name('enquiries.destroy');


            Route::get('subscribers', [SubscriberController::class, 'index'])->name('subscribers.index');
            Route::delete('subscribers/{subscriber}', [SubscriberController::class, 'destroy'])->name('subscribers.destroy');

            Route::resource('blogs', BlogController::class);
            Route::post('/blogs/{blog}/toggle-status', [BlogController::class, 'toggleStatus'])->name('blogs.toggle-status');

            Route::resource('badges', BadgeController::class);
            Route::post('/badges/{badge}/toggle-status', [BadgeController::class, 'toggleStatus'])->name('badges.toggle-status');

            Route::resource('master-trainers', BackendMasterTrainerController::class);
            Route::post('/master-trainers/import', [BackendMasterTrainerController::class, 'import'])->name('master-trainers.import');

            Route::get('/form-elements', function () {
                return view('admin-dashboard.form.form-elements', ['title' => 'Form Elements']);
            })->name('form-elements');

            // Route::get('/basic-tables', function () {
            //     return view('admin-dashboard.tables.basic-tables', ['title' => 'Basic Tables']);
            // })->name('basic-tables');

            // Route::get('/alerts', function () {
            //     return view('admin-dashboard.ui-elements.alerts', ['title' => 'Alerts']);
            // })->name('alerts');

            // Route::get('/avatars', function () {
            //     return view('admin-dashboard.ui-elements.avatars', ['title' => 'Avatars']);
            // })->name('avatars');

            // Route::get('/badge', function () {
            //     return view('admin-dashboard.ui-elements.badges', ['title' => 'Badges']);
            // })->name('badges');

            // Route::get('/buttons', function () {
            //     return view('admin-dashboard.ui-elements.buttons', ['title' => 'Buttons']);
            // })->name('buttons');

            // Route::get('/image', function () {
            //     return view('admin-dashboard.ui-elements.images', ['title' => 'Images']);
            // })->name('images');

            // Route::get('/videos', function () {
            //     return view('admin-dashboard.ui-elements.videos', ['title' => 'Videos']);
            // })->name('videos');

            Route::group(['prefix' => 'laravel-filemanager'], function () {
                Lfm::routes();
            });
        });
    });

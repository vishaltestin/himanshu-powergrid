<?php

use App\Http\Controllers\Api\ActivityController;
use App\Http\Controllers\Frontend\HomeController;
use Illuminate\Support\Facades\Route;

// Route::get('/udise-codes', [RegisteredUserController::class, 'getAvailableUdise'])->name('api.udise.index');
// Route::post('/register', [RegisteredUserController::class, 'store'])->name('api.register.store');

Route::get('/activities', [ActivityController::class, 'index'])->name('api.activities.index');
Route::get('/activities/{slug}', [ActivityController::class, 'show'])->name('api.activities.show');
Route::get('/partners', [\App\Http\Controllers\Frontend\PartnerController::class, 'index'])->name('api.partners.index');
Route::get('/videos', [\App\Http\Controllers\Frontend\VideoController::class, 'index'])->name('api.videos.index');
Route::get('/videos/{alias}', [\App\Http\Controllers\Frontend\VideoController::class, 'show'])->name('api.videos.show');
Route::get('/testimonials', [\App\Http\Controllers\Frontend\TestimonialController::class, 'index'])->name('api.testimonials.index');
Route::post('/enquiries', [\App\Http\Controllers\Frontend\EnquiryController::class, 'store'])->name('api.enquiries.store');
Route::post('/subscribe', [\App\Http\Controllers\Frontend\SubscriberController::class, 'store'])->name('api.subscribe.store');
Route::get('/blogs', [\App\Http\Controllers\Frontend\BlogController::class, 'index'])->name('api.blogs.index');
Route::get('/blogs/{alias}', [\App\Http\Controllers\Frontend\BlogController::class, 'show'])->name('api.blogs.show');
Route::get('/master-trainers', [\App\Http\Controllers\Frontend\MasterTrainerController::class, 'index'])->name('api.master_trainers.index');
Route::get('/home-activities', [\App\Http\Controllers\Frontend\HomeController::class, 'homeActivities'])->name('api.home_activities.index');
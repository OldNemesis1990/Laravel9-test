<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\DashboardController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\UserActivationController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', [DashboardController::class, 'view'])->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/activate-user/{user}-{token}', [UserActivationController::class, 'userActivation'])->name('user.activate')->middleware('admin.activate');

Route::middleware(['auth'])->group(function() {
    Route::get('/edit-user/{user_id}', [DashboardController::class, "viewEditUser"])->name('list.users');
    Route::put('/edit-user/{user_id}', [DashboardController::class, "updateUser"])->name('update.users');
    Route::delete('/edit-user/{user_id}/delete', [DashboardController::class, "deleteUser"])->name('delete.users');

    Route::get('/related-users', [DashboardController::class, 'view'])->name('list.related.users');
    Route::get('/user-profile/{user_id}', [DashboardController::class, "viewUser"])->name('view.user');
    Route::put('/user-profile/{user_id}', [DashboardController::class, "updateUser"])->name('update.user');
    Route::delete('/user-profile/{user_id}/delete', [DashboardController::class, "deleteUser"])->name('delete.user');
});

require __DIR__.'/auth.php';

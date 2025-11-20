<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Laravel\Fortify\Features;

Route::get('/', function () {
    return Inertia::render('welcome', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('home');

Route::post('/consultation', function (Request $request) {
    $request->session()->put('gejala', $request->input('gejala'));

    return redirect()->route('consultation.result');
});

Route::get('/consultation/result', function (Request $request) {
    return Inertia::render('ConsultationResult', [
        'gejala' => $request->session()->get('gejala'),
    ]);
})->name('consultation.result');

Route::get('/testimony', function () {
    return Inertia::render('testimony');
})->name('testimony');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__ . '/settings.php';

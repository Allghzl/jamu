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

// POST route untuk handle consultation form
Route::post('/consultation', function (Request $request) {
    $request->validate([
        'gejala' => 'required|string'
    ]);

    $request->session()->put('gejala', $request->input('gejala'));

    return redirect()->route('consultation.result');
})->name('consultation.submit');

Route::get('/consultation/result', function (Request $request) {
    $gejala = $request->session()->get('gejala');

    if (!$gejala) {
        return redirect('/');
    }

    return Inertia::render('ConsultationResult', [
        'gejala' => $gejala,
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

Route::get('/api/jamu', function (Request $request) {
    $category = $request->query('category');
    return App\Models\Jamu::whereHas('category', function ($q) use ($category) {
        $q->where('name', $category);
    })->get();
});

Route::get('/proxy-test', function () {
    return response()->json([
        'secure' => request()->secure(),
        'scheme' => request()->getScheme(),
        'header_x_forwarded_proto' => request()->header('x-forwarded-proto'),
        'header_x_forwarded_host' => request()->header('x-forwarded-host'),
        'app_url' => config('app.url'),
        'is_https' => request()->isSecure()
    ]);
});

require __DIR__ . '/settings.php';

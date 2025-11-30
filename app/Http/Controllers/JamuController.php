<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Jamu;

class JamuController extends Controller
{
    // app/Http/Controllers/JamuController.php
    public function index(Request $request)
    {
        $category = $request->query('category');

        $jamus = Jamu::with('category')
            ->when($category, function ($q) use ($category) {
                $q->whereHas('category', function ($c) use ($category) {
                    $c->where('name', $category);
                });
            })
            ->get();

        return response()->json($jamus);
    }
}

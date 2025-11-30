<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Jamu extends Model
{
    protected $fillable = [
        'name',
        'category_id',
        'description',
        'price',
        'image'
    ];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}

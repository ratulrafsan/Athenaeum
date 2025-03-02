<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $fillable = ['category'];

    public function books() {
        return $this->belongsToMany('App\Book', 'book_categories', 'category_id', 'book_id');
    }
}

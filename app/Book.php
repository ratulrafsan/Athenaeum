<?php

namespace App;

use Illuminate\Database\Eloquent\Model;


class Book extends Model
{

    protected $fillable = [
        'title', 'isbn', 'language', 'location', 'publisher'
    ];

    public function author() {
        return $this->belongsToMany('App\BookAuthor', 'book_authors', 'book_id', 'author_id');
    }

    public function categories() {
        return $this->belongsToMany('App\Category', 'book_categories', 'book_id', 'category_id');
    }
}

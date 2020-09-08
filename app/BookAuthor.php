<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class BookAuthor extends Model
{
    protected $fillable = ['author'];

    protected $table = 'authors';

    public function books() {
        return $this->belongsToMany('App\Book', 'book_authors', 'author_id', 'book_id');
    }
}

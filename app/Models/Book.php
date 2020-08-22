<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    protected $fillable = [
        'title', 'isbn', 'language', 'location', 'publisher'
    ];

    public function author() {
        return $this->belongsToMany('App\Models\Author');
    }

    public function categories() {
        return $this->belongsToMany('App\Models\Categories');
    }
}

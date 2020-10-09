<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class BookHash extends Model
{
    protected $table = "bookHash";

    protected $guarded = [];

    public $timestamps = false;

    protected $hidden = ['id', 'book_id'];
}

<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use lastguest\Murmur;

class BookHash extends Model
{
    protected $table = "bookHash";

    protected $guarded = [];

    public $timestamps = false;

    protected $hidden = ['id', 'book_id'];

    public function verifyHash($hashToTest): bool
    {
        // If no hash was provided then match against model's existing hash
        if ($hashToTest == null) $hashToTest = $this->hash;

        $currentHash = $this->generateHash();

        return $hashToTest == $currentHash;
    }

    // generates a murmur hash from the given data
    public function generateHash(): string
    {
        return Murmur::hash3($this->title . $this->authors . $this->categories . $this->language . $this->isbn . $this->publisher . $this->shelf . $this->row, 9941);
    }

}

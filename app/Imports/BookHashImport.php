<?php

namespace App\Imports;

use App\BookHash;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToCollection;

class BookHashImport implements ToCollection
{

//    public function model(array $entry)
//    {
//        return new BookHash([
//            'title' => $entry[1],
//            'authors' => $entry[2],
//            'categories' => $entry[3],
//            'language' => $entry[4],
//            'isbn' => $entry[5],
//            'publisher' => $entry[6],
//            'shelf' => $entry[7],
//            'row' => $entry[8],
//            'hash' => $entry[9]
//        ]);
//    }

    public function collection(Collection $collection)
    {
        foreach ($collection as $entry) {
            new BookHash([
                'title' => $entry[1],
                'authors' => $entry[2],
                'categories' => $entry[3],
                'language' => $entry[4],
                'isbn' => $entry[5],
                'publisher' => $entry[6],
                'shelf' => $entry[7],
                'row' => $entry[8],
                'hash' => $entry[9]
            ]);
        }
    }
}

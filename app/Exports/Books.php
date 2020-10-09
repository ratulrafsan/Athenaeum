<?php

namespace App\Exports;

use App\BookHash;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;

class Books implements FromCollection, WithHeadings
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return BookHash::all();
    }

    public function headings(): array
    {
        return ['Row ID', 'Title', 'Authors', 'Categories', 'Language', 'ISBN', 'Publisher', 'Shelf', 'Row'];
    }
}

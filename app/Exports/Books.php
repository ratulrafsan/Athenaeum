<?php

namespace App\Exports;

use App\BookHash;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Events\AfterSheet;

class Books implements FromCollection, WithHeadings, ShouldAutoSize, WithEvents
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
        return ['Row ID', 'Title', 'Authors', 'Categories', 'Language', 'ISBN', 'Publisher', 'Shelf', 'Row', 'Hash'];
    }

    public function registerEvents(): array
    {
        return [
            AfterSheet::class => function(AfterSheet $event) {
            $event->sheet->getDelegate()->getColumnDimension('J')->setVisible(false);
            }
        ];
    }
}

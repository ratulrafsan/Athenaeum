<?php

namespace App\Http\Controllers;

use App\Book;
use App\BookAuthor;
use App\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class libraryStatus extends Controller
{
    public function index() {
        $bookCountByCategories = DB::raw('SELECT category, count(book_id) as \'book_count\' from book_categories left join categories on book_categories.category_id = categories.id GROUP by category_id');
        $bookCountByLanguage = DB::raw('SELECT language, count(id) as book_count from books group by language');
        $data = [
            'overview' => [
                'books' => Book::count(),
                'authors' => BookAuthor::count(),
                'categories' => Category::count(),
            ],
          'category_chart' => DB::select($bookCountByCategories),
          'language_chart' => DB::select($bookCountByLanguage)
        ];

        return $this->success('Success', ['stat' => $data]);
    }
}

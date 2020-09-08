<?php

namespace App\Http\Controllers;

use App\Book;
use App\BookAuthor;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use function Sodium\add;

class BookController extends Controller
{
    public function searchBook(Request $request) {
        $query = $request->term;
        // process the query for searching
        $santeized = htmlentities($query);
        $fuzzyQuery = implode("%", str_split(str_replace(" ", "", $santeized)));
        $fuzzyQuery = "%$fuzzyQuery%";


        $searchResult = Book::query()->select(
            [
                'books.title',
                'books.publisher',
                'books.isbn',
                'books.language',
                'books.location',
//                DB::raw(
//                    'GROUP_CONCAT(DISTINCT authors.author) as author,
//                    GROUP_CONCAT(DISTINCT categories.category) as category'
//                )
                DB::raw(
                    "CONCAT('[' , GROUP_CONCAT(DISTINCT JSON_OBJECT( 'id' , authors.id, 'author', authors.author) ), ']' ) as author,
                    CONCAT('[' , GROUP_CONCAT(DISTINCT JSON_OBJECT( 'id' , categories.id, 'category', categories.category) ), ']' ) as category
                    "
                )
            ])
            ->leftJoin('book_authors', 'book_authors.book_id', '=', 'books.id')
            ->leftJoin('authors', 'book_authors.author_id', '=', 'authors.id')
            ->leftJoin('book_categories', 'book_categories.book_id', '=', 'books.id')
            ->leftJoin('categories', 'book_categories.category_id', '=', 'categories.id')
            ->where('books.title', 'like', $fuzzyQuery)
            ->orWhere('books.publisher', 'like', $fuzzyQuery)
            ->orWhere('books.isbn', 'like', $fuzzyQuery)
            ->orWhere('author', 'like', $fuzzyQuery)
//            ->orWhere('category', 'like', $fuzzyQuery)
            ->groupBy('books.id')->limit(100)->get()->toArray();

        $convertedResult = [];
        foreach ($searchResult as $entry) {

            $entry['author'] = json_decode($entry['author']);
            $entry['category'] = json_decode($entry['category']);
            array_push($convertedResult, $entry);
        }

        return $convertedResult;
    }
}

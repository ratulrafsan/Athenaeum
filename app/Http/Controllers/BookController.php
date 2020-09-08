<?php

namespace App\Http\Controllers;

use App\Book;
use App\BookAuthor;
use Illuminate\Foundation\Testing\DatabaseTransactions;
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
                'books.id',
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

    public function addBook(Request $request) {
        $request->validate([
           'title' => 'string|required',
           'isbn' => 'string|sometimes',
           'author' => 'array|required',
           'category' => 'array|required',
           'language' => 'string|sometimes',
            'publisher' => 'string|sometimes',
            'location' => 'string|required'
        ]);

        $toReturn = null;

        DB::transaction(function () use ($request, &$toReturn) {
            $toReturn = Book::create([
                'title' => $request->title,
                'isbn' => $request->isbn,
                'language' => $request->language,
                'location' => $request->location,
                'publisher' => $request->publisher
            ]);

            $toReturn->author()->sync($request->author);
            $toReturn->categories()->sync($request->category);
        });

        if($toReturn != null) {
            $author = $toReturn->author()->get();
            $category = $toReturn->categories()->get();

            $book = $toReturn->toArray();
            $book['author'] = $author;
            $book['category'] = $category;
        }

        return $toReturn != null ? $this->success('Operation Successful', ['book' => $book]):
            $this->err('Book could not be added');
    }

    public function editBook(Request $request) {
        $request->validate([
            'id' => 'required',
            'title' => 'string|sometimes',
            'isbn' => 'string|sometimes',
            'author' => 'array|required',
            'category' => 'array|required',
            'language' => 'string|sometimes',
            'publisher' => 'string|sometimes',
            'location' => 'string|sometimes'
        ]);

        $targetBook = Book::findOrFail($request->id);
        $updateStatus = null;

        DB::transaction(function () use ($request, &$targetBook, &$updateStatus) {
            $targetBook->author()->sync($request->author);
            $targetBook->categories()->sync($request->category);

            $updateStatus = $targetBook->update($request->all());
        });


        return $updateStatus ? $this->success('Operation success', ['book' => $targetBook]) :
            $this->err('Book could not be updated');
    }

    public function deleteBook(Request $request) {
        $request->validate([
            'id' => 'required'
        ]);

        $targetBook = Book::findOrFail($request->id);
        $deleteStatus = null;

        DB::transaction(function () use ($request, &$targetBook, &$deleteStatus) {
            $targetBook->author()->detach();
            $targetBook->categories()->detach();

            $deleteStatus = $targetBook->delete();
        });

        return $deleteStatus ? $this->success('Operation success', ['book' => null]) :
            $this->err('Book could not be deleted');
    }
}

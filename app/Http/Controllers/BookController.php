<?php

namespace App\Http\Controllers;

use App\Book;
use App\BookAuthor;
use App\BookHash;
use App\Category;
use App\Exports\Books;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use lastguest\Murmur;
use Maatwebsite\Excel\Facades\Excel;

class BookController extends Controller
{
    public function searchBook(Request $request)
    {
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

    public function addBook(Request $request)
    {
        $request->validate([
            'title' => 'string|sometimes|nullable',
            'isbn' => 'string|sometimes|nullable',
            'author' => 'array|required|nullable',
            'category' => 'array|required|nullable',
            'language' => 'string|sometimes|nullable',
            'publisher' => 'string|sometimes|nullable',
            'location' => 'string|sometimes|nullable'
        ]);

        $toReturn = null;
        $book = null;

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
        $this->addBookHashEntry($toReturn->id, true);

        if ($toReturn != null) {
            $author = $toReturn->author()->get();
            $category = $toReturn->categories()->get();

            $book = $toReturn->toArray();
            $book['author'] = $author;
            $book['category'] = $category;
        }

        return $toReturn != null ? $this->success('Operation Successful', ['book' => $book]) :
            $this->err('Book could not be added');
    }

    public function editBook(Request $request)
    {
        $request->validate([
            'id' => 'required',
            'title' => 'string|sometimes|nullable',
            'isbn' => 'string|sometimes|nullable',
            'author' => 'array|required|nullable',
            'category' => 'array|required|nullable',
            'language' => 'string|sometimes|nullable',
            'publisher' => 'string|sometimes|nullable',
            'location' => 'string|sometimes|nullable'
        ]);

        $targetBook = Book::findOrFail($request->id);
        $updateStatus = null;

        DB::transaction(function () use ($request, &$targetBook, &$updateStatus) {
            $targetBook->author()->sync($request->author);
            $targetBook->categories()->sync($request->category);

            $updateStatus = $targetBook->update($request->all());

            $this->addBookHashEntry($targetBook->id, false);
        });

        return $updateStatus ? $this->success('Operation success', ['book' => $targetBook]) :
            $this->err('Book could not be updated');
    }

    public function deleteBook(Request $request)
    {
        $request->validate([
            'id' => 'required'
        ]);

        $targetBook = Book::findOrFail($request->id);
        $deleteStatus = null;

        DB::transaction(function () use ($request, &$targetBook, &$deleteStatus) {
            $targetBook->author()->detach();
            $targetBook->categories()->detach();

            // Delete the book from the hash entry
            $bookHash = BookHash::firstWhere('book_id', $targetBook->id);
            $bookHash->delete();

            $deleteStatus = $targetBook->delete();
        });

        return $deleteStatus ? $this->success('Operation success', ['book' => null]) :
            $this->err('Book could not be deleted');
    }

//    public function importExcel2(Request $request) {
//        $request->validate(['excel_file' => 'required|mimes:xlsx']);
//
//        $data = ( Excel::toCollection(null, $request->file('excel_file'))->first())->toArray();
//        $data = array_slice($data, 1);
//
//        // If assoc 9 -> hash is not set then assume that this is the fresh one we have to generate new hash
//
//    }

    public function exportExcel(Request $request)
    {
        return Excel::download(new Books(), 'books.xlsx');
    }

    public function importExcel(Request $request)
    {
        $request->validate(['excel_file' => 'required|mimes:xlsx']);

        //$onDbData = BookHash::all()->pluck('book_id', 'hash');


        $excelData = Excel::toCollection(null, $request->file('excel_file'))->first();
        // remove the first item (row headers) from the collection
        $excelData->shift();
        $editedBooks = collect([]);
        foreach ($excelData as $entry) {
            $book = new BookHash([
                'row_id' => $entry[0],
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

            // Push to collection if the hashes don't match
            if (!$book->verifyHash(null)) {
                error_log('correct hash: ' . $book->generateHash());
                $editedBooks->push($book);
            }

        }

        unset($excelData);

        $allGood = false;
        $hashesToCreate = [];
        DB::transaction(function () use ($editedBooks, &$allGood, &$hashesToCreate) {
            foreach ($editedBooks as $entry) {
                // Create book entry
//                $title = $entry[1];
//                $language = $entry[4];
//                $isbn = $entry[5];
//                $publisher = $entry[6];
//                $location = 'Shelf: '.$entry[7]. ", Row: ".$entry[8];


//                $book = Book::create([
//                    'title' => $title,
//                    'language' => $language,
//                    'isbn' => $isbn,
//                    'location' => $location,
//                    'publisher' => $publisher
//                ]);

                // If the hash is is null or undefined then assume that its a new book
                // Otherwise try to update the book
                $book = null;
                $location = 'Shelf: ' . $entry->shelf . ", Row: " . $entry->row;
                $bookByHash = BookHash::where('isbn', '=', $entry->isbn)->orWhere('hash', '=', $entry->hash)->first();
                if ($entry->hash != null) {

                    $book = Book::find($bookByHash->book_id);

                    if ($book == null) {
                        $book = Book::create([
                            'title' => $entry->title,
                            'language' => $entry->language,
                            'isbn' => $entry->isbn,
                            'location' => $location,
                            'publisher' => $entry->publisher
                        ]);
                    } else {
                        $book->update([
                            'title' => $entry->title,
                            'language' => $entry->language,
                            'isbn' => $entry->isbn,
                            'location' => $location,
                            'publisher' => $entry->publisher
                        ]);
                    }
                } else {

                    $book = Book::create([
                        'title' => $entry->title,
                        'language' => $entry->language,
                        'isbn' => $entry->isbn,
                        'location' => $location,
                        'publisher' => $entry->publisher
                    ]);
                }


                // Find or create category entries
                $all_cat = explode(',', $entry->categories);
                $cat_string = array_map(function ($v) {
                    return trim($v);
                }, $all_cat);
                $cats = array_map(function ($v) {
                    return Category::firstOrCreate(['category' => $v])->id;
                }, $cat_string);

                // Find or create author entries
                $all_auth = explode(',', $entry->authors);
                $auth_string = array_map(function ($v) {
                    return trim($v);
                }, $all_auth);
                $auths = array_map(function ($v) {
                    return BookAuthor::firstOrCreate(['author' => $v])->id;
                }, $auth_string);

                $book->categories()->sync($cats);
                $book->author()->sync($auths);

                $book->save();

                // Create a bookHash entry if it does not exist
                if ($bookByHash == null) {
                    $bookByHash = new BookHash();
                }

                $bookByHash->book_id = $book->id;
                $bookByHash->row_id = $entry->row_id;
                $bookByHash->title = $entry->title;
                $bookByHash->authors = $entry->authors;
                $bookByHash->categories = $entry->categories;
                $bookByHash->language = $entry->language;
                $bookByHash->isbn = $entry->isbn;
                $bookByHash->publisher = $entry->publisher;
                $bookByHash->shelf = $entry->shelf;
                $bookByHash->row = $entry->row;

                // get the new hash
                $bookByHash->hash = $bookByHash->generateHash();

                $bookByHash->save();
            }

            $allGood = true;
        });

//        foreach ($hashesToCreate as $b) {
//            $this->addBookHashEntry($b);
//        }

        return $allGood ? $this->success('Data imported') :
            $this->err('failed');
    }

    public function addBookHashEntry($book_id, $createNew = false)
    {
        $bookData = Book::query()->select(
            [
                'books.id',
                'books.title',
                'books.publisher',
                'books.isbn',
                'books.language',
                'books.location',
                DB::raw(
                    'GROUP_CONCAT(DISTINCT authors.author) as author,
                    GROUP_CONCAT(DISTINCT categories.category) as category'
                )
            ])
            ->leftJoin('book_authors', 'book_authors.book_id', '=', 'books.id')
            ->leftJoin('authors', 'book_authors.author_id', '=', 'authors.id')
            ->leftJoin('book_categories', 'book_categories.book_id', '=', 'books.id')
            ->leftJoin('categories', 'book_categories.category_id', '=', 'categories.id')
            ->where('books.id', '=', $book_id)
            ->groupBy('books.id')->get()->toArray()[0];

        $shelf_row = explode(",", $bookData['location']);
        $book_shelf = explode(" ", $shelf_row[0])[1];
        $book_row = explode(" ", trim($shelf_row[1]))[1];

        $hash = Murmur::hash3($bookData['title'] . $bookData['author'] . $bookData['category'] . $bookData['language'] . $bookData['isbn'] . $bookData['publisher'] . $book_shelf . $book_row, 9941);

        if($createNew) {
            $bookhash = BookHash::create([
                'book_id' => $bookData['id'],
                'row_id' => $bookData['id'],
                'title' => $bookData['title'],
                'authors' => $bookData['author'],
                'categories' => $bookData['category'],
                'language' => $bookData['language'],
                'isbn' => $bookData['isbn'],
                'publisher' => $bookData['publisher'],
                'shelf' => $book_shelf,
                'row' => $book_row,
                'hash' => $hash
            ]);
        }else{
            $bookhash = BookHash::firstWhere('book_id', $bookData['id']);

            $bookhash->update([
                'book_id' => $bookData['id'],
                'row_id' => $bookhash->row_id,
                'title' => $bookData['title'],
                'authors' => $bookData['author'],
                'categories' => $bookData['category'],
                'language' => $bookData['language'],
                'isbn' => $bookData['isbn'],
                'publisher' => $bookData['publisher'],
                'shelf' => $book_shelf,
                'row' => $book_row,
                'hash' => $hash
            ]);
        }

    }
}

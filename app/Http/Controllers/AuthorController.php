<?php

namespace App\Http\Controllers;

use App\BookAuthor;
use Illuminate\Http\Request;

class AuthorController extends Controller
{
    public function index() {
        return BookAuthor::all();
    }

    public function update(Request $request, BookAuthor $author) {
        $request->validate([
            'author' => 'string|required'
        ]);

        $updateResponse = $author->update(['author' => $request->input('author')]);
        return $updateResponse ? $this->success('Update successful', ['author' => $author]):
            $this->err('Author could not be updated');
    }

    public function add(Request $request) {
        $request->validate([
            'author' => 'string|required'
        ]);

        $statement = BookAuthor::create($request->all());
        return $statement ? $this->success("Author Added", ['author' => $statement]) : $this->err('author not added');
    }

    public function delete(Request $request, BookAuthor $author) {
        $deleteResponse = $author->delete();
        if($deleteResponse) {
            $author->books()->detach();
        }

        return $deleteResponse ? $this->success('Author removed', ['deleted' => true])
            : $this->err('Author could not be removed');
    }
}

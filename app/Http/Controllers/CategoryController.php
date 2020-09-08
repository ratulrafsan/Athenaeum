<?php

namespace App\Http\Controllers;

use App\Book;
use App\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function index() {
        return Category::all();
    }

    public function update(Request $request, Category $category) {
        $request->validate([
            'category' => 'string|required'
        ]);

        $updateResponse = $category->update(['category' => $request->input('category')]);

        return $updateResponse ?  $this->success('Update successful', ['category' => $category])
            : $this->err('Category could not be update');
    }

    public function add(Request $request) {
        $request->validate([
            'category' => 'string|required'
        ]);

        $statement = Category::create($request->all());

        return $statement ? $this->success("Category added", ['category' => $statement]) :
            $this->err("Failed to add category");
    }

    public function delete(Request $request, Category $category) {
        $deleteResponse = $category->delete();
        if($deleteResponse) {
            $category->books()->detach();
        }
        return $deleteResponse ? $this->success("Category removed", ["deleted" => true]) : $this->err("Category cannot be removed");
    }
}

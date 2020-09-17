<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});

Route::post('/login', 'API\AuthController@login');
Route::get('/stat', 'libraryStatus@index');

Route::middleware('auth:api')->group(function() {
    Route::post('/logout', 'API\AuthController@logout');
    Route::post('/register', 'API\AuthController@register');

    Route::get('/user', 'UserController@index');
    Route::put('/user', 'UserController@updateUser');
    Route::delete('/user', 'UserController@deleteUser');

    Route::post('/book/search', 'BookController@searchBook');
    Route::post('/book', 'BookController@addBook');
    Route::put('/book', 'BookController@editBook');
    Route::delete('/book', 'BookController@deleteBook');

    Route::get('/category', 'CategoryController@index');
    Route::post('/category', 'CategoryController@add');
    Route::put('/category/{category}', 'CategoryController@update');
    Route::delete('/category/{category}', 'CategoryController@delete');

    Route::get('/author', 'AuthorController@index');
    Route::post('/author', 'AuthorController@add');
    Route::put('/author/{author}', 'AuthorController@update');
    Route::delete('/author/{author}', 'AuthorController@delete');
});

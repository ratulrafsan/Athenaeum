<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class BookHash extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {


        Schema::create('bookHash', function (Blueprint $table) {
            $table->unsignedBigInteger('id')->autoIncrement();
            $table->unsignedBigInteger('book_id')->unique();
            $table->unsignedBigInteger('row_id');
            $table->string('title')->nullable();
            $table->string('authors')->nullable();
            $table->string('categories')->nullable();
            $table->string('language')->nullable();
            $table->string('isbn')->nullable();
            $table->string('publisher')->nullable();
            $table->string('shelf')->nullable();
            $table->string('row')->nullable();
            $table->string('hash')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}

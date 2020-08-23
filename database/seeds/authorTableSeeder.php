<?php

use Illuminate\Database\Seeder;

class authorTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = \Faker\Factory::create();


        for($i = 0; $i < 1000; $i++) {
            \Illuminate\Support\Facades\DB::table('authors')->insert([
                'author' => $faker->name()
            ]);
        }

        $authors = App\BookAuthor::all();
        if($authors->isEmpty()) return;

        App\Book::all()->each(function ($book) use ($authors) {
            $book->author()->attach(
                $authors->random(rand(1, 8))->pluck('id')->toArray()
            );
        });
    }
}

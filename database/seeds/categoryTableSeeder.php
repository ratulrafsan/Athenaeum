<?php

use Illuminate\Database\Seeder;

class categoryTableSeeder extends Seeder
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
            \Illuminate\Support\Facades\DB::table('categories')->insert([
                'category' => $faker->word()
            ]);
        }

        $categories = App\Category::all();

        App\Book::all()->each(function ($book) use ($categories) {
            $book->categories()->attach(
                $categories->random(rand(1,8))->pluck('id')->toArray()
            );
        });
    }
}

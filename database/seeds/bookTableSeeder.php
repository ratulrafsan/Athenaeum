<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class bookTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = \Faker\Factory::create();

        for($i = 0; $i < 10000; $i++) {
            $book_shelf = $faker->numberBetween(0, 100);
            $book_row = $faker->numberBetween(0, 10);
            DB::table('books')->insert([
                'title' => $faker->sentence(),
                'isbn' => $faker->ean13,
                'publisher' => $faker->company,
                'language' => $faker->languageCode,
                'location' => "Shelf: $book_shelf, Row: $book_row"
            ]);
        }


    }
}

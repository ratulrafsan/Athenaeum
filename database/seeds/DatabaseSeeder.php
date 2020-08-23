<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UserSeeder::class);
        $this->call(bookTableSeeder::class);
        $this->call(authorTableSeeder::class);
        $this->call(categoryTableSeeder::class);
    }
}

<?php

use App\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
           'name' => "Admin user",
           'email' => "admin@gmail.com",
           'password' => Hash::make('demo'),
            'role' => 1
        ]);

        User::create([
            'name' => 'Regular user',
            'email' => 'regular@gmail.com',
            'password' => Hash::make('demo'),
        ]);
    }
}

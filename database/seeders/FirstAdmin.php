<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use Spatie\Permission\Models\Role;

class FirstAdmin extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Create the first admin
        $admin = User::create([
            'name' => 'admin',
            'surname' => 'admin',
            'email' => 'leebaartman@gmail.com',
            'password' => bcrypt('zxasqw12'),
            'activated' => true,
        ]);

        $admin->assignRole('admin');
    }
}

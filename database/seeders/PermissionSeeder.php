<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Create the apps permissions
        Permission::create(['name' => 'manageUsers']);
        Permission::create(['name' => 'manageProfile']);
        Permission::create(['name' => 'viewUsers']);
    }
}

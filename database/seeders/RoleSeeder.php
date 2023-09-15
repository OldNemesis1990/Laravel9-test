<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Create apps roles
        $adminRole = Role::create(['name' => 'admin']);
        $userRole = Role::create(['name' => 'user']);

        // Assign Permissions to admin role
        $adminRole->givePermissionTo('manageUsers');
        $adminRole->givePermissionTo('manageProfile');
        $adminRole->givePermissionTo('viewUsers');

        // Assign Permissions to user role
        $userRole->givePermissionTo('manageProfile');
        $userRole->givePermissionTo('viewUsers');
    }
}

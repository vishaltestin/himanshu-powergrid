<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class AdminUserSeeder extends Seeder
{
    public function run(): void
    {
        $root = Role::firstOrCreate(['name' => 'root', 'guard_name' => 'web']);
        Role::firstOrCreate(['name' => 'admin', 'guard_name' => 'web']);

        $user = User::firstOrCreate(
            ['email' => 'admin@cubegrid.in'],
            [
                'name' => 'Root Admin',
                'password' => 'admin123',
                'status' => 1,
            ]
        );

        if (!$user->hasRole('root')) {
            $user->assignRole($root);
        }
    }
}

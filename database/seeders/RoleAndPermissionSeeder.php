<?php

// database/seeders/RoleAndPermissionSeeder.php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class RoleAndPermissionSeeder extends Seeder
{
    public function run(): void
    {

        app()[\Spatie\Permission\PermissionRegistrar::class]
    ->forgetCachedPermissions();

        $permissions = [
            'view_udise_codes',
            'create_udise_code',
            'edit_udise_code',
            'delete_udise_code',

            'view_activity_categories',
            'create_activity_category',
            'edit_activity_category',
            'delete_activity_category',

            'view_activities',
            'create_activity',
            'edit_activity',
            'delete_activity',

            'view_users',
            'create_user',
            'edit_user',
            'delete_user',

            'view_activity_categories',
            'create_activity_category',
            'edit_activity_category',
            'delete_activity_category',

            'view_activities',
            'create_activity',
            'edit_activity',
            'delete_activity',

            'view_registers',
            'create_register',
            'edit_register',
            'delete_register',

            'manage_roles',
            'manage_permissions',

            'view_dashboard',
        ];

        foreach ($permissions as $permission) {
            Permission::firstOrCreate(['name' => $permission, 'guard_name' => 'web']);
        }


        $rootRole = Role::firstOrCreate(['name' => 'root', 'guard_name' => 'web']);
        $rootRole->syncPermissions(Permission::all());

        $adminRole = Role::firstOrCreate(['name' => 'admin', 'guard_name' => 'web']);
        $adminRole->syncPermissions([
            'view_users',
            'create_user',
            'edit_user',
            'delete_user',

            'view_registers',
            'create_register',
            'edit_register',
            'delete_register',

            'view_dashboard',
        ]);

        $teacherRole = Role::firstOrCreate([
    'name' => 'teacher',
    'guard_name' => 'web'
]);

    }
}

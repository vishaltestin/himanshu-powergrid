<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    public function up(): void
    {
        // 1. Change the column from a strict ENUM to a flexible VARCHAR (string)
        DB::statement("ALTER TABLE activity_submissions MODIFY COLUMN status VARCHAR(255) DEFAULT 'Submitted'");

        // 2. Convert any old legacy data so it matches the new React frontend
        DB::table('activity_submissions')
            ->whereIn('status', ['pending', 'approved'])
            ->update(['status' => 'Submitted']);
            
        DB::table('activity_submissions')
            ->where('status', 'rejected')
            ->update(['status' => 'Rejected']); // Ensure capitalization matches React
    }

    public function down(): void
    {
        // Revert back to ENUM if needed
        DB::statement("ALTER TABLE activity_submissions MODIFY COLUMN status ENUM('pending', 'approved', 'rejected') DEFAULT 'pending'");
    }
};
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('registers', function (Blueprint $table) {
            // Drop the removed column
            $table->dropColumn('principal_phone');

            // Add the new columns
            $table->string('school_email')->after('principal_email');
            $table->string('school_phone')->after('school_email');
            $table->string('city')->after('school_phone');
            $table->string('district')->after('city');
        });
    }

    public function down(): void
    {
        Schema::table('registers', function (Blueprint $table) {
            $table->string('principal_phone')->after('principal_email');
            $table->dropColumn(['school_email', 'school_phone', 'city', 'district']);
        });
    }
};
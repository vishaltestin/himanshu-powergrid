<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('allowed_udise_codes', function (Blueprint $table) {
            // Increase length to 20
            $table->string('udise_code', 20)->change();
        });
    }

    public function down(): void
    {
        Schema::table('allowed_udise_codes', function (Blueprint $table) {
            // Revert back to 11 if needed
            $table->string('udise_code', 11)->change();
        });
    }
};
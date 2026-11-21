<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::table('registers', function (Blueprint $table) {
            // Adds the state column right after the district column
            $table->string('state')->default('Maharashtra')->after('district');
        });
    }

    public function down(): void
    {
        Schema::table('registers', function (Blueprint $table) {
            $table->dropColumn('state');
        });
    }
};
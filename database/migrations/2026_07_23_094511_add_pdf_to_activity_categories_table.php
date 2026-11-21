<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('activity_categories', function (Blueprint $table) {
            // Adding the PDF column after the description
            $table->string('pdf')->nullable()->after('description');
        });
    }

    public function down(): void
    {
        Schema::table('activity_categories', function (Blueprint $table) {
            $table->dropColumn('pdf');
        });
    }
};
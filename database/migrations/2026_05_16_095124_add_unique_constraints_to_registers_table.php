<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
     public function up(): void
    {
        Schema::table('registers', function (Blueprint $table) {
            $table->unique('udise_no');

            $table->unique('principal_email');
            $table->unique('principal_phone');

            $table->unique('teacher_email');
            $table->unique('teacher_phone');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('registers', function (Blueprint $table) {
            $table->dropUnique(['udise_no']);

            $table->dropUnique(['principal_email']);
            $table->dropUnique(['principal_phone']);

            $table->dropUnique(['teacher_email']);
            $table->dropUnique(['teacher_phone']);
        });
    }
};

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('registers', function (Blueprint $table) {
            $table->dropColumn(['terms_one_accepted', 'terms_two_accepted', 'terms_three_accepted']);
            $table->boolean('terms_accepted')->default(false)->after('teacher_phone');
        });
    }

    public function down(): void
    {
        Schema::table('registers', function (Blueprint $table) {
            $table->dropColumn('terms_accepted');
            $table->boolean('terms_one_accepted')->default(false);
            $table->boolean('terms_two_accepted')->default(false);
            $table->boolean('terms_three_accepted')->default(false);
        });
    }
};
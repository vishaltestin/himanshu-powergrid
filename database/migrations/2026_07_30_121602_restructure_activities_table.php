<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('activities', function (Blueprint $table) {
            // 1. Drop the old JSON grades column
            $table->dropColumn('grades');

            // 2. Add the new strict 1-to-1 relationships
            $table->foreignId('grade_id')->nullable()->after('description')->constrained('grades')->nullOnDelete();
            $table->foreignId('category_id')->nullable()->after('grade_id')->constrained('activity_categories')->nullOnDelete();
        });

        // 3. Drop the old pivot table if it exists (Optional, but keeps DB clean)
        Schema::dropIfExists('activity_category');
    }

    public function down(): void
    {
        Schema::table('activities', function (Blueprint $table) {
            $table->json('grades')->nullable();
            $table->dropForeign(['grade_id']);
            $table->dropForeign(['category_id']);
            $table->dropColumn(['grade_id', 'category_id']);
        });
    }
};

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        // 1. Update the activities table
        Schema::table('activities', function (Blueprint $table) {
            // Drop the old foreign key and column
            $table->dropForeign(['category_id']);
            $table->dropColumn('category_id');
            
            // Add the new JSON column for grades
            $table->json('grades')->nullable()->after('slug');
        });

        // 2. Create the pivot table for the Many-to-Many relationship
        Schema::create('activity_activity_category', function (Blueprint $table) {
            $table->id();
            $table->foreignId('activity_id')->constrained()->cascadeOnDelete();
            $table->foreignId('activity_category_id')->constrained()->cascadeOnDelete();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('activity_activity_category');

        Schema::table('activities', function (Blueprint $table) {
            $table->foreignId('category_id')->nullable()->constrained('activity_categories')->cascadeOnDelete();
            $table->dropColumn('grades');
        });
    }
};
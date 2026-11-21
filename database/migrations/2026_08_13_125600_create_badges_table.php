<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        // The Badges Table
        Schema::create('badges', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('image'); // LFM icon
            $table->text('description')->nullable();
            
            // Connect the badge to a specific Theme/Category
            $table->foreignId('category_id')->constrained('activity_categories')->cascadeOnDelete();
            
            $table->boolean('status')->default(1);
            $table->timestamps();
        });

        // The Pivot Table (Tracks which user earned which badge)
        Schema::create('badge_user', function (Blueprint $table) {
            $table->id();
            $table->foreignId('badge_id')->constrained('badges')->cascadeOnDelete();
            $table->foreignId('user_id')->constrained('users')->cascadeOnDelete();
            $table->timestamps();

            // Ensure a user can only earn a specific badge once
            $table->unique(['badge_id', 'user_id']); 
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('badge_user');
        Schema::dropIfExists('badges');
    }
};
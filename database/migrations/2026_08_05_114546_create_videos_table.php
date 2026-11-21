<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('videos', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('alias')->unique();
            $table->string('thumbnail'); // UniSharp LFM URL
            $table->text('short_description')->nullable();
            $table->longText('description')->nullable();
            
            // Foreign keys matching your Activity architecture
            $table->foreignId('grade_id')->nullable()->constrained('grades')->nullOnDelete();
            $table->foreignId('category_id')->nullable()->constrained('activity_categories')->nullOnDelete();
            
            $table->string('youtube_link');
            $table->string('external_link')->nullable();
            $table->integer('order')->default(0);
            $table->boolean('status')->default(1);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('videos');
    }
};
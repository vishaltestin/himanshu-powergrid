<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('activities', function (Blueprint $table) {
            $table->id();
            $table->foreignId('category_id')->constrained('activity_categories')->restrictOnDelete();
            $table->string('title');
            $table->string('slug')->unique();
            $table->longText('description')->nullable();
            $table->string('pdf')->nullable();
            $table->string('external_link')->nullable();
            $table->string('status')->default('draft')->index();
            $table->unsignedInteger('order')->default(0)->index();
            $table->timestamps();
            $table->softDeletes();

            $table->index(['category_id', 'status', 'order']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('activities');
    }
};

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('events', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('description')->nullable();
            $table->string('date')->nullable();   // display date, e.g. "November 15, 2026"
            $table->string('time')->nullable();   // display time, e.g. "9:00 AM - 5:00 PM"
            $table->string('location')->nullable();
            $table->string('category')->nullable();
            $table->string('image')->nullable();
            $table->string('price')->nullable();
            $table->string('badge')->nullable();  // Upcoming | Sold Out | Free
            $table->unsignedInteger('order')->default(0);
            $table->boolean('status')->default(1); // published
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('events');
    }
};

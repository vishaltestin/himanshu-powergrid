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
        Schema::create('registers', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->string('school_name');
            $table->string('udise_no');

            $table->string('principal_name');
            $table->string('principal_email');
            $table->string('principal_phone');

            $table->string('teacher_name');
            $table->string('teacher_email');
            $table->string('teacher_phone');

            $table->boolean('terms_one_accepted')->default(false);
            $table->boolean('terms_two_accepted')->default(false);
            $table->boolean('terms_three_accepted')->default(false);

            $table->boolean('status')->default(1);

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('registers');
    }
};

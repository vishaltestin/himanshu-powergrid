<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * menu_position was an enum(main, footer). Footer link groups and the bottom
 * legal links are now managed as menus too, so allow any position key.
 */
return new class extends Migration
{
    public function up(): void
    {
        Schema::table('menus', function (Blueprint $table) {
            $table->string('menu_position', 50)->default('main')->change();
        });
    }

    public function down(): void
    {
        //
    }
};

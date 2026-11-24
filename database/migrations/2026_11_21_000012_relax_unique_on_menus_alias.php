<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('menus', function (Blueprint $table) {
            // Nav hrefs legitimately repeat (parent "Contact Us" + child "Reach Us"
            // both point at /contact-us), so alias cannot be unique.
            if (Schema::hasIndex('menus', 'menus_alias_unique')) {
                $table->dropUnique('menus_alias_unique');
            }
            $table->index('alias');
        });
    }

    public function down(): void
    {
        Schema::table('menus', function (Blueprint $table) {
            $table->dropIndex(['alias']);
            $table->unique('alias');
        });
    }
};

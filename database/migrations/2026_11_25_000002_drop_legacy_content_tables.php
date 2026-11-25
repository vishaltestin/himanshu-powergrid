<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\Schema;

/**
 * The old per-page JSON blobs (page_contents) and the standalone hero banners
 * table are replaced by the section-based page builder (pages / page_sections).
 */
return new class extends Migration
{
    public function up(): void
    {
        Schema::dropIfExists('page_contents');
        Schema::dropIfExists('banners');
    }

    public function down(): void
    {
        // Legacy tables are intentionally not recreated.
    }
};

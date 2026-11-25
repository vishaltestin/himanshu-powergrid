<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Menu extends Model
{
    use HasFactory;

    /** Built-in menu locations used by the website layout. */
    public const POSITIONS = [
        'main' => 'Header navigation',
        'footer_1' => 'Footer — column 1',
        'footer_2' => 'Footer — column 2',
        'legal' => 'Footer — bottom links',
    ];

    protected $fillable = ['title', 'alias', 'menu_position', 'parent_id', 'banner_image', 'icon', 'order', 'status'];

    protected function casts(): array
    {
        return ['status' => 'boolean', 'order' => 'integer'];
    }

    /** Built-in positions plus any custom ones already in use. */
    public static function positions(): array
    {
        $positions = self::POSITIONS;
        foreach (static::query()->distinct()->pluck('menu_position') as $p) {
            $positions[$p] ??= ucwords(str_replace('_', ' ', $p));
        }

        return $positions;
    }

    /** Active menus for the website, keyed by position: [{title, href, children:[…]}]. */
    public static function tree(): array
    {
        $all = static::where('status', 1)->orderBy('order')->get();
        $children = $all->whereNotNull('parent_id')->groupBy('parent_id');

        return $all->whereNull('parent_id')
            ->groupBy('menu_position')
            ->map(fn ($items) => $items->map(fn (Menu $m) => [
                'title' => $m->title,
                'href' => $m->alias,
                'icon' => $m->icon,
                'children' => ($children[$m->id] ?? collect())->map(fn (Menu $c) => ['title' => $c->title, 'href' => $c->alias, 'icon' => $c->icon])->values()->all(),
            ])->values()->all())
            ->all();
    }

    public function parent(): BelongsTo
    {
        return $this->belongsTo(Menu::class, 'parent_id');
    }

    public function children(): HasMany
    {
        return $this->hasMany(Menu::class, 'parent_id')->orderBy('order');
    }
}

<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Blog;
use App\Models\Page;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

/** Simple site search across page titles/section text and posts (used by the header search). */
class SearchController extends Controller
{
    public function __invoke(Request $request): JsonResponse
    {
        $q = trim((string) $request->input('q'));
        if (mb_strlen($q) < 2) {
            return response()->json(['results' => []]);
        }

        $like = '%' . $q . '%';

        $pages = Page::published()
            ->where(fn ($w) => $w->where('title', 'like', $like)
                ->orWhereHas('sections', fn ($s) => $s->where('is_visible', true)->where('data', 'like', $like)))
            ->limit(8)
            ->get()
            ->map(fn (Page $p) => ['title' => $p->title, 'href' => $p->path(), 'type' => 'Page']);

        $posts = Blog::published()
            ->where(fn ($w) => $w->where('title', 'like', $like)->orWhere('short_description', 'like', $like))
            ->orderByDesc('date')
            ->limit(6)
            ->get()
            ->map(fn (Blog $b) => ['title' => $b->title, 'href' => $b->path(), 'type' => $b->typeLabel(), 'excerpt' => Str::limit((string) $b->short_description, 100)]);

        return response()->json(['results' => $pages->concat($posts)->values()]);
    }
}

<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Blog;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class BlogController extends Controller
{
    public function index(Request $request): JsonResponse
    {
        $blogs = Blog::with(['category', 'grade'])
            ->where('status', 1)
            ->when($request->category_id, fn($q) => $q->where('category_id', $request->category_id))
            ->when($request->grade_id, fn($q) => $q->where('grade_id', $request->grade_id))
            ->orderBy('date', 'desc')
            ->orderBy('order', 'asc')
            ->get();

        return response()->json([
            'success' => true,
            'data'    => $blogs
        ]);
    }

    public function show($alias): JsonResponse
    {
        $blog = Blog::with(['category', 'grade'])
            ->where('alias', $alias)
            ->where('status', 1)
            ->firstOrFail();

        // Fetch 3 recent/related articles to show at the bottom or side
        $related = Blog::with(['category'])
            ->where('id', '!=', $blog->id)
            ->where('status', 1)
            ->orderBy('date', 'desc')
            ->take(3)
            ->get(['id', 'title', 'alias', 'thumbnail', 'date', 'category_id']);

        return response()->json([
            'success' => true,
            'data' => [
                'blog' => $blog,
                'related' => $related
            ]
        ]);
    }
}
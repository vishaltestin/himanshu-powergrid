<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Video;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class VideoController extends Controller
{
    public function index(Request $request): JsonResponse
    {
        $videos = Video::with(['category', 'grade'])
            ->where('status', 1)
            // Optional: These allow your frontend <FilterBar /> to work dynamically later!
            ->when($request->category_id, fn($q) => $q->where('category_id', $request->category_id))
            ->when($request->grade_id, fn($q) => $q->where('grade_id', $request->grade_id))
            ->orderBy('order', 'asc')
            ->latest()
            ->get();

        return response()->json([
            'success' => true,
            'data'    => $videos
        ]);
    }

    public function show($alias): JsonResponse
    {
        // 1. Fetch the main video
        $video = Video::with(['category', 'grade'])
            ->where('alias', $alias)
            ->where('status', 1)
            ->firstOrFail();

        // 2. Fetch recommended videos (excluding the current one)
        $recommended = Video::with(['category', 'grade'])
            ->where('id', '!=', $video->id)
            ->where('status', 1)
            // Try to match the category, or just get the latest
            ->when($video->category_id, function($q) use ($video) {
                $q->where('category_id', $video->category_id);
            })
            ->latest()
            ->take(4)
            ->get();

        return response()->json([
            'success' => true,
            'data' => [
                'video' => $video,
                'recommended' => $recommended
            ]
        ]);
    }
}
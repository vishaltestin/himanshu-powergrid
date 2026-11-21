<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Activity;
use Illuminate\Http\JsonResponse;

class ActivityController extends Controller
{
    public function index(): JsonResponse
    {
        $activities = Activity::active()
            ->with(['category:id,title,slug'])
            ->orderBy('order')
            ->latest()
            ->get();

        return response()->json(['data' => $activities->map(fn (Activity $activity) => $this->payload($activity))]);
    }

    public function show(string $slug): JsonResponse
    {
        $activity = Activity::active()
            ->with(['category:id,title,slug'])
            ->where('slug', $slug)
            ->firstOrFail();

        return response()->json(['data' => $this->payload($activity, true)]);
    }

    private function payload(Activity $activity, bool $full = false): array
    {
        return array_filter([
            'id' => $activity->id,
            'category' => $activity->category ? ['id' => $activity->category->id, 'title' => $activity->category->title, 'slug' => $activity->category->slug] : null,
            'title' => $activity->title,
            'slug' => $activity->slug,
            'description' => $full ? $activity->description : null,
            'pdf_preview_url' => $activity->pdf_url,
            'external_link' => $activity->external_link,
            'order' => $activity->order,
            'created_at' => $activity->created_at?->toISOString(),
        ], fn ($value) => $value !== null);
    }
}

<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Activity;
use Illuminate\Http\JsonResponse;
use Carbon\Carbon;

class HomeController extends Controller
{
    public function homeActivities(): JsonResponse
    {
        // Added with('category') to eager load the relationship and prevent N+1 queries
        $activities = Activity::with('category')
            ->where('status', 'active')
            ->latest()
            ->take(4)
            ->get()
            ->map(function ($activity) {
                return [
                    'id'          => $activity->id,
                    'image'       => $activity->image ?: '/images/activity.png',
                    'date'        => $activity->created_at 
                                        ? Carbon::parse($activity->created_at)->format('M Y') 
                                        : $activity->created_at->format('M Y'),
                    
                    // Pull the label from the related activity_categories table
                    'label'       => $activity->category ? $activity->category->title : 'General',
                    
                    // Your database column is 'title', not 'name'!
                    'title'       => $activity->title,
                    
                    'description' => $activity->description,
                ];
            });

        return response()->json([
            'success' => true,
            'data'    => $activities
        ]);
    }
}
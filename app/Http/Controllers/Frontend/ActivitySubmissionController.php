<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Activity;
use App\Models\ActivitySubmission;
use App\Models\Badge;
use Illuminate\Http\Request;

class ActivitySubmissionController extends Controller
{
    public function store(Request $request)
    {
        // 1. Validate the incoming FormData (Made nullable for appending)
        $validated = $request->validate([
            'activity_id' => 'required|exists:activities,id',
            'description' => 'nullable|string',
            'gdrive_link' => 'nullable|url|max:2048',
            'images'      => 'nullable|array|max:5',
            'images.*'    => 'image|mimes:jpeg,png,jpg,gif,webp|max:10240',
            'videos'      => 'nullable|array|max:2',
            'videos.*'    => 'mimes:mp4,webm|max:51200',
        ]);
        
        $userId = $request->user()->id;

        // 2. Fetch existing submission (if any)
        $existingSubmission = ActivitySubmission::where('user_id', $userId)
            ->where('activity_id', $validated['activity_id'])
            ->first();

        $existingImages = $existingSubmission->images ?? [];
        $existingVideos = $existingSubmission->videos ?? [];

        // 3. Security Checks on Limits
        if ($request->hasFile('images') && (count($existingImages) + count($request->file('images')) > 5)) {
            return response()->json(['message' => 'Total images cannot exceed 5.'], 422);
        }
        if ($request->hasFile('videos') && (count($existingVideos) + count($request->file('videos')) > 2)) {
            return response()->json(['message' => 'Total videos cannot exceed 2.'], 422);
        }

        // 4. Process NEW Images
        $newImagePaths = [];
        if ($request->hasFile('images')) {
            foreach ($request->file('images') as $image) {
                $filename = time() . '_' . uniqid() . '.' . $image->getClientOriginalExtension();
                $image->move(public_path('file-manager/submissions/images'), $filename);
                $newImagePaths[] = '/file-manager/submissions/images/' . $filename;
            }
        }

        // 5. Process NEW Videos
        $newVideoPaths = [];
        if ($request->hasFile('videos')) {
            foreach ($request->file('videos') as $video) {
                $filename = time() . '_' . uniqid() . '.' . $video->getClientOriginalExtension();
                $video->move(public_path('file-manager/submissions/videos'), $filename);
                $newVideoPaths[] = '/file-manager/submissions/videos/' . $filename;
            }
        }

        // 6. Merge old and new arrays safely
        $finalImages = array_merge($existingImages, $newImagePaths);
        $finalVideos = array_merge($existingVideos, $newVideoPaths);

        // 7. Process Description Append safely
        $newDescription = trim($validated['description'] ?? '');
        $oldDescription = trim($existingSubmission->description ?? '');
        
        $finalDescription = $oldDescription;
        if ($newDescription !== '') {
            $finalDescription = $oldDescription !== '' 
                ? $oldDescription . "\n\n-- Added Update --\n" . $newDescription 
                : $newDescription;
        }

        // 8. Update or Create the Submission
        $submission = ActivitySubmission::updateOrCreate(
            [
                'user_id' => $userId,
                'activity_id' => $validated['activity_id'],
            ],
            [
                'description' => $finalDescription,
                
                // Keep the old gdrive link if it exists, otherwise save the new one
                'gdrive_link' => $existingSubmission->gdrive_link ?? $validated['gdrive_link'] ?? null,
                
                'images' => $finalImages,
                'videos' => $finalVideos,
                
                // Keep existing status so it doesn't alert the admin unnecessarily
                'status' => $existingSubmission ? $existingSubmission->status : 'Submitted',
                'admin_remarks' => $existingSubmission->admin_remarks ?? null,
            ]
        );

        // 9. THE BADGE TRIGGER
        $this->checkAndAwardBadge($userId, $validated['activity_id']);

        return response()->json([
            'message' => 'Evidence updated successfully!',
            'submission' => $submission
        ], 201);
    }

    private function checkAndAwardBadge($userId, $activityId)
    {
        $activity = Activity::find($activityId);
        if (!$activity || !$activity->category_id) return;

        $categoryId = $activity->category_id;

        $badge = Badge::where('category_id', $categoryId)->where('status', 1)->first();
        if (!$badge) return;

        $totalActivities = Activity::where('category_id', $categoryId)
            ->where('status', 'active')
            ->count();

        $completedActivities = ActivitySubmission::where('user_id', $userId)
            ->whereIn('status', ['Submitted', 'pending', 'approved'])
            ->whereHas('activity', function ($q) use ($categoryId) {
                $q->where('category_id', $categoryId);
            })
            ->count();

        if ($totalActivities > 0 && $completedActivities >= $totalActivities) {
            $badge->users()->syncWithoutDetaching([$userId]);
        }
    }
}
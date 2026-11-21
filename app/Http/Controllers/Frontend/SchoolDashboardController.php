<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Activity;
use App\Models\ActivitySubmission;
use App\Models\Badge;
use Illuminate\Http\Request;
use App\Models\Register;
use App\Models\Grade; // <-- NEW: Import Grade instead of ActivityCategory

class SchoolDashboardController extends Controller
{
    public function index(Request $request)
    {
        $userId = $request->user()->id;

        $schoolDetails = Register::where('user_id', $userId)->first();

        // Fetch Grades that have active activities
        $grades = Grade::whereHas('activities', function ($query) {
            $query->active();
        })
            ->with(['activities' => function ($query) use ($userId) {
                // Eager load both the category (Theme) and the user's submissions
                $query->active()->orderBy('order')
                    ->with(['category', 'submissions' => function ($subQuery) use ($userId) {
                        $subQuery->where('user_id', $userId);
                    }]);
            }])
            ->where('status', 'active') // Ensure we only get active grades
            ->orderBy('order')
            ->get();

        // Map the data for the React frontend
        $gradesData = $grades->map(function ($grade) {
            return [
                'grade_number' => $grade->order, // Maps to grade_number in React
                'title' => $grade->name, // e.g., "Grade 5"
                // NOTE: We removed the global 'pdf' here since Grades don't have guidelines PDFs!

                'activities' => $grade->activities->map(function ($activity) {

                    $submission = $activity->submissions->first();

                    $frontendStatus = 'Not Submitted';
                    if ($submission) {
                        // NEW LOGIC: Any valid submission is now instantly "Submitted"
                        // We safely map 'pending', 'approved', or 'Submitted' all to 'Submitted'
                        $statusMap = [
                            'pending'   => 'Submitted',
                            'approved'  => 'Submitted',
                            'Submitted' => 'Submitted',
                            'rejected'  => 'Rejected'
                        ];
                        // Use strtolower to be safe against database casing differences
                        $frontendStatus = $statusMap[strtolower($submission->status)] ?? 'Submitted';
                    }

                    return [
                        'id' => $activity->id,
                        'name' => $activity->title,
                        'deadline' => $activity->deadline ? $activity->deadline->format('Y-m-d') : null,
                        'slug' => $activity->slug,
                        'theme' => $activity->category ? $activity->category->title : 'General',
                        'description' => $activity->description,
                        'pdf' => $activity->pdf_url,
                        'external_link' => $activity->external_link,
                        'image' => $activity->image,
                        'status' => $frontendStatus,
                        'gdrive_link' => $submission ? $submission->gdrive_link : null,
                        'submission_images' => $submission ? $submission->images : [],
                        'submission_videos' => $submission ? $submission->videos : [],
                    ];
                }),
            ];
        });

        // ==========================================
        // 3. NEW LOGIC: Fetch Badges for Dashboard
        // ==========================================
        $earnedBadgeIds = $request->user()->badges()->pluck('badges.id')->toArray();

        $allBadges = Badge::with('category')->where('status', 1)->get()->map(function ($badge) use ($earnedBadgeIds, $userId) {

            // Count total active activities required for this badge's theme
            $totalActivities = Activity::where('category_id', $badge->category_id)
                ->where('status', 'active')
                ->count();

            // Count how many activities the user has submitted for this theme
            $completedActivities = ActivitySubmission::where('user_id', $userId)
                ->whereIn('status', ['Submitted', 'pending', 'approved'])
                ->whereHas('activity', function ($q) use ($badge) {
                    $q->where('category_id', $badge->category_id);
                })
                ->count();

            return [
                'id'          => $badge->id,
                'title'       => $badge->title,
                'image'       => $badge->image,
                'description' => $badge->description,
                'theme_name'  => $badge->category->title ?? 'General',
                'earned'      => in_array($badge->id, $earnedBadgeIds),
                'completed'   => $completedActivities, // <-- NEW
                'total'       => $totalActivities,     // <-- NEW
            ];
        });

        return inertia('school-dashboard', [
            'schoolDetails' => $schoolDetails,
            'gradesData' => $gradesData, // Passed to Inertia as gradesData
            'badges'        => $allBadges,
        ]);
    }

    public function showActivity(Request $request, $slug)
    {
        $userId = $request->user()->id;

        // Fetch the specific activity with its Theme (category) and Grade
        $activity = \App\Models\Activity::where('slug', $slug)
            ->active()
            ->with(['category', 'grade', 'submissions' => function ($query) use ($userId) {
                $query->where('user_id', $userId);
            }])
            ->firstOrFail();

        $submission = $activity->submissions->first();

        $frontendStatus = 'Not Submitted';
        if ($submission) {
            $statusMap = [
                'pending'   => 'Submitted',
                'approved'  => 'Submitted',
                'submitted' => 'Submitted',
                'rejected'  => 'Rejected'
            ];
            $frontendStatus = $statusMap[strtolower($submission->status)] ?? 'Submitted';
        }

        // Map data exactly like we did for the dashboard
        $activityData = [
            'id' => $activity->id,
            'name' => $activity->title,
            'slug' => $activity->slug,
            'theme' => $activity->category ? $activity->category->title : 'General',
            'grade' => $activity->grade ? $activity->grade->name : '—',
            'description' => $activity->description,
            'pdf' => $activity->pdf_url,
            'external_link' => $activity->external_link,
            'image' => $activity->image, // Assuming this returns a full URL or asset path
            'status' => $frontendStatus,
            'gdrive_link' => $submission ? $submission->gdrive_link : null,
            'admin_remarks' => $submission ? $submission->admin_remarks : null,
            'submission_images' => $submission ? $submission->images : [],
            'submission_videos' => $submission ? $submission->videos : [],
        ];

        return inertia('activity-detail', [
            'activity' => $activityData,
        ]);
    }
}

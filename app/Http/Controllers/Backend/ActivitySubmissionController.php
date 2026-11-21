<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\ActivitySubmission;
use App\Models\ActivityCategory;
use App\Models\Grade;
use App\Models\Register;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\View\View;

class ActivitySubmissionController extends Controller
{
    /**
     * Display a listing of schools with submissions.
     */
    public function index(Request $request): View
    {
        $schools = User::whereHas('activitySubmissions')
            ->with('register')
            ->withCount('activitySubmissions as total_submissions')
            ->when($request->filled('search'), function ($query) use ($request) {
                $search =$request->search;
                $query->whereHas('register', function ($q) use ($search) {
                    $q->where('school_name', 'like', "\%{$search}%")
                        ->orWhere('udise_no', 'like', "%{$search}%")
                        ->orWhere('city', 'like', "%{$search}%");
                });
            })
            ->orderByDesc('total_submissions')
            ->latest()
            ->paginate(15)
            ->withQueryString();

        return view('admin-dashboard.activity-submissions.index', compact('schools'));
    }

    /**
     * Display the specific submission for review.
     */
    public function show(ActivitySubmission $activitySubmission): View
    {
        $activitySubmission->load(['activity.category', 'activity.grade', 'user']);
        $schoolDetails = Register::where('user_id',$activitySubmission->user_id)->first();

        return view('admin-dashboard.activity-submissions.show', [
            'activitySubmission' => $activitySubmission,
            'schoolDetails' => $schoolDetails
        ]);
    }

    /**
     * Update the status and admin remarks.
     */
    public function update(Request $request, ActivitySubmission$activitySubmission): RedirectResponse
    {
        $validated =$request->validate([
            'status' => ['required', 'in:Submitted,Rejected'],
            'admin_remarks' => ['required_if:status,Rejected', 'nullable', 'string', 'max:1000'],
        ], [
            'admin_remarks.required_if' => 'You must provide a remark explaining why this submission was rejected.',
        ]);

        $activitySubmission->update([
            'status' => $validated['status'],
            'admin_remarks' => $validated['admin_remarks'],
        ]);

        return redirect()
            ->route('admin.activity-submissions.index')
            ->with('success', 'Submission status updated successfully.');
    }

    /**
     * Global Feed: Display ALL submissions across all schools.
     */
    public function globalSubmissions(Request $request): View
    {
        $categories = ActivityCategory::orderBy('order')->get(['id', 'title']);$grades = Grade::orderBy('order')->get(['id', 'name']);

        $submissions = ActivitySubmission::with(['activity.category', 'activity.grade', 'user.register'])
            ->when($request->filled('search'), function ($query) use ($request) {
                $search =$request->search;
                $query->where(function ($q) use ($search) {$q->whereHas('activity', function ($q2) use ($search) {
                        $q2->where('title', 'like', '\%' .$search . '%');
                    })
                        ->orWhereHas('user.register', function ($q3) use ($search) {
                            $q3->where('school_name', 'like', '\%' .$search . '%')
                                ->orWhere('udise_no', 'like', '%' . $search . '%');
                        });
                });
            })
            ->when($request->filled('status'), function ($query) use ($request) {
                $query->where('status',$request->status);
            })
            ->when($request->filled('category_id'), function ($query) use ($request) {$query->whereHas('activity', function ($q) use ($request) {
                    $q->where('category_id',$request->category_id);
                });
            })
            ->when($request->filled('grade_id'), function ($query) use ($request) {$query->whereHas('activity', function ($q) use ($request) {
                    $q->where('grade_id',$request->grade_id);
                });
            })
            ->latest()
            ->paginate(15)
            ->withQueryString();

        return view('admin-dashboard.activity-submissions.global', compact('submissions', 'categories', 'grades'));
    }

    /**
     * Level 2: Display all submissions for a specific school.
     */
    public function schoolSubmissions(User $user, Request$request): View
    {
        $user->load('register');
        $categories = ActivityCategory::orderBy('order')->get(['id', 'title']);$grades = Grade::orderBy('order')->get(['id', 'name']);

        $submissions = ActivitySubmission::with(['activity.category', 'activity.grade'])
            ->where('user_id', $user->id)
            ->when($request->filled('search'), function ($query) use ($request) {$query->whereHas('activity', function ($q) use ($request) {
                    $q->where('title', 'like', '\%' .$request->search . '%');
                });
            })
            ->when($request->filled('status'), function ($query) use ($request) {
                $query->where('status',$request->status);
            })
            ->when($request->filled('category_id'), function ($query) use ($request) {$query->whereHas('activity', function ($q) use ($request) {
                    $q->where('category_id',$request->category_id);
                });
            })
            ->when($request->filled('grade_id'), function ($query) use ($request) {$query->whereHas('activity', function ($q) use ($request) {
                    $q->where('grade_id',$request->grade_id);
                });
            })
            ->latest()
            ->paginate(15)
            ->withQueryString();

        return view('admin-dashboard.activity-submissions.school', compact('user', 'submissions', 'categories', 'grades'));
    }

    /**
     * Delete the submission and its associated media files.
     */
    public function destroy(ActivitySubmission $activitySubmission): RedirectResponse
    {
        if (is_array($activitySubmission->images)) {
            foreach ($activitySubmission->images as$image) {
                $imagePath = public_path(ltrim($image, '/'));
                if (file_exists($imagePath) && is_file($imagePath)) {
                    @unlink($imagePath);
                }
            }
        }

        if (is_array($activitySubmission->videos)) {
            foreach ($activitySubmission->videos as$video) {
                $videoPath = public_path(ltrim($video, '/'));
                if (file_exists($videoPath) && is_file($videoPath)) {
                    @unlink($videoPath);
                }
            }
        }

        $activitySubmission->delete();

        return back()->with('success', 'Submission and associated files deleted successfully.');
    }
}
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Activity;
use App\Models\ActivitySubmission;
use App\Models\Register;

class DashboardController extends Controller
{
    public function index()
    {
        // 1. Top Level Metrics
        $totalSchools = Register::count(); 
        $totalActivities = Activity::where('status', 'active')->count();
        $pendingReviews = ActivitySubmission::where('status', 'pending')->count();
        $approvedSubmissions = ActivitySubmission::where('status', 'approved')->count();

        // 2. Recent Submissions (Last 5)
        // Eager load the user, their register details, and the activity to avoid N+1 queries
        $recentSubmissions = ActivitySubmission::with(['user.register', 'activity'])
            ->latest()
            ->take(5)
            ->get();

        // 3. Needs Attention (Oldest Pending Submissions)
        $needsAttention = ActivitySubmission::with(['user.register', 'activity'])
            ->where('status', 'pending')
            ->oldest() // Fetches the ones that have been waiting the longest
            ->take(4)
            ->get();

        $title = 'Admin Dashboard';

        // 4. Send all data to the specific view path you established
        return view('admin-dashboard.dashboard.index', compact(
            'title',
            'totalSchools',
            'totalActivities',
            'pendingReviews',
            'approvedSubmissions',
            'recentSubmissions',
            'needsAttention'
        ));
    }
}
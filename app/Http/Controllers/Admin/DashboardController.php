<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Blog;
use App\Models\Event;
use App\Models\FormSubmission;
use App\Models\Page;
use App\Models\PageSection;
use App\Models\TeamMember;
use Illuminate\View\View;

class DashboardController extends Controller
{
    public function index(): View
    {
        return view('admin.dashboard', [
            'stats' => [
                ['label' => 'New submissions', 'value' => FormSubmission::where('status', 'new')->count(), 'icon' => 'inbox', 'route' => route('admin.submissions.index', ['status' => 'new']), 'tone' => 'amber'],
                ['label' => 'Published pages', 'value' => Page::where('status', 'published')->count(), 'icon' => 'layers', 'route' => route('admin.pages.index'), 'tone' => 'brand'],
                ['label' => 'Blog & news posts', 'value' => Blog::where('status', 1)->count(), 'icon' => 'newspaper', 'route' => route('admin.blogs.index'), 'tone' => 'emerald'],
                ['label' => 'Active events', 'value' => Event::where('status', 1)->count(), 'icon' => 'calendar', 'route' => route('admin.events.index'), 'tone' => 'violet'],
                ['label' => 'Team members', 'value' => TeamMember::where('status', 1)->count(), 'icon' => 'users', 'route' => route('admin.team-members.index'), 'tone' => 'sky'],
                ['label' => 'Total sections', 'value' => PageSection::count(), 'icon' => 'layout-grid', 'route' => route('admin.pages.index'), 'tone' => 'slate'],
            ],
            'byType' => FormSubmission::selectRaw('type, count(*) as total')->groupBy('type')->pluck('total', 'type'),
            'recentSubmissions' => FormSubmission::latest()->take(8)->get(),
            'recentPages' => Page::latest('updated_at')->take(6)->get(),
        ]);
    }
}

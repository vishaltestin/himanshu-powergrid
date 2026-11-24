<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Banner;
use App\Models\Blog;
use App\Models\Event;
use App\Models\FormSubmission;
use App\Models\Menu;
use App\Models\PageContent;
use App\Models\TeamMember;
use Inertia\Response;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index(): Response
    {
        $newSubmissions = FormSubmission::where('status', 'new')->count();

        return Inertia::render('admin/dashboard', [
            'stats' => [
                'newSubmissions' => $newSubmissions,
                'totalSubmissions' => FormSubmission::count(),
                'contactSubmissions' => FormSubmission::where('type', 'contact')->count(),
                'enquirySubmissions' => FormSubmission::where('type', 'enquiry')->count(),
                'careerSubmissions' => FormSubmission::where('type', 'career')->count(),
                'publishedBlogs' => Blog::where('status', 1)->count(),
                'publishedEvents' => Event::where('status', 1)->count(),
                'activeBanners' => Banner::where('status', 1)->count(),
                'teamMembers' => TeamMember::where('status', 1)->count(),
                'menus' => Menu::where('status', 1)->count(),
                'pages' => PageContent::count(),
            ],
            'recentSubmissions' => FormSubmission::latest()->take(8)->get()->map(fn ($s) => [
                'id' => $s->id,
                'type' => $s->type,
                'name' => $s->name,
                'email' => $s->email,
                'phone' => $s->phone,
                'status' => $s->status,
                'created_at' => $s->created_at->format('d M Y, h:i A'),
            ]),
        ]);
    }
}

<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Banner;
use App\Models\Blog;

class HomeController extends Controller
{
    public function index()
    {
        return inertia('welcome', [
            'banners' => Banner::active()->get(),
            'content' => \App\Models\PageContent::forPage('home'),
            'latestPosts' => Blog::where('status', 1)
                ->orderBy('order')
                ->limit(3)
                ->get()
                ->map(fn ($blog) => [
                    'id' => $blog->id,
                    'type' => ucfirst(str_replace('-', ' ', $blog->type)),
                    'date' => $blog->date?->format('d M Y'),
                    'title' => $blog->title,
                    'description' => $blog->short_description,
                    'image' => $blog->thumbnail,
                    'alias' => $blog->alias,
                ]),
        ]);
    }
}

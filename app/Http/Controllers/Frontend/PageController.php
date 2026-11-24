<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Blog;

class PageController extends Controller
{
    public function home2()
    {
        return inertia('home-2', ['latestPosts' => $this->latestPosts(), 'content' => \App\Models\PageContent::forPage('home-2')]);
    }

    public function home3()
    {
        return inertia('home-3', ['latestPosts' => $this->latestPosts(), 'content' => \App\Models\PageContent::forPage('home-3')]);
    }

    private function latestPosts()
    {
        return Blog::where('status', 1)
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
            ]);
    }
}

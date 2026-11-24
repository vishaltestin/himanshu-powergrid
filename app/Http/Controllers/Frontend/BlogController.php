<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Blog;
use App\Models\PageContent;

class BlogController extends Controller
{
    public function index()
    {
        return inertia('blogs', [
            'posts' => $this->posts(),
            'content' => PageContent::forPage('blogs'),
        ]);
    }

    public function news()
    {
        return inertia('news', [
            'posts' => $this->posts(),
            'content' => PageContent::forPage('news'),
        ]);
    }

    private function posts()
    {
        return Blog::where('status', 1)
            ->orderByDesc('date')
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

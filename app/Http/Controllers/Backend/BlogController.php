<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\Blog;
use App\Models\Grade;
use App\Models\ActivityCategory;
use App\Http\Requests\StoreBlogRequest;
use App\Http\Requests\UpdateBlogRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class BlogController extends Controller
{
    public function index(Request $request)
    {
        $categories = ActivityCategory::orderBy('order')->get(['id', 'title']);
        $grades = Grade::orderBy('order')->get(['id', 'name']);

        $blogs = Blog::with(['category', 'grade'])
            ->when($request->search, function ($query, $search) {
                $query->where('title', 'like', "%{$search}%")
                      ->orWhere('alias', 'like', "%{$search}%");
            })
            ->when($request->category_id, fn($q) => $q->where('category_id', $request->category_id))
            ->when($request->grade_id, fn($q) => $q->where('grade_id', $request->grade_id))
            ->orderBy('date', 'desc')
            ->orderBy('order', 'asc')
            ->paginate(15)
            ->withQueryString();

        return view('admin-dashboard.blogs.index', compact('blogs', 'categories', 'grades'));
    }

    public function create()
    {
        $categories = ActivityCategory::active()->orderBy('order')->get(['id', 'title']);
        $grades = Grade::where('status', 'active')->orderBy('order')->get(['id', 'name']);
        
        return view('admin-dashboard.blogs.create', compact('categories', 'grades'));
    }

    public function store(StoreBlogRequest $request)
    {
        $data = $request->validated();
        $data['status'] = $request->has('status');

        if (!isset($data['order']) || $data['order'] === null) {
            $data['order'] = $this->nextOrder();
        }

        Blog::create($data);

        return redirect()->route('admin.blogs.index')->with('success', 'Blog post created successfully.');
    }

    public function edit(Blog $blog)
    {
        $categories = ActivityCategory::active()->orderBy('order')->get(['id', 'title']);
        $grades = Grade::where('status', 'active')->orderBy('order')->get(['id', 'name']);
        
        return view('admin-dashboard.blogs.edit', compact('blog', 'categories', 'grades'));
    }

    public function update(UpdateBlogRequest $request, Blog $blog)
    {
        $data = $request->validated();
        $data['status'] = $request->has('status');

        if (!isset($data['order']) || $data['order'] === null) {
            $data['order'] = $this->nextOrder();
        }

        $blog->update($data);

        return redirect()->route('admin.blogs.index')->with('success', 'Blog post updated successfully.');
    }

    public function destroy(Blog $blog)
    {
        $blog->delete();
        return redirect()->route('admin.blogs.index')->with('success', 'Blog post deleted successfully.');
    }

    public function toggleStatus(Blog $blog)
    {
        $blog->update(['status' => !$blog->status]);
        return back()->with('success', 'Blog status updated.');
    }

    private function nextOrder(): int
    {
        return (int) DB::table('blogs')->max('order') + 1;
    }
}
<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\Video;
use App\Models\Grade;
use App\Models\ActivityCategory;
use App\Http\Requests\StoreVideoRequest;
use App\Http\Requests\UpdateVideoRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class VideoController extends Controller
{
    public function index(Request $request)
    {
        $categories = ActivityCategory::orderBy('order')->get(['id', 'title']);
        $grades = Grade::orderBy('order')->get(['id', 'name']);

        $videos = Video::with(['category', 'grade'])
            ->when($request->search, function ($query, $search) {
                $query->where('title', 'like', "%{$search}%")
                      ->orWhere('alias', 'like', "%{$search}%");
            })
            ->when($request->category_id, fn($q) => $q->where('category_id', $request->category_id))
            ->when($request->grade_id, fn($q) => $q->where('grade_id', $request->grade_id))
            ->orderBy('order', 'asc')
            ->latest()
            ->paginate(15)
            ->withQueryString();

        return view('admin-dashboard.videos.index', compact('videos', 'categories', 'grades'));
    }

    public function create()
    {
        $categories = ActivityCategory::active()->orderBy('order')->get(['id', 'title']);
        $grades = Grade::where('status', 'active')->orderBy('order')->get(['id', 'name']);
        
        return view('admin-dashboard.videos.create', compact('categories', 'grades'));
    }

    public function store(StoreVideoRequest $request)
    {
        $data = $request->validated();
        $data['status'] = $request->has('status');

        if (!isset($data['order']) || $data['order'] === null) {
            $data['order'] = $this->nextOrder();
        }

        Video::create($data);

        return redirect()->route('admin.videos.index')->with('success', 'Video added successfully.');
    }

    public function edit(Video $video)
    {
        $categories = ActivityCategory::active()->orderBy('order')->get(['id', 'title']);
        $grades = Grade::where('status', 'active')->orderBy('order')->get(['id', 'name']);
        
        return view('admin-dashboard.videos.edit', compact('video', 'categories', 'grades'));
    }

    public function update(UpdateVideoRequest $request, Video $video)
    {
        $data = $request->validated();
        $data['status'] = $request->has('status');

        if (!isset($data['order']) || $data['order'] === null) {
            $data['order'] = $this->nextOrder();
        }

        $video->update($data);

        return redirect()->route('admin.videos.index')->with('success', 'Video updated successfully.');
    }

    public function destroy(Video $video)
    {
        $video->delete();
        return redirect()->route('admin.videos.index')->with('success', 'Video deleted successfully.');
    }

    public function toggleStatus(Video $video)
    {
        $video->update(['status' => !$video->status]);
        return back()->with('success', 'Video status updated.');
    }

    private function nextOrder(): int
    {
        return (int) DB::table('videos')->max('order') + 1;
    }
}
<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreActivityRequest;
use App\Http\Requests\UpdateActivityRequest;
use App\Models\Activity;
use App\Models\ActivityCategory;
use App\Models\Grade; // <-- ADDED THIS IMPORT
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use Illuminate\View\View;

class ActivityController extends Controller
{
    public function index(Request $request): View
    {
        // Fetch categories and grades for the filter dropdowns
        $categories = ActivityCategory::orderBy('order')->get(['id', 'title']);
        $grades = Grade::orderBy('order')->get(['id', 'name']); 

        $activities = Activity::with(['category', 'grade']) // <-- Eager load the singular relationships
            // Apply Search
            ->when($request->filled('search'), fn($query) => $query->where(function ($searchQuery) use ($request) {
                $searchQuery->where('title', 'like', '%' . $request->string('search') . '%')
                    ->orWhere('slug', 'like', '%' . $request->string('search') . '%')
                    ->orWhereHas('category', fn($categoryQuery) => $categoryQuery->where('title', 'like', '%' . $request->string('search') . '%'))
                    ->orWhereHas('grade', fn($gradeQuery) => $gradeQuery->where('name', 'like', '%' . $request->string('search') . '%'));
            }))
            // Apply Status Filter
            ->when($request->filled('status'), fn($query) => $query->where('status', $request->status))
            // Apply Strict Category Filter 
            ->when($request->filled('category_id'), fn($query) => $query->where('category_id', $request->category_id))
            // Apply Strict Grade Filter 
            ->when($request->filled('grade_id'), fn($query) => $query->where('grade_id', $request->grade_id))
            ->latest()
            ->paginate(15)
            ->withQueryString();

        // Pass $grades to the view
        return view('admin-dashboard.activities.index', compact('activities', 'categories', 'grades'));
    }

    public function create(): View
    {
        $categories = $this->activeCategories();
        $grades = Grade::where('status', 'active')->orderBy('order')->get(['id', 'name']);
        
        return view('admin-dashboard.activities.create', compact('categories', 'grades'));
    }

    public function store(StoreActivityRequest $request): RedirectResponse
    {
        $data = $request->validated();
        
        if (!isset($data['order']) || $data['order'] === null) {
            $data['order'] = $this->nextOrder();
        }

        if ($request->hasFile('pdf')) {
            $file = $request->file('pdf');
            $filename = time() . '_' . $file->getClientOriginalName();
            $file->move(public_path('file-manager/activity-files'), $filename);
            $data['pdf'] = '/file-manager/activity-files/' . $filename;
        }

        // Create the activity (grade_id and category_id save automatically!)
        Activity::create($data);
        
        // DELETED: $activity->categories()->sync()

        return redirect()->route('admin.activities.index')->with('success', 'Activity created successfully.');
    }

    public function edit(Activity $activity): View
    {
        $categories = $this->activeCategories();
        $grades = Grade::where('status', 'active')->orderBy('order')->get(['id', 'name']);
        
        return view('admin-dashboard.activities.edit', compact('activity', 'categories', 'grades'));
    }

    public function update(UpdateActivityRequest $request, Activity $activity): RedirectResponse
    {
        $data = $request->validated();

        if ($request->hasFile('pdf')) {
            $file = $request->file('pdf');
            $filename = time() . '_' . $file->getClientOriginalName();
            $file->move(public_path('file-manager/activity-files'), $filename);
            $data['pdf'] = '/file-manager/activity-files/' . $filename;
        } else {
            unset($data['pdf']);
        }

        // Update the activity (grade_id and category_id update automatically!)
        $activity->update($data);
        
        // DELETED: $activity->categories()->sync()

        return redirect()->route('admin.activities.index')->with('success', 'Activity updated successfully.');
    }

    public function destroy(Activity $activity): RedirectResponse
    {
        $activity->delete();

        return redirect()->route('admin.activities.index')->with('success', 'Activity deleted successfully.');
    }

    public function toggleStatus(Activity $activity): RedirectResponse
    {
        $activity->update(['status' => $activity->status === 'active' ? 'inactive' : 'active']);

        return back()->with('success', 'Activity status updated successfully.');
    }

    private function activeCategories()
    {
        return ActivityCategory::active()->orderBy('order')->orderBy('title')->get(['id', 'title']);
    }

    private function nextOrder(): int
    {
        return DB::table('activities')->max('order') + 1;
    }

    private function deleteLegacyPdf(?string $path): void
    {
        if ($path && str_starts_with($path, 'photos/')) {
            File::delete(public_path($path));
        }
    }
}
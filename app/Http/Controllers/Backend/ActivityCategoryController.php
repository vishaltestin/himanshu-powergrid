<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreActivityCategoryRequest;
use App\Http\Requests\UpdateActivityCategoryRequest;
use App\Models\ActivityCategory;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\View\View;

class ActivityCategoryController extends Controller
{
    public function index(Request $request): View
    {
        $categories = ActivityCategory::query()
            ->withCount('activities')
            ->when($request->filled('search'), fn ($query) => $query->where(function ($searchQuery) use ($request) {
                $searchQuery->where('title', 'like', '%'.$request->string('search').'%')
                    ->orWhere('slug', 'like', '%'.$request->string('search').'%');
            }))
            ->orderBy('order')
            ->latest()
            ->paginate(15)
            ->withQueryString();

        return view('admin-dashboard.activity-categories.index', compact('categories'));
    }

    public function create(): View
    {
        return view('admin-dashboard.activity-categories.create');
    }

    public function store(StoreActivityCategoryRequest $request): RedirectResponse
    {
        $data = $request->validated();
        $data['order'] ??= $this->nextOrder();

        // 1. Handle PDF Upload
        if ($request->hasFile('pdf')) {
            $file = $request->file('pdf');
            $filename = time() . '_' . $file->getClientOriginalName();
            $file->move(public_path('file-manager/category-files'), $filename);
            $data['pdf'] = '/file-manager/category-files/' . $filename;
        }

        ActivityCategory::create($data);

        return redirect()->route('admin.activity-categories.index')->with('success', 'Activity category created successfully.');
    }

    public function edit(ActivityCategory $activityCategory): View
    {
        return view('admin-dashboard.activity-categories.edit', compact('activityCategory'));
    }

    public function update(UpdateActivityCategoryRequest $request, ActivityCategory $activityCategory): RedirectResponse
    {
        $data = $request->validated();
        $data['order'] ??= $activityCategory->order;

        // 2. Handle PDF Replacement
        if ($request->hasFile('pdf')) {
            // Delete the old PDF if it exists
            if ($activityCategory->pdf && file_exists(public_path(ltrim($activityCategory->pdf, '/')))) {
                unlink(public_path(ltrim($activityCategory->pdf, '/')));
            }

            $file = $request->file('pdf');
            $filename = time() . '_' . $file->getClientOriginalName();
            $file->move(public_path('file-manager/category-files'), $filename);
            $data['pdf'] = '/file-manager/category-files/' . $filename;
        } else {
            // Prevent the update method from accidentally clearing the PDF if no new file is uploaded
            unset($data['pdf']);
        }

        $activityCategory->update($data);

        return redirect()->route('admin.activity-categories.index')->with('success', 'Activity category updated successfully.');
    }

    public function destroy(ActivityCategory $activityCategory): RedirectResponse
    {
        if ($activityCategory->activities()->exists()) {
            return back()->with('error', 'This category cannot be deleted while it has activities.');
        }

        // 3. Delete physical file on record deletion
        if ($activityCategory->pdf && file_exists(public_path(ltrim($activityCategory->pdf, '/')))) {
            unlink(public_path(ltrim($activityCategory->pdf, '/')));
        }

        $activityCategory->delete();

        return redirect()->route('admin.activity-categories.index')->with('success', 'Activity category deleted successfully.');
    }

    public function toggleStatus(ActivityCategory $activityCategory): RedirectResponse
    {
        $activityCategory->update(['status' => ! $activityCategory->status]);

        return back()->with('success', 'Activity category status updated successfully.');
    }

    private function nextOrder(): int
    {
        return DB::table('activity_categories')->max('order') + 1;
    }
}
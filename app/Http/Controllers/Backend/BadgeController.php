<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\Badge;
use App\Models\ActivityCategory;
use App\Http\Requests\StoreBadgeRequest;
use Illuminate\Http\Request;

class BadgeController extends Controller
{
    public function index(Request $request)
    {
        $badges = Badge::with('category')
            ->when($request->search, function ($query, $search) {
                $query->where('title', 'like', "%{$search}%");
            })
            ->latest()
            ->paginate(15)
            ->withQueryString();

        return view('admin-dashboard.badges.index', compact('badges'));
    }

    public function create()
    {
        // Only fetch categories that don't already have a badge assigned
        $existingCategoryIds = Badge::pluck('category_id')->toArray();
        $categories = ActivityCategory::whereNotIn('id', $existingCategoryIds)->orderBy('title')->get();

        return view('admin-dashboard.badges.create', compact('categories'));
    }

    public function store(StoreBadgeRequest $request)
    {
        $data = $request->validated();
        $data['status'] = $request->has('status');

        Badge::create($data);

        return redirect()->route('admin.badges.index')->with('success', 'Badge created successfully.');
    }

    public function edit(Badge $badge)
    {
        // Include the current badge's category in the list
        $existingCategoryIds = Badge::where('id', '!=', $badge->id)->pluck('category_id')->toArray();
        $categories = ActivityCategory::whereNotIn('id', $existingCategoryIds)->orderBy('title')->get();

        return view('admin-dashboard.badges.edit', compact('badge', 'categories'));
    }

    public function update(StoreBadgeRequest $request, Badge $badge)
    {
        $data = $request->validated();
        $data['status'] = $request->has('status');

        $badge->update($data);

        return redirect()->route('admin.badges.index')->with('success', 'Badge updated successfully.');
    }

    public function destroy(Badge $badge)
    {
        $badge->delete();
        return redirect()->route('admin.badges.index')->with('success', 'Badge deleted successfully.');
    }

    public function toggleStatus(Badge $badge)
    {
        $badge->update(['status' => !$badge->status]);
        return back()->with('success', 'Badge status updated.');
    }
}
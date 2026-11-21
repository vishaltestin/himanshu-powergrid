<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\Grade;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Illuminate\View\View;

class GradeController extends Controller
{
    public function index(): View
    {
        $grades = Grade::orderBy('order')->paginate(15);
        return view('admin-dashboard.grades.index', compact('grades'));
    }

    public function create(): View
    {
        return view('admin-dashboard.grades.create');
    }

    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255|unique:grades,name',
            'order' => 'required|integer|min:0',
            'status' => 'required|in:active,inactive',
        ]);

        Grade::create($validated);

        return redirect()->route('admin.grades.index')->with('success', 'Grade created successfully.');
    }

    public function edit(Grade $grade): View
    {
        return view('admin-dashboard.grades.edit', compact('grade'));
    }

    public function update(Request $request, Grade $grade): RedirectResponse
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255|unique:grades,name,' . $grade->id,
            'order' => 'required|integer|min:0',
            'status' => 'required|in:active,inactive',
        ]);

        $grade->update($validated);

        return redirect()->route('admin.grades.index')->with('success', 'Grade updated successfully.');
    }

    public function destroy(Grade $grade): RedirectResponse
    {
        // Prevent deletion if activities are attached (Optional but recommended)
        if ($grade->activities()->count() > 0) {
            return back()->with('error', 'Cannot delete this grade because it has activities assigned to it.');
        }

        $grade->delete();

        return redirect()->route('admin.grades.index')->with('success', 'Grade deleted successfully.');
    }
}
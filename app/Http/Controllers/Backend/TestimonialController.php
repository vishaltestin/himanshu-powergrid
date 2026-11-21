<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\Testimonial;
use App\Http\Requests\StoreTestimonialRequest;
use Illuminate\Http\Request;

class TestimonialController extends Controller
{
    public function index(Request $request)
    {
        $testimonials = Testimonial::when($request->search, function ($query, $search) {
                $query->where('name', 'like', "%{$search}%")
                      ->orWhere('designation', 'like', "%{$search}%");
            })
            ->latest('date')
            ->paginate(15)
            ->withQueryString();

        return view('admin-dashboard.testimonials.index', compact('testimonials'));
    }

    public function create()
    {
        return view('admin-dashboard.testimonials.create');
    }

    public function store(StoreTestimonialRequest $request)
    {
        $data = $request->validated();
        $data['status'] = $request->has('status');
        $data['is_show_on_home'] = $request->has('is_show_on_home');

        Testimonial::create($data);

        return redirect()->route('admin.testimonials.index')->with('success', 'Testimonial added successfully.');
    }

    public function edit(Testimonial $testimonial)
    {
        return view('admin-dashboard.testimonials.edit', compact('testimonial'));
    }

    public function update(StoreTestimonialRequest $request, Testimonial $testimonial)
    {
        $data = $request->validated();
        $data['status'] = $request->has('status');
        $data['is_show_on_home'] = $request->has('is_show_on_home');

        $testimonial->update($data);

        return redirect()->route('admin.testimonials.index')->with('success', 'Testimonial updated successfully.');
    }

    public function destroy(Testimonial $testimonial)
    {
        $testimonial->delete();
        return redirect()->route('admin.testimonials.index')->with('success', 'Testimonial deleted successfully.');
    }

    public function toggleStatus(Testimonial $testimonial)
    {
        $testimonial->update(['status' => !$testimonial->status]);
        return back()->with('success', 'Status updated.');
    }

    public function toggleHome(Testimonial $testimonial)
    {
        $testimonial->update(['is_show_on_home' => !$testimonial->is_show_on_home]);
        return back()->with('success', 'Home visibility updated.');
    }
}
<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Testimonial;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class TestimonialController extends Controller
{
    public function index(Request $request): JsonResponse
    {
        $query = Testimonial::where('status', 1);

        if ($request->has('home') && $request->home == 'true') {
            $query->where('is_show_on_home', 1);
        }

        $testimonials = $query->orderBy('date', 'desc')->get();

        return response()->json([
            'success' => true,
            'data'    => $testimonials
        ]);
    }
}
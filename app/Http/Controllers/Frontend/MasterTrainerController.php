<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\MasterTrainer;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class MasterTrainerController extends Controller
{
    public function index(Request $request): JsonResponse
    {
        $query = \App\Models\MasterTrainer::query();

        if ($request->filled('district')) {
            $query->where('district', $request->district);
        }

        if ($request->filled('search')) {
            $search = $request->search;
            $query->where(function ($q) use ($search) {
                $q->where('name', 'like', "%{$search}%")
                  ->orWhere('school_name', 'like', "%{$search}%");
            });
        }

        // CHANGE THIS LINE: Use paginate() instead of get()
        $trainers = $query->latest()->paginate(12);

        $districts = \App\Models\MasterTrainer::whereNotNull('district')
            ->distinct()
            ->orderBy('district')
            ->pluck('district');

        return response()->json([
            'success' => true,
            'data' => [
                'trainers' => $trainers, // This is now a paginated object!
                'districts' => $districts
            ]
        ]);
    }
}
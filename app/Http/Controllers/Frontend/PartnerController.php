<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Partner;
use Illuminate\Http\JsonResponse;

class PartnerController extends Controller
{
    public function index(): JsonResponse
    {
        $partners = Partner::where('status', 1)
            ->orderBy('order', 'asc')
            ->get(['id', 'title', 'image', 'description']);

        return response()->json([
            'success' => true,
            'data' => $partners
        ]);
    }
}
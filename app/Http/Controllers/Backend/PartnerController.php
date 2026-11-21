<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\Partner;
use App\Http\Requests\StorePartnerRequest;
use Illuminate\Http\Request;

class PartnerController extends Controller
{
    public function index(Request $request)
    {
        $partners = Partner::when($request->search, function ($query, $search) {
                $query->where('title', 'like', "%{$search}%");
            })
            ->orderBy('order', 'asc')
            ->latest()
            ->paginate(15)
            ->withQueryString();

        return view('admin-dashboard.partners.index', compact('partners'));
    }

    public function create()
    {
        return view('admin-dashboard.partners.create');
    }

    public function store(StorePartnerRequest $request)
    {
        $data = $request->validated();
        $data['status'] = $request->has('status');
        $data['order'] = $data['order'] ?? (Partner::max('order') + 1);

        Partner::create($data);

        return redirect()->route('admin.partners.index')->with('success', 'Partner added successfully.');
    }

    public function edit(Partner $partner)
    {
        return view('admin-dashboard.partners.edit', compact('partner'));
    }

    public function update(StorePartnerRequest $request, Partner $partner)
    {
        $data = $request->validated();
        $data['status'] = $request->has('status');

        $partner->update($data);

        return redirect()->route('admin.partners.index')->with('success', 'Partner updated successfully.');
    }

    public function destroy(Partner $partner)
    {
        $partner->delete();
        return redirect()->route('admin.partners.index')->with('success', 'Partner deleted successfully.');
    }
}
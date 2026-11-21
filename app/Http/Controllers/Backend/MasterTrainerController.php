<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\MasterTrainer;
use App\Imports\MasterTrainersImport;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;

class MasterTrainerController extends Controller
{
    public function index(Request $request)
    {
        $trainers = MasterTrainer::when($request->search, function ($query, $search) {
                $query->where('name', 'like', "%{$search}%")
                      ->orWhere('district', 'like', "%{$search}%")
                      ->orWhere('school_name', 'like', "%{$search}%");
            })
            ->latest()
            ->paginate(15)
            ->withQueryString();

        return view('admin-dashboard.master-trainers.index', compact('trainers'));
    }

    public function create()
    {
        return view('admin-dashboard.master-trainers.create');
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'name'           => 'required|string|max:255',
            'district'       => 'nullable|string|max:255',
            'school_name'    => 'nullable|string|max:255',
            'contact_number' => 'nullable|string|max:255',
            'email'          => 'nullable|email|max:255',
        ]);

        MasterTrainer::create($data);

        return redirect()->route('admin.master-trainers.index')->with('success', 'Master Trainer added successfully.');
    }

    public function edit(MasterTrainer $masterTrainer)
    {
        return view('admin-dashboard.master-trainers.edit', compact('masterTrainer'));
    }

    public function update(Request $request, MasterTrainer $masterTrainer)
    {
        $data = $request->validate([
            'name'           => 'required|string|max:255',
            'district'       => 'nullable|string|max:255',
            'school_name'    => 'nullable|string|max:255',
            'contact_number' => 'nullable|string|max:255',
            'email'          => 'nullable|email|max:255',
        ]);

        $masterTrainer->update($data);

        return redirect()->route('admin.master-trainers.index')->with('success', 'Master Trainer updated successfully.');
    }

    public function destroy(MasterTrainer $masterTrainer)
    {
        $masterTrainer->delete();
        return redirect()->route('admin.master-trainers.index')->with('success', 'Master Trainer deleted successfully.');
    }

    public function import(Request $request)
    {
        set_time_limit(0); 

        $request->validate([
            'file' => 'required|mimes:xlsx,xls,csv'
        ]);

        try {
            Excel::import(new MasterTrainersImport, $request->file('file'));
            return back()->with('success', 'Master Trainers imported successfully from Excel.');
        } catch (\Exception $e) {
            return back()->with('error', 'Error importing file: ' . $e->getMessage());
        }
    }
}
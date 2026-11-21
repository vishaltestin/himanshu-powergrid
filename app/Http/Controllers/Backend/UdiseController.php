<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\AllowedUdiseCode;
use Illuminate\Http\Request;
use App\Imports\UdiseCodesImport;
use Maatwebsite\Excel\Facades\Excel;
use Illuminate\Support\Facades\Gate;

class UdiseController extends Controller
{
    // public function index()
    // {
    //     $codes = AllowedUdiseCode::latest()->paginate(15);
    //     return view('admin-dashboard.udise.index', compact('codes'));
    // }
    public function index(Request $request)
    {

        Gate::authorize('view_udise_codes');

        $search = $request->search;

        $codes = AllowedUdiseCode::latest()
            ->when($search, function ($query) use ($search) {

                $query->where(function ($q) use ($search) {

                    $q->where('udise_code', 'like', "%{$search}%")
                        ->orWhere('school_name', 'like', "%{$search}%")
                        ->orWhere('district', 'like', "%{$search}%")
                        ->orWhereDate('created_at', $search)
                        ->orWhereDate('updated_at', $search);
                });
            })
            ->orderBy('id', 'asc')
            ->paginate(50)
            ->withQueryString();

        return view('admin-dashboard.udise.index', compact('codes'));
    }

    public function create()
    {
        Gate::authorize('create_udise_code');

        return view('admin-dashboard.udise.create');
    }

    public function store(Request $request)
    {

        Gate::authorize('create_udise_code');

        $request->validate([
            'udise_code' => ['required', 'string', 'min:11', 'max:11', 'unique:allowed_udise_codes,udise_code'],
            'school_name' => ['required', 'string', 'max:255'],
            'district' => ['required', 'string', 'max:255']
        ], [
            'udise_code.unique' => 'This UDISE code is already in the system.',
            'udise_code.min' => 'UDISE codes must be exactly 11 characters.',
            'school_name.required' => 'The school name is required.',
            'district.required' => 'The district is required.'
        ]);

        AllowedUdiseCode::create([
            'udise_code' => $request->udise_code,
            'school_name' => $request->school_name,
            'district' => $request->district,
            'status' => 1,
            'is_used' => 0
        ]);

        return back()->with('success', 'UDISE Code successfully added.');
    }

    public function toggleStatus(AllowedUdiseCode $udise)
    {

        Gate::authorize('edit_udise_code');

        $udise->update([
            'status' => !$udise->status
        ]);

        $status = $udise->status ? 'activated' : 'suspended';
        return back()->with('success', "UDISE Code has been {$status}.");
    }

    public function destroy(AllowedUdiseCode $udise)
    {

        Gate::authorize('delete_udise_code');

        if ($udise->is_used) {
            return back()->with('error', 'Cannot delete this code because a school has already registered with it.');
        }

        $udise->delete();

        return back()->with('success', 'UDISE Code deleted permanently.');
    }

    public function bulkDestroy(Request $request)
    {
        Gate::authorize('delete_udise_code');

        // Decode the JSON array sent from Alpine.js
        $ids = json_decode($request->ids, true);

        if (empty($ids) || !is_array($ids)) {
            return back()->with('error', 'No codes were selected for deletion.');
        }

        // Check if any of the selected codes are already in use (locked)
        $usedCodesCount = AllowedUdiseCode::whereIn('id', $ids)->where('is_used', 1)->count();

        if ($usedCodesCount > 0) {
            return back()->with('error', 'Cannot perform bulk delete: Some of the selected codes have already been claimed by schools.');
        }

        // Execute the bulk delete
        AllowedUdiseCode::whereIn('id', $ids)->delete();

        return back()->with('success', count($ids) . ' UDISE Codes were deleted successfully.');
    }

    public function import(Request $request)
    {
        set_time_limit(0);

        Gate::authorize('create_udise_code');

        $request->validate([
            'file' => ['required', 'file', 'mimes:xlsx,xls,csv', 'max:5120'],
        ]);

        try {

            Excel::import(
                new UdiseCodesImport,
                $request->file('file')
            );

            return back()->with(
                'success',
                'UDISE codes imported successfully! Duplicates were automatically skipped.'
            );
        } catch (\Maatwebsite\Excel\Validators\ValidationException $e) {

            return back()->with(
                'error',
                'Some rows failed validation. Please check the Excel format.'
            );
        } catch (\Throwable $e) {

            \Log::error($e);

            return back()->with(
                'error',
                'There was an error processing the file.'
            );
        }
    }
}

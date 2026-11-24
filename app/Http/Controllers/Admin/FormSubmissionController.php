<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\FormSubmission;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response as IlluminateResponse;
use Inertia\Inertia;
use Inertia\Response;

class FormSubmissionController extends Controller
{
    public function index(Request $request): Response
    {
        $query = FormSubmission::query()
            ->when($request->filled('type') && $request->input('type') !== 'all', fn ($q) => $q->where('type', $request->input('type')))
            ->when($request->filled('status') && $request->input('status') !== 'all', fn ($q) => $q->where('status', $request->input('status')))
            ->when($request->filled('search'), function ($q) use ($request) {
                $search = $request->input('search');
                $q->where(function ($qq) use ($search) {
                    $qq->where('name', 'like', "%{$search}%")
                        ->orWhere('email', 'like', "%{$search}%")
                        ->orWhere('phone', 'like', "%{$search}%")
                        ->orWhere('message', 'like', "%{$search}%");
                });
            });

        return Inertia::render('admin/submissions/index', [
            'submissions' => $query->latest()->paginate(15)->withQueryString(),
            'filters' => $request->only(['type', 'status', 'search']),
            'counts' => [
                'all' => FormSubmission::count(),
                'new' => FormSubmission::where('status', 'new')->count(),
                'contact' => FormSubmission::where('type', 'contact')->count(),
                'enquiry' => FormSubmission::where('type', 'enquiry')->count(),
                'career' => FormSubmission::where('type', 'career')->count(),
                'newsletter' => FormSubmission::where('type', 'newsletter')->count(),
            ],
        ]);
    }

    public function show(FormSubmission $submission): Response
    {
        if ($submission->status === 'new') {
            $submission->update(['status' => 'read']);
        }

        return Inertia::render('admin/submissions/show', ['submission' => $submission]);
    }

    public function update(Request $request, FormSubmission $submission): RedirectResponse
    {
        $validated = $request->validate([
            'status' => ['required', 'in:new,read,archived'],
        ]);

        $submission->update($validated);

        return back()->with('message', 'Submission updated.');
    }

    public function destroy(FormSubmission $submission): RedirectResponse
    {
        $submission->delete();

        return back()->with('message', 'Submission deleted.');
    }

    public function export(Request $request)
    {
        $rows = FormSubmission::query()
            ->when($request->filled('type') && $request->input('type') !== 'all', fn ($q) => $q->where('type', $request->input('type')))
            ->latest()
            ->get();

        $csv = "ID,Type,Status,Name,Email,Phone,Subject,Message,Data,Created At\n";

        foreach ($rows as $row) {
            $csv .= implode(',', array_map(function ($value) {
                $value = (string) ($value ?? '');
                return '"' . str_replace('"', '""', $value) . '"';
            }, [
                $row->id,
                $row->type,
                $row->status,
                $row->name,
                $row->email,
                $row->phone,
                $row->subject,
                $row->message,
                $row->data ? json_encode($row->data) : '',
                $row->created_at->format('Y-m-d H:i:s'),
            ])) . "\n";
        }

        return IlluminateResponse::streamDownload(function () use ($csv) {
            echo $csv;
        }, 'form-submissions-' . now()->format('Ymd-His') . '.csv', [
            'Content-Type' => 'text/csv',
        ]);
    }
}

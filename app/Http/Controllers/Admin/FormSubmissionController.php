<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\FormSubmission;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\View\View;
use Symfony\Component\HttpFoundation\StreamedResponse;

class FormSubmissionController extends Controller
{
    public const TYPES = ['contact' => 'Contact', 'enquiry' => 'Enquiry', 'career' => 'Career', 'newsletter' => 'Newsletter', 'other' => 'Other'];
    public const STATUSES = ['new' => 'New', 'read' => 'Read', 'archived' => 'Archived'];

    private function filtered(Request $request)
    {
        return FormSubmission::query()
            ->when($request->filled('type'), fn ($q) => $q->where('type', $request->input('type')))
            ->when($request->filled('status'), fn ($q) => $q->where('status', $request->input('status')))
            ->when($request->filled('search'), function ($q) use ($request) {
                $s = '%' . $request->input('search') . '%';
                $q->where(fn ($w) => $w->where('name', 'like', $s)->orWhere('email', 'like', $s)->orWhere('phone', 'like', $s)->orWhere('message', 'like', $s)->orWhere('subject', 'like', $s));
            });
    }

    public function index(Request $request): View
    {
        return view('admin.submissions.index', [
            'submissions' => $this->filtered($request)->latest()->paginate(20)->withQueryString(),
            'types' => self::TYPES,
            'statuses' => self::STATUSES,
            'typeCounts' => FormSubmission::selectRaw('type, count(*) as total')->groupBy('type')->pluck('total', 'type'),
            'newCount' => FormSubmission::where('status', 'new')->count(),
            'total' => FormSubmission::count(),
        ]);
    }

    public function show(FormSubmission $submission): View
    {
        if ($submission->status === 'new') {
            $submission->update(['status' => 'read']);
        }

        return view('admin.submissions.show', [
            'submission' => $submission,
            'statuses' => self::STATUSES,
            'types' => self::TYPES,
            'prev' => FormSubmission::where('id', '>', $submission->id)->orderBy('id')->value('id'),
            'next' => FormSubmission::where('id', '<', $submission->id)->orderByDesc('id')->value('id'),
        ]);
    }

    public function update(Request $request, FormSubmission $submission): RedirectResponse
    {
        $submission->update($request->validate(['status' => ['required', 'in:' . implode(',', array_keys(self::STATUSES))]]));

        return back()->with('message', 'Marked as ' . strtolower(self::STATUSES[$submission->status]) . '.');
    }

    public function bulk(Request $request): RedirectResponse
    {
        $data = $request->validate([
            'ids' => ['required', 'array'],
            'ids.*' => ['integer'],
            'action' => ['required', 'in:read,new,archived,delete'],
        ]);

        $query = FormSubmission::whereIn('id', $data['ids']);
        $count = $query->count();
        $data['action'] === 'delete' ? $query->delete() : $query->update(['status' => $data['action']]);

        return back()->with('message', "{$count} submission(s) updated.");
    }

    public function destroy(FormSubmission $submission): RedirectResponse
    {
        $submission->delete();

        return redirect()->route('admin.submissions.index')->with('message', 'Submission deleted.');
    }

    public function export(Request $request): StreamedResponse
    {
        $rows = $this->filtered($request)->latest()->get();

        return response()->streamDownload(function () use ($rows) {
            $out = fopen('php://output', 'w');
            fputcsv($out, ['ID', 'Type', 'Status', 'Name', 'Email', 'Phone', 'Subject', 'Message', 'Extra data', 'Submitted at']);
            foreach ($rows as $row) {
                $extra = collect($row->data ?? [])->map(fn ($v, $k) => $k . ': ' . (is_array($v) ? json_encode($v) : $v))->implode(' | ');
                fputcsv($out, [$row->id, $row->type, $row->status, $row->name, $row->email, $row->phone, $row->subject, $row->message, $extra, $row->created_at->format('Y-m-d H:i:s')]);
            }
            fclose($out);
        }, 'submissions-' . now()->format('Ymd-His') . '.csv', ['Content-Type' => 'text/csv']);
    }
}

<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\TeamMember;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\View\View;

class TeamMemberController extends Controller
{
    public const GROUPS = ['board' => 'Board of Directors', 'leadership' => 'Leadership Team'];

    public function index(): View
    {
        $members = TeamMember::orderBy('order')->get()->groupBy('group');

        return view('admin.team.index', ['members' => $members, 'groups' => self::GROUPS]);
    }

    public function create(Request $request): View
    {
        $group = array_key_exists($request->input('group'), self::GROUPS) ? $request->input('group') : 'board';

        return $this->form(new TeamMember(['group' => $group, 'status' => true, 'order' => (TeamMember::where('group', $group)->max('order') ?? 0) + 1]));
    }

    public function store(Request $request): RedirectResponse
    {
        TeamMember::create($this->validated($request));

        return redirect()->route('admin.team-members.index')->with('message', 'Team member added.');
    }

    public function edit(TeamMember $teamMember): View
    {
        return $this->form($teamMember);
    }

    public function update(Request $request, TeamMember $teamMember): RedirectResponse
    {
        $teamMember->update($this->validated($request));

        return redirect()->route('admin.team-members.index')->with('message', 'Team member updated.');
    }

    public function destroy(TeamMember $teamMember): RedirectResponse
    {
        $teamMember->delete();

        return back()->with('message', 'Team member removed.');
    }

    public function toggleStatus(TeamMember $teamMember): RedirectResponse
    {
        $teamMember->update(['status' => !$teamMember->status]);

        return back()->with('message', 'Status updated.');
    }

    public function reorder(Request $request): JsonResponse
    {
        foreach ($request->validate(['ids' => ['required', 'array']])['ids'] as $i => $id) {
            TeamMember::whereKey($id)->update(['order' => $i + 1]);
        }

        return response()->json(['ok' => true]);
    }

    private function form(TeamMember $member): View
    {
        $values = $member->toArray();
        $values['paragraphs'] = array_map(fn ($p) => ['text' => $p], $member->paragraphs ?? []);

        return view('admin.crud.form', [
            'title' => $member->exists ? 'Edit team member' : 'New team member',
            'back' => route('admin.team-members.index'),
            'backLabel' => 'Team',
            'action' => $member->exists ? route('admin.team-members.update', $member) : route('admin.team-members.store'),
            'method' => $member->exists ? 'PUT' : 'POST',
            'values' => $values,
            'fields' => [
                ['name' => 'name', 'label' => 'Name', 'type' => 'text', 'required' => true, 'width' => 'half'],
                ['name' => 'designation', 'label' => 'Designation', 'type' => 'text', 'width' => 'half'],
                ['name' => 'description', 'label' => 'Short bio', 'type' => 'textarea', 'rows' => 3, 'help' => 'Shown on the card.'],
                ['name' => 'paragraphs', 'label' => 'Full profile paragraphs', 'type' => 'repeater', 'singular' => 'Paragraph', 'item_label' => 'text',
                    'help' => 'Shown in the profile popup.', 'fields' => [['name' => 'text', 'label' => 'Paragraph', 'type' => 'textarea', 'rows' => 3]]],
                ['name' => 'highlights', 'label' => 'Highlights', 'type' => 'repeater', 'singular' => 'Highlight', 'item_label' => 'label', 'fields' => [
                    ['name' => 'value', 'label' => 'Value', 'type' => 'text', 'width' => 'half', 'placeholder' => '25+'],
                    ['name' => 'label', 'label' => 'Label', 'type' => 'text', 'width' => 'half', 'placeholder' => 'Years experience'],
                ]],
            ],
            'sidebar' => [
                ['name' => 'status', 'label' => 'Visible on website', 'type' => 'toggle'],
                ['name' => 'group', 'label' => 'Group', 'type' => 'select', 'options' => self::GROUPS],
                ['name' => 'image', 'label' => 'Photo', 'type' => 'image'],
                ['name' => 'order', 'label' => 'Sort order', 'type' => 'number'],
            ],
        ]);
    }

    private function validated(Request $request): array
    {
        $data = $request->validate([
            'group' => ['required', 'in:' . implode(',', array_keys(self::GROUPS))],
            'name' => ['required', 'string', 'max:255'],
            'designation' => ['nullable', 'string', 'max:255'],
            'image' => ['nullable', 'string', 'max:1000'],
            'description' => ['nullable', 'string', 'max:3000'],
            'paragraphs' => ['nullable', 'array'],
            'paragraphs.*.text' => ['nullable', 'string', 'max:5000'],
            'highlights' => ['nullable', 'array'],
            'highlights.*.value' => ['nullable', 'string', 'max:50'],
            'highlights.*.label' => ['nullable', 'string', 'max:100'],
            'order' => ['nullable', 'integer', 'min:0'],
        ]);

        $data['paragraphs'] = collect($data['paragraphs'] ?? [])->pluck('text')->map(fn ($t) => trim((string) $t))->filter()->values()->all();
        $data['highlights'] = collect($data['highlights'] ?? [])->filter(fn ($h) => filled($h['value'] ?? null) || filled($h['label'] ?? null))
            ->map(fn ($h) => ['value' => $h['value'] ?? '', 'label' => $h['label'] ?? ''])->values()->all();
        $data['order'] = (int) ($data['order'] ?? 0);
        $data['status'] = $request->boolean('status');

        return $data;
    }
}

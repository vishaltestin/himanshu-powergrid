<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\TeamMember;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Response;
use Inertia\Inertia;

class TeamMemberController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('admin/team/index', [
            'members' => TeamMember::orderBy('group')->orderBy('order')->get(),
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('admin/team/edit', ['member' => null]);
    }

    public function store(Request $request): RedirectResponse
    {
        TeamMember::create($this->validate($request));

        return redirect()->route('admin.team-members.index')->with('message', 'Team member created.');
    }

    public function edit(TeamMember $teamMember): Response
    {
        return Inertia::render('admin/team/edit', ['member' => $teamMember]);
    }

    public function update(Request $request, TeamMember $teamMember): RedirectResponse
    {
        $teamMember->update($this->validate($request));

        return redirect()->route('admin.team-members.index')->with('message', 'Team member updated.');
    }

    public function destroy(TeamMember $teamMember): RedirectResponse
    {
        $teamMember->delete();

        return redirect()->route('admin.team-members.index')->with('message', 'Team member deleted.');
    }

    public function toggleStatus(TeamMember $teamMember): RedirectResponse
    {
        $teamMember->update(['status' => !$teamMember->status]);

        return back()->with('message', 'Status updated.');
    }

    private function validate(Request $request): array
    {
        return $request->validate([
            'group' => ['required', 'in:board,leadership'],
            'name' => ['required', 'string', 'max:255'],
            'designation' => ['nullable', 'string', 'max:255'],
            'image' => ['nullable', 'string', 'max:1000'],
            'description' => ['nullable', 'string', 'max:3000'],
            'paragraphs' => ['nullable', 'array'],
            'paragraphs.*' => ['string'],
            'highlights' => ['nullable', 'array'],
            'highlights.*.value' => ['nullable', 'string', 'max:50'],
            'highlights.*.label' => ['nullable', 'string', 'max:100'],
            'order' => ['required', 'integer', 'min:0'],
            'status' => ['required', 'boolean'],
        ]);
    }
}

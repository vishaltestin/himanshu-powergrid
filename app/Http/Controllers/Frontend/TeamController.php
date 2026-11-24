<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\PageContent;
use App\Models\TeamMember;

class TeamController extends Controller
{
    public function index()
    {
        return inertia('teams', [
            'board' => TeamMember::active()->where('group', 'board')->get(),
            'leadership' => TeamMember::active()->where('group', 'leadership')->get(),
            'content' => PageContent::forPage('teams'),
        ]);
    }
}

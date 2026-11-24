<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Event;
use App\Models\PageContent;

class EventController extends Controller
{
    public function index()
    {
        return inertia('events', [
            'events' => Event::active()->get(),
            'content' => PageContent::forPage('events'),
        ]);
    }
}

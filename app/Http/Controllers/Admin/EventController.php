<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Event;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class EventController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('admin/events/index', [
            'events' => Event::orderBy('order')->get(),
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('admin/events/edit', ['event' => null]);
    }

    public function store(Request $request): RedirectResponse
    {
        Event::create($this->validate($request));

        return redirect()->route('admin.events.index')->with('message', 'Event created.');
    }

    public function edit(Event $event): Response
    {
        return Inertia::render('admin/events/edit', ['event' => $event]);
    }

    public function update(Request $request, Event $event): RedirectResponse
    {
        $event->update($this->validate($request));

        return redirect()->route('admin.events.index')->with('message', 'Event updated.');
    }

    public function destroy(Event $event): RedirectResponse
    {
        $event->delete();

        return redirect()->route('admin.events.index')->with('message', 'Event deleted.');
    }

    public function toggleStatus(Event $event): RedirectResponse
    {
        $event->update(['status' => !$event->status]);

        return back()->with('message', 'Status updated.');
    }

    private function validate(Request $request): array
    {
        return $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'description' => ['nullable', 'string', 'max:3000'],
            'date' => ['nullable', 'string', 'max:100'],
            'time' => ['nullable', 'string', 'max:100'],
            'location' => ['nullable', 'string', 'max:255'],
            'category' => ['nullable', 'string', 'max:100'],
            'image' => ['nullable', 'string', 'max:1000'],
            'price' => ['nullable', 'string', 'max:50'],
            'badge' => ['nullable', 'string', 'max:50'],
            'order' => ['required', 'integer', 'min:0'],
            'status' => ['required', 'boolean'],
        ]);
    }
}

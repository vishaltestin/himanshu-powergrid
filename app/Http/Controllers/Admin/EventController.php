<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Event;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\View\View;

class EventController extends Controller
{
    public function index(): View
    {
        return view('admin.events.index', ['events' => Event::orderBy('order')->orderByDesc('id')->get()]);
    }

    public function create(): View
    {
        return $this->form(new Event(['status' => true, 'order' => (Event::max('order') ?? 0) + 1]));
    }

    public function store(Request $request): RedirectResponse
    {
        Event::create($this->validated($request));

        return redirect()->route('admin.events.index')->with('message', 'Event created.');
    }

    public function edit(Event $event): View
    {
        return $this->form($event);
    }

    public function update(Request $request, Event $event): RedirectResponse
    {
        $event->update($this->validated($request));

        return redirect()->route('admin.events.index')->with('message', 'Event updated.');
    }

    public function destroy(Event $event): RedirectResponse
    {
        $event->delete();

        return back()->with('message', 'Event deleted.');
    }

    public function toggleStatus(Event $event): RedirectResponse
    {
        $event->update(['status' => !$event->status]);

        return back()->with('message', 'Status updated.');
    }

    public function reorder(Request $request): JsonResponse
    {
        foreach ($request->validate(['ids' => ['required', 'array']])['ids'] as $i => $id) {
            Event::whereKey($id)->update(['order' => $i + 1]);
        }

        return response()->json(['ok' => true]);
    }

    private function form(Event $event): View
    {
        return view('admin.crud.form', [
            'title' => $event->exists ? 'Edit event' : 'New event',
            'back' => route('admin.events.index'),
            'backLabel' => 'Events',
            'action' => $event->exists ? route('admin.events.update', $event) : route('admin.events.store'),
            'method' => $event->exists ? 'PUT' : 'POST',
            'values' => $event->toArray(),
            'fields' => [
                ['name' => 'title', 'label' => 'Title', 'type' => 'text', 'required' => true],
                ['name' => 'description', 'label' => 'Description', 'type' => 'textarea', 'rows' => 4],
                ['name' => 'date', 'label' => 'Date (as displayed)', 'type' => 'text', 'width' => 'half', 'placeholder' => 'November 15, 2026'],
                ['name' => 'time', 'label' => 'Time (as displayed)', 'type' => 'text', 'width' => 'half', 'placeholder' => '9:00 AM - 5:00 PM'],
                ['name' => 'location', 'label' => 'Location', 'type' => 'text', 'width' => 'half'],
                ['name' => 'category', 'label' => 'Category', 'type' => 'text', 'width' => 'half'],
                ['name' => 'price', 'label' => 'Price', 'type' => 'text', 'width' => 'half', 'placeholder' => 'Free'],
                ['name' => 'badge', 'label' => 'Badge', 'type' => 'text', 'width' => 'half', 'placeholder' => 'Upcoming'],
            ],
            'sidebar' => [
                ['name' => 'status', 'label' => 'Published', 'type' => 'toggle'],
                ['name' => 'image', 'label' => 'Image', 'type' => 'image'],
                ['name' => 'order', 'label' => 'Sort order', 'type' => 'number'],
            ],
        ]);
    }

    private function validated(Request $request): array
    {
        $data = $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'description' => ['nullable', 'string', 'max:3000'],
            'date' => ['nullable', 'string', 'max:100'],
            'time' => ['nullable', 'string', 'max:100'],
            'location' => ['nullable', 'string', 'max:255'],
            'category' => ['nullable', 'string', 'max:100'],
            'image' => ['nullable', 'string', 'max:1000'],
            'price' => ['nullable', 'string', 'max:50'],
            'badge' => ['nullable', 'string', 'max:50'],
            'order' => ['nullable', 'integer', 'min:0'],
        ]);
        $data['order'] = (int) ($data['order'] ?? 0);
        $data['status'] = $request->boolean('status');

        return $data;
    }
}

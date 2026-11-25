<?php

namespace App\PageBuilder;

use App\Models\Blog;
use App\Models\Event;
use App\Models\PageSection;
use App\Models\TeamMember;

/**
 * Attaches live module data (team, posts, events) to dynamic sections so the
 * React blocks can render them. Static blocks pass through untouched.
 */
class SectionDataResolver
{
    public function resolve(PageSection $section): array
    {
        $data = $section->data ?? [];

        return match ($section->type) {
            'team_grid' => $data + ['members' => $this->team($data['group'] ?? 'board')],
            'posts_grid' => $data + ['posts' => $this->posts($data['post_type'] ?? 'all', (int) ($data['limit'] ?? 0))],
            'events_list' => $data + ['events' => Event::active()->get()->toArray()],
            default => $data,
        };
    }

    private function team(string $group): array
    {
        return TeamMember::active()
            ->when($group !== 'all', fn ($q) => $q->where('group', $group))
            ->get()
            ->map(fn (TeamMember $m) => [
                'id' => $m->id,
                'name' => $m->name,
                'designation' => $m->designation,
                'image' => $m->image ?: '/images/user/user.png',
                'description' => $m->description,
                'paragraphs' => array_values(array_filter($m->paragraphs ?? [])),
                'highlights' => array_values(array_filter($m->highlights ?? [], fn ($h) => !empty($h['value']) || !empty($h['label']))),
            ])
            ->all();
    }

    private function posts(string $type, int $limit): array
    {
        return Blog::published()
            ->when($type !== 'all', fn ($q) => $q->where('type', $type))
            ->orderByDesc('date')
            ->orderBy('order')
            ->when($limit > 0, fn ($q) => $q->limit($limit))
            ->get()
            ->map(fn (Blog $b) => $b->toCard())
            ->all();
    }
}

import { Card, PageHeader, StatusPill } from '@/components/admin/fields';
import { Button } from '@/components/ui/button';
import { Link, router } from '@inertiajs/react';
import { Pencil, Plus, Trash2 } from 'lucide-react';

export default function EventIndex({ events }: { events: any[] }) {
    const toggle = (id: number) => router.post(`/admin/events/${id}/toggle-status`);

    const remove = (id: number) => {
        if (confirm('Delete this event?')) router.delete(`/admin/events/${id}`);
    };

    return (
        <>
            <PageHeader
                title="Events"
                description="Cards shown on the Events page."
                actions={
                    <Button asChild>
                        <Link href="/admin/events/create">
                            <Plus size={15} /> New event
                        </Link>
                    </Button>
                }
            />

            {events.length === 0 ? (
                <Card className="p-12 text-center text-gray-400">No events yet.</Card>
            ) : (
                <div className="space-y-4">
                    {events.map((event) => (
                        <Card key={event.id} className="flex flex-wrap items-center gap-4 p-4">
                            <div className="size-28 shrink-0 overflow-hidden rounded-lg bg-gray-100">
                                {event.image ? (
                                    <img src={event.image} alt="" className="size-full object-cover" />
                                ) : null}
                            </div>

                            <div className="min-w-0 flex-1">
                                <div className="flex flex-wrap items-center gap-2">
                                    <p className="font-medium text-gray-900">{event.title}</p>
                                    {event.badge && (
                                        <span className="rounded-full bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent">
                                            {event.badge}
                                        </span>
                                    )}
                                </div>
                                <p className="mt-0.5 line-clamp-1 text-sm text-gray-500">
                                    {event.description}
                                </p>
                                <div className="mt-1.5 flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-400">
                                    <span>{event.date}</span>
                                    <span>{event.time}</span>
                                    <span>{event.location}</span>
                                    <span>{event.category}</span>
                                    <span>{event.price}</span>
                                </div>
                            </div>

                            <StatusPill status={event.status} />

                            <div className="flex items-center gap-1.5">
                                <Button variant="outline" size="sm" onClick={() => toggle(event.id)}>
                                    {event.status ? 'Hide' : 'Show'}
                                </Button>
                                <Button variant="outline" size="sm" asChild>
                                    <Link href={`/admin/events/${event.id}/edit`}>
                                        <Pencil size={14} /> Edit
                                    </Link>
                                </Button>
                                <Button variant="destructive" size="sm" onClick={() => remove(event.id)}>
                                    <Trash2 size={14} />
                                </Button>
                            </div>
                        </Card>
                    ))}
                </div>
            )}
        </>
    );
}

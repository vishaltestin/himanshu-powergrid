import { Card, PageHeader, StatusPill } from '@/components/admin/fields';
import { Button } from '@/components/ui/button';
import { Link, router } from '@inertiajs/react';
import { Pencil, Plus, Trash2 } from 'lucide-react';

export default function TeamIndex({ members }: { members: any[] }) {
    const toggle = (id: number) => router.post(`/admin/team-members/${id}/toggle-status`);

    const remove = (id: number) => {
        if (confirm('Delete this team member?')) router.delete(`/admin/team-members/${id}`);
    };

    const groups = [
        { key: 'board', label: 'Board of Directors' },
        { key: 'leadership', label: 'Senior Leadership' },
    ];

    return (
        <>
            <PageHeader
                title="Team"
                description="Board of directors and senior leadership shown on the Management Team page."
                actions={
                    <Button asChild>
                        <Link href="/admin/team-members/create">
                            <Plus size={15} /> New member
                        </Link>
                    </Button>
                }
            />

            {groups.map((group) => {
                const list = members.filter((m) => m.group === group.key);
                return (
                    <div key={group.key} className="mb-8">
                        <h2 className="mb-3 text-sm font-semibold tracking-wide text-gray-500 uppercase">
                            {group.label} ({list.length})
                        </h2>

                        {list.length === 0 ? (
                            <Card className="p-8 text-center text-sm text-gray-400">
                                No members in this group yet.
                            </Card>
                        ) : (
                            <div className="grid gap-4 md:grid-cols-2">
                                {list.map((member) => (
                                    <Card key={member.id} className="flex gap-4 p-4">
                                        <div className="size-16 shrink-0 overflow-hidden rounded-full bg-gray-100">
                                            {member.image ? (
                                                <img
                                                    src={member.image}
                                                    alt={member.name}
                                                    className="size-full object-cover"
                                                />
                                            ) : (
                                                <div className="flex size-full items-center justify-center text-xs text-gray-400">
                                                    {member.name?.charAt(0)}
                                                </div>
                                            )}
                                        </div>

                                        <div className="min-w-0 flex-1">
                                            <p className="truncate font-medium text-gray-900">
                                                {member.name}
                                            </p>
                                            <p className="truncate text-sm text-accent">
                                                {member.designation}
                                            </p>
                                            <p className="mt-1 line-clamp-2 text-sm text-gray-500">
                                                {member.description}
                                            </p>
                                            <div className="mt-2 flex items-center gap-2">
                                                <StatusPill status={member.status} />
                                                <span className="text-xs text-gray-400">
                                                    {member.paragraphs?.length ?? 0} bio paragraphs
                                                </span>
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-1.5">
                                            <Button variant="outline" size="sm" asChild>
                                                <Link href={`/admin/team-members/${member.id}/edit`}>
                                                    <Pencil size={14} /> Edit
                                                </Link>
                                            </Button>
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                onClick={() => toggle(member.id)}
                                            >
                                                {member.status ? 'Hide' : 'Show'}
                                            </Button>
                                            <Button
                                                variant="destructive"
                                                size="sm"
                                                onClick={() => remove(member.id)}
                                            >
                                                <Trash2 size={14} />
                                            </Button>
                                        </div>
                                    </Card>
                                ))}
                            </div>
                        )}
                    </div>
                );
            })}
        </>
    );
}

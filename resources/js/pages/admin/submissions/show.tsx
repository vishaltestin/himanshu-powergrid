import { Card, PageHeader, StatusPill } from '@/components/admin/fields';
import { Button } from '@/components/ui/button';
import { Link, router } from '@inertiajs/react';
import { ArrowLeft, Mail, MapPin, Phone, Trash2 } from 'lucide-react';

const TYPE_LABELS: Record<string, string> = {
    contact: 'Contact form',
    enquiry: 'Enquiry form',
    career: 'Career application',
    newsletter: 'Newsletter',
    other: 'Other',
};

export default function SubmissionShow({ submission }: { submission: any }) {
    const setStatus = (status: string) => {
        router.put(
            `/admin/submissions/${submission.id}`,
            { status },
            { preserveScroll: true },
        );
    };

    const remove = () => {
        if (confirm('Delete this submission?')) {
            router.delete(`/admin/submissions/${submission.id}`);
        }
    };

    const data = (submission.data ?? {}) as Record<string, any>;

    return (
        <>
            <PageHeader
                title={submission.name || 'Submission'}
                description={`${TYPE_LABELS[submission.type] ?? submission.type} · received ${submission.created_at}`}
                actions={
                    <>
                        <Button variant="outline" asChild>
                            <Link href="/admin/submissions">
                                <ArrowLeft size={15} /> Inbox
                            </Link>
                        </Button>
                        <Button variant="destructive" onClick={remove}>
                            <Trash2 size={15} /> Delete
                        </Button>
                    </>
                }
            />

            <div className="grid gap-6 lg:grid-cols-3">
                <Card className="p-6 lg:col-span-2">
                    <div className="mb-4 flex items-center justify-between">
                        <h2 className="text-sm font-semibold tracking-wide text-gray-500 uppercase">
                            Message
                        </h2>
                        <StatusPill status={submission.status} />
                    </div>

                    <p className="text-sm leading-relaxed whitespace-pre-wrap text-gray-700">
                        {submission.message || 'No message provided.'}
                    </p>

                    {Object.keys(data).length > 0 && (
                        <>
                            <h2 className="mt-8 mb-3 text-sm font-semibold tracking-wide text-gray-500 uppercase">
                                Extra details
                            </h2>
                            <dl className="grid gap-3 sm:grid-cols-2">
                                {Object.entries(data).map(([key, value]) => (
                                    <div key={key} className="rounded-lg bg-gray-50 p-3">
                                        <dt className="text-xs font-medium tracking-wide text-gray-400 uppercase">
                                            {key.replace(/_/g, ' ')}
                                        </dt>
                                        <dd className="mt-1 text-sm break-words text-gray-700">
                                            {typeof value === 'string' && value.startsWith('/storage/') ? (
                                                <a
                                                    href={value}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="font-medium text-accent underline"
                                                >
                                                    Open attachment
                                                </a>
                                            ) : (
                                                String(value)
                                            )}
                                        </dd>
                                    </div>
                                ))}
                            </dl>
                        </>
                    )}
                </Card>

                <div className="space-y-6">
                    <Card className="p-6">
                        <h2 className="mb-4 text-sm font-semibold tracking-wide text-gray-500 uppercase">
                            Contact
                        </h2>
                        <ul className="space-y-3 text-sm text-gray-700">
                            <li className="flex items-center gap-2.5">
                                <Mail size={15} className="shrink-0 text-gray-400" />
                                {submission.email ? (
                                    <a href={`mailto:${submission.email}`} className="hover:text-accent">
                                        {submission.email}
                                    </a>
                                ) : (
                                    '—'
                                )}
                            </li>
                            <li className="flex items-center gap-2.5">
                                <Phone size={15} className="shrink-0 text-gray-400" />
                                {submission.phone || '—'}
                            </li>
                            {submission.subject && (
                                <li className="flex items-center gap-2.5">
                                    <MapPin size={15} className="shrink-0 text-gray-400" />
                                    {submission.subject}
                                </li>
                            )}
                        </ul>
                        <div className="mt-4 border-t border-gray-100 pt-4 text-xs text-gray-400">
                            IP: {submission.ip || '—'}
                            <br />
                            Browser: {submission.user_agent || '—'}
                        </div>
                    </Card>

                    <Card className="p-6">
                        <h2 className="mb-4 text-sm font-semibold tracking-wide text-gray-500 uppercase">
                            Status
                        </h2>
                        <div className="space-y-2">
                            {[
                                { key: 'new', label: 'Mark as new' },
                                { key: 'read', label: 'Mark as read' },
                                { key: 'archived', label: 'Archive' },
                            ].map((s) => (
                                <Button
                                    key={s.key}
                                    variant={submission.status === s.key ? 'default' : 'outline'}
                                    size="sm"
                                    className="w-full justify-start"
                                    disabled={submission.status === s.key}
                                    onClick={() => setStatus(s.key)}
                                >
                                    {s.label}
                                </Button>
                            ))}
                        </div>
                    </Card>
                </div>
            </div>
        </>
    );
}

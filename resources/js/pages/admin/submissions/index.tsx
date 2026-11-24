import { Card, PageHeader, StatusPill } from '@/components/admin/fields';
import { Button } from '@/components/ui/button';
import { Link, router } from '@inertiajs/react';
import { Download, Eye, Search, Trash2 } from 'lucide-react';
import { FormEvent, useState } from 'react';

interface Paginator {
    data: any[];
    current_page: number;
    last_page: number;
    prev_page_url: string | null;
    next_page_url: string | null;
    total: number;
}

const TYPE_TABS = [
    { key: 'all', label: 'All' },
    { key: 'contact', label: 'Contact' },
    { key: 'enquiry', label: 'Enquiry' },
    { key: 'career', label: 'Career' },
    { key: 'newsletter', label: 'Newsletter' },
];

export default function SubmissionsIndex({
    submissions,
    filters,
    counts,
}: {
    submissions: Paginator;
    filters: { type?: string; status?: string; search?: string };
    counts: Record<string, number>;
}) {
    const [search, setSearch] = useState(filters.search ?? '');

    const go = (patch: Record<string, string | undefined>) => {
        const params: Record<string, string> = {};
        const merged = { ...filters, ...patch };
        Object.entries(merged).forEach(([k, v]) => {
            if (v && v !== 'all' && v !== '') params[k] = v;
        });
        router.get('/admin/submissions', params, { preserveState: true, preserveScroll: true });
    };

    const onSearch = (e: FormEvent) => {
        e.preventDefault();
        go({ search });
    };

    const remove = (id: number) => {
        if (confirm('Delete this submission?')) {
            router.delete(`/admin/submissions/${id}`, { preserveScroll: true });
        }
    };

    const typeLabel: Record<string, string> = {
        contact: 'Contact',
        enquiry: 'Enquiry',
        career: 'Career',
        newsletter: 'Newsletter',
        other: 'Other',
    };

    return (
        <>
            <PageHeader
                title="Form Submissions"
                description="Everything people submit through the website — contact, enquiry and career forms."
                actions={
                    <Button variant="outline" asChild>
                        <a href={`/admin/submissions/export?type=${filters.type ?? 'all'}`}>
                            <Download size={15} /> Export CSV
                        </a>
                    </Button>
                }
            />

            {/* Type tabs */}
            <div className="mb-4 flex flex-wrap gap-2">
                {TYPE_TABS.map((tab) => {
                    const active = (filters.type ?? 'all') === tab.key;
                    const count = counts[tab.key];
                    return (
                        <button
                            key={tab.key}
                            onClick={() => go({ type: tab.key, search: undefined })}
                            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                                active
                                    ? 'bg-primary text-white'
                                    : 'bg-white text-gray-600 ring-1 ring-gray-200 hover:bg-gray-50'
                            }`}
                        >
                            {tab.label}
                            {count !== undefined && (
                                <span className={`ml-1.5 text-xs ${active ? 'text-white/70' : 'text-gray-400'}`}>
                                    {count}
                                </span>
                            )}
                        </button>
                    );
                })}
            </div>

            <div className="mb-4 flex flex-wrap items-center gap-3">
                <form onSubmit={onSearch} className="relative">
                    <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-gray-400" />
                    <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search name, email, phone…"
                        className="w-72 rounded-md border border-gray-300 bg-white py-2 pr-3 pl-9 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
                    />
                </form>

                <select
                    value={filters.status ?? 'all'}
                    onChange={(e) => go({ status: e.target.value })}
                    className="cursor-pointer rounded-md border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-accent"
                >
                    <option value="all">All statuses</option>
                    <option value="new">New</option>
                    <option value="read">Read</option>
                    <option value="archived">Archived</option>
                </select>

                {(filters.search || filters.status) && (
                    <button
                        onClick={() => {
                            setSearch('');
                            go({ search: undefined, status: undefined });
                        }}
                        className="text-sm text-gray-400 hover:text-gray-600"
                    >
                        Clear filters
                    </button>
                )}
            </div>

            <Card className="overflow-x-auto">
                <table className="w-full text-sm">
                    <thead>
                        <tr className="border-b border-gray-100 text-left text-xs tracking-wide text-gray-400 uppercase">
                            <th className="px-5 py-3 font-medium">From</th>
                            <th className="px-5 py-3 font-medium">Type</th>
                            <th className="px-5 py-3 font-medium">Message</th>
                            <th className="px-5 py-3 font-medium">Received</th>
                            <th className="px-5 py-3 font-medium">Status</th>
                            <th className="px-5 py-3 text-right font-medium">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {submissions.data.length === 0 && (
                            <tr>
                                <td colSpan={6} className="px-5 py-12 text-center text-gray-400">
                                    No submissions found.
                                </td>
                            </tr>
                        )}
                        {submissions.data.map((s) => (
                            <tr
                                key={s.id}
                                className={`border-b border-gray-50 last:border-0 hover:bg-gray-50/60 ${
                                    s.status === 'new' ? 'bg-blue-50/40' : ''
                                }`}
                            >
                                <td className="px-5 py-3">
                                    <Link
                                        href={`/admin/submissions/${s.id}`}
                                        className="font-medium text-gray-900 hover:text-accent"
                                    >
                                        {s.name || '—'}
                                    </Link>
                                    <p className="text-xs text-gray-400">
                                        {s.email}
                                        {s.phone ? ` · ${s.phone}` : ''}
                                    </p>
                                </td>
                                <td className="px-5 py-3">
                                    <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-600">
                                        {typeLabel[s.type] ?? s.type}
                                    </span>
                                </td>
                                <td className="max-w-64 px-5 py-3">
                                    <p className="truncate text-gray-500">{s.message || '—'}</p>
                                </td>
                                <td className="whitespace-nowrap px-5 py-3 text-gray-500">
                                    {s.created_at}
                                </td>
                                <td className="px-5 py-3">
                                    <StatusPill status={s.status} />
                                </td>
                                <td className="px-5 py-3">
                                    <div className="flex justify-end gap-1.5">
                                        <Button variant="outline" size="sm" asChild>
                                            <Link href={`/admin/submissions/${s.id}`}>
                                                <Eye size={14} /> View
                                            </Link>
                                        </Button>
                                        <Button
                                            variant="destructive"
                                            size="sm"
                                            onClick={() => remove(s.id)}
                                            title="Delete"
                                        >
                                            <Trash2 size={14} />
                                        </Button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Card>

            {/* Pagination */}
            {submissions.last_page > 1 && (
                <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
                    <span>
                        Page {submissions.current_page} of {submissions.last_page} ·{' '}
                        {submissions.total} total
                    </span>
                    <div className="flex gap-2">
                        <Button
                            variant="outline"
                            size="sm"
                            disabled={!submissions.prev_page_url}
                            onClick={() =>
                                submissions.prev_page_url &&
                                router.get(submissions.prev_page_url, {}, { preserveState: true })
                            }
                        >
                            Previous
                        </Button>
                        <Button
                            variant="outline"
                            size="sm"
                            disabled={!submissions.next_page_url}
                            onClick={() =>
                                submissions.next_page_url &&
                                router.get(submissions.next_page_url, {}, { preserveState: true })
                            }
                        >
                            Next
                        </Button>
                    </div>
                </div>
            )}
        </>
    );
}

import { Card, PageHeader, StatusPill } from '@/components/admin/fields';
import { Link } from '@inertiajs/react';
import {
    ArrowRight,
    Calendar,
    FileText,
    Image as ImageIcon,
    Inbox,
    Mail,
    Phone,
    Users,
} from 'lucide-react';

const typeLabel: Record<string, string> = {
    contact: 'Contact',
    enquiry: 'Enquiry',
    career: 'Career',
    newsletter: 'Newsletter',
};

export default function Dashboard({
    stats,
    recentSubmissions,
}: {
    stats: Record<string, number>;
    recentSubmissions: {
        id: number;
        type: string;
        name: string;
        email: string;
        phone?: string;
        status: string;
        created_at: string;
    }[];
}) {
    const cards = [
        {
            label: 'New submissions',
            value: stats.newSubmissions ?? 0,
            hint: `${stats.totalSubmissions ?? 0} total in inbox`,
            icon: <Inbox size={20} />,
            href: '/admin/submissions',
            highlight: (stats.newSubmissions ?? 0) > 0,
        },
        {
            label: 'Blog & news posts',
            value: stats.publishedBlogs ?? 0,
            hint: 'published',
            icon: <FileText size={20} />,
            href: '/admin/blogs',
        },
        {
            label: 'Events',
            value: stats.publishedEvents ?? 0,
            hint: 'published',
            icon: <Calendar size={20} />,
            href: '/admin/events',
        },
        {
            label: 'Team members',
            value: stats.teamMembers ?? 0,
            hint: 'active profiles',
            icon: <Users size={20} />,
            href: '/admin/team-members',
        },
        {
            label: 'Banners',
            value: stats.activeBanners ?? 0,
            hint: 'active hero slides',
            icon: <ImageIcon size={20} />,
            href: '/admin/banners',
        },
        {
            label: 'Menus',
            value: stats.menus ?? 0,
            hint: 'navigation items',
            icon: <ArrowRight size={20} />,
            href: '/admin/menus',
        },
    ];

    return (
        <>
            <PageHeader
                title="Dashboard"
                description="Everything on the website — content, media, forms and settings."
                actions={
                    <Link href="/admin/pages">
                        <button className="inline-flex items-center gap-2 rounded-md bg-slate-950 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-slate-800">
                            Edit page content
                            <ArrowRight size={15} />
                        </button>
                    </Link>
                }
            />

            {/* Stat cards */}
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-6">
                {cards.map((card) => (
                    <Link key={card.label} href={card.href}>
                        <Card
                            className={
                                'p-5 transition-all hover:-translate-y-0.5 hover:shadow-md ' +
                                (card.highlight ? 'ring-2 ring-accent/60' : '')
                            }
                        >
                            <div
                                className={
                                    'mb-4 flex size-10 items-center justify-center rounded-lg ' +
                                    (card.highlight
                                        ? 'bg-accent text-slate-950'
                                        : 'bg-slate-950 text-accent')
                                }
                            >
                                {card.icon}
                            </div>
                            <p className="text-3xl font-semibold tracking-tight text-gray-900">
                                {card.value}
                            </p>
                            <p className="mt-1 text-sm font-medium text-gray-600">{card.label}</p>
                            <p className="text-xs text-gray-400">{card.hint}</p>
                        </Card>
                    </Link>
                ))}
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-3">
                {/* Recent submissions */}
                <Card className="lg:col-span-2">
                    <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
                        <h2 className="font-semibold text-gray-900">Recent form submissions</h2>
                        <Link
                            href="/admin/submissions"
                            className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
                        >
                            View inbox <ArrowRight size={14} />
                        </Link>
                    </div>

                    {recentSubmissions.length === 0 ? (
                        <p className="px-6 py-10 text-center text-sm text-gray-400">
                            No submissions yet — forms on the website will appear here.
                        </p>
                    ) : (
                        <ul className="divide-y divide-gray-100">
                            {recentSubmissions.map((s) => (
                                <li key={s.id}>
                                    <Link
                                        href={`/admin/submissions/${s.id}`}
                                        className="flex items-center gap-4 px-6 py-4 transition-colors hover:bg-gray-50"
                                    >
                                        <span className="inline-flex min-w-20 justify-center rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-600">
                                            {typeLabel[s.type] ?? s.type}
                                        </span>
                                        <div className="min-w-0 flex-1">
                                            <p className="truncate text-sm font-medium text-gray-900">
                                                {s.name || '(no name)'}
                                            </p>
                                            <p className="flex items-center gap-3 truncate text-xs text-gray-400">
                                                {s.email && (
                                                    <span className="inline-flex items-center gap-1">
                                                        <Mail size={11} /> {s.email}
                                                    </span>
                                                )}
                                                {s.phone && (
                                                    <span className="inline-flex items-center gap-1">
                                                        <Phone size={11} /> {s.phone}
                                                    </span>
                                                )}
                                            </p>
                                        </div>
                                        <span className="text-xs text-gray-400">{s.created_at}</span>
                                        <StatusPill status={s.status} />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </Card>

                {/* Quick actions */}
                <Card className="p-6">
                    <h2 className="mb-4 font-semibold text-gray-900">Quick actions</h2>
                    <div className="space-y-2">
                        {[
                            { label: 'Edit a page', href: '/admin/pages', desc: 'Text, images & sections' },
                            { label: 'Add a banner slide', href: '/admin/banners/create', desc: 'Homepage hero carousel' },
                            { label: 'Post a blog or news', href: '/admin/blogs/create', desc: 'Shows on home & listings' },
                            { label: 'Upload media', href: '/admin/media', desc: 'Images for any page' },
                            { label: 'Site settings', href: '/admin/settings', desc: 'Logo, footer, contacts' },
                        ].map((action) => (
                            <Link
                                key={action.label}
                                href={action.href}
                                className="group flex items-center justify-between rounded-lg border border-gray-100 px-4 py-3 transition-colors hover:border-accent/40 hover:bg-accent/5"
                            >
                                <div>
                                    <p className="text-sm font-medium text-gray-800">{action.label}</p>
                                    <p className="text-xs text-gray-400">{action.desc}</p>
                                </div>
                                <ArrowRight
                                    size={16}
                                    className="text-gray-300 transition-all group-hover:translate-x-0.5 group-hover:text-accent"
                                />
                            </Link>
                        ))}
                    </div>
                </Card>
            </div>
        </>
    );
}

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { Link, router, usePage } from '@inertiajs/react';
import {
    ArrowUpRight,
    Bell,
    Calendar,
    FileText,
    FolderOpen,
    Image as ImageIcon,
    Inbox,
    LayoutDashboard,
    LogOut,
    Menu as MenuIcon,
    PenLine,
    Settings,
    Users,
} from 'lucide-react';
import { ReactNode, useEffect, useState } from 'react';
import { toast } from 'sonner';

interface NavItem {
    label: string;
    href: string;
    icon: ReactNode;
    badge?: number;
}

interface NavSection {
    title?: string;
    items: NavItem[];
}

const sections: NavSection[] = [
    {
        items: [
            { label: 'Dashboard', href: '/admin', icon: <LayoutDashboard size={17} /> },
        ],
    },
    {
        title: 'Content',
        items: [
            { label: 'Pages', href: '/admin/pages', icon: <FileText size={17} /> },
            { label: 'Banners', href: '/admin/banners', icon: <ImageIcon size={17} /> },
            { label: 'Team', href: '/admin/team-members', icon: <Users size={17} /> },
            { label: 'Blogs & News', href: '/admin/blogs', icon: <PenLine size={17} /> },
            { label: 'Events', href: '/admin/events', icon: <Calendar size={17} /> },
            { label: 'Menus', href: '/admin/menus', icon: <MenuIcon size={17} /> },
        ],
    },
    {
        title: 'Inbox',
        items: [
            { label: 'Form Submissions', href: '/admin/submissions', icon: <Inbox size={17} /> },
        ],
    },
    {
        title: 'System',
        items: [
            { label: 'Media Library', href: '/admin/media', icon: <FolderOpen size={17} /> },
            { label: 'Settings', href: '/admin/settings', icon: <Settings size={17} /> },
        ],
    },
];

function NavLinks({ onNavigate, newCount }: { onNavigate?: () => void; newCount: number }) {
    const { url } = usePage<any>();

    return (
        <nav className="flex-1 space-y-5 overflow-y-auto px-3 py-5">
            {sections.map((section, i) => (
                <div key={i}>
                    {section.title && (
                        <p className="mb-1.5 px-3 text-[10px] font-semibold tracking-[0.14em] text-slate-500 uppercase">
                            {section.title}
                        </p>
                    )}
                    <ul className="space-y-0.5">
                        {section.items.map((item) => {
                            const active =
                                item.href === '/admin'
                                    ? url === '/admin'
                                    : url.startsWith(item.href);
                            const badge =
                                item.href === '/admin/submissions' ? newCount : 0;

                            return (
                                <li key={item.label}>
                                    <Link
                                        href={item.href}
                                        onClick={onNavigate}
                                        className={cn(
                                            'group relative flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                                            active
                                                ? 'bg-white/10 text-white'
                                                : 'text-slate-400 hover:bg-white/5 hover:text-white',
                                        )}
                                    >
                                        {active && (
                                            <span className="absolute top-1/2 left-0 h-5 w-0.5 -translate-y-1/2 rounded-r-full bg-accent" />
                                        )}
                                        <span className={cn(active ? 'text-accent' : 'text-slate-500 group-hover:text-slate-300')}>
                                            {item.icon}
                                        </span>
                                        <span className="flex-1">{item.label}</span>
                                        {badge > 0 && (
                                            <span className="flex min-w-5 items-center justify-center rounded-full bg-accent px-1.5 py-0.5 text-[11px] font-semibold text-slate-950">
                                                {badge > 99 ? '99+' : badge}
                                            </span>
                                        )}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            ))}

            <a
                href="/"
                target="_blank"
                className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-400 transition-colors hover:bg-white/5 hover:text-white"
            >
                <span className="text-slate-500">
                    <ArrowUpRight size={17} />
                </span>
                View website
            </a>
        </nav>
    );
}

function SidebarBrand() {
    const { props } = usePage<any>();
    const settings = props.settings ?? {};

    return (
        <div className="flex items-center gap-3 border-b border-white/10 px-5 py-4">
            <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-accent to-emerald-600 text-sm font-bold text-slate-950">
                {(settings.site_name || 'CG').charAt(0)}
            </div>
            <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-white">
                    {settings.site_name || 'CubeGrid Advisors'}
                </p>
                <p className="text-[11px] tracking-wide text-slate-500">Content Manager</p>
            </div>
        </div>
    );
}

function UserFooter() {
    const { props } = usePage<any>();
    const user = props.auth?.user;

    return (
        <div className="border-t border-white/10 p-3">
            <div className="flex items-center gap-3 rounded-lg bg-white/5 px-2.5 py-2">
                <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-accent/20 text-xs font-semibold text-accent">
                    {(user?.name || 'A').charAt(0).toUpperCase()}
                </div>
                <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-slate-200">{user?.name}</p>
                    <p className="truncate text-xs text-slate-500">{user?.email}</p>
                </div>
                <button
                    onClick={() => router.post('/admin/logout')}
                    title="Log out"
                    className="rounded-md p-1.5 text-slate-500 transition-colors hover:bg-white/10 hover:text-red-400"
                >
                    <LogOut size={16} />
                </button>
            </div>
        </div>
    );
}

export default function AdminLayout({ children }: { children: ReactNode }) {
    const { props } = usePage<any>();
    const flash = props.flash?.message;
    const newCount = props.admin?.newSubmissionCount ?? 0;
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        if (flash) {
            toast.success(flash);
        }
    }, [flash]);

    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Desktop sidebar */}
            <aside className="fixed inset-y-0 left-0 z-30 hidden w-60 flex-col bg-slate-950 lg:flex">
                <SidebarBrand />
                <NavLinks newCount={newCount} />
                <UserFooter />
            </aside>

            {/* Mobile sidebar */}
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
                <SheetTrigger asChild>
                    <button
                        className="fixed top-3 left-3 z-40 rounded-md bg-slate-950 p-2 text-white shadow-md lg:hidden"
                        aria-label="Open menu"
                    >
                        <MenuIcon size={20} />
                    </button>
                </SheetTrigger>
                <SheetContent side="left" className="flex w-72 flex-col border-0 bg-slate-950 p-0">
                    <SheetTitle className="sr-only">Admin menu</SheetTitle>
                    <SidebarBrand />
                    <NavLinks newCount={newCount} onNavigate={() => setMobileOpen(false)} />
                    <UserFooter />
                </SheetContent>
            </Sheet>

            {/* Main */}
            <div className="flex min-w-0 flex-1 flex-col lg:pl-60">
                <main className="flex-1 px-4 py-6 pt-16 lg:px-10 lg:py-10 lg:pt-10">
                    {children}
                </main>
            </div>
        </div>
    );
}

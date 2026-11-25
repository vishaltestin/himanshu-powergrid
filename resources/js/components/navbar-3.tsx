import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { Link, router, usePage } from '@inertiajs/react';
import {
    ArrowRight,
    ChevronDown,
    DatabaseZap,
    Heading2,
    Kanban,
    Plug,
    Radiation,
    Search,
    Spool,
    UtilityPole,
    X,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import MaxWidthWrapper from './max-width-wrapper';

type MenuItem = { title: string; href?: string | null; icon?: string | null; children?: MenuItem[] };

export const NavbarThree = () => {
    const { props } = usePage<any>();

    // Dynamic navigation from the admin (Menus screen), with the original
    // hardcoded structure as a fallback while the DB is empty.
    const mainMenu: MenuItem[] = props.menus?.main ?? [];
    const navLinks: any[] = mainMenu.map((m) => ({
        name: m.title,
        href: m.href || '#',
        isLink: !!m.href && m.href !== '#',
        megaMenu: m.children?.length ? m.children.map((c) => ({ name: c.title, href: c.href || '#' })) : undefined,
    }));
    const settings: Record<string, any> = props.settings ?? {};
    const searchEnabled = settings.search_enabled !== false;
    const logo: string = props.settings?.logo || '/images/logo-new.png';

    const [isSticky, setIsSticky] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const searchInputRef = useRef<HTMLInputElement>(null);
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<{ title: string; href: string; type: string; excerpt?: string }[]>([]);
    const [searching, setSearching] = useState(false);

    useEffect(() => {
        const q = query.trim();
        if (q.length < 2) {
            setResults([]);
            return;
        }
        setSearching(true);
        const ctrl = new AbortController();
        const t = setTimeout(() => {
            fetch(`/search?q=${encodeURIComponent(q)}`, { signal: ctrl.signal, headers: { Accept: 'application/json' } })
                .then((r) => r.json())
                .then((d) => setResults(d.results ?? []))
                .catch(() => {})
                .finally(() => setSearching(false));
        }, 250);
        return () => {
            clearTimeout(t);
            ctrl.abort();
        };
    }, [query]);

    const goTo = (href: string) => {
        setIsSearchOpen(false);
        setQuery('');
        router.visit(href);
    };

    const [isMobileSheetOpen, setIsMobileSheetOpen] = useState(false);
    const [openMobileMenus, setOpenMobileMenus] = useState<
        Record<string, boolean>
    >({});

    const { url } = usePage();

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > 150) {
                if (currentScrollY > lastScrollY) {
                    setIsSticky(true);
                }
            } else {
                setIsSticky(false);
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsSearchOpen(false);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    useEffect(() => {
        if (isSearchOpen && searchInputRef.current) {
            searchInputRef.current.focus();
        }
    }, [isSearchOpen]);

    const toggleMobileMenu = (name: string) => {
        setOpenMobileMenus((prev) => ({
            ...prev,
            [name]: !prev[name],
        }));
    };

    return (
        <>
            <div
                className={cn(
                    'fixed z-100 flex h-60 w-full flex-col bg-white transition-transform duration-700 ease-in-out md:h-80',
                    isSearchOpen ? 'translate-y-0' : '-translate-y-full',
                )}
            >
                {/* Top Header Area */}
                <div className="flex w-full items-center justify-between px-8 py-8 md:px-16">
                    <img
                        src={logo}
                        alt={settings.site_name || ''}
                        className="h-8 object-contain md:h-12"
                    />
                    <button
                        onClick={() => setIsSearchOpen(false)}
                        className="text-black transition-transform duration-300 hover:rotate-90 hover:text-gray-500"
                        aria-label="Close search"
                    >
                        <X className="size-8 md:size-13" strokeWidth={1} />
                    </button>
                </div>

                {/* Centered Search Input Area */}
                <form
                    className="flex flex-1 flex-col items-center justify-center px-6"
                    onSubmit={(e) => {
                        e.preventDefault();
                        if (results[0]) goTo(results[0].href);
                    }}
                >
                    <div className="relative w-full max-w-6xl">
                        <input
                            ref={searchInputRef}
                            type="search"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder={settings.search_placeholder}
                            className="search-border w-full bg-transparent py-4 pr-14 pl-0 font-heading text-2xl font-light text-black transition-colors outline-none placeholder:text-gray-400 focus:border-black md:text-4xl"
                        />
                        <button type="submit" className="absolute top-1/2 right-2 -translate-y-1/2 text-black transition-colors hover:text-accent" aria-label="Submit search">
                            <Search className="size-6 md:size-9" strokeWidth={1.5} />
                        </button>
                        {query.trim().length >= 2 && (
                            <div className="absolute top-full right-0 left-0 z-10 mt-2 max-h-[50vh] overflow-y-auto rounded-xl bg-white shadow-2xl ring-1 ring-black/5">
                                {results.length === 0 && !searching && <p className="mb-0 px-5 py-4 text-gray-500">{settings.search_no_results}</p>}
                                {results.map((r) => (
                                    <button
                                        type="button"
                                        key={r.type + r.href}
                                        onClick={() => goTo(r.href)}
                                        className="flex w-full items-start justify-between gap-4 border-b border-gray-100 px-5 py-3 text-left last:border-0 hover:bg-gray-50"
                                    >
                                        <span>
                                            <span className="block font-semibold text-black">{r.title}</span>
                                            {r.excerpt && <span className="line-clamp-1 text-sm text-gray-500">{r.excerpt}</span>}
                                        </span>
                                        <span className="shrink-0 rounded-full bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent">{r.type}</span>
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </form>
            </div>

            {/* Background overlay when search is open */}
            {isSearchOpen && (
                <div
                    className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-opacity duration-500"
                    onClick={() => setIsSearchOpen(false)}
                />
            )}
            <header
                className={`${isSticky ? 'animate-slidedown sticky md:top-0' : 'relative md:absolute md:top-4'} top-0 right-0 left-0 z-50 w-full ${isSticky ? 'translate-y-0' : 'translate-y-0'}`}
            >
                <MaxWidthWrapper className={cn("max-w-full px-0", isSticky ? 'md:max-w-full lg:px-0' : 'md:max-w-354 md:px-6 lg:px-8 xl:px-4')}>
                    <div className={cn("flex h-20 items-center justify-between bg-white px-4 shadow-md", isSticky ? 'md:px-12 md:h-24' : 'md:rounded-xl md:px-8 md:h-22 ring ring-gray-200')}>
                        <div className="md:40 flex h-full w-32 shrink-0 items-center gap-2 lg:w-60">
                            <Link href="/">
                                <img
                                    src={logo}
                                    alt={settings.site_name || ''}
                                    className="object-contain"
                                />
                            </Link>
                        </div>
                        <nav className="relative hidden h-full items-center gap-8 lg:flex">
                            {navLinks.map((link) => {
                                const hasMegaMenu = !!link.megaMenu;
                                return (
                                    <div
                                        key={link.name}
                                        className="group relative flex h-full items-center nth-last-[2]:[&>div]:left-auto! nth-last-[2]:[&>div]:right-0 nth-last-[2]:[&_.top-arrow]:left-auto! nth-last-[2]:[&_.top-arrow]:right-12"
                                    >
                                        {hasMegaMenu ? (
                                            link.isLink ? (
                                                <Link
                                                    href={link.href}
                                                    className='flex items-center gap-1.5 font-heading text-xl uppercase transition-colors text-black hover:text-accent'
                                                >
                                                    {link.name}

                                                    <ChevronDown
                                                        size={18}
                                                        className="transition-transform duration-300 group-hover:rotate-180"
                                                    />
                                                </Link>
                                            ) : (
                                                <button
                                                    type="button"
                                                    className='flex items-center gap-1.5 font-heading text-xl uppercase transition-colors text-black hover:text-accent'
                                                >
                                                    {link.name}

                                                    <ChevronDown
                                                        size={18}
                                                        className="transition-transform duration-300 group-hover:rotate-180"
                                                    />
                                                </button>
                                            )
                                        ) : (
                                            <Link
                                                href={link.href}
                                                className='font-heading text-xl uppercase transition-colors text-black hover:text-accent'
                                            >
                                                {link.name}
                                            </Link>
                                        )}
                                        {hasMegaMenu && (
                                            <div
                                                className={cn(
                                                    'invisible absolute z-50 opacity-0 transition-all duration-300 ease-out group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100',
                                                    link.isFullWidth
                                                        ? 'top-full left-full w-screen -translate-x-1/2 translate-y-4 group-hover:translate-y-0'
                                                        : 'top-full -left-6 w-max translate-y-8 scale-95 group-hover:translate-y-0 group-hover:scale-100',
                                                )}
                                            >
                                                {link.isFullWidth ? (
                                                    <div className="max-w-5xl rounded-xl bg-white shadow-xl ring-1 ring-black/5">
                                                        <div>
                                                            <div className="flex gap-8 p-4">
                                                                <div className="grid flex-1 grid-cols-2 gap-3">
                                                                    {link.megaMenu.map(
                                                                        (
                                                                            item: any,
                                                                        ) => (
                                                                            <Link
                                                                                key={
                                                                                    item.name
                                                                                }
                                                                                href={
                                                                                    item.href
                                                                                }
                                                                                className="group/nav flex items-start gap-4 rounded-xl p-4 transition-colors hover:bg-gray-50"
                                                                            >
                                                                                <div className="flex size-14 shrink-0 items-center justify-center rounded-lg bg-primary/5 text-primary transition-colors duration-300 group-hover/nav:text-accent">
                                                                                    {
                                                                                        item.icon
                                                                                    }
                                                                                </div>
                                                                                <div>
                                                                                    <h4 className="font-semibold text-black transition-colors duration-300 group-hover/nav:text-accent">
                                                                                        {
                                                                                            item.name
                                                                                        }
                                                                                    </h4>
                                                                                    <p className="mt-1 mb-0 text-sm leading-snug text-gray-700">
                                                                                        {
                                                                                            item.desc
                                                                                        }
                                                                                    </p>
                                                                                </div>
                                                                            </Link>
                                                                        ),
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <div className="relative w-max gap-6 rounded-lg bg-white p-4 shadow-xl ring-1 ring-black/10">
                                                        <div className="absolute top-arrow -top-2 left-12 h-4 w-4 rotate-45 rounded-tl-xs border-t border-l border-black/10 bg-white" />
                                                        <div className="min-w-60 w-60">
                                                            {link.megaMenu.map(
                                                                (item: any) => (
                                                                    <Link
                                                                        key={
                                                                            item.name
                                                                        }
                                                                        href={
                                                                            item.href
                                                                        }
                                                                        className="group/item nav-border flex items-center justify-between px-3 py-3 transition-colors hover:bg-gray-50"
                                                                    >
                                                                        <span className="text-base font-medium text-black transition-colors group-hover/item:text-primary">
                                                                            {
                                                                                item.name
                                                                            }
                                                                        </span>
                                                                        <span className="translate-x-1 text-gray-300 opacity-0 transition-all group-hover/item:translate-x-0 group-hover/item:text-primary group-hover/item:opacity-100">
                                                                            <ArrowRight
                                                                                size={
                                                                                    18
                                                                                }
                                                                            />
                                                                        </span>
                                                                    </Link>
                                                                ),
                                                            )}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}

                            {searchEnabled && <button
                                onClick={() => setIsSearchOpen(true)}
                                aria-label="Search"
                                className="flex size-12 cursor-pointer items-center justify-center rounded-full bg-accent-foreground text-white transition-all duration-300 hover:bg-black/10 hover:text-black"
                            >
                                <Search className="transition-all duration-300" />
                            </button>}
                        </nav>
                        <div className="flex items-center gap-1 lg:hidden">
                            {searchEnabled && <button
                                onClick={() => setIsSearchOpen(true)}
                                aria-label="Search"
                                className="flex size-10 items-center justify-center text-black transition-colors hover:bg-gray-200"
                            >
                                <Search size={20} />
                            </button>}

                            <Sheet
                                open={isMobileSheetOpen}
                                onOpenChange={setIsMobileSheetOpen}
                            >
                                <SheetTrigger asChild>
                                    <button className="flex items-center justify-center transition-colors">
                                        <Kanban
                                            size={24}
                                            className="rotate-90"
                                        />
                                    </button>
                                </SheetTrigger>
                                <SheetContent
                                    side="right"
                                    className="w-full overflow-y-auto sm:w-full"
                                >
                                    <SheetHeader className="nav-border mb-2">
                                        <SheetTitle className="mb-0 text-left">
                                            <img
                                                src={logo}
                                                alt={settings.site_name || ''}
                                                className="h-8 object-contain"
                                            />
                                        </SheetTitle>
                                    </SheetHeader>

                                    <div className="flex flex-col">
                                        {navLinks.map((link) => {
                                            const hasMegaMenu = !!link.megaMenu;
                                            const isExpanded =
                                                openMobileMenus[link.name];

                                            return (
                                                <div
                                                    key={link.name}
                                                    className="flex flex-col px-4"
                                                >
                                                    {hasMegaMenu ? (
                                                        <button
                                                            onClick={() =>
                                                                toggleMobileMenu(
                                                                    link.name,
                                                                )
                                                            }
                                                            className="flex w-full items-center justify-between rounded-lg pb-4 font-heading text-2xl font-medium text-black transition-colors"
                                                        >
                                                            {link.name}
                                                            <ChevronDown
                                                                size={18}
                                                                className={cn(
                                                                    'transition-transform duration-300',
                                                                    isExpanded &&
                                                                        'rotate-180',
                                                                )}
                                                            />
                                                        </button>
                                                    ) : (
                                                        <Link
                                                            href={link.href}
                                                            onClick={() =>
                                                                setIsMobileSheetOpen(
                                                                    false,
                                                                )
                                                            }
                                                            className="block w-full rounded-lg pb-4 font-heading text-2xl font-medium text-black transition-colors"
                                                        >
                                                            {link.name}
                                                        </Link>
                                                    )}

                                                    {/* Mobile Submenu Dropdown */}
                                                    {hasMegaMenu &&
                                                        isExpanded && (
                                                            <div className="mb-6 flex flex-col gap-2">
                                                                {link.megaMenu.map(
                                                                    (item: any) => (
                                                                        <Link
                                                                            key={
                                                                                item.name
                                                                            }
                                                                            href={
                                                                                item.href
                                                                            }
                                                                            onClick={() =>
                                                                                setIsMobileSheetOpen(
                                                                                    false,
                                                                                )
                                                                            }
                                                                            className="flex items-start gap-2 px-2 text-base text-black"
                                                                        >
                                                                            <span className="mt-2 size-1 rounded-full bg-accent" />
                                                                            {
                                                                                item.name
                                                                            }
                                                                        </Link>
                                                                    ),
                                                                )}
                                                            </div>
                                                        )}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </SheetContent>
                            </Sheet>
                        </div>
                    </div>
                </MaxWidthWrapper>
            </header>
        </>
    );
};

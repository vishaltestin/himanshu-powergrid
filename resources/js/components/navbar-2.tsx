import { cn } from '@/lib/utils';
import { Link, usePage } from '@inertiajs/react';
import { ArrowRight, ChevronDown, DatabaseZap, Heading, Heading2, Plug, Power, Radiation, Search, Spool, UtilityPole } from 'lucide-react';
import { useEffect, useState } from 'react';
import MaxWidthWrapper from './max-width-wrapper';

const NAV_LINKS = [
    { name: 'Home', href: '/' },

    {
        name: 'About Us',
        href: '/about',
        megaMenu: [
            { name: 'Company Overview', href: '#' },
            { name: 'Our Business', href: '#' },
            { name: 'Board of Directors', href: '#' },
            { name: 'Milestones', href: '#' },
            { name: 'Certificates', href: '#' },
        ],
    },

    {
        name: 'Solutions',
        href: '/solutions',
        isFullWidth: true,
        megaMenu: [
            {
                name: 'Transmission Infrastructure',
                href: '#',
                icon: <UtilityPole />,
                desc: 'Developing and operating high-voltage transmission networks',
            },
            {
                name: 'EPC for Renewable Evacuation',
                href: '#',
                icon: <Spool />,
                desc: 'Engineering, procurement, and construction for transmission lines',
            },
            {
                name: 'Pumped Hydro Storage',
                href: '#',
                icon: <DatabaseZap />,
                desc: "'Developing pumped storage hydropower (PSH) projects for long-duration energy storage",
            },
            {
                name: 'Distribution Privatization',
                href: '#',
                icon: <Plug />,
                desc: "Participating in India's power distribution reform and privatization.",
            },
            {
                name: 'Nuclear Power — Shanti',
                href: '#',
                icon: <Radiation />,
                desc: "Preparing for India's opening of nuclear energy to the private sector.",
            },
            {
                name: 'Green Hydrogen',
                href: '#',
                icon: <Heading2 />,
                desc: 'Developing green hydrogen production facilities powered by dedicated renewable energy.',
            },
        ],
    },

    {
        name: 'Projects',
        href: '#',
    },

    {
        name: 'Resources',
        href: '#',
    },

    {
        name: 'Media',
        href: '#',
        megaMenu: [
            { name: 'Downloads', href: '#' },
            { name: 'News & Updates', href: '#' },
        ],
    },

    {
        name: 'Contact Us',
        href: '#',
    },
];

export const NavbarTwo = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

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

    return (
        <>
            <header
                className={`${isSticky ? 'animate-slidedown sticky top-0' : 'relative'} navbar-border-top right-0 left-0 z-50 w-full bg-white ${isSticky ? 'translate-y-0 shadow-md' : 'translate-y-0'}`}
            >
                <MaxWidthWrapper className="flex h-22 w-full max-w-full items-center justify-between px-0 lg:px-0">
                    <div className="flex h-full w-68 items-center gap-2 pl-12">
                        <Link href="/">
                            <img
                                src="/images/logo-new.png"
                                alt="Logo"
                                className="object-contain"
                            />
                        </Link>
                    </div>
                    <nav className="relative hidden h-full items-center gap-8 bg-primary pr-12 pl-4 before:absolute before:top-0 before:left-0 before:h-full before:w-24 before:origin-bottom-right before:skew-x-[32deg] before:bg-primary before:content-[''] md:flex">
                        {NAV_LINKS.map((link) => {
                            const hasMegaMenu = !!link.megaMenu;
                            return (
                                <div
                                    key={link.name}
                                    className="group relative flex h-full items-center"
                                >
                                    {hasMegaMenu ? (
                                        <button
                                            type="button"
                                            className={cn(
                                                'flex items-center gap-1.5 font-heading text-xl uppercase transition-colors',
                                                url.startsWith(link.href)
                                                    ? 'text-accent'
                                                    : 'text-white hover:text-accent',
                                            )}
                                        >
                                            {link.name}

                                            <ChevronDown
                                                size={18}
                                                className="transition-transform duration-300 group-hover:rotate-180"
                                            />
                                        </button>
                                    ) : (
                                        <Link
                                            href={link.href}
                                            className={cn(
                                                'font-heading text-xl uppercase transition-colors',
                                                url.startsWith(link.href)
                                                    ? 'text-accent'
                                                    : 'text-white hover:text-accent',
                                            )}
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
                                                <div className="max-w-5xl bg-white shadow-xl rounded-xl ring-1 ring-black/5">
                                                    <div>
                                                        <div className="flex gap-8 p-4">
                                                            <div className="grid flex-1 grid-cols-2 gap-3">
                                                                {link.megaMenu.map(
                                                                    (item) => (
                                                                        <Link
                                                                            key={item.name}
                                                                            href={item.href}
                                                                            className="group/nav flex items-start gap-4 rounded-xl p-4 transition-colors hover:bg-gray-50"
                                                                        >
                                                                            <div className="flex size-14 shrink-0 items-center justify-center rounded-lg bg-primary/5 transition-colors duration-300 text-primary group-hover/nav:text-accent">
                                                                                {item.icon}
                                                                            </div>
                                                                            <div>
                                                                                <h4 className="font-semibold text-black transition-colors duration-300 group-hover/nav:text-accent">
                                                                                    {item.name}
                                                                                </h4>
                                                                                <p className="mt-1 mb-0 text-sm leading-snug text-gray-700">
                                                                                    {item.desc}
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
                                                    <div className="absolute -top-2 left-12 h-4 w-4 rotate-45 rounded-tl-xs border-t border-l border-black/10 bg-white" />
                                                    <div className="min-w-60">
                                                        {link.megaMenu.map(
                                                            (item) => (
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

                        <div className="flex size-12 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:bg-yellow-400">
                            <Search />
                        </div>
                    </nav>
                </MaxWidthWrapper>
            </header>
        </>
    );
};

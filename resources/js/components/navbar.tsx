import { cn } from '@/lib/utils';
import { Link, usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import MaxWidthWrapper from './max-width-wrapper';
import ThemeButton from './common/theme-button';
import { ArrowRight, ChevronDown } from 'lucide-react';

interface MenuItem {
    id: number;
    title: string;
    alias: string;
    icon: string | null;
    children: MenuItem[];
}

const NAV_LINKS = [
    { name: 'Home', href: '/' },

    {
        name: 'About Company',
        href: '/about',
        megaMenu: [
            { name: 'About Us', href: '/about' },
            {
                name: 'Quality & Certifications',
                href: '/quality-certifications',
            },
            { name: 'Sustainability', href: '/sustainability' },
        ],
    },

    {
        name: 'Products',
        href: '/products',
    },

    {
        name: 'Solutions',
        href: '/solutions',
        megaMenu: [
            { name: 'Solutions & Applications', href: '/solutions' },
            { name: 'Industries We Serve', href: '/solutions' },
        ],
    },

    {
        name: 'Infrastructure',
        href: '/infrastructure',
        megaMenu: [
            { name: 'Manufacturing Facilities', href: '/infrastructure' },
            { name: 'Projects & Our Work', href: '/projects' },
        ],
    },

    {
        name: 'Resources',
        href: '/resources',
        megaMenu: [
            { name: 'Downloads', href: '/resources' },
            { name: 'News & Updates', href: '/news' },
        ],
    },

    { name: 'Careers', href: '/careers' },
];

export const Navbar = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    const [activeMenu, setActiveMenu] = useState<string | null>(null);

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
                className={`${isSticky ? 'animate-slidedown sticky top-0 rounded-b-3xl' : 'relative'} right-0 left-0 z-50 w-full bg-white ${isSticky ? 'translate-y-0 shadow-md' : 'translate-y-0'}`}
            >
                <MaxWidthWrapper className="flex h-22 w-full items-center justify-between">
                    <div className="flex h-full w-46 items-center gap-2">
                        <Link href="/">
                            <img
                                src="/images/logo-new.png"
                                alt="Logo"
                                className="object-contain"
                            />
                        </Link>
                    </div>
                    <nav className="hidden items-center gap-8 md:flex">
                        {NAV_LINKS.map((link) => {
                            const hasMegaMenu = !!link.megaMenu;
                            const isOpen = activeMenu === link.name;

                            return (
                                <div
                                    key={link.name}
                                    className="relative flex h-full items-center"
                                    onMouseEnter={() => {
                                        if (hasMegaMenu) {
                                            setActiveMenu(link.name);
                                        }
                                    }}
                                >
                                    {hasMegaMenu ? (
                                        <button
                                            type="button"
                                            onClick={() =>
                                                setActiveMenu(
                                                    isOpen ? null : link.name,
                                                )
                                            }
                                            className={cn(
                                                'flex items-center gap-1.5 font-heading text-xl uppercase transition-colors',
                                                isOpen ||
                                                    url.startsWith(link.href)
                                                    ? 'text-primary'
                                                    : 'text-black hover:text-primary',
                                            )}
                                        >
                                            {link.name}

                                            <ChevronDown
                                                size={18}
                                                className={cn(
                                                    'transition-transform duration-300',
                                                    isOpen && 'rotate-180',
                                                )}
                                            />
                                        </button>
                                    ) : (
                                        <Link
                                            href={link.href}
                                            className={cn(
                                                'font-heading text-xl uppercase transition-colors',
                                                url.startsWith(link.href)
                                                    ? 'text-primary'
                                                    : 'text-black hover:text-primary',
                                            )}
                                        >
                                            {link.name}
                                        </Link>
                                    )}
                                    {isOpen && link.megaMenu && (
                                        <div
                                            className="absolute top-[calc(100%+16px)] left-1/2 z-50 -translate-x-1/2"
                                            onMouseEnter={() =>
                                                setActiveMenu(link.name)
                                            }
                                            onMouseLeave={() =>
                                                setActiveMenu(null)
                                            }
                                        >
                                            <div className="grid w-max min-w-125 grid-cols-[1fr_144px] gap-6 rounded-2xl bg-white p-4 shadow-xl ring-1 ring-black/10">
                                                {/* LINKS */}
                                                <div className="min-w-70">
                                                    {link.megaMenu.map(
                                                        (item) => (
                                                            <Link
                                                                key={item.name}
                                                                href={item.href}
                                                                onClick={() =>
                                                                    setActiveMenu(
                                                                        null,
                                                                    )
                                                                }
                                                                className="group nav-border flex items-center justify-between px-3 py-3 transition-colors hover:bg-gray-50"
                                                            >
                                                                <span className="text-base font-medium text-black transition-colors group-hover:text-primary">
                                                                    {item.name}
                                                                </span>

                                                                <span className="translate-x-1 text-gray-300 opacity-0 transition-all group-hover:translate-x-0 group-hover:text-primary group-hover:opacity-100">
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

                                                <div className="w-36">
                                                    <img
                                                        src="/images/tower.avif"
                                                        alt=""
                                                        className="aspect-square w-full rounded-xl object-cover"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            );
                        })}

                        <ThemeButton text="Contact Us" />
                    </nav>
                </MaxWidthWrapper>
            </header>
        </>
    );
};

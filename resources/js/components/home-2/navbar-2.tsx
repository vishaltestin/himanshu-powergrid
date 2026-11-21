import { cn } from '@/lib/utils';
import { Link, usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import MaxWidthWrapper from '../max-width-wrapper';
import ThemeButton from '../common/theme-button';
import AnimatedButton from '../common/animated-button';

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
                className={`${isSticky ? 'animate-slidedown sticky top-0' : 'relative'} right-0 left-0 z-50 w-full bg-white ${isSticky ? 'translate-y-0 shadow-md' : 'translate-y-0'}`}
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
                    <nav className="relative hidden items-center gap-6 bg-primary py-3 pr-12 before:absolute before:top-0 before:-left-9 before:aspect-square before:h-full before:w-auto before:origin-bottom-right before:rounded-full before:bg-primary before:content-[''] md:flex">
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
                                                'flex items-center gap-1 font-heading-2 text-base transition-colors',
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
                                                'font-heading-2 text-base transition-colors',
                                                url.startsWith(link.href)
                                                    ? 'text-accent'
                                                    : 'text-white hover:text-accent',
                                            )}
                                        >
                                            {link.name}
                                        </Link>
                                    )}
                                    {hasMegaMenu && (
                                        <div className="invisible absolute top-[calc(100%+16px)] left-1/2 z-50 -translate-x-1/2 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100">
                                            <div className="w-max gap-6 rounded-2xl bg-white p-4 shadow-xl ring-1 ring-black/10">
                                                {/* LINKS */}
                                                <div className="min-w-60">
                                                    {link.megaMenu.map(
                                                        (item) => (
                                                            <Link
                                                                key={item.name}
                                                                href={item.href}
                                                                className="group/item nav-border flex items-center justify-between px-3 py-3 transition-colors hover:bg-gray-50"
                                                            >
                                                                <span className="text-base font-medium text-black transition-colors group-hover/item:text-primary">
                                                                    {item.name}
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
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                        <div className="ml-4">
                            <AnimatedButton text="Contact Us" />
                        </div>
                    </nav>
                </MaxWidthWrapper>
            </header>
        </>
    );
};

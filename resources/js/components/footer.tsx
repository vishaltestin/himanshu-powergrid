import React from 'react';
import MaxWidthWrapper from './max-width-wrapper';
import { Link } from '@inertiajs/react';

const Footer = () => {
    // const companyLinks = [
    //     'Home',
    //     'About Company',
    //     'Projects',
    //     'New & Updates',
    //     'Careers',
    //     'Contact Us',
    // ];

    const companyLinks = [
        { title: 'Home', href: '/' },
        { title: 'About Company', href: '/about-us' },
        { title: 'Projects', href: '/projects' },
        { title: 'New & Updates', href: '/news' },
        { title: 'Careers', href: '/career' },
        { title: 'Contact Us', href: '/contact-us' },
    ];

    // const resourceLinks = [
    //     'Transmission Infrastructure',
    //     'EPC for Renewable Evacuation',
    //     'Pumped Hydro Storage',
    //     'Distribution Privatization',
    //     'Nuclear Power — Shanti',
    //     'Green Hydrogen',
    // ];

    const resourceLinks = [
        {
            title: 'Transmission Infrastructure',
            href: '/pillar/transmission-infrastructure',
        },
        {
            title: 'EPC for Renewable Evacuation',
            href: '/pillar/epc-for-renewable-evacuation',
        },
        // {
        //     title: 'Pumped Hydro Storage',
        //     href: '/pillar/pumped-hydro-storage',
        // },
        // {
        //     title: 'Distribution Privatization',
        //     href: '/pillar/distribution-privatization',
        // },
        // {
        //     title: 'Nuclear Power — Shanti',
        //     href: '/pillar/nuclear-power-shanti',
        // },
        // {
        //     title: 'Green Hydrogen',
        //     href: '/pillar/green-hydrogen',
        // },
    ];

    return (
        <footer className="relative bg-primary-foreground pt-8 pb-4 text-white md:pt-16">
            <MaxWidthWrapper className="relative z-10">
                <div className="mb-8 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[1.75fr_3fr] lg:gap-8">
                    <div className="">
                        <div className="mb-6 flex items-center gap-2">
                            <img
                                src="/images/logo-new-white.png"
                                alt=""
                                className="w-48 md:w-54"
                            />
                        </div>
                        <p className="mb-8 max-w-sm text-sm leading-relaxed text-white">
                            A portfolio company of I Squared Capital, building
                            complex energy infrastructure for India’s clean
                            energy future. We develop, construct, operate, and
                            scale critical assets across India’s power value
                            chain.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="#"
                                className="group flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:bg-[#1877F2] hover:shadow-lg hover:shadow-[#1877F2]/30"
                            >
                                <svg
                                    className="h-4 w-4 text-white/90 transition-colors group-hover:text-white"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="group flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:bg-black hover:shadow-lg"
                            >
                                <svg
                                    className="h-4 w-4 text-white/90 transition-colors group-hover:text-white"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.007 4.15H5.059z" />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="group flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:bg-[#0A66C2] hover:shadow-lg hover:shadow-[#0A66C2]/30"
                            >
                                <svg
                                    className="h-4 w-4 text-white/90 transition-colors group-hover:text-white"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="group flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:bg-[#FF0000] hover:shadow-lg hover:shadow-[#FF0000]/30"
                            >
                                <svg
                                    className="h-4 w-4 text-white/90 transition-colors group-hover:text-white"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                </svg>
                            </a>
                        </div>
                        <div className="mt-12 hidden md:block lg:hidden">
                            <h4 className="mb-4 font-heading text-2xl text-white md:mb-6">
                                Contact Us
                            </h4>
                            <ul className="space-y-3 text-sm text-white/90">
                                <li className="group flex items-start gap-4">
                                    <div className="mt-0.5 rounded-full bg-white p-2 transition-colors">
                                        <svg
                                            className="h-4 w-4 text-primary"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                        </svg>
                                    </div>
                                    <span className="pt-1 transition-colors group-hover:text-white">
                                        7th Floor, Block B, Vatika Business Park
                                        Sohna Road, Badshahpur, Sector-49
                                        Gurugram, Haryana - 122018
                                    </span>
                                </li>
                                <li className="group flex items-center gap-4">
                                    <div className="rounded-full bg-white p-2 transition-colors">
                                        <svg
                                            className="h-4 w-4 text-primary"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                            />
                                        </svg>
                                    </div>
                                    <a
                                        href="tel:+911234567890"
                                        className="transition-colors group-hover:text-white"
                                    >
                                        +91 123 4567 890
                                    </a>
                                </li>
                                <li className="group flex items-center gap-4">
                                    <div className="rounded-full bg-white p-2 transition-colors">
                                        <svg
                                            className="h-4 w-4 text-primary"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                            />
                                        </svg>
                                    </div>
                                    <a
                                        href="mailto:admin@cubegrid.in"
                                        className="transition-colors group-hover:text-white"
                                    >
                                        admin@cubegrid.in
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-0 lg:grid-cols-3">
                        <div>
                            <h4 className="mb-4 font-heading text-2xl text-white md:mb-6">
                                Quick Links
                            </h4>
                            <ul className="space-y-2">
                                {companyLinks.map((item) => (
                                    <li key={item.title}>
                                        <Link
                                            href={item.href}
                                            className="text-sm text-white/90 transition-all duration-300 hover:pl-1 hover:text-white"
                                        >
                                            {item.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="">
                            <h4 className="mb-4 font-heading text-2xl text-white md:mb-6">
                                Pillers
                            </h4>
                            <ul className="space-y-2">
                                {resourceLinks.map((item) => (
                                    <li key={item.title}>
                                        <Link
                                            href={item.href}
                                            className="text-sm text-white/90 transition-all duration-300 hover:pl-1 hover:text-white"
                                        >
                                            {item.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="block md:hidden lg:block">
                            <h4 className="mb-4 font-heading text-2xl text-white md:mb-6">
                                Contact Us
                            </h4>
                            <ul className="space-y-3 text-sm text-white/90">
                                <li className="group flex items-start gap-4">
                                    <div className="mt-0.5 rounded-full bg-white p-2 transition-colors">
                                        <svg
                                            className="h-4 w-4 text-primary"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                        </svg>
                                    </div>
                                    <span className="pt-1 transition-colors group-hover:text-white">
                                        7th Floor, Block B, Vatika Business Park
                                        Sohna Road, Badshahpur, Sector-49
                                        Gurugram, Haryana - 122018
                                    </span>
                                </li>
                                <li className="group flex items-center gap-4">
                                    <div className="rounded-full bg-white p-2 transition-colors">
                                        <svg
                                            className="h-4 w-4 text-primary"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                            />
                                        </svg>
                                    </div>
                                    <a
                                        href="tel:+911234567890"
                                        className="transition-colors group-hover:text-white"
                                    >
                                        +91 123 4567 890
                                    </a>
                                </li>
                                <li className="group flex items-center gap-4">
                                    <div className="rounded-full bg-white p-2 transition-colors">
                                        <svg
                                            className="h-4 w-4 text-primary"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                            />
                                        </svg>
                                    </div>
                                    <a
                                        href="mailto:admin@cubegrid.in"
                                        className="transition-colors group-hover:text-white"
                                    >
                                        admin@cubegrid.in
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-top-border flex flex-col items-center justify-between gap-4 pt-4 text-sm text-white/90 md:flex-row">
                    <p className="mb-0 text-sm">
                        © {new Date().getFullYear()} CubeGrid. All rights
                        reserved.
                    </p>
                    <div className="flex justify-evenly md:flex-row md:gap-6">
                        <Link
                            href="/privacy-policy"
                            className="transition-colors hover:text-white"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            href="/terms-service"
                            className="transition-colors hover:text-white"
                        >
                            Terms of Service
                        </Link>
                        <span className="hidden md:inline">|</span>
                        <a
                            href="#"
                            className="hidden transition-colors hover:text-white md:block"
                        >
                            Design and Developed by:{' '}
                            <span className="font-medium text-white/90">
                                DigitalFueled
                            </span>
                        </a>
                    </div>
                </div>
            </MaxWidthWrapper>
        </footer>
    );
};

export default Footer;

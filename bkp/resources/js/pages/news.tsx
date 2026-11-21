import PageBanner from '@/components/common/page-banner';
import Footer from '@/components/footer';
import MaxWidthWrapper from '@/components/max-width-wrapper';
import { NavbarThree } from '@/components/navbar-3';
import { Link } from '@inertiajs/react';
import { ArrowUpRight, CalendarDays, CornerDownLeftIcon } from 'lucide-react';
import { useState } from 'react';

const news = [
    {
        type: 'Press Release',
        date: '18 Aug 2026',
        title: 'Strengthening the grid with next-generation transmission infrastructure',
        description:
            'Our latest transmission program brings together advanced engineering, resilient network design, and smarter grid technologies to support the energy demands of tomorrow.',
        image: '/images/power-grid.avif',
    },
    {
        type: 'News',
        date: '11 Aug 2026',
        title: 'Transmission infrastructure expansion reaches a new milestone',
        description:
            'A major phase of our latest infrastructure program has been successfully completed.',
        image: '/images/forest-power-grid.jpg',
    },
    {
        type: 'Press Release',
        date: '04 Aug 2026',
        title: 'New substation project moves into construction phase',
        description:
            'The project marks another step toward creating a more resilient and connected power network.',
        image: '/images/nuclear-plant.webp',
    },
];

export default function News() {
    return (
        <>
            <NavbarThree />
            <PageBanner title="News & Updates" />
            <MaxWidthWrapper className="pt-24 md:pb-16">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {news.map((item) => (
                        <Link
                            key={item.title}
                            className="group flex h-full flex-col"
                        >
                            {/* Image Container */}
                            <div className="relative mb-6 aspect-video overflow-hidden rounded-xl">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <span className="absolute top-4 left-4 z-10 flex items-center gap-2 rounded-sm bg-white px-3 py-2 text-xs font-semibold shadow-sm">
                                    <CalendarDays
                                        size={16}
                                        className="text-primary"
                                    />
                                    {item.date}
                                </span>
                                <span
                                    className="absolute right-4 bottom-4 flex size-14 translate-y-20 items-center justify-center rounded-full bg-yellow-500 text-white transition-all duration-300 group-hover:translate-y-0 hover:bg-accent"
                                >
                                    <ArrowUpRight size={24} />
                                </span>
                            </div>

                            {/* Content Container */}
                            <div className="flex flex-1 flex-col items-start">
                                <h3
                                    className="mb-3 line-clamp-2 text-lg font-medium transition-colors duration-300 group-hover:text-accent md:text-xl"
                                >
                                    {item.title}
                                </h3>

                                <p className="mb-6 line-clamp-2 flex-1">
                                    {item.description}
                                </p>
                                <div className="mt-auto">
                                    <span
                                        className="group/link relative inline-flex items-center gap-2 pb-1 font-semibold hover:text-accent text-primary"
                                    >
                                        <span>Read More</span>

                                        <CornerDownLeftIcon size={16} />

                                        <span className="absolute bottom-0 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover/link:w-full" />
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </MaxWidthWrapper>

            <Footer />
        </>
    );
}

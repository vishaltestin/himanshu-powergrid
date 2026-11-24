import React from 'react';
import MaxWidthWrapper from '../max-width-wrapper';
import TopLabel from '../common/top-label';
import ThemeButton from '../common/theme-button';
import { ArrowUpRight, CalendarDays } from 'lucide-react';
import { Link } from '@inertiajs/react';

const fallbackNews = [
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

interface NewsItem {
    type: string;
    date: string;
    title: string;
    description: string;
    image: string;
}

function NewsAndUpdatesTwo({ posts }: { posts?: NewsItem[] }) {
    const news = posts && posts.length > 0 ? posts : fallbackNews;
    return (
        <section className="pt-12 pb-6 md:pb-16">
            <MaxWidthWrapper>
                <div className="mb-8 md:mb-12 flex justify-center md:items-end md:justify-between gap-8">
                    <div className='flex flex-col items-center md:items-start'>
                        <TopLabel text="Insights" />
                        <h2 className="mb-0">News & Updates</h2>
                    </div>
                    <div className="hidden sm:block">
                        <ThemeButton text="View All" link='/news' />
                    </div>
                </div>

                {/* 3-Grid Card Layout */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {news.map((item) => (
                        <article
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
                                <Link
                                    href="#"
                                    className="absolute right-4 bottom-4 flex size-14 translate-y-20 items-center justify-center rounded-full bg-yellow-500 text-white transition-all duration-300 group-hover:translate-y-0 hover:bg-accent"
                                >
                                    <ArrowUpRight size={24} />
                                </Link>
                            </div>

                            {/* Content Container */}
                            <div className="flex flex-1 flex-col items-start">
                                <Link
                                    href="#"
                                    className="mb-3 text-lg md:text-xl font-medium transition-colors duration-300 group-hover:text-accent line-clamp-2"
                                >
                                    {item.title}
                                </Link>

                                <p className="mb-6 line-clamp-2 flex-1">
                                    {item.description}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Mobile Explore Button */}
                <div className="mt-4 flex justify-center items-center md:hidden">
                    <ThemeButton text="View All" />
                </div>
            </MaxWidthWrapper>
        </section>
    );
}

export default NewsAndUpdatesTwo;

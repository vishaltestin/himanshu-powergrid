import React from 'react';
import MaxWidthWrapper from '../max-width-wrapper';
import TopLabel from '../common/top-label';
import ThemeButton from '../common/theme-button';
import { CalendarDays } from 'lucide-react';

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
    },
    {
        type: 'Press Release',
        date: '04 Aug 2026',
        title: 'New substation project moves into construction phase',
        description:
            'The project marks another step toward creating a more resilient and connected power network.',
    },
    {
        type: 'News',
        date: '28 Jul 2026',
        title: 'Powering the next generation of smarter grid systems',
        description:
            'New technology initiatives are helping improve reliability, visibility, and efficiency across the network.',
    },
];

function NewsAndUpdates() {
    const featured = news[0];
    const secondaryNews = news.slice(1);

    return (
        <section className="pt-12 pb-24">
            <MaxWidthWrapper>
                <div className="mb-12 flex items-end justify-between gap-8">
                    <div>
                        <TopLabel text="Insights" />

                        <h2 className="mt-3">News & Updates</h2>
                    </div>

                    <div className="hidden sm:block">
                        <ThemeButton text="Explore All" />
                    </div>
                </div>

                <div>
                    <article className="grid border-b border-black/10 pb-8 md:grid-cols-[1.7fr_2fr] md:gap-12 md:pb-10">
                        <div className="group relative overflow-hidden rounded-3xl">
                            <div className="aspect-video overflow-hidden rounded-3xl bg-black/5">
                                <img
                                    src={featured.image}
                                    alt={featured.title}
                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                            <span className="absolute bottom-4 left-4 z-1 rounded-lg bg-white px-3 py-2 text-xs font-semibold uppercase">
                                {featured.type}
                            </span>
                        </div>

                        <div className="flex flex-col items-start justify-center pt-7 md:pt-0">
                            <span className="flex items-center gap-2 font-medium mb-5">
                                <CalendarDays
                                    size={16}
                                    className="text-primary"
                                />
                                {featured.date}
                            </span>

                            <h3 className="mb-4 text-3xl font-semibold md:text-3xl">
                                {featured.title}
                            </h3>

                            <p className="mb-5">{featured.description}</p>

                            <ThemeButton text="Read More" />
                        </div>
                    </article>

                    <div>
                        {secondaryNews.map((item, index) => (
                            <article
                                key={item.title}
                                className="group grid gap-4 border-b border-black/10 py-7 md:grid-cols-[250px_1fr] md:items-center md:gap-8"
                            >
                                {/* Number */}
                                <div className="w-full">
                                    <span className="flex w-max items-center justify-center rounded-lg bg-black/10 px-3 py-2 text-xs font-semibold text-black uppercase">
                                        {item.type}
                                    </span>
                                </div>

                                <div className="flex w-full items-center justify-between">
                                    <div>
                                        <h3 className="text-xl leading-snug font-semibold transition-colors duration-300 group-hover:text-primary md:text-2xl">
                                            {item.title}
                                        </h3>

                                        <p className="mt-2 max-w-2xl">
                                            {item.description}
                                        </p>
                                    </div>
                                    <span className="flex items-center gap-2 font-medium">
                                        <CalendarDays
                                            size={16}
                                            className="text-primary"
                                        />
                                        {item.date}
                                    </span>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>

                <div className="mt-8 sm:hidden">
                    <ThemeButton text="Explore All" />
                </div>
            </MaxWidthWrapper>
        </section>
    );
}

export default NewsAndUpdates;

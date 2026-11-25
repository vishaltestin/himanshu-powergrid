import AnimatedButton from '@/components/common/animated-button';
import TopLabel from '@/components/common/top-label';
import MaxWidthWrapper from '@/components/max-width-wrapper';
import { Link } from '@inertiajs/react';
import { ArrowUpRight, CalendarDays, CornerDownLeftIcon } from 'lucide-react';
import { arr, BlockProps } from './shared';

export default function PostsGrid({ data }: BlockProps) {
    const posts = arr(data.posts);

    if (data.style === 'cards') {
        return (
            <section className="pt-12 pb-16">
                <MaxWidthWrapper>
                    <div className="mb-12 flex items-end justify-between gap-8">
                        <div>
                            {data.label && <TopLabel text={data.label} />}
                            {data.heading && <h2 className="h2 mb-0">{data.heading}</h2>}
                        </div>
                        {data.button_text && (
                            <div className="hidden sm:block">
                                <AnimatedButton text={data.button_text} link={data.button_link || '#'} textClassName="text-black" />
                            </div>
                        )}
                    </div>
                    {posts.length === 0 && <p className="text-gray-500">{data.empty_text}</p>}
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        {posts.map((item) => (
                            <Link key={item.id} href={item.href} className="group relative flex h-full flex-col rounded-2xl p-2 ring ring-gray-200">
                                <span className="absolute top-0 right-0 z-10 flex items-center gap-2 rounded-sm rounded-tr-2xl bg-white px-3 py-2 text-xs font-semibold shadow-sm">
                                    <CalendarDays size={16} className="text-primary" />
                                    {item.date}
                                </span>
                                <div className="relative mb-6 aspect-video overflow-hidden rounded-xl">
                                    <img src={item.image} alt={item.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                    <span className="absolute right-4 bottom-4 flex size-14 translate-y-20 items-center justify-center rounded-full bg-yellow-500 text-white transition-all duration-300 group-hover:translate-y-0 hover:bg-accent">
                                        <ArrowUpRight size={24} />
                                    </span>
                                </div>
                                <div className="flex flex-1 flex-col items-start px-2 pb-2">
                                    <h3 className="mb-3 text-xl font-medium transition-colors duration-300 group-hover:text-accent">{item.title}</h3>
                                    <p className="mb-0 line-clamp-2 flex-1">{item.description}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                    {data.button_text && (
                        <div className="mt-8 sm:hidden">
                            <AnimatedButton text={data.button_text} link={data.button_link || '#'} textClassName="text-black" />
                        </div>
                    )}
                </MaxWidthWrapper>
            </section>
        );
    }

    return (
        <MaxWidthWrapper className="pt-12 pb-12 md:pt-24 md:pb-16">
            {posts.length === 0 && <p className="py-10 text-center text-gray-500">{data.empty_text}</p>}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                {posts.map((item) => (
                    <Link key={item.id} href={item.href} className="group flex h-full flex-col">
                        <div className="relative mb-6 aspect-video overflow-hidden rounded-xl">
                            <img src={item.image} alt={item.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                            <span className="absolute top-4 left-4 z-10 flex items-center gap-2 rounded-sm bg-white px-3 py-2 text-xs font-semibold shadow-sm">
                                <CalendarDays size={16} className="text-primary" />
                                {item.date}
                            </span>
                            <span className="absolute right-4 bottom-4 flex size-14 translate-y-20 items-center justify-center rounded-full bg-yellow-500 text-white transition-all duration-300 group-hover:translate-y-0 hover:bg-accent">
                                <ArrowUpRight size={24} />
                            </span>
                        </div>
                        <div className="flex flex-1 flex-col items-start">
                            <h3 className="mb-3 line-clamp-2 text-lg font-medium transition-colors duration-300 group-hover:text-accent md:text-xl">{item.title}</h3>
                            <p className="mb-6 line-clamp-2 flex-1">{item.description}</p>
                            {data.read_more_text && (
                                <div className="mt-auto">
                                    <span className="group/link relative inline-flex items-center gap-2 pb-1 font-semibold text-primary hover:text-accent">
                                        <span>{data.read_more_text}</span>
                                        <CornerDownLeftIcon size={16} />
                                        <span className="absolute bottom-0 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover/link:w-full" />
                                    </span>
                                </div>
                            )}
                        </div>
                    </Link>
                ))}
            </div>
        </MaxWidthWrapper>
    );
}

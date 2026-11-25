import MaxWidthWrapper from '@/components/max-width-wrapper';
import { BadgeCheck } from 'lucide-react';
import { useEffect } from 'react';
import { arr, BlockProps, Html } from './shared';

const slug = (t: string) => (t || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

export default function ValuesDetailed({ data }: BlockProps) {
    const items = arr(data.items);
    const firstRow = items.length > 3 ? 3 : items.length;

    useEffect(() => {
        const hash = window.location.hash.replace('#', '');
        if (hash) document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, []);

    return (
        <section className="py-14 md:py-20">
            <MaxWidthWrapper>
                {data.intro && (
                    <div className="mb-16 flex flex-col items-center text-center">
                        <Html html={data.intro} className="mb-0 max-w-5xl md:text-lg" />
                    </div>
                )}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-6">
                    {items.map((item, index) => {
                        const isFirstRow = index < firstRow;
                        const points = arr<string>(item.points);
                        return (
                            <article
                                key={index}
                                id={slug(item.title)}
                                className={`group relative flex scroll-mt-32 flex-col justify-between overflow-hidden rounded-xl bg-[#f6f6f6] p-5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl md:p-5 ${isFirstRow ? 'lg:col-span-2' : 'md:col-span-1 lg:col-span-3'}`}
                            >
                                <div>
                                    {item.icon && (
                                        <div className="mb-4 flex size-14 shrink-0 items-center justify-center rounded-lg bg-white p-2 ring-1 ring-gray-200">
                                            <img src={item.icon} alt={item.title} className="size-full object-contain" />
                                        </div>
                                    )}
                                    <h3 className="mb-4 text-xl font-medium text-black md:text-3xl">{item.title}</h3>
                                    {item.subtitle && <p className="font-medium text-gray-800 md:text-base">{item.subtitle}</p>}
                                    {item.description && <p className="mb-5 leading-relaxed">{item.description}</p>}
                                </div>
                                {points.length > 0 && (
                                    <div className="rounded-lg bg-white p-4 ring-1 ring-gray-200/70 lg:h-60 lg:min-h-60">
                                        {data.practice_heading && <h4 className="mb-2.5 text-xs font-bold tracking-wider text-black uppercase">{data.practice_heading}</h4>}
                                        <ul className={`grid gap-2 ${!isFirstRow ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'}`}>
                                            {points.map((point, idx) => (
                                                <li key={idx} className="flex items-start gap-2">
                                                    <BadgeCheck size={16} className="mt-0.5 shrink-0 text-accent" />
                                                    <span className="text-sm md:text-base">{point}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </article>
                        );
                    })}
                </div>
            </MaxWidthWrapper>
        </section>
    );
}

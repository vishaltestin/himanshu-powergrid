import MaxWidthWrapper from '@/components/max-width-wrapper';
import { cn } from '@/lib/utils';
import { Link } from '@inertiajs/react';
import { arr, BlockProps, SectionHeader } from './shared';

export default function ValuesCards({ data }: BlockProps) {
    const items = arr(data.items);
    const gray = data.background !== 'white';
    const cols = items.length >= 5 ? 'lg:grid-cols-5' : items.length === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3';

    return (
        <section className={cn(gray ? 'bg-[#f4f4f4] py-12 md:py-20' : 'pb-16 md:pb-24')}>
            <MaxWidthWrapper>
                <SectionHeader label={data.label} heading={data.heading} intro={data.intro} className="md:mb-10" />
                <div className={cn('grid gap-4 sm:grid-cols-2', cols)}>
                    {items.map((item, i) => (
                        <article
                            key={i}
                            className={cn(
                                'group flex flex-col rounded-2xl p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-primary md:p-6',
                                gray ? 'bg-white' : 'bg-[#f4f4f4]',
                            )}
                        >
                            {item.icon && (
                                <div className={cn('mb-6 flex size-12 items-center justify-center rounded-lg p-1 text-xl transition-all duration-300', gray ? 'bg-[#f4f4f4]' : 'bg-white')}>
                                    <img src={item.icon} alt="" className="h-full w-full object-contain" />
                                </div>
                            )}
                            <div className="flex flex-1 flex-col transition-all duration-300 group-hover:text-white">
                                <h3 className="text-xl font-semibold">{item.title}</h3>
                                {(item.text || data.link_text) && (
                                    <p className="mt-4 mb-0 text-sm leading-relaxed md:text-base">
                                        {item.text}{' '}
                                        {data.link_text && (
                                            <Link
                                                href={data.link_url || '#'}
                                                className="inline-flex cursor-pointer items-center text-sm font-medium text-accent underline underline-offset-4 opacity-90 transition-all duration-300 group-hover:text-white hover:opacity-100"
                                            >
                                                {data.link_text}
                                            </Link>
                                        )}
                                    </p>
                                )}
                            </div>
                        </article>
                    ))}
                </div>
            </MaxWidthWrapper>
        </section>
    );
}

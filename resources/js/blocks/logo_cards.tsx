import MaxWidthWrapper from '@/components/max-width-wrapper';
import { cn } from '@/lib/utils';
import { arr, BlockProps } from './shared';

export default function LogoCards({ data }: BlockProps) {
    const items = arr(data.items);
    return (
        <section className="bg-[#f4f4f4] pt-20 pb-24">
            <MaxWidthWrapper>
                {(data.heading || data.intro) && (
                    <div className="mx-auto mb-14 flex max-w-3xl flex-col items-center text-center">
                        {data.heading && <h2>{data.heading}</h2>}
                        {data.intro && <p className="md:text-lg">{data.intro}</p>}
                    </div>
                )}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {items.map((p, i) => (
                        <article
                            key={i}
                            className={cn(
                                'group relative flex flex-col overflow-hidden rounded-2xl p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl',
                                p.highlight ? 'bg-primary text-white ring-1 ring-primary' : 'bg-white ring-1 ring-gray-200 hover:ring-accent/40',
                            )}
                        >
                            <div
                                className={cn(
                                    'pointer-events-none absolute -top-16 -right-16 size-40 rounded-full blur-2xl transition-opacity duration-500',
                                    p.highlight ? 'bg-accent/20 opacity-100' : 'bg-accent/10 opacity-0 group-hover:opacity-100',
                                )}
                            />
                            {p.logo && (
                                <div className="relative mb-8 flex items-start justify-between">
                                    <img src={p.logo} alt={p.name} className="max-h-10 max-w-40" />
                                </div>
                            )}
                            <h3 className={cn('relative mb-3 text-xl font-semibold', p.highlight ? 'text-white' : 'text-black')}>{p.name}</h3>
                            <p className={cn('relative mb-0 flex-1 text-sm md:text-base', p.highlight && 'text-white/90')}>{p.description}</p>
                        </article>
                    ))}
                </div>
            </MaxWidthWrapper>
        </section>
    );
}

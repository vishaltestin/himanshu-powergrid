import { AnimatedStat } from '@/components/common/animated-stat';
import MaxWidthWrapper from '@/components/max-width-wrapper';
import { cn } from '@/lib/utils';
import { arr, BlockProps, Icon } from './shared';

function Value({ item, from0 = false }: { item: any; from0?: boolean }) {
    const to = Number(item.value);
    const animate = item.animate !== false && item.value !== '' && item.value !== null && Number.isFinite(to);
    return (
        <>
            {item.prefix && <span>{item.prefix}</span>}
            {animate ? <AnimatedStat from={from0 ? 0 : Math.round(to / 5)} to={to} suffix={item.suffix || ''} /> : <span>{item.value}{item.suffix}</span>}
        </>
    );
}

export default function StatsBand({ data }: BlockProps) {
    const items = arr(data.items);
    if (!items.length) return null;

    if (data.style === 'pills') {
        return (
            <MaxWidthWrapper className="pb-16 md:pb-20">
                <div className="grid grid-cols-1 gap-x-18 gap-y-8 pl-7 sm:grid-cols-2 lg:grid-cols-4 lg:pl-5">
                    {items.map((item, i) => (
                        <div key={i} className="flex w-full items-center gap-6 rounded-xl bg-accent/10 py-3">
                            <div className="-ml-7 flex size-16 shrink-0 items-center justify-center rounded-full bg-accent p-3 text-white">
                                <Icon name={item.icon || 'zap'} className="size-8" strokeWidth={1.6} />
                            </div>
                            <div>
                                <div className="mb-2 font-heading-2 text-4xl font-semibold tracking-tight text-black">
                                    <Value item={item} />
                                </div>
                                <div className="font-medium tracking-widest text-accent">{item.label}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </MaxWidthWrapper>
        );
    }

    if (data.style === 'boxed') {
        const cols = items.length >= 6 ? 'lg:grid-cols-6' : items.length === 5 ? 'lg:grid-cols-5' : items.length === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-4';
        return (
            <section className="pt-4 pb-24">
                <MaxWidthWrapper>
                    <div className="overflow-hidden rounded-3xl shadow-xl ring ring-gray-200">
                        <div className={cn('grid grid-cols-2', cols)}>
                            {items.map((item, i) => (
                                <div key={i} className={cn('flex flex-col items-center justify-center px-4 py-10 text-center', i % 2 === 0 ? 'bg-white' : 'bg-gray-100')}>
                                    <div className="mb-3 font-heading text-4xl md:text-5xl">
                                        <Value item={item} from0 />
                                    </div>
                                    <p className="mb-0 text-sm font-medium tracking-wide text-gray-800 md:text-base">{item.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </MaxWidthWrapper>
            </section>
        );
    }

    return (
        <section className="py-10 md:py-16">
            <MaxWidthWrapper>
                <div className="grid grid-cols-2 overflow-hidden rounded-2xl lg:grid-cols-4">
                    {items.map((item, i) => (
                        <div key={i} className={cn('flex flex-col items-center justify-center px-4 py-8 text-center md:py-12', i % 2 === 0 ? 'bg-primary text-white' : 'bg-[#f4f4f4] text-black')}>
                            <div className="mb-2 font-heading text-4xl md:text-6xl">
                                <Value item={item} />
                            </div>
                            <div className={cn('text-sm font-medium md:text-base', i % 2 === 0 ? 'text-white/90' : 'text-gray-700')}>{item.label}</div>
                        </div>
                    ))}
                </div>
            </MaxWidthWrapper>
        </section>
    );
}

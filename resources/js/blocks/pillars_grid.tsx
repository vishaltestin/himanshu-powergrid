import MaxWidthWrapper from '@/components/max-width-wrapper';
import { cn } from '@/lib/utils';
import { Link } from '@inertiajs/react';
import { ArrowUpRight } from 'lucide-react';
import { arr, BlockProps, SectionHeader } from './shared';

export default function PillarsGrid({ data }: BlockProps) {
    const items = arr(data.items);
    const cols = String(data.columns) === '3' ? 'md:grid-cols-2 lg:grid-cols-3' : 'md:grid-cols-2';

    return (
        <section className="relative pt-12 pb-10 md:pt-20 md:pb-16">
            <MaxWidthWrapper className="relative z-10">
                <SectionHeader label={data.label} heading={data.heading} introHtml={data.intro} />
                <div className={cn('grid grid-cols-1 gap-12', cols)}>
                    {items.map((item, index) => {
                        const Wrapper: any = item.link ? Link : 'div';
                        return (
                            <Wrapper
                                key={index}
                                {...(item.link ? { href: item.link } : {})}
                                className="group relative flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-3 hover:ring-accent/30"
                            >
                                <div className="relative mb-2 h-60 overflow-hidden rounded-xl md:h-90">
                                    {item.image && <img src={item.image} alt={item.title} className="size-full object-cover transition-all duration-300 group-hover:scale-110" />}
                                </div>
                                <div className="custom-border-200 relative rounded-xl px-5 py-2">
                                    <span
                                        className={cn(
                                            'absolute -top-6 right-4 flex size-10 items-center justify-center rounded-full ring-2 ring-white transition-all duration-300 md:-top-8 md:right-6 md:size-14',
                                            data.arrow_style === 'accent' ? 'bg-accent-foreground text-black group-hover:bg-black group-hover:text-white' : 'bg-black text-white group-hover:bg-accent-foreground',
                                        )}
                                    >
                                        <ArrowUpRight />
                                    </span>
                                    <h3 className="mb-1 font-heading text-xl transition-all duration-300 group-hover:text-accent md:text-2xl">{item.title}</h3>
                                    {item.subtitle && <p className="mb-4 text-xs font-semibold text-primary">{item.subtitle}</p>}
                                    {item.description && <p className="line-clamp-2">{item.description}</p>}
                                </div>
                            </Wrapper>
                        );
                    })}
                </div>
            </MaxWidthWrapper>
        </section>
    );
}

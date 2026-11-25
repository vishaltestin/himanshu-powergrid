import AnimatedButton from '@/components/common/animated-button';
import TopLabel from '@/components/common/top-label';
import MaxWidthWrapper from '@/components/max-width-wrapper';
import { cn } from '@/lib/utils';
import { Link } from '@inertiajs/react';
import { Zap } from 'lucide-react';
import { arr, BlockProps, Html, Icon } from './shared';

function OutlineButton({ text, link }: { text?: string; link?: string }) {
    if (!text) return null;
    return (
        <Link href={link || '#'} className="inline-block rounded-sm px-6 py-3 font-heading text-lg ring-2 ring-primary transition-all duration-300 hover:bg-primary hover:text-white">
            {text}
        </Link>
    );
}

function Check() {
    return (
        <div className="flex h-5.5 w-5.5 shrink-0 items-center justify-center rounded-full bg-primary">
            <svg className="h-3.5 w-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
        </div>
    );
}

function Features({ data }: { data: any }) {
    const features = arr(data.features);
    if (!features.length) return null;
    if (data.features_style === 'checklist') {
        return (
            <ul className="mt-2 mb-8 space-y-4">
                {features.map((f, i) => (
                    <li key={i} className="flex items-center gap-4">
                        <Check />
                        <span className="font-semibold text-gray-900">{f.label}</span>
                    </li>
                ))}
            </ul>
        );
    }
    return (
        <ul className="mt-4 grid grid-cols-2 gap-3 md:gap-4">
            {features.map((f, i) => (
                <li key={i} className="group flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-3 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg md:p-4">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white md:size-12">
                        <Icon name={f.icon || 'zap'} className="size-5 md:size-6" strokeWidth={1.8} />
                    </div>
                    <span className="leading-snug font-semibold text-gray-900">{f.label}</span>
                </li>
            ))}
        </ul>
    );
}

function Copy({ data, centerOnMobile = false }: { data: any; centerOnMobile?: boolean }) {
    const animated = data.layout === 'badges';
    return (
        <div className={cn('flex flex-col justify-center', centerOnMobile && 'text-center md:text-start')}>
            {data.label && <TopLabel text={data.label} />}
            {data.heading && <h2>{data.heading}</h2>}
            {data.lead && <p className="font-medium md:text-lg">{data.lead}</p>}
            <Html html={data.body} />
            <Features data={data} />
            {data.button_text && (
                <div className="mt-6 mb-2">
                    {animated ? <AnimatedButton link={data.button_link || '#'} text={data.button_text} textClassName="text-black" /> : <OutlineButton text={data.button_text} link={data.button_link} />}
                </div>
            )}
        </div>
    );
}

export default function MediaText({ data }: BlockProps) {
    const layout = data.layout || 'feature';
    const imageRight = data.image_position === 'right';
    const alt = data.image_alt || data.heading || '';

    let image: React.ReactNode;
    let grid = 'lg:grid-cols-2 lg:gap-24';
    let wrapper = 'pt-12 pb-10 md:pt-20 md:pb-20';

    if (layout === 'stacked') {
        wrapper = 'pt-16 md:pt-24 md:pb-16';
        image = (
            <div className="relative mx-auto w-full max-w-lg lg:mx-0 lg:max-w-none">
                <div className="overflow-hidden rounded-3xl lg:w-[88%]">
                    {data.image && <img src={data.image} alt={alt} className="aspect-square w-full object-cover lg:aspect-auto lg:h-140" />}
                </div>
                {data.image_secondary && (
                    <div className="absolute -right-6 -bottom-3 z-20 hidden overflow-hidden rounded-2xl shadow-lg ring-4 ring-slate-200 md:block md:w-[40%] lg:right-0 lg:-bottom-8 lg:w-[50%]">
                        <img src={data.image_secondary} alt="" className="h-50 w-full object-cover lg:h-55" />
                    </div>
                )}
            </div>
        );
    } else if (layout === 'about') {
        grid = 'lg:grid-cols-[1fr_1.2fr] lg:gap-18';
        wrapper = 'pt-12 md:pt-24 md:pb-16';
        image = (
            <div className="relative mx-auto w-full max-w-lg lg:mx-0 lg:max-w-none">
                <div className="h-full w-full overflow-hidden rounded-3xl">
                    {data.image && <img src={data.image} alt={alt} className="aspect-square w-full object-cover lg:aspect-auto lg:h-full" />}
                </div>
            </div>
        );
    } else if (layout === 'badges') {
        wrapper = 'pt-16 pb-16 md:pt-24 md:pb-20';
        const badges = arr(data.badges);
        image = (
            <div className="relative mx-auto w-full max-w-lg lg:mx-0 lg:max-w-none">
                <div className={cn('h-full w-[90%] overflow-hidden rounded-3xl', imageRight ? 'ml-auto' : '')}>
                    {data.image && <img src={data.image} alt={alt} className="h-full min-h-80 w-full object-cover" />}
                </div>
                {badges.map((b, i) => (
                    <div
                        key={i}
                        className={cn(
                            'absolute z-30 flex w-max items-center gap-4 rounded-xl border border-gray-100 bg-white p-4 shadow-xl',
                            i % 2 === 0 ? 'top-12 -right-2 md:-right-8' : 'bottom-12 left-4 md:left-6',
                        )}
                    >
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/10 p-2 text-accent">
                            <Zap className="size-6" />
                        </div>
                        <div>
                            <p className="mb-0 font-heading text-3xl text-accent">{b.value}</p>
                            <p className="mb-0 text-sm font-medium text-black">{b.label}</p>
                        </div>
                    </div>
                ))}
            </div>
        );
    } else {
        image = (
            <div className="h-full w-full overflow-hidden rounded-xl lg:rounded-3xl">
                {data.image && <img src={data.image} alt={alt} className="h-full w-full object-cover" />}
            </div>
        );
    }

    return (
        <section className={wrapper}>
            <MaxWidthWrapper>
                <div className={cn('grid grid-cols-1 gap-10 md:grid-cols-2 lg:gap-24', grid)}>
                    <div className={cn(imageRight && 'md:order-2')}>{image}</div>
                    <div className={cn(imageRight && 'md:order-1')}>
                        <Copy data={data} centerOnMobile={layout === 'feature'} />
                    </div>
                </div>
                {data.footer_body && <Html html={data.footer_body} className="mt-10 md:mt-14" />}
            </MaxWidthWrapper>
        </section>
    );
}

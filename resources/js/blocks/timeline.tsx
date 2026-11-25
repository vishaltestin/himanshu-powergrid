import MaxWidthWrapper from '@/components/max-width-wrapper';
import { cn } from '@/lib/utils';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { arr, BlockProps } from './shared';

type TimelineItem = { year?: string; title?: string; description?: string; image?: string };

const reveal = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.25 },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as any },
};

function TimelineContent({ item }: { item: TimelineItem }) {
    return (
        <motion.div {...reveal} className="rounded-2xl bg-gray-100 p-6 md:p-8">
            {item.title && <h2 className="mb-4 text-3xl text-black md:text-4xl">{item.title}</h2>}
            {item.description && <p className="mb-0 text-lg">{item.description}</p>}
        </motion.div>
    );
}

function TimelineImage({ item, side }: { item: TimelineItem; side: 'left' | 'right' }) {
    if (!item.image) return null;
    return (
        <motion.div {...reveal} className={cn('overflow-hidden rounded-3xl', side === 'left' ? 'rounded-tr-none' : 'rounded-tl-none')}>
            <img src={item.image} alt={item.title || ''} className="aspect-video w-full object-cover" />
        </motion.div>
    );
}

function TimelineRow({ item, isReversed, isLast }: { item: TimelineItem; isReversed: boolean; isLast: boolean }) {
    const connectorRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: connectorRef, offset: ['start 80%', 'end 30%'] });
    const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });
    const scaleY = useTransform(progress, [0, 1], [0, 1]);
    const opacity = useTransform(progress, [0, 0.88, 0.98, 1], [0, 1, 1, 0]);

    return (
        <div className={cn('relative grid grid-cols-[64px_1fr] gap-6 md:grid-cols-[1fr_100px_1fr] md:gap-12', !isLast && 'pb-16 md:pb-32')}>
            <div className="hidden min-w-0 md:block">{isReversed ? <TimelineImage item={item} side="left" /> : <TimelineContent item={item} />}</div>
            <div className="relative flex justify-center">
                <div className="border-dashed-1 relative z-20 h-fit rounded-xl bg-white px-2 py-2 md:px-7 md:py-3">
                    <span className="text-lg font-semibold text-slate-800 md:text-3xl">{item.year}</span>
                </div>
                {!isLast && (
                    <div ref={connectorRef} className="absolute top-[68px] bottom-0 left-1/2 w-[3px] -translate-x-1/2">
                        <div className="absolute inset-0 bg-[#e8f5ee]" />
                        <motion.div className="absolute inset-x-0 top-0 h-full origin-top bg-accent" style={{ scaleY, opacity }} />
                    </div>
                )}
            </div>
            <div className="hidden min-w-0 md:block">{isReversed ? <TimelineContent item={item} /> : <TimelineImage item={item} side="right" />}</div>
            {/* Mobile: content then image in one column */}
            <div className="flex min-w-0 flex-col gap-4 md:hidden">
                <TimelineContent item={item} />
                <TimelineImage item={item} side="right" />
            </div>
        </div>
    );
}

export default function Timeline({ data }: BlockProps) {
    const items = arr<TimelineItem>(data.items);
    return (
        <MaxWidthWrapper className="pt-24 md:pb-16">
            <div className="relative">
                {items.map((item, index) => (
                    <TimelineRow key={index} item={item} isReversed={index % 2 !== 0} isLast={index === items.length - 1} />
                ))}
            </div>
        </MaxWidthWrapper>
    );
}

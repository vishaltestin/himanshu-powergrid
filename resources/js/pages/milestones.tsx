import PageBanner from '@/components/common/page-banner';
import Footer from '@/components/footer';
import MaxWidthWrapper from '@/components/max-width-wrapper';
import { NavbarThree } from '@/components/navbar-3';
import { cn } from '@/lib/utils';
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
} from 'framer-motion';
import { useRef } from 'react';

type TimelineItem = {
    year: string;
    title: string;
    description: string;
    image: string;
};

const defaultTimeline: TimelineItem[] = [
    {
        year: '2026',
        title: 'The Beginning',
        description:
            'Livora started with a simple vision: make modern people management easier for growing teams. We began by researching the everyday challenges businesses face in managing employees, operations, and workplace communication.',
        image: '/images/power-grid-3.jpg',
    },
    {
        year: '2027',
        title: 'First Product',
        description:
            'We launched the first version of Livora, bringing essential HR tools into one connected experience. Our focus was on creating a simple, intuitive platform that helps teams spend less time managing processes and more time supporting their people.',
        image: '/images/hydro-plant.webp',
    },
    {
        year: '2028',
        title: 'Growing Together',
        description:
            'Livora evolved with new tools for employee management, onboarding, collaboration, and workplace operations. Feedback from growing teams helped us improve the platform and build a more flexible experience for modern businesses.',
        image: '/images/green-plant.avif',
    },
    {
        year: '2029',
        title: 'Looking Ahead',
        description:
            'We continue to build new experiences that make people management simpler, smarter, and more connected for organizations everywhere.',
        image: '/images/nuclear-plant.webp',
    },
];

export default function Milestones({ content }: { content?: any }) {
    const c = content ?? {};

    const timeline: TimelineItem[] = (
        Array.isArray(c.timeline) && c.timeline.length
            ? c.timeline.map((item: any, i: number) => ({
                  year: item?.year || '',
                  title: item?.title || '',
                  description: item?.description || '',
                  image: item?.image || defaultTimeline[i]?.image || '/images/power-grid-3.jpg',
              }))
            : defaultTimeline
    ).filter((item: any) => item.year || item.title);

    return (
        <>
            <NavbarThree />
            <PageBanner title={content?.banner_title || "Milestones & Achivements"} image={content?.banner_image || "/images/milestone.webp"} />
            <MaxWidthWrapper className="pt-24 md:pb-16">
                <div className="relative">
                    {timeline.map((item, index) => {
                        const isReversed = index % 2 !== 0;
                        const isLast = index === timeline.length - 1;

                        return (
                            <TimelineRow
                                key={item.year}
                                item={item}
                                isReversed={isReversed}
                                isLast={isLast}
                            />
                        );
                    })}
                </div>
            </MaxWidthWrapper>

            <Footer />
        </>
    );
}

type TimelineRowProps = {
    item: TimelineItem;
    isReversed: boolean;
    isLast: boolean;
};

function TimelineRow({
    item,
    isReversed,
    isLast,
}: TimelineRowProps) {

    const connectorRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: connectorRef,
        offset: ['start 80%', 'end 30%'],
    });

    const progress = useSpring(scrollYProgress, {
        stiffness: 120,
        damping: 30,
        restDelta: 0.001,
    });

    const scaleY = useTransform(
        progress,
        [0, 1],
        [0, 1],
    );

    const opacity = useTransform(
        progress,
        [0, 0.88, 0.98, 1],
        [0, 1, 1, 0],
    );

    return (
        <div
            className={cn(
                'relative grid grid-cols-[1fr_100px_1fr] gap-12',
                !isLast && 'pb-32',
            )}
        >
            <div className="min-w-0">
                {isReversed ? (
                    <TimelineImage item={item} side='left' />
                ) : (
                    <TimelineContent item={item} />
                )}
            </div>
            <div className="relative flex justify-center">
                {/* Year badge */}
                <div className="relative z-20 h-fit rounded-xl border-dashed-1 bg-white px-7 py-3">
                    <span className="text-3xl font-semibold text-slate-800">
                        {item.year}
                    </span>
                </div>

                {!isLast && (
                    <div
                        ref={connectorRef}
                        className="absolute left-1/2 top-[68px] bottom-0 w-[3px] -translate-x-1/2"
                    >
                        <div className="absolute inset-0 bg-[#e8f5ee]" />
                        <motion.div
                            className="absolute inset-x-0 top-0 h-full origin-top bg-accent"
                            style={{
                                scaleY,
                                opacity,
                            }}
                        />
                    </div>
                )}
            </div>
            <div className="min-w-0">
                {isReversed ? (
                    <TimelineContent item={item} />
                ) : (
                    <TimelineImage item={item} side='right' />
                )}
            </div>
        </div>
    );
}


type TimelineContentProps = {
    item: TimelineItem;
};

function TimelineContent({
    item,
}: TimelineContentProps) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 40,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{
                once: true,
                amount: 0.25,
            }}
            transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
            }}
            className="rounded-2xl bg-gray-100 p-8"
        >
            <h2 className="mb-4 text-4xl text-black">
                {item.title}
            </h2>

            <p className="text-lg">
                {item.description}
            </p>
        </motion.div>
    );
}

type TimelineImageProps = {
    item: TimelineItem;
    side: string
};

function TimelineImage({
    item,
    side
}: TimelineImageProps) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 40,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{
                once: true,
                amount: 0.25,
            }}
            transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
            }}
            className={cn("overflow-hidden rounded-3xl", side == 'left' ? 'rounded-tr-none' : 'rounded-tl-none')}
        >
            <img
                src={item.image}
                alt={item.title}
                className="aspect-video w-full object-cover"
            />
        </motion.div>
    );
}
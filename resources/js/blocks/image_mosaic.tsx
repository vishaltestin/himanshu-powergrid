import MaxWidthWrapper from '@/components/max-width-wrapper';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { arr, BlockProps, Html } from './shared';

/** Bento layout: a large first tile, then pairs. Repeats every 5 cards. */
const SPANS = ['md:col-span-4 md:row-span-7', 'md:col-span-2 md:row-span-6', 'md:col-span-2 md:row-span-6', 'md:col-span-2 md:row-span-5', 'md:col-span-2 md:row-span-5'];

export default function ImageMosaic({ data }: BlockProps) {
    const cards = arr(data.cards);
    const groups: any[][] = [];
    cards.forEach((c, i) => (i % 5 === 0 ? groups.push([c]) : groups[groups.length - 1].push(c)));
    return (
        <MaxWidthWrapper className="pt-12 pb-12">
            {(data.heading || data.intro) && (
                <div className="mb-12 flex flex-col items-center text-center">
                    {data.heading && <h2>{data.heading}</h2>}
                    <Html html={data.intro} className="md:max-w-3xl md:text-lg" />
                </div>
            )}
            <div className="space-y-4">
                {groups.map((group, g) => (
                    <div key={g} className="grid gap-4 md:h-190 md:grid-cols-6 md:grid-rows-12">
                        {group.map((card, j) => (
                            <motion.div
                                key={j}
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 + j * 0.1 }}
                                className={cn('h-72 md:h-auto', SPANS[j])}
                            >
                                <div className="group relative h-full w-full overflow-hidden rounded-xl bg-gray-200">
                                    {card.image && <img src={card.image} alt={card.title || ''} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />}
                                    <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/35 to-transparent" />
                                    <div className="absolute right-3 bottom-3 left-3 overflow-hidden rounded-md text-white">
                                        <div className="relative z-10 p-4">
                                            <h3 className="mb-0 font-heading text-2xl drop-shadow-sm">{card.title}</h3>
                                        </div>
                                        {card.text && (
                                            <div className="max-h-0 overflow-hidden transition-all duration-1000 ease-out group-hover:max-h-50">
                                                <p className="mb-0 px-4 pb-4 font-medium drop-shadow-sm">{card.text}</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                ))}
            </div>
        </MaxWidthWrapper>
    );
}

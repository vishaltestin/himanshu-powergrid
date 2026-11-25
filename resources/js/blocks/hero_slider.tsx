import ThemeButton from '@/components/common/theme-button';
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import Fade from 'embla-carousel-fade';
import { motion, Variants } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import { arr, BlockProps, Highlight } from './shared';

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
};
const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

export default function HeroSlider({ data }: BlockProps) {
    const slides = arr(data.slides);
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const delay = Math.max(1, Number(data.autoplay_seconds) || 4) * 1000;
    const plugins = useMemo(() => [Autoplay({ delay, stopOnInteraction: false }), Fade()], [delay]);

    useEffect(() => {
        if (!api) return;
        setCurrent(api.selectedScrollSnap());
        api.on('select', () => setCurrent(api.selectedScrollSnap()));
    }, [api]);

    if (!slides.length) return null;

    return (
        <div className="relative h-120 w-full overflow-hidden min-[1400px]:h-192 md:h-174 lg:h-192">
            <Carousel setApi={setApi} opts={{ loop: true, watchDrag: true, duration: 50 }} plugins={plugins} className="h-full w-full [&>div]:h-full">
                <CarouselContent className="h-full">
                    {slides.map((slide, index) => (
                        <CarouselItem key={index} className="relative h-full w-full">
                            {slide.image && (
                                <img src={slide.image} alt={slide.title || `Slide ${index + 1}`} className="absolute inset-0 h-full w-full object-cover object-center select-none" />
                            )}
                            <div className="absolute inset-0 bg-black/10 select-none"></div>
                            <motion.div
                                className="absolute top-1/2 z-10 flex w-full -translate-y-1/2 flex-col items-center p-8 text-center select-none md:p-12 lg:p-16"
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                <motion.div variants={itemVariants} className="w-full overflow-hidden">
                                    <h1 className="font-heading text-4xl text-white uppercase drop-shadow-lg md:text-6xl lg:text-8xl">
                                        <Highlight text={slide.title} highlight={slide.highlight} className={slide.highlight_color || 'text-accent'} />
                                    </h1>
                                </motion.div>
                                {slide.description && (
                                    <motion.p variants={itemVariants} className="mx-auto mt-4 text-base text-white drop-shadow-md md:max-w-4xl md:text-xl">
                                        {slide.description}
                                    </motion.p>
                                )}
                                {(data.tagline || data.tagline_highlight) && (
                                    <motion.p variants={itemVariants} className="mx-auto mt-2 mb-8 text-base font-bold text-white drop-shadow-md md:max-w-4xl md:text-xl">
                                        {data.tagline} <span className="text-accent-foreground">{data.tagline_highlight}</span>
                                    </motion.p>
                                )}
                                {slide.button_text && (
                                    <motion.div variants={itemVariants}>
                                        <ThemeButton text={slide.button_text} link={slide.button_link || '#'} />
                                    </motion.div>
                                )}
                            </motion.div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
            {slides.length > 1 && (
                <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3 md:bottom-16">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => api?.scrollTo(index)}
                            aria-label={`Go to slide ${index + 1}`}
                            className={`h-3.5 rounded-full transition-all duration-300 ${current === index ? 'w-8 bg-accent-foreground' : 'w-3.5 bg-white/50 hover:bg-white/80'}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

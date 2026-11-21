import ThemeButton from '../common/theme-button';
import { motion, Variants } from 'framer-motion';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import Fade from 'embla-carousel-fade';
import { useEffect, useState } from 'react';

const HEADINGS = [
    <span key="1">
        Powering India's <span className="text-accent">Green</span> Transition
    </span>,
    <span key="2">
        Innovating <span className="text-primary">Sustainable</span> Energy
    </span>,
    <span key="3">
        Building a <span className="text-accent-foreground">Brighter</span>{' '}
        Tomorrow
    </span>,
];

const BUTTONTEXT = ['Partner With Us', 'Contact Us', 'Explore'];

const CAROUSEL_DATA = [
    {
        title: (
            <>
                Building a{' '}
                <span className="text-accent-foreground">Brighter</span>{' '}
                Tomorrow
            </>
        ),
        desc: 'Building the critical energy infrastructure that India needs — from high-voltage HVDC transmission lines to pumped hydro storage, from nuclear power to green hydrogen.',
        buttonText: 'Explore',
        image: '/images/banner-2.png',
    },
    {
        title: (
            <>
                Powering India's <span className="text-accent">Green</span>{' '}
                Transition
            </>
        ),
        desc: 'Building the critical energy infrastructure that India needs — from high-voltage HVDC transmission lines to pumped hydro storage, from nuclear power to green hydrogen.',
        buttonText: 'Partner With Us',
        image: 'https://images.pexels.com/photos/17921806/pexels-photo-17921806.jpeg',
    },
    {
        title: (
            <>
                Innovating <span className="text-primary">Sustainable</span>{' '}
                Energy
            </>
        ),
        desc: 'Building the critical energy infrastructure that India needs — from high-voltage HVDC transmission lines to pumped hydro storage, from nuclear power to green hydrogen.',
        buttonText: 'Contact Us',
        image: 'https://images.pexels.com/photos/35973875/pexels-photo-35973875.jpeg',
    },
    {
        title: (
            <>
                Driving India's <span className="text-accent">Energy</span>{' '}
                Future
            </>
        ),
        desc: "Accelerating India's journey towards energy independence through advanced infrastructure, innovative technologies, and sustainable power solutions for generations to come.",
        buttonText: 'Discover More',
        image: '/images/india-map.png',
    },
];

function Hero() {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        if (!api) return;

        setCurrent(api.selectedScrollSnap());

        api.on('select', () => {
            setCurrent(api.selectedScrollSnap());
        });
    }, [api]);

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: 'easeOut' },
        },
    };

    return (
        // <div className="relative h-120 w-full min-[1400px]:h-192 md:h-174 lg:h-192">
        //     <video
        //         src="/images/power-5-b.mp4"
        //         autoPlay
        //         loop
        //         muted
        //         className="absolute inset-0 h-full w-full object-cover object-center"
        //     />
        //     <div className="absolute inset-0 bg-black/10"></div>
        //     <motion.div
        //         className="absolute top-1/2 z-10 flex w-full -translate-y-1/2 flex-col items-center p-8 text-center md:p-12 lg:p-16"
        //         variants={containerVariants}
        //         initial="hidden"
        //         animate="visible"
        //     >
        //         <motion.div
        //             variants={itemVariants}
        //             className="w-full overflow-hidden"
        //         >
        //             <Carousel
        //                 opts={{
        //                     loop: true,
        //                     watchDrag: false,
        //                     duration: 50,
        //                 }}
        //                 plugins={[
        //                     Autoplay({
        //                         delay: 4000,
        //                         stopOnInteraction: false,
        //                     }),
        //                     Fade(),
        //                 ]}
        //                 className="w-full"
        //             >
        //                 <CarouselContent>
        //                     {HEADINGS.map((headingElement, index) => (
        //                         <CarouselItem key={index}>
        //                             <h1 className="font-heading text-4xl text-white uppercase drop-shadow-lg md:text-6xl lg:text-8xl">
        //                                 {headingElement}
        //                             </h1>
        //                         </CarouselItem>
        //                     ))}
        //                 </CarouselContent>
        //             </Carousel>
        //         </motion.div>

        //         <motion.p
        //             variants={itemVariants}
        //             className="mx-auto mt-4 text-base text-white drop-shadow-md md:max-w-4xl md:text-xl"
        //         >
        //             Building the critical energy infrastructure that India needs
        //             — from high-voltage HVDC transmission lines to pumped hydro
        //             storage, from nuclear power to green hydrogen.
        //         </motion.p>

        //         <motion.p
        //             variants={itemVariants}
        //             className="mx-auto mt-2 mb-8 text-base font-bold text-white drop-shadow-md md:max-w-4xl md:text-xl"
        //         >
        //             Others talk about it.{' '}
        //             <span className="text-accent-foreground">We build it.</span>
        //         </motion.p>

        //         <motion.div variants={itemVariants}>
        //             <Carousel
        //                 opts={{
        //                     loop: true,
        //                     watchDrag: false,
        //                     duration: 50,
        //                 }}
        //                 plugins={[
        //                     Autoplay({
        //                         delay: 4000,
        //                         stopOnInteraction: false,
        //                     }),
        //                     Fade(),
        //                 ]}
        //                 className="w-full"
        //             >
        //                 <CarouselContent>
        //                     {BUTTONTEXT.map((text, index) => (
        //                         <CarouselItem key={index}>
        //                             <ThemeButton text={text} link='/contact-us' />
        //                         </CarouselItem>
        //                     ))}
        //                 </CarouselContent>
        //             </Carousel>
        //         </motion.div>
        //     </motion.div>
        // </div>
        <div className="relative h-120 w-full overflow-hidden min-[1400px]:h-192 md:h-174 lg:h-192">
            <Carousel
                setApi={setApi}
                opts={{ loop: true, watchDrag: true, duration: 50 }}
                plugins={[
                    Autoplay({ delay: 4000, stopOnInteraction: false }),
                    Fade(),
                ]}
                className="h-full w-full [&>div]:h-full"
            >
                <CarouselContent className="h-full">
                    {CAROUSEL_DATA.map((slide, index) => (
                        <CarouselItem
                            key={index}
                            className="relative h-full w-full"
                        >
                            {/* Background Image */}
                            <img
                                src={slide.image}
                                alt={`Slide ${index + 1}`}
                                className="absolute inset-0 h-full w-full object-cover object-center select-none"
                            />
                            <div className="absolute inset-0 bg-black/10 select-none"></div>

                            {/* Content */}
                            <motion.div
                                className="absolute top-1/2 z-10 flex w-full -translate-y-1/2 flex-col items-center p-8 text-center select-none md:p-12 lg:p-16"
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                <motion.div
                                    variants={itemVariants}
                                    className="w-full overflow-hidden"
                                >
                                    <h1 className="font-heading text-4xl text-white uppercase drop-shadow-lg md:text-6xl lg:text-8xl">
                                        {slide.title}
                                    </h1>
                                </motion.div>

                                <motion.p
                                    variants={itemVariants}
                                    className="mx-auto mt-4 text-base text-white drop-shadow-md md:max-w-4xl md:text-xl"
                                >
                                    {slide.desc}
                                </motion.p>

                                {/* Static text you had in your original code */}
                                <motion.p
                                    variants={itemVariants}
                                    className="mx-auto mt-2 mb-8 text-base font-bold text-white drop-shadow-md md:max-w-4xl md:text-xl"
                                >
                                    Others talk about it.{' '}
                                    <span className="text-accent-foreground">
                                        We build it.
                                    </span>
                                </motion.p>

                                <motion.div variants={itemVariants}>
                                    <ThemeButton
                                        text={slide.buttonText}
                                        link="/contact-us"
                                    />
                                </motion.div>
                            </motion.div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                {/* <CarouselPrevious className="absolute top-1/2 left-4 z-20 h-11 w-11 -translate-y-1/2 border-none bg-white/20 text-white ring ring-white backdrop-blur-sm transition-all hover:bg-white/70 sm:left-8 md:h-14 md:w-14" />
                <CarouselNext className="absolute top-1/2 right-4 z-20 h-11 w-11 -translate-y-1/2 border-none bg-white/20 text-white ring ring-white backdrop-blur-sm transition-all hover:bg-white/70 sm:right-8 md:h-14 md:w-14" /> */}
            </Carousel>
            <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3 md:bottom-16">
                {CAROUSEL_DATA.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => api?.scrollTo(index)}
                        aria-label={`Go to slide ${index + 1}`}
                        className={`h-3.5 rounded-full transition-all duration-300 ${
                            current === index
                                ? 'w-8 bg-accent-foreground'
                                : 'w-3.5 bg-white/50 hover:bg-white/80'
                        }`}
                    />
                ))}
            </div>
        </div>
    );
}

export default Hero;

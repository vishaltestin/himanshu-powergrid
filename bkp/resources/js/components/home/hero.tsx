import ThemeButton from '../common/theme-button';
import { motion, Variants } from 'framer-motion';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import Fade from "embla-carousel-fade";

const HEADINGS = [
    <span key="1">
        Powering India's <span className="text-emerald-400">Green</span> Transition
    </span>,
    <span key="2">
        Innovating <span className="text-cyan-400">Sustainable</span> Energy
    </span>,
    <span key="3">
        Building a <span className="text-amber-400">Brighter</span> Tomorrow
    </span>,
];

function Hero() {
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
        <div className="relative h-120 w-full min-[1400px]:h-192 md:h-174 lg:h-192">
            <video
                src="/images/power-5-b.mp4"
                autoPlay
                loop
                muted
                className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/10"></div>
            <motion.div
                className="absolute top-1/2 z-10 flex w-full -translate-y-1/2 flex-col items-center p-8 text-center md:p-12 lg:p-16"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* <motion.h1
                    variants={itemVariants}
                    className="font-heading text-4xl text-white uppercase drop-shadow-lg md:text-6xl lg:text-8xl"
                >
                    Powering India's Green Transition
                </motion.h1> */}
                <motion.div
                    variants={itemVariants}
                    className="w-full overflow-hidden"
                >
                    <Carousel
                        opts={{
                            loop: true,
                            watchDrag: false,
                            duration: 50,
                        }}
                        plugins={[
                            Autoplay({
                                delay: 4000,
                                stopOnInteraction: false,
                            }),
                            Fade(),
                        ]}
                        className="w-full"
                    >
                        <CarouselContent>
                            {HEADINGS.map((headingElement, index) => (
                                <CarouselItem key={index}>
                                    <h1 className="font-heading text-4xl text-white uppercase drop-shadow-lg md:text-6xl lg:text-8xl">
                                        {headingElement}
                                    </h1>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </motion.div>

                <motion.p
                    variants={itemVariants}
                    className="mx-auto mt-4 mb-8 text-base text-white drop-shadow-md md:max-w-4xl md:text-xl"
                >
                    Building the critical energy infrastructure that India needs
                    — from high-voltage HVDC transmission lines to pumped hydro
                    storage, from nuclear power to green hydrogen.
                </motion.p>

                <motion.div variants={itemVariants}>
                    <ThemeButton text="Partner With Us" />
                </motion.div>
            </motion.div>
        </div>
    );
}

export default Hero;

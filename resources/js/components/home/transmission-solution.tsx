import { useEffect, useState } from 'react';
import TopLabel from '../common/top-label';
import MaxWidthWrapper from '../max-width-wrapper';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from '@/components/ui/carousel';

const TransmissionSolutions = () => {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        if (!api) return;

        // Set initial centered slide
        setCurrent(api.selectedScrollSnap());

        // Update centered slide on change
        api.on('select', () => {
            setCurrent(api.selectedScrollSnap());
        });
    }, [api]);
    const cards = [
        {
            title: 'Sustainability',
            description:
                'From setting new benchmarks through cutting edge technology to empowering communities with defined human development goals, growth is driven by sustainable footprints.',
            image: '/images/csr.jpg',
        },
        {
            title: 'Communities',
            description:
                'Touching over 500,000 families through Adani Foundation, CSR arm of CubeGrid.',
            image: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        },
        {
            title: 'Solution',
            description:
                'Pioneering the modernization of transmission networks with ultra-high voltage lines for uninterrupted, secure energy flow.',
            image: '/images/power-grid-5.avif',
        },
        {
            title: 'Sustainability',
            description:
                'From setting new benchmarks through cutting edge technology to empowering communities with defined human development goals, growth is driven by sustainable footprints.',
            image: '/images/csr.jpg',
        },
        {
            title: 'Communities',
            description:
                'Touching over 500,000 families through Adani Foundation, CSR arm of CubeGrid.',
            image: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        },
        {
            title: 'Solution',
            description:
                'Pioneering the modernization of transmission networks with ultra-high voltage lines for uninterrupted, secure energy flow.',
            image: '/images/power-grid-5.avif',
        },
    ];

    return (
        <section className="pt-4 pb-16">
            <MaxWidthWrapper>
                <div className="mb-8 flex w-full items-center justify-between">
                    <div>
                        <TopLabel text="Our Solutions" />
                        <h2>
                            Innovative energy solutions <br />
                            for a sustainable world
                        </h2>
                    </div>
                    <p className="max-w-xl text-lg">
                        Together, we can build a future where clean energy
                        drives progress, innovation, and environmental harmony.
                        Whether it’s solar, wind, or other renewable solutions,
                        let’s create a legacy of sustainability.
                    </p>
                </div>

                {/* <div className="grid min-h-110 grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6">
                    {cards.map((card, index) => (
                        <article
                            key={index}
                            className="group relative flex min-h-48 flex-col justify-end overflow-hidden rounded-3xl p-4"
                        >
                            <img
                                src={card.image}
                                alt={card.title}
                                className="absolute inset-0 z-0 h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                            />

                            <div className="pointer-events-none absolute inset-0 z-10 bg-linear-to-t from-black via-white/10 to-transparent" />

                            <div className="relative z-20 transform rounded-xl bg-white/10 p-4 backdrop-blur-md transition-transform duration-300 group-hover:-translate-y-4">
                                <h3 className="mb-3 font-heading text-2xl text-white md:text-3xl">
                                    {card.title}
                                </h3>
                                <p className="mb-0 text-sm leading-relaxed text-white md:text-base">
                                    {card.description}
                                </p>
                            </div>
                        </article>
                    ))}
                </div> */}
                <div className="relative w-full pb-10">
                    <Carousel
                        setApi={setApi}
                        opts={{
                            align: 'center',
                            loop: true,
                        }}
                        className="w-full"
                    >
                        {/* 
                          Added py-16 to ensure the scaled-up center item 
                          doesn't get clipped by hidden overflow 
                        */}
                        <CarouselContent className="items-center py-12">
                            {cards.map((card, index) => {
                                const isCenter = current === index;

                                return (
                                    <CarouselItem
                                        key={index}
                                        // Restrict basis to force cards closer together, enabling the overlap effect
                                        className={`basis-full md:basis-1/3 ${
                                            isCenter ? 'z-50' : 'z-1'
                                        }`}
                                    >
                                        <div
                                            className={`relative h-full w-full transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] select-none ${
                                                isCenter
                                                    ? 'z-50 scale-[1.25] opacity-100'
                                                    : 'z-1 scale-[0.90]'
                                            }`}
                                        >
                                            {/* Adjusted min-h to match the wider landscape feel of the screenshot */}
                                            <article className="group relative flex h-full min-h-80 flex-col justify-end overflow-hidden rounded-2xl bg-white p-4 md:min-h-86">
                                                <img
                                                    src={card.image}
                                                    alt={card.title}
                                                    className="absolute inset-0 z-0 h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-115"
                                                />
                                                <div className="pointer-events-none absolute inset-0 z-10 bg-linear-to-t from-black via-white/10 to-transparent" />
                                                {isCenter && (
                                                    <div className="relative z-20 transform rounded-xl bg-white/10 p-4 backdrop-blur-md transition-transform duration-300">
                                                        <h3 className="mb-3 font-heading text-2xl text-white md:text-2xl">
                                                            {card.title}
                                                        </h3>
                                                        <p className="mb-0 text-sm leading-relaxed text-white md:text-sm">
                                                            {card.description}
                                                        </p>
                                                    </div>
                                                )}
                                                {/* {!isCenter && (
                                                    <div className="relative z-20 transform rounded-xl bg-white/10 p-4 backdrop-blur-md transition-transform duration-300">
                                                        <h3 className="mb-0 text-center font-heading text-2xl text-white md:text-2xl">
                                                            {card.title}
                                                        </h3>
                                                    </div>
                                                )} */}
                                            </article>
                                        </div>
                                    </CarouselItem>
                                );
                            })}
                        </CarouselContent>

                        <div className="mt-8 flex items-center justify-center gap-4">
                            <CarouselPrevious className="static h-12 w-12 translate-y-0" />
                            <CarouselNext className="static h-12 w-12 translate-y-0" />
                        </div>
                    </Carousel>
                </div>
            </MaxWidthWrapper>
        </section>
    );
};

export default TransmissionSolutions;

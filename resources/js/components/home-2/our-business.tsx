import React, { useEffect, useState } from 'react';
import MaxWidthWrapper from '../max-width-wrapper';
import TopLabel from '../common/top-label';
import {
    Zap,
    Plug,
    Droplet,
    Home,
    Radiation,
    Circle,
    CornerDownLeftIcon,
    ArrowUpRight,
} from 'lucide-react';
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';
import { Check } from 'lucide-react';
import Autoplay from 'embla-carousel-autoplay';
import { Link } from '@inertiajs/react';

const services = [
    {
        title: 'Transmission Infrastructure',
        subtitle: 'SUBSTATIONS • HVAC • HVDC • LINES',
        desc: "Developing and operating high-voltage transmission networks — inter-state (ISTS) and intra-state — including EHV/UHV substations, HVAC and HVDC lines, and GIS substations. Participating in TBCB competitive bidding for complex transmission corridors across India's most challenging terrains.",
        features: [
            'ISTS',
            'Intra-State',
            'HVDC ±800kV',
            'HVAC',
            'GIS Substations',
            'TBCB',
        ],
        icon: <Zap className="h-6 w-6" />,
        image: '/images/transmission-infra.jpg',
    },
    {
        title: 'EPC for Renewable Evacuation',
        subtitle: 'TRANSMISSION LINES FOR RE PROJECTS',
        desc: 'Engineering, procurement, and construction for transmission lines connecting solar parks, wind farms, and hybrid RE zones to the grid. Dedicated evacuation corridors, pooling substations, and end-to-end turnkey execution ensuring every megawatt of clean energy reaches the grid.',
        features: [
            'Solar Evacuation',
            'Wind Farm Lines',
            'Pooling Stations',
            'RE Corridors',
            'Turnkey EPC',
        ],
        icon: <Plug className="h-6 w-6" />,
        image: '/images/solar-wind-grid.jpg',
    },
    {
        title: 'Pumped Hydro Storage',
        subtitle: 'LONG-DURATION ENERGY STORAGE',
        desc: 'Developing pumped storage hydropower (PSH) projects for long-duration energy storage — the backbone of grid stability in a renewable-heavy future. India has identified 103 GW of PSH potential. Pursuing greenfield projects providing 8–12 hours of dispatchable storage in complex geographies.',
        features: [
            'Greenfield PSH',
            'Long-Duration',
            'Grid Stability',
            'Off-River',
            '103 GW Opportunity',
        ],
        icon: <Droplet className="h-6 w-6" />,
        image: '/images/hydro-plant.webp',
    },
    {
        title: 'Distribution Privatization',
        subtitle: 'DISCOM OPERATIONS & MODERNIZATION',
        desc: "Participating in India's power distribution reform and privatization. Acquiring distribution licenses, modernizing legacy infrastructure with smart metering, AT&C loss reduction, and consumer experience transformation — bringing private sector efficiency to India's last-mile power delivery.",
        features: [
            'DISCOM Reform',
            'Smart Metering',
            'AT&C Loss',
            'Privatization',
            'Consumer Tech',
        ],
        icon: <Home className="h-6 w-6" />,
        image: '/images/discom.jpg',
    },
    {
        title: 'Nuclear Power — Shanti',
        subtitle: 'CLEAN BASELOAD ENERGY',
        desc: "Preparing for India's opening of nuclear energy to the private sector under the Shanti initiative. Building capabilities in nuclear project development, SMR (Small Modular Reactor) technology partnerships, and regulatory readiness — positioning for one of the world's largest nuclear expansion programs.",
        features: [
            'SMR Technology',
            'Baseload Power',
            'Private Sector',
            'Shanti Program',
            'Global Partners',
        ],
        icon: <Radiation className="h-6 w-6" />,
        image: '/images/nuclear-plant.webp',
    },
    {
        title: 'Green Hydrogen',
        subtitle: 'ELECTROLYZER & HYDROGEN INFRASTRUCTURE',
        desc: "Developing green hydrogen production facilities powered by dedicated renewable energy, with integrated electrolyzer capacity, storage, and transportation infrastructure. Targeting India's 5 MMTPA National Green Hydrogen Mission and serving industrial decarbonization across steel, refining, and fertilizers.",
        features: [
            'Electrolyzers',
            'RE-Powered',
            '5 MMTPA',
            'Industrial Decarb',
            'Hydrogen Hubs',
        ],
        icon: <Circle className="h-6 w-6" />,
        image: '/images/green-plant.avif',
    },
];

function OurBusiness() {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!api) return;

        const update = () => {
            setCount(api.scrollSnapList().length);
            setCurrent(api.selectedScrollSnap() + 1);
        };

        update();

        api.on('select', update);

        return () => {
            api.off('select', update);
        };
    }, [api]);
    return (
        <section className="relative pt-12 pb-16">
            <MaxWidthWrapper className="relative z-10">
                <div className="mb-12 flex flex-col items-center text-center">
                    <TopLabel text="// Our Businesses" />

                    <h2 className="h2">
                        Smart Solutions for <br />
                        Power Transmission
                    </h2>

                    <p className="max-w-3xl text-lg">
                        An integrated platform building complex infrastructure
                        across the full energy value chain
                    </p>
                </div>
                {/* <Carousel
                    setApi={setApi}
                    opts={{
                        align: 'start',
                        loop: true,
                    }}
                    plugins={[
                        Autoplay({
                            delay: 2000,
                        }),
                    ]}
                    className="w-full [&>div]:px-1 [&>div]:pt-4 [&>div]:pb-10"
                >
                    <div className="flex flex-col items-center text-center">
                        <TopLabel text="Our Solutions" />
                        <h2>Smart Solutions for Power Transmission</h2>
                        <p className="mb-0 max-w-3xl text-lg">
                            An integrated platform building complex
                            infrastructure across the full energy value chain
                        </p>
                    </div>

                    <CarouselContent className="-ml-4 md:-ml-10">
                        {services.map((service, index) => (
                            <CarouselItem
                                key={index}
                                className="group pl-4 select-none md:basis-1/2 md:pl-10 lg:basis-1/3 xl:basis-1/3"
                            >
                                <div className="relative flex h-full flex-col rounded-xl bg-white p-3 shadow-lg ring ring-slate-200 transition-all duration-300 hover:-translate-y-3 hover:ring-accent/60">
                                    <div className="relative mb-4 h-70 overflow-hidden rounded-lg">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="size-full object-cover transition-all duration-300 group-hover:scale-110"
                                        />
                                        <div className="absolute right-2 bottom-2 flex h-14 w-14 items-center justify-center rounded-full bg-yellow-400 text-white">
                                            {service.icon}
                                        </div>
                                    </div>

                                    <h3 className="mb-3 font-heading text-2xl transition-all duration-300 group-hover:text-accent">
                                        {service.title}
                                    </h3>
                                    <p className="mb-0 text-sm">
                                        {service.desc}
                                    </p>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className="flex items-center justify-center gap-6">
                        <CarouselPrevious className="relative right-auto left-auto size-14 translate-x-0 translate-y-0" />
                        <div className="flex w-7 shrink-0 items-center justify-center gap-2 text-base font-semibold">
                            <span className="text-accent">{current}</span>

                            <span className="text-slate-400">/</span>

                            <span className="text-black">{count}</span>
                        </div>
                        <CarouselNext className="relative right-auto left-auto size-14 translate-x-0 translate-y-0" />
                    </div>
                </Carousel> */}
                <div className="grid grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div className="group relative flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-3 hover:ring-accent/30">
                            <div className="relative mb-2 h-70 overflow-hidden rounded-xl">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="size-full object-cover transition-all duration-300 group-hover:scale-110"
                                />
                            </div>

                            {/* Card Header */}
                            <div className="px-5 py-2 custom-border-200 rounded-xl relative">
                                <Link href="#" className='bg-yellow-400 text-white size-14 rounded-full absolute -top-8 right-6 flex items-center justify-center group-hover:bg-accent transition-all duration-300'>
                                <ArrowUpRight />
                                </Link>
                                <h3 className="mb-3 font-heading-2 font-semibold tracking-tight text-xl transition-all duration-300 group-hover:text-accent">
                                    {service.title}
                                </h3>
                                <p className="line-clamp-3 text-sm">
                                    {service.desc}
                                </p>
                                {/* <div className="mt-auto">
                                    <a
                                        href="#"
                                        className="group/link relative inline-flex items-center gap-2 pb-1 font-semibold text-black hover:text-accent"
                                    >
                                        <span>Learn More</span>

                                        <CornerDownLeftIcon size={16} />

                                        <span className="absolute bottom-0 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover/link:w-full" />
                                    </a>
                                </div> */}
                            </div>
                        </div>
                    ))}
                </div>
            </MaxWidthWrapper>
        </section>
    );
}

export default OurBusiness;

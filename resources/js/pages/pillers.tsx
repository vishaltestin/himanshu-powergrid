import PageBanner from '@/components/common/page-banner';
import TopLabel from '@/components/common/top-label';
import Footer from '@/components/footer';
import MaxWidthWrapper from '@/components/max-width-wrapper';
import { NavbarThree } from '@/components/navbar-3';
import { Link } from '@inertiajs/react';
import { ArrowUpRight, Circle, Droplet, Home, Plug, Radiation, Zap } from 'lucide-react';
import React from 'react'

const services = [
    {
        title: 'Transmission Infrastructure',
        href: '/pillar/transmission-infrastructure',
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
        image: '/images/transmission-infra-2.png',
    },
    {
        title: 'EPC for Renewable Evacuation',
        href: '/pillar/epc-for-renewable-evacuation',
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
        image: '/images/solar-wind-grid-2.png',
    },
    // {
    //     title: 'Pumped Hydro Storage',
    //     href: '/pillar/pumped-hydro-storage',
    //     subtitle: 'LONG-DURATION ENERGY STORAGE',
    //     desc: 'Developing pumped storage hydropower (PSH) projects for long-duration energy storage — the backbone of grid stability in a renewable-heavy future. India has identified 103 GW of PSH potential. Pursuing greenfield projects providing 8–12 hours of dispatchable storage in complex geographies.',
    //     features: [
    //         'Greenfield PSH',
    //         'Long-Duration',
    //         'Grid Stability',
    //         'Off-River',
    //         '103 GW Opportunity',
    //     ],
    //     icon: <Droplet className="h-6 w-6" />,
    //     image: '/images/hydro-plant-2.avif',
    // },
    // {
    //     title: 'Distribution Privatization',
    //     href: '/pillar/distribution-privatization',
    //     subtitle: 'DISCOM OPERATIONS & MODERNIZATION',
    //     desc: "Participating in India's power distribution reform and privatization. Acquiring distribution licenses, modernizing legacy infrastructure with smart metering, AT&C loss reduction, and consumer experience transformation — bringing private sector efficiency to India's last-mile power delivery.",
    //     features: [
    //         'DISCOM Reform',
    //         'Smart Metering',
    //         'AT&C Loss',
    //         'Privatization',
    //         'Consumer Tech',
    //     ],
    //     icon: <Home className="h-6 w-6" />,
    //     image: '/images/discom-2.avif',
    // },
    // {
    //     title: 'Nuclear Power — Shanti',
    //     href: '/pillar/nuclear-power-shanti',
    //     subtitle: 'CLEAN BASELOAD ENERGY',
    //     desc: "Preparing for India's opening of nuclear energy to the private sector under the Shanti initiative. Building capabilities in nuclear project development, SMR (Small Modular Reactor) technology partnerships, and regulatory readiness — positioning for one of the world's largest nuclear expansion programs.",
    //     features: [
    //         'SMR Technology',
    //         'Baseload Power',
    //         'Private Sector',
    //         'Shanti Program',
    //         'Global Partners',
    //     ],
    //     icon: <Radiation className="h-6 w-6" />,
    //     image: '/images/nuclear-plant.webp',
    // },
    // {
    //     title: 'Green Hydrogen',
    //     href: '/pillar/green-hydrogen',
    //     subtitle: 'ELECTROLYZER & HYDROGEN INFRASTRUCTURE',
    //     desc: "Developing green hydrogen production facilities powered by dedicated renewable energy, with integrated electrolyzer capacity, storage, and transportation infrastructure. Targeting India's 5 MMTPA National Green Hydrogen Mission and serving industrial decarbonization across steel, refining, and fertilizers.",
    //     features: [
    //         'Electrolyzers',
    //         'RE-Powered',
    //         '5 MMTPA',
    //         'Industrial Decarb',
    //         'Hydrogen Hubs',
    //     ],
    //     icon: <Circle className="h-6 w-6" />,
    //     image: '/images/green-plant.avif',
    // },
];


function Pillers() {
    return (
        <>
            <NavbarThree />
            <PageBanner title="Our Pillars" image='/images/business-2.jpg' />
            <section className="relative pt-24 pb-10 md:pb-16">
                <MaxWidthWrapper className="relative z-10">
                    <div className="mb-8 md:mb-12 flex flex-col items-center text-center">
                        <TopLabel text="Our Six Pillars" />

                        <h2>Smart Solutions for Power Transmission</h2>

                        <p className="md:max-w-3xl md:text-lg">
                            An integrated platform building complex infrastructure
                            across the full energy value chain
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
                        {services.map((service, index) => (
                            <Link href={service.href} className="group relative flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-3 hover:ring-accent/30">
                                <div className="relative mb-2 h-60 md:h-90 overflow-hidden rounded-xl">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="size-full object-cover transition-all duration-300 group-hover:scale-110"
                                    />
                                </div>

                                {/* Card Header */}
                                <div className="custom-border-200 relative rounded-xl px-5 py-2">
                                    <span
                                        className="absolute -top-6 md:-top-8 right-4 md:right-6 flex size-10 md:size-14 items-center justify-center rounded-full bg-accent-foreground text-white transition-all duration-300 group-hover:bg-accent"
                                    >
                                        <ArrowUpRight />
                                    </span>
                                    <h3 className="mb-1 font-heading text-xl md:text-2xl transition-all duration-300 group-hover:text-accent">
                                        {service.title}
                                    </h3>
                                    <p className='font-semibold text-xs mb-4 text-primary'>{service.subtitle}</p>
                                    <p className="line-clamp-2">
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
                            </Link>
                        ))}
                    </div>
                </MaxWidthWrapper>
            </section>
            <Footer />
        </>
    )
}

export default Pillers
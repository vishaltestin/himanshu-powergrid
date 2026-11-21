import React, { useState } from 'react';
import MaxWidthWrapper from '../max-width-wrapper';
import { motion } from 'framer-motion';
import TopLabel from '../common/top-label';

function OurApproachTwo() {
    const steps = [
        {
            num: '01',
            title: 'Identify',
            desc: 'Systematically identify complex infrastructure opportunities where regulatory, technical, and terrain barriers create value for experienced developers.',
            img: '/images/identify-2.jpg',
        },
        {
            num: '02',
            title: 'Develop',
            desc: 'CXOs with 30+ years each navigate regulatory approvals, land acquisition, environmental clearances, and financial structuring for GW-scale projects.',
            img: '/images/construct.jpg',
        },
        {
            num: '03',
            title: 'Construct',
            desc: "World-class project management with proven execution in challenging geographies. Our construction leadership has delivered India's largest HVDC and transmission projects.",
            img: '/images/transmission-infra.jpg',
        },
        {
            num: '04',
            title: 'Operate',
            desc: 'Own and operate with institutional governance, 99%+ availability targets, safety-first culture, and technology-driven performance optimization.',
            img: '/images/operate.jpg',
        },
        {
            num: '05',
            title: 'Scale',
            desc: 'Build platforms, not projects. Grow each vertical into a portfolio of scale through organic development, acquisitions, and strategic partnerships.',
            img: '/images/power-grid.jpg',
        },
    ];

    return (
        <section className="mb-10 md:mb-16 bg-[#f4f4f4] pt-16 pb-10 md:pb-20">
            <MaxWidthWrapper>
                <div className="mb-8 md:mb-8 flex flex-col items-center text-center">
                    <TopLabel text="Our Approach" />
                    <h2>How We Build Complex Infrastructure</h2>
                    <p className="md:text-lg">
                        A disciplined five-stage approach led by CXOs with 30+
                        years hands-on experience each
                    </p>
                </div>
                <div className="relative hidden grid-cols-5 lg:grid">
                    {steps.map((step, index) => {
                        const isImageTop = index % 2 === 0;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-100px' }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.15,
                                }}
                                className="group relative z-10 flex h-110 flex-col"
                            >
                                <div className="absolute top-1/2 left-1/2 z-20 flex size-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-sm font-bold text-white shadow-sm transition-all duration-300 group-hover:size-14 group-hover:bg-accent">
                                    {step.num}
                                </div>
                                <div className="relative flex w-full flex-1 flex-col justify-end">
                                    {isImageTop ? (
                                        <div className="h-full w-full overflow-hidden rounded-t-full bg-gray-200">
                                            <img
                                                src={step.img}
                                                alt={step.title}
                                                className="h-full w-full object-cover transition-all duration-300 group-hover:scale-110"
                                            />
                                        </div>
                                    ) : (
                                        <div className="flex h-full flex-col justify-end px-2 pb-10 text-center">
                                            <h3 className="mb-3 font-heading text-2xl">
                                                {step.title}
                                            </h3>
                                            <p className="mb-0 text-sm">
                                                {step.desc}
                                            </p>
                                        </div>
                                    )}
                                </div>
                                <div className="relative flex w-full flex-1 flex-col justify-start">
                                    {isImageTop ? (
                                        <div className="flex h-full flex-col justify-start px-2 pt-10 text-center">
                                            <h3 className="mb-3 font-heading text-2xl">
                                                {step.title}
                                            </h3>
                                            <p className="mb-0 text-sm">
                                                {step.desc}
                                            </p>
                                        </div>
                                    ) : (
                                        <div className="h-full w-full overflow-hidden rounded-b-full bg-gray-200">
                                            <img
                                                src={step.img}
                                                alt={step.title}
                                                className="h-full w-full object-cover transition-all duration-300 group-hover:scale-110"
                                            />
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Mobile & Tablet Fallback Layout */}
                <div className="relative flex flex-col gap-16 lg:hidden">
                    <div className="approach-dashed-border absolute top-0 bottom-0 left-5 md:left-24 z-0 w-px" />

                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="relative z-10 flex flex-col pl-16 md:pl-48"
                        >
                            <div className="absolute top-8 left-5 md:left-24 z-20 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-sm font-bold text-white shadow-sm">
                                {step.num}
                            </div>
                            <div className='flex flex-col md:flex-row gap-0 md:gap-10'>
                                <div className="mb-6 h-40 md:aspect-square shrink-0 overflow-hidden rounded-lg bg-gray-200">
                                    <img
                                        src={step.img}
                                        alt={step.title}
                                        className="h-full w-full object-cover"
                                    />
                                </div>

                                <div className='mt-0 md:mt-4'>
                                    <h3 className="mb-2 font-heading text-xl md:text-2xl">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm max-w-md">{step.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </MaxWidthWrapper>
        </section>
    );
}

export default OurApproachTwo;

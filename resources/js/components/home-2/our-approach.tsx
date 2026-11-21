import React, { useState } from 'react';
import MaxWidthWrapper from '../max-width-wrapper';
import TopLabel from '../common/top-label';

function OurApproach() {
    const [activeHover, setActiveHover] = useState(0);

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
        <section className="mb-16 bg-[#f4f4f4] py-20">
            <MaxWidthWrapper className="relative">
                <div className="mb-10 flex flex-col items-center text-center">
                    <TopLabel text="// Our Approach" />
                    <h2 className="h2">
                        How We Build <br />
                        Complex Infrastructure
                    </h2>
                    <p className="text-lg">
                        A disciplined five-stage approach led by CXOs with 30+
                        years hands-on experience each
                    </p>
                </div>
                <div className="relative hidden grid-cols-5 lg:grid">
                    {steps.map((step, index) => {
                        const isImageTop = index % 2 === 0;

                        return (
                            <div
                                key={index}
                                className="relative z-10 flex h-132 flex-col"
                            >
                                <div className="absolute top-1/2 left-1/2 z-20 flex size-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-yellow-400 text-sm font-bold text-white shadow-sm">
                                    {step.num}
                                </div>
                                <div className="relative flex w-full flex-1 flex-col justify-end">
                                    {isImageTop ? (
                                        <div className="aspect-square h-full w-full overflow-hidden rounded-t-full bg-gray-200">
                                            <img
                                                src={step.img}
                                                alt={step.title}
                                                className="h-full w-full object-cover"
                                            />
                                        </div>
                                    ) : (
                                        <div className="flex h-full flex-col justify-end px-2 pb-10 text-center">
                                            <h3 className="mb-3 font-heading-2 text-xl font-semibold">
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
                                            <h3 className="mb-3 font-heading-2 text-xl font-semibold">
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
                                                className="h-full w-full object-cover"
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Mobile & Tablet Fallback Layout */}
                <div className="relative flex flex-col gap-16 lg:hidden">
                    <div className="absolute top-0 bottom-0 left-[2rem] z-0 w-[1px] border-l border-dashed border-gray-300" />

                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="relative z-10 flex flex-col pr-4 pl-20"
                        >
                            <div className="absolute top-8 left-[2rem] z-20 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[4px] border-[#f4f6f9] bg-[#ff5a36] text-sm font-bold text-white shadow-sm">
                                {step.num}
                            </div>

                            <div className="mb-6 h-[200px] w-full overflow-hidden rounded-[32px] bg-gray-200">
                                <img
                                    src={step.img}
                                    alt={step.title}
                                    className="h-full w-full object-cover"
                                />
                            </div>

                            <div>
                                <h3 className="mb-2 text-xl font-bold text-gray-900">
                                    {step.title}
                                </h3>
                                <p className="text-sm leading-relaxed text-gray-500">
                                    {step.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </MaxWidthWrapper>
        </section>
    );
}

export default OurApproach;

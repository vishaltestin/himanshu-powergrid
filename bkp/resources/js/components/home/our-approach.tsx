import React, { useState } from 'react';
import MaxWidthWrapper from '../max-width-wrapper';
import TopLabel from '../common/top-label';

function OurApproach() {
    const [activeHover, setActiveHover] = useState(0);

    const steps = [
        {
            num: '01.',
            title: 'Identify',
            desc: 'Systematically identify complex infrastructure opportunities where regulatory, technical, and terrain barriers create value for experienced developers.',
            img: '/images/identify-2.jpg',
        },
        {
            num: '02.',
            title: 'Develop',
            desc: 'CXOs with 30+ years each navigate regulatory approvals, land acquisition, environmental clearances, and financial structuring for GW-scale projects.',
            img: '/images/construct.jpg',
        },
        {
            num: '03.',
            title: 'Construct',
            desc: "World-class project management with proven execution in challenging geographies. Our construction leadership has delivered India's largest HVDC and transmission projects.",
            img: '/images/transmission-infra.jpg',
        },
        {
            num: '04.',
            title: 'Operate',
            desc: 'Own and operate with institutional governance, 99%+ availability targets, safety-first culture, and technology-driven performance optimization.',
            img: '/images/operate.jpg',
        },
        {
            num: '05.',
            title: 'Scale',
            desc: 'Build platforms, not projects. Grow each vertical into a portfolio of scale through organic development, acquisitions, and strategic partnerships.',
            img: '/images/power-grid.jpg',
        },
    ];

    return (
        <section className="mb-16 bg-[#f4f4f4] pt-16 pb-20">
            <MaxWidthWrapper>
                <div className="mb-10 flex flex-col items-center text-center">
                    <TopLabel text="Our Approach" />
                    <h2>How We Build Complex Infrastructure</h2>
                    <p className="text-lg">
                        A disciplined five-stage approach led by CXOs with 30+
                        years hands-on experience each
                    </p>
                </div>
                <div className="flex h-90 flex-col gap-4 md:flex-row">
                    {steps.map((step, index) => {
                        const isActive = activeHover === index;

                        return (
                            <div
                                key={index}
                                onMouseEnter={() => setActiveHover(index)}
                                className={`relative flex cursor-pointer flex-col justify-between overflow-hidden rounded-xl transition-all duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)] ${isActive ? 'bg-primary md:w-[40%]' : 'bg-primary md:w-[15%]'} h-full p-6 md:p-8`}
                            >
                                <div className="relative z-20">
                                    <span className={`text-4xl font-semibold md:text-5xl transition-all ${isActive ? 'text-white' : 'text-[#5572948c]'}`}>
                                        {step.num}
                                    </span>
                                </div>
                                <div
                                    className={`absolute top-1/2 right-0 z-10 translate-x-1/2 -translate-y-1/2 transition-opacity duration-500 ${isActive ? 'opacity-0' : 'opacity-100'}`}
                                >
                                    <svg
                                        width={24}
                                        height={24}
                                        x={0}
                                        y={0}
                                        viewBox="0 0 1707 1707"
                                        xmlSpace="preserve"
                                        className="h-38 w-38"
                                    >
                                        <g>
                                            <path
                                                d="M1154 1334H553c-6 0-11-3-15-7s-5-10-5-15L634 300c1-3 2-7 4-10L836 9c4-6 10-9 17-9 6 0 12 3 16 8l200 282c2 3 3 6 3 10l101 1008c1 2 1 4 1 6 0 11-9 20-20 20m-579-40h557l-99-985L853 55 674 309z"
                                                fill="#1d497c"
                                                opacity={1}
                                                data-original="#1d497c"
                                                className=""
                                            />
                                            <path
                                                d="M1237 1707c-6 0-12-4-16-9l-254-373c-4-6-4-14-1-21 4-6 10-10 18-10h170c9 0 17 6 19 15l83 370c1 2 2 5 2 8 0 11-10 20-21 20m-215-373 173 255-57-255zM470 1707c-3 0-6-1-8-2-9-4-14-13-12-23l84-373c2-9 10-15 19-15h170c8 0 14 4 18 10 3 7 3 15-1 21l-254 373c-4 5-10 9-16 9m99-373-57 255 173-255z"
                                                fill="#1d497c"
                                                opacity={1}
                                                data-original="#1d497c"
                                                className=""
                                            />
                                            <path
                                                d="M1154 1334c-4 0-8-1-11-4L578 971c-5-4-9-10-9-16 0-7 3-13 8-17l470-349-398-280c-6-4-9-11-8-18 0-7 5-13 11-16l292-132c10-5 22 0 27 10 4 10 0 22-10 26L701 297l392 275c5 4 8 10 8 16 0 7-3 13-8 17L624 953l541 344c9 6 12 18 6 27-4 6-11 10-17 10"
                                                fill="#1d497c"
                                                opacity={1}
                                                data-original="#1d497c"
                                                className=""
                                            />
                                            <path
                                                d="M552 1334c-6 0-13-4-17-10-6-9-3-21 6-27l541-344-469-348c-5-4-8-10-8-17 0-6 3-12 8-16l392-275-260-118c-10-4-14-16-10-26 5-10 17-15 27-10l292 132c6 3 11 9 11 16 1 7-2 14-8 18L659 589l470 349c5 4 8 10 8 17 0 6-4 12-9 16l-565 359c-3 3-7 4-11 4"
                                                fill="#1d497c"
                                                opacity={1}
                                                data-original="#1d497c"
                                                className=""
                                            />
                                            <path
                                                d="M1068 470c-4 0-8-1-11-3-5-3-9-9-9-15l-15-148c-1-6 1-12 5-16s9-6 15-6l455 16c9 0 18 7 19 17s-5 19-14 22l-440 132c-1 1-3 1-5 1m7-147 10 101 300-90zM639 470c-2 0-4 0-6-1L194 337c-9-3-15-12-14-22 1-9 9-17 19-17l454-16c6 0 12 2 16 6s6 10 5 16l-15 148c-1 6-4 12-9 15-3 2-7 3-11 3M321 334l301 90 10-101zM1105 843c-4 0-8-1-11-3-5-4-9-9-9-15l-15-148c-1-6 1-12 5-16s10-7 15-6l455 16c9 0 18 7 19 17s-5 19-14 22l-440 132c-1 1-3 1-5 1m7-147 10 101 300-91zM602 843c-2 0-4 0-6-1L157 710c-9-3-15-12-14-22s9-17 19-17l454-16c6 0 12 2 16 6s6 10 5 16l-15 148q-1.5 9-9 15c-3 2-7 3-11 3M284 706l301 91 10-101z"
                                                fill="#1d497c"
                                                opacity={1}
                                                data-original="#1d497c"
                                                className=""
                                            />
                                            <path
                                                d="M1469 887c-11 0-20-9-20-20V713c0-11 9-20 20-20s20 9 20 20v154c0 11-9 20-20 20M1469 503c-11 0-20-9-20-20V329c0-11 9-20 20-20s20 9 20 20v154c0 11-9 20-20 20M238 887c-11 0-20-9-20-20V713c0-11 9-20 20-20s20 9 20 20v154c0 11-9 20-20 20M238 503c-11 0-20-9-20-20V329c0-11 9-20 20-20s20 9 20 20v154c0 11-9 20-20 20M1408 1707H298c-11 0-20-9-20-20s9-20 20-20h1110c11 0 20 9 20 20s-9 20-20 20"
                                                fill="#1d497c"
                                                opacity={1}
                                                data-original="#1d497c"
                                                className=""
                                            />
                                        </g>
                                    </svg>
                                </div>
                                <div
                                    className={`absolute inset-0 z-0 transition-opacity duration-500 ${isActive ? 'opacity-60' : 'opacity-0'}`}
                                >
                                    <img
                                        src={step.img}
                                        alt={step.title}
                                        className="h-full w-full object-cover object-right"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-black via-white/10 to-transparent" />
                                </div>
                                <div className="relative z-20 mt-auto">
                                    <h3
                                        className={`font-heading text-white transition-all duration-500 ${isActive ? 'mb-4 text-3xl' : 'text-2xl'}`}
                                    >
                                        {step.title}
                                    </h3>
                                    <div
                                        className={`overflow-hidden transition-all duration-500 ease-in-out ${isActive ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                                    >
                                        <p className="mb-0 pr-4 text-sm leading-relaxed text-white md:pr-12 md:text-base">
                                            {step.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </MaxWidthWrapper>
        </section>
    );
}

export default OurApproach;

import React from 'react';
import MaxWidthWrapper from '../max-width-wrapper';
import TopLabel from '../common/top-label';

const capabilities = [
    {
        icon: '/images/icons/high-voltage.png',
        title: 'High-Voltage',
        description:
            'Reliable high-voltage transmission systems engineered for efficient, long-distance power delivery.',
    },
    {
        icon: '/images/icons/infra.png',
        title: 'Substation Infrastructure',
        description:
            'Advanced substations designed for dependable power transformation, protection, and distribution.',
    },
    {
        icon: '/images/icons/smart-grid.png',
        title: 'Grid Modernization',
        description:
            'Modern grid solutions that improve resilience, visibility, efficiency, and operational performance.',
    },
    {
        icon: '/images/icons/grid.png',
        title: 'Smart Grid Technology',
        description:
            'Intelligent monitoring and control systems that help networks respond faster and operate smarter.',
    },
];

function WhyChooseUs() {
    return (
        <section className="bg-[#f4f4f4] py-20 mb-16">
            <MaxWidthWrapper>
                <div className="mb-10 flex flex-col items-start">
                    <TopLabel text="Our Capabilities" />

                    <h2>Why Choose Us</h2>
                </div>

                <div className="grid gap-4 lg:grid-cols-4">
                    {capabilities.map((item) => (
                        <article
                            key={item.title}
                            className="group flex flex-col justify-between rounded-2xl bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:bg-primary md:p-8"
                        >
                            <div className="flex size-12 items-center justify-center rounded-lg bg-white text-xl group-hover:p-1 transition-all duration-300 mb-4">
                                <img src={item.icon} alt="" className='h-full w-full object-contain' />
                            </div>

                            <div className='group-hover:text-white transition-all duration-300'>
                                <h3 className="text-xl font-semibold">
                                    {item.title}
                                </h3>

                                <p className="mt-4 mb-0 text-sm leading-relaxed md:text-base">
                                    {item.description}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </MaxWidthWrapper>
        </section>
    );
}

export default WhyChooseUs;

import React from 'react';
import MaxWidthWrapper from '../max-width-wrapper';
import TopLabel from '../common/top-label';

const capabilities = [
    {
        icon: '/images/icons/high-voltage.png',
        title: 'Integrity',
        description:
            'We do the right thing — always, and transparently.',
    },
    {
        icon: '/images/icons/infra.png',
        title: 'Collaboration',
        description:
            'We build together, we succeed together.',
    },
    {
        icon: '/images/icons/smart-grid.png',
        title: 'Social Impact',
        description:
            'Power is what we transmit. Progress is what we deliver.',
    },
    {
        icon: '/images/icons/grid.png',
        title: 'Respect',
        description:
            'We earn the right to build by respecting all those affected.',
    },
    {
        icon: '/images/icons/high-voltage.png',
        title: 'Innovation',
        description:
            'Find a better way — in technology, execution and thinking.',
    },
];

function WhyChooseUs() {
    return (
        <section className="pb-24">
            <MaxWidthWrapper>
                <div className="mb-10 flex flex-col items-center text-center">
                    <TopLabel text="Values" />

                    <h2>Our Core Values</h2>
                    <p className='md:text-lg'>Five values. One culture. Every project, every decision.</p>
                </div>

                <div className="grid gap-4 lg:grid-cols-5">
                    {capabilities.map((item) => (
                        <article
                            key={item.title}
                            className="group flex flex-col rounded-2xl bg-[#f4f4f4] p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-primary md:p-6"
                        >
                            <div className="flex size-12 items-center justify-center rounded-lg bg-white text-xl p-1 transition-all duration-300 mb-6">
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

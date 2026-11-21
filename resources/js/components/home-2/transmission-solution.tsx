import React from 'react';
import MaxWidthWrapper from '../max-width-wrapper';
import TopLabel from '../common/top-label';

const TransmissionSolutions = () => {
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
    ];
    const solutions = [
        {
            title: 'High-Voltage Lines',
            description:
                'Deploying ultra-high voltage (UHV) AC and DC transmission lines to minimize power loss over long distances.',
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                </svg>
            ),
        },
        {
            title: 'Smart Substations',
            description:
                'Next-generation automated substations ensuring real-time monitoring, rapid fault detection, and grid reliability.',
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                </svg>
            ),
        },
        {
            title: 'Grid Modernization',
            description:
                'Upgrading legacy infrastructure with advanced sensors and SCADA systems for predictive maintenance.',
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                    />
                </svg>
            ),
        },
        {
            title: 'Telecom Networks',
            description:
                'Integrating robust telecommunication networks across transmission lines for secure, high-speed grid data transfer.',
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
                    />
                </svg>
            ),
        },
        {
            title: 'High-Voltage Lines',
            description:
                'Deploying ultra-high voltage (UHV) AC and DC transmission lines to minimize power loss over long distances.',
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                </svg>
            ),
        },
        {
            title: 'Smart Substations',
            description:
                'Next-generation automated substations ensuring real-time monitoring, rapid fault detection, and grid reliability.',
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                </svg>
            ),
        },
        {
            title: 'Grid Modernization',
            description:
                'Upgrading legacy infrastructure with advanced sensors and SCADA systems for predictive maintenance.',
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                    />
                </svg>
            ),
        },
        {
            title: 'Telecom Networks',
            description:
                'Integrating robust telecommunication networks across transmission lines for secure, high-speed grid data transfer.',
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
                    />
                </svg>
            ),
        },
    ];

    return (
        <section className="pt-12 pb-16">
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

                <div className="grid min-h-110 grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6">
                    {cards.map((card, index) => (
                        <article
                            key={index}
                            className='group relative flex min-h-48 flex-col justify-end overflow-hidden rounded-3xl p-4'
                        >
                            <img
                                src={card.image}
                                alt={card.title}
                                className="absolute inset-0 z-0 h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                            />

                            <div className="pointer-events-none absolute inset-0 z-10 bg-linear-to-t from-black via-white/10 to-transparent" />

                            <div className="relative z-20 transform transition-transform duration-300 group-hover:-translate-y-4 bg-white/10 backdrop-blur-md p-4 rounded-xl">
                                <h3 className="mb-3 text-2xl font-heading text-white md:text-3xl">
                                    {card.title}
                                </h3>
                                <p className="text-sm leading-relaxed text-white md:text-base mb-0">
                                    {card.description}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
                {/* <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {solutions.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col rounded-xl bg-gray-50/50 p-8 ring ring-gray-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                        >
                            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                {item.icon}
                            </div>
                            <h3 className="mb-3 text-xl font-semibold text-black">
                                {item.title}
                            </h3>
                            <p className="mb-0">{item.description}</p>
                        </div>
                    ))}
                </div> */}
            </MaxWidthWrapper>
        </section>
    );
};

export default TransmissionSolutions;

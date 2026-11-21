import React, { useEffect, useRef, useState } from 'react';
import MaxWidthWrapper from '../max-width-wrapper';
import TopLabel from '../common/top-label';

const Capabilities = () => {
    const capabilities = [
        {
            title: 'High-Voltage Cable Production',
            description:
                'Our advanced extrusion and cross-linking facilities produce Extra High Voltage (EHV) underground and submarine cables. Engineered in extreme-cleanroom environments, these cables ensure minimal transmission loss and maximum durability across vast distances.',
            image: '/images/power-grid.avif',
        },
        {
            title: 'Smart Substation Assembly',
            description:
                'We operate state-of-the-art assembly lines for Gas Insulated Switchgear (GIS) and modular substation components. Our compact, high-reliability modules are designed to integrate seamlessly into congested urban grids and remote environments alike.',
            image: '/images/power-grid.jpg',
        },
        {
            title: 'Power Transformer Fabrication',
            description:
                'Our heavy-duty manufacturing bays are equipped with automated vapor phase drying and precision winding machines. We build ultra-high voltage transformers capable of managing massive power loads with unparalleled thermal efficiency.',
            image: '/images/power-grid.avif',
        },
        {
            title: 'Transmission Tower Manufacturing',
            description:
                'Utilizing automated CNC lines and eco-friendly hot-dip galvanizing plants, we produce high-strength lattice towers and monopoles. Each structure is rigorously tested to withstand extreme weather events and high wind loads.',
            image: '/images/banner-1.png',
        },
        {
            title: 'Grid Control & SCADA Assembly',
            description:
                'Beyond heavy metal, our high-tech laboratories assemble the brain of the grid. We manufacture and test next-generation SCADA control units, integrating predictive AI and automated fault-detection systems for ultimate grid resilience.',
            image: '/images/power-grid.avif',
        },
    ];

    const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
    const [cardTransforms, setCardTransforms] = useState(
        capabilities.map(() => ({
            scale: 1,
            y: 0,
        }))
    );

    useEffect(() => {
        let ticking = false;

        const updateCards = () => {
            const stickyTop = 120;
            const animationDistance = 220;

            const newTransforms = capabilities.map((_, index) => {
                const currentCard = cardRefs.current[index];
                const nextCard = cardRefs.current[index + 1];

                if (!currentCard || !nextCard) {
                    return { scale: 1, y: 0 };
                }

                const nextRect = nextCard.getBoundingClientRect();
                const progress =
                    (stickyTop + animationDistance - nextRect.top) /
                    animationDistance;

                const clampedProgress = Math.max(
                    0,
                    Math.min(1, progress)
                );
                const scale = 1 - clampedProgress * 0.06;
                const y = -clampedProgress * 22;

                return {
                    scale,
                    y,
                };
            });

            setCardTransforms(newTransforms);

            ticking = false;
        };

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(updateCards);
                ticking = true;
            }
        };

        updateCards();

        window.addEventListener('scroll', handleScroll, {
            passive: true,
        });

        window.addEventListener('resize', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, [capabilities.length]);

    return (
        <section className="relative w-full pt-12 pb-24">
            <MaxWidthWrapper>
                <div className="mb-12 flex flex-col items-center text-center">
                    <TopLabel text="Infrastructure & Manufacturing" />

                    <h2>Forging the Future of the Grid</h2>

                    <p className="max-w-3xl text-lg">
                        From ultra-high voltage transformers to predictive AI
                        control systems, our end-to-end manufacturing
                        capabilities ensure absolute reliability at every node
                        of power transmission.
                    </p>
                </div>

                <div className="relative">
                    {capabilities.map((cap, index) => {
                        const isEven = index % 2 === 0;

                        return (
                            <div
                                key={cap.title}
                                ref={(el) => {
                                    cardRefs.current[index] = el;
                                }}
                                className="sticky top-30 mb-12 w-full"
                                style={{
                                    zIndex: index + 1,
                                    transform: `
                                        translateY(${cardTransforms[index].y}px)
                                        scale(${cardTransforms[index].scale})
                                    `,
                                    transformOrigin: 'center top',
                                    transition:
                                        'transform 80ms linear',
                                }}
                            >
                                <div
                                    className="
                                        flex h-auto w-full flex-col
                                        overflow-hidden rounded-3xl
                                        bg-[#f4f4f4] text-black
                                        md:h-90 md:flex-row
                                        md:justify-between
                                    "
                                >
                                    <div
                                        className={`
                                            flex w-full flex-col justify-center
                                            px-8 py-10
                                            md:w-1/2
                                            lg:px-10
                                            ${
                                                !isEven
                                                    ? 'md:order-2'
                                                    : 'md:order-1'
                                            }
                                        `}
                                    >
                                        <h3 className="mb-6 text-2xl font-semibold sm:text-3xl">
                                            {cap.title}
                                        </h3>

                                        <p className="mb-0">
                                            {cap.description}
                                        </p>
                                    </div>

                                    <div
                                        className={`
                                            relative h-64 w-full p-4
                                            md:h-full md:w-[40%]
                                            md:p-6
                                            ${
                                                !isEven
                                                    ? 'md:order-1'
                                                    : 'md:order-2'
                                            }
                                        `}
                                    >
                                        <div className="relative h-full w-full overflow-hidden rounded-2xl shadow-inner">
                                            <img
                                                src={cap.image}
                                                alt={cap.title}
                                                className="
                                                    absolute inset-0
                                                    h-full w-full
                                                    object-cover
                                                    transition-transform
                                                    duration-1000
                                                    hover:scale-105
                                                "
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </MaxWidthWrapper>
        </section>
    );
};

export default Capabilities;
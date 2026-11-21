import TopLabel from '../common/top-label';
import MaxWidthWrapper from '../max-width-wrapper';

const Clients = () => {
    const clients = [
        {
            name: 'Cube Highways',
            logo: '/images/client/cube-highway.png',
        },
        {
            name: 'HEXA Renewables',
            logo: '/images/client/hexa.png',
        },
        {
            name: 'AG&P',
            logo: '/images/client/agp.png',
        },
        {
            name: 'THINK Gas',
            logo: '/images/client/think-gas.webp',
        },
        {
            name: 'Lightstorm',
            logo: '/images/client/lightstorm.webp',
        },
        {
            name: 'Polaris Smart Metering',
            logo: '/images/client/polaris.svg',
        },
    ];

    return (
        <section className="relative overflow-hidden bg-white pb-16">
            <MaxWidthWrapper>
                <div className="mb-12 flex flex-col items-center text-center">
                    <TopLabel text="Our Investor" />
                    <h2>Wholly Owned by I Squared Capital</h2>

                    <p className="max-w-3xl text-lg">
                        Cube Grid Advisors is a portfolio company of I Squared
                        Capital — the leading independent global infrastructure
                        investor
                    </p>
                </div>

                {/* <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                    {clients.map((client) => (
                        <div
                            key={client.name}
                            className="group flex h-26 items-center justify-center p-6 transition-colors duration-300 md:h-40"
                        >
                            <img
                                src={client.logo}
                                alt={client.name}
                                loading="lazy"
                                className="max-h-16 w-auto max-w-36 object-contain transition-all duration-300 group-hover:scale-110"
                            />
                        </div>
                    ))}
                </div> */}
                <div className="relative flex w-full overflow-hidden">
                    <div className="animate-marquee hover:[animation-play-state:paused] flex w-max items-center mt-8 mb-12">
                        {[...clients, ...clients].map((client, index) => (
                            <div
                                key={`${client.name}-${index}`}
                                className="group flex w-62 shrink-0 items-center justify-center px-10 transition-colors duration-300"
                            >
                                <img
                                    src={client.logo}
                                    alt={client.name}
                                    loading="lazy"
                                    className="w-full h-full object-contain transition-all duration-300 group-hover:scale-110"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* <div className="mt-8 flex flex-col items-center justify-between gap-5 border-t border-black/8 pt-6 sm:flex-row">
                    <p className="mb-0">
                        Trusted by utilities, EPCs, infrastructure companies,
                        and grid operators.
                    </p>

                    <div className="flex items-center gap-2 font-medium">
                        <span className="relative flex size-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/80" />
                            <span className="relative inline-flex size-2 rounded-full bg-primary" />
                        </span>
                        Building reliable power infrastructure
                    </div>
                </div> */}
            </MaxWidthWrapper>
        </section>
    );
};

export default Clients;

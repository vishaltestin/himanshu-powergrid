import TopLabel from '../common/top-label';
import MaxWidthWrapper from '../max-width-wrapper';

const Clients = () => {
    const clients = [
        {
            name: 'I Sqaue',
            logo: '/images/client/isquare.png',
        },
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
        {
            name: 'Cubegrid',
            logo: '/images/logo-new-transparent.png',
        },
        {
            name: 'I Sqaue',
            logo: '/images/client/isquare.png',
        },
    ];

    return (
        <section className="relative overflow-hidden bg-white pb-16">
            <MaxWidthWrapper>
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24">
                    <div>
                        <TopLabel text="// Our Investor" />
                        <h2 className="h2">
                            Wholly Owned by <br />I Squared Capital
                        </h2>

                        <p>
                            Cube Grid Advisors is a portfolio company of I
                            Squared Capital — the leading independent global
                            infrastructure investor
                        </p>
                        <p className="mb-0">
                            I Squared Capital is a leading independent global
                            infrastructure investment manager with $50 billion+
                            in assets under management. Founded in 2012 by
                            former senior executives at Morgan Stanley, I
                            Squared builds and scales essential infrastructure
                            businesses that deliver critical services to
                            millions of people worldwide. With a portfolio of
                            90+ companies operating across 70+ countries and a
                            team of 300+ professionals across 9 global offices,
                            I Squared is known for developing mid-market
                            companies into scaled infrastructure leaders.
                        </p>
                    </div>
                    <div className="relative flex w-full overflow-hidden bg-white">
                        <div className="grid grid-cols-3 gap-3">
                            {clients.map((client, index) => (
                                <div
                                    key={`${client.name}-${index}`}
                                    className="group custom-border-200 flex shrink-0 items-center justify-center rounded-lg px-10 transition-colors duration-300"
                                >
                                    <img
                                        src={client.logo}
                                        alt={client.name}
                                        loading="lazy"
                                        className="h-full w-full object-contain transition-all duration-300 group-hover:scale-110"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </MaxWidthWrapper>
        </section>
    );
};

export default Clients;

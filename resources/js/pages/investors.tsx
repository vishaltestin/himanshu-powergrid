import PageBanner from '@/components/common/page-banner';
import TopLabel from '@/components/common/top-label';
import Footer from '@/components/footer';
import { AnimatedStat } from '@/components/home/leadership';
import MaxWidthWrapper from '@/components/max-width-wrapper';
import { NavbarThree } from '@/components/navbar-3';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { ArrowUpRight, Building2 } from 'lucide-react';

interface Stat {
    prefix?: string;
    to: number;
    suffix?: string;
    plain?: boolean;
    label: string;
}

const stats: Stat[] = [
    { prefix: '$', to: 60, suffix: 'B', label: 'Assets Under Mgmt' },
    { to: 100, suffix: '+', label: 'Portfolio Companies' },
    { to: 115, suffix: '+', label: 'Countries' },
    { to: 360, suffix: '+', label: 'Professionals' },
    { to: 9, label: 'Global Offices' },
    { to: 2012, plain: true, label: 'Founded' },
];

interface Platform {
    icon: string;
    name: string;
    tag: string;
    description: string;
    highlight?: boolean;
}

const platforms: Platform[] = [
    {
        icon: '/images/client/cube-highway.png',
        name: 'Cube Highways',
        tag: 'Roads',
        description:
            "India's largest toll roads platform. 28 road projects. Listed as InvIT on BSE, raising ~$630 million. Backed by ADIA, IFC, and Japanese investors.",
    },
    {
        icon: '/images/client/hexa.png',
        name: 'HEXA Renewables',
        tag: 'Renewables',
        description:
            'Pan-Asian renewable energy platform. Utility-scale solar, wind, and battery storage across Japan, Taiwan, Malaysia, Southeast Asia, and the Middle East.',
    },
    {
        icon: '/images/client/agp.png',
        name: 'AG&P / THINK Gas',
        tag: 'Gas',
        description:
            'Natural gas distribution platform serving 80 million+ customers in India. City gas distribution network across multiple states.',
    },
    {
        icon: '/images/client/lightstorm.webp',
        name: 'Lightstorm',
        tag: 'Digital',
        description:
            'Digital network infrastructure platform. 30,000+ km carrier-neutral fiber network across India, 700 Tbps capacity, 100+ enterprise customers, and Pacific subsea cable assets.',
    },
    {
        icon: '/images/client/polaris.svg',
        name: 'Polaris Smart Metering',
        tag: 'Smart Meters',
        description:
            "India's leading smart meter solutions provider. Deploying 10M+ smart meters with ₹7,700 crore+ order book. Manufacturing via Polaris Nova facility.",
    },
    {
        icon: '/images/logo-new-transparent.png',
        name: 'Cube Grid',
        tag: 'Newest Addition',
        description:
            "India's next-generation energy infrastructure platform — transmission, pumped hydro, distribution, nuclear, and green hydrogen. The newest addition to ISQ's India portfolio.",
        // highlight: true,
    },
];

const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' },
};

export default function OurInvestor() {
    return (
        <>
            <NavbarThree />
            <PageBanner title="Our Investor" image="/images/investor-2.png" />

            {/* Intro */}
            <MaxWidthWrapper className="pt-24 pb-16">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
                    <motion.div
                        {...fadeUp}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col justify-center lg:col-span-7"
                    >
                        <h2>I Squared Capital</h2>
                        <p className="font-medium md:text-lg">
                            Cube Grid Advisors is a portfolio company of I
                            Squared Capital — the leading independent global
                            infrastructure investor.
                        </p>
                        <p className="mb-0">
                            I Squared Capital is a leading independent global
                            infrastructure investment manager with{' '}
                            <strong>$50 billion+</strong>
                            in assets under management. Founded in 2012 by
                            former senior executives at Morgan Stanley, I
                            Squared builds and scales essential infrastructure
                            businesses that deliver critical services to
                            millions of people worldwide. With a portfolio of
                            <strong>90+ companies</strong> operating across{' '}
                            <strong>70+ countries</strong> and a team of{' '}
                            <strong>300+ professionals</strong> across{' '}
                            <strong>9 global offices</strong>, I Squared is
                            known for developing mid-market companies into
                            scaled infrastructure leaders.
                        </p>
                    </motion.div>

                    <motion.div
                        {...fadeUp}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative h-full lg:col-span-5"
                    >
                        {/* <div className="relative overflow-hidden rounded-3xl shadow-xl ring-1 ring-gray-200">
                            <img
                                src="/images/isquare-img.webp"
                                alt="I Squared Capital"
                                className="aspect-4/3 w-full object-cover transition-transform duration-1000 hover:scale-105"
                            />
                        </div> */}
                        <div className="h-full">
                                <div className="investor-frame-2">
                                    <img
                                        src="/images/client/isqaure-2.png"
                                        alt=""
                                        className="w-60"
                                    />
                                </div>
                            </div>
                    </motion.div>
                </div>
            </MaxWidthWrapper>

            {/* Stats */}
            <section className="pt-4 pb-24">
                <MaxWidthWrapper>
                    <motion.div
                        {...fadeUp}
                        transition={{ duration: 0.6 }}
                        className="overflow-hidden rounded-3xl shadow-xl ring ring-gray-200"
                    >
                        <div className="grid grid-cols-2 lg:grid-cols-6">
                            {stats.map((stat, i) => (
                                <div
                                    key={stat.label}
                                    className={cn("flex flex-col items-center justify-center px-4 py-10 text-center md:py-10", 
                                        i % 2 === 0 ? 'bg-white' : 'bg-gray-100'
                                    )}>
                                    <div className="mb-3 font-heading text-4xl md:text-5xl">
                                        {stat.plain ? (
                                            <span>{stat.to}</span>
                                        ) : (
                                            <>
                                                {stat.prefix && (
                                                    <span>{stat.prefix}</span>
                                                )}
                                                <AnimatedStat
                                                    from={0}
                                                    to={stat.to}
                                                    suffix={stat.suffix}
                                                />
                                            </>
                                        )}
                                    </div>

                                    <p className="mb-0 text-sm font-medium tracking-wide text-gray-800 md:text-base">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </MaxWidthWrapper>
            </section>

            {/* Platforms */}
            <section className="bg-[#f4f4f4] pt-20 pb-24">
                <MaxWidthWrapper>
                    <motion.div
                        {...fadeUp}
                        transition={{ duration: 0.5 }}
                        className="mx-auto mb-14 flex max-w-3xl flex-col items-center text-center"
                    >
                        <h2>I Squared Capital&apos;s India Platforms</h2>
                        {/* <p className="md:text-lg">
                            A growing ecosystem of infrastructure leaders
                            powering roads, energy, gas, digital networks and
                            smart metering across India.
                        </p> */}
                    </motion.div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {platforms.map((p, i) => {
                            const Icon = p.icon;
                            return (
                                <motion.article
                                    key={p.name}
                                    {...fadeUp}
                                    transition={{
                                        duration: 0.5,
                                        delay: (i % 3) * 0.1,
                                    }}
                                    className={`group relative flex flex-col overflow-hidden rounded-2xl p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                                        p.highlight
                                            ? 'bg-primary text-white ring-1 ring-primary'
                                            : 'bg-white ring-1 ring-gray-200 hover:ring-accent/40'
                                    }`}
                                >
                                    <div
                                        className={`pointer-events-none absolute -top-16 -right-16 size-40 rounded-full blur-2xl transition-opacity duration-500 ${
                                            p.highlight
                                                ? 'bg-accent/20 opacity-100'
                                                : 'bg-accent/10 opacity-0 group-hover:opacity-100'
                                        }`}
                                    />

                                    <div className="relative mb-8 flex items-start justify-between">
                                        <img
                                            src={p.icon}
                                            alt={p.name}
                                            className="max-h-10 max-w-40"
                                        />
                                    </div>

                                    <h3
                                        className={`relative mb-3 text-xl font-semibold ${
                                            p.highlight
                                                ? 'text-white'
                                                : 'text-black'
                                        }`}
                                    >
                                        {p.name}
                                    </h3>
                                    <p
                                        className={`relative mb-0 flex-1 text-sm md:text-base ${
                                            p.highlight ? 'text-white/90' : ''
                                        }`}
                                    >
                                        {p.description}
                                    </p>
                                </motion.article>
                            );
                        })}
                    </div>
                </MaxWidthWrapper>
            </section>

            <Footer />
        </>
    );
}

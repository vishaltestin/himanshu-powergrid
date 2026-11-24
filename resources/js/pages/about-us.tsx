import PageBanner from '@/components/common/page-banner';
import ThemeButton from '@/components/common/theme-button';
import TopLabel from '@/components/common/top-label';
import { lines } from '@/components/common/rich';
import Footer from '@/components/footer';
import { AnimatedStat } from '@/components/home/leadership';
import MaxWidthWrapper from '@/components/max-width-wrapper';
import { NavbarThree } from '@/components/navbar-3';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Link } from '@inertiajs/react';
import {
    BadgeCheck,
    DatabaseZap,
    Heading2,
    Icon,
    Plug,
    Radiation,
    Spool,
    UtilityPole,
} from 'lucide-react';
import { useState } from 'react';

interface ValueItem {
    icon: string;
    title: string;
    subtitle: string;
    description: string;
    inPractice: string[];
}

const defaultValues: ValueItem[] = [
    {
        icon: '/images/icons/high-voltage.png',
        title: 'Integrity',
        subtitle: 'We do the right thing — always, and transparently.',
        description:
            'Our foundation. We act with absolute honesty with all stakeholders incl. regulators, lenders, partners, OEMs, Employees and communities. We disclose problems early, honour commitments even when inconvenient, and hold ourselves to a zero-tolerance standard on misrepresentation at every level of the organisation.',
        inPractice: [
            'Promoting a culture of “RED IS GOOD”',
            'Being true to oneself',
            'When in doubt - disclose',
            'Zero tolerance for corruption or misrepresentation at any level',
        ],
    },
    {
        icon: '/images/icons/infra.png',
        title: 'Collaboration',
        subtitle: 'We build together, we succeed together.',
        description:
            'Transmission is a team sport. TBCB projects involve dozens of stakeholders incl external stakeholders like EPC contractors, OEMs, regulators, local communities, and financial partners and internal stakeholders like D&E, Surveyor, Treasury, Finance, Projects, Safety and Quality, Regulatory, Accounts, Audit, Tax, Policy Advocacy, Contracts, Claims, Bidding, SCM, Corporate Affairs, Asset Management, HR, Planning etc. . We collaborate genuinely: sharing knowledge, aligning incentives, and treating every partner as essential to the outcome.',
        inPractice: [
            'Early and genuine engagement with communities along every project corridor',
            'Transparent, fair dealing with EPC and supply chain partners',
            'Co-developing solutions with regulators rather than litigating against them',
            'Sharing lessons learned openly across the project ecosystem',
            'We believe in team-work',
        ],
    },
    {
        icon: '/images/icons/smart-grid.png',
        title: 'Social Impact',
        subtitle: 'Power is what we transmit. Progress is what we deliver.',
        description:
            'Social Impact is our license to operate. Every line we build powers a hospital, a school, a factory floor, and a family. We measure success not just in megawatts generated/ transmitted but in lives improved. We engage communities honestly, employ locally where possible, and leave every corridor — and every community along it — better than we found it.',
        inPractice: [
            'Community benefit programmes linked to every project corridor',
            'Local employment and skill development during construction and O&M',
            'Each project to have impact on society at large',
            'Social impact metrics tracked and published alongside financial KPIs',
        ],
    },
    {
        icon: '/images/icons/grid.png',
        title: 'Respect',
        subtitle:
            'We earn the right to build by respecting all those affected.',
        description:
            "Respect for the communities whose land our lines cross. Respect for regulators and their mandate. Respect for our EPC partners and their expertise. Respect for the environment we build through. Respect for employees and those who work for us. We listen before we lay the first foundation — because infrastructure that ignores those it affects doesn't endure. Ours will.",
        inPractice: [
            'Listening to communities before committing to a route — not after',
            'Treating every regulator engagement as a dialogue, not a transaction',
            'Honouring the expertise of our EPC and supply chain partners',
            'Environmental sensitivity built into design — not bolted on as compliance',
        ],
    },
    {
        icon: '/images/icons/high-voltage.png',
        title: 'Innovation',
        subtitle: 'Find a better way — in technology, execution and thinking.',
        description:
            'India needs 1800 GW of electricity by 2047 and 51,000 circuit km of new transmission lines by 2030. From HVDC and digital twin monitoring to drone-assisted stringing and AI-driven project management — we embrace tools that let us build faster, smarter, and with a smaller footprint. Innovation is not a department at Cube Grid — it is how we approach every challenge on every project.',
        inPractice: [
            'Process Innovation or construction – New ways of doing anything',
            'Technology that reduces RoW impact, construction time, and ecological footprint',
            'Drone and LiDAR-based surveys replacing conventional manual methods',
            'Continuous improvement reviews embedded into every delivery cycle',
        ],
    },
];

const defaultInitiatives = [
    {
        label: 'Transmission — HVAC / HVDC / Substations',
        icon: UtilityPole,
    },
    {
        label: 'EPC for Renewable Evacuation Lines',
        icon: Spool,
    },
    // {
    //     label: 'Pumped Hydro Storage',
    //     icon: DatabaseZap,
    // },
    // {
    //     label: 'Distribution Privatization',
    //     icon: Plug,
    // },
    // {
    //     label: 'Nuclear Power (Shanti)',
    //     icon: Radiation,
    // },
    // {
    //     label: 'Green Hydrogen',
    //     icon: Heading2,
    // },
];

export default function AboutUs({ content }: { content?: any }) {
    const c = content ?? {};

    const initiatives = (
        Array.isArray(c.initiatives) && c.initiatives.length
            ? c.initiatives.map((item: any, i: number) => ({
                  label: item?.label || defaultInitiatives[i]?.label || '',
                  icon: defaultInitiatives[i]?.icon || UtilityPole,
              }))
            : defaultInitiatives
    ).filter((item: any) => item.label);

    const values: ValueItem[] = (
        Array.isArray(c.values) && c.values.length
            ? c.values.map((item: any, i: number) => ({
                  icon: item?.icon || defaultValues[i]?.icon || '/images/icons/grid.png',
                  title: item?.title || '',
                  subtitle: item?.subtitle || '',
                  description: item?.description || '',
                  inPractice: lines(item?.in_practice),
              }))
            : defaultValues
    ).filter((item: any) => item.title);

    const [selectedValue, setSelectedValue] = useState<ValueItem | null>(null);
    return (
        <>
            <NavbarThree />
            <PageBanner title={content?.banner_title || "About Us"} image={content?.banner_image || "/images/about-us-banner.webp"} />
            <MaxWidthWrapper className="pt-12 md:pt-24 md:pb-16">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-18">
                    <div className="relative mx-auto w-full max-w-lg lg:mx-0 lg:max-w-none">
                        <div className="h-full w-full overflow-hidden rounded-3xl">
                            <img
                                src={c.who_image || '/images/forest-power-grid.jpg'}
                                alt="Welder working in a workshop"
                                className="aspect-square w-full object-cover lg:aspect-auto lg:h-full"
                            />
                        </div>
                        {/* <div className="absolute bottom-4 left-1/2 z-30 flex w-[90%] -translate-x-1/2 items-center gap-4 rounded-xl border border-gray-100 bg-white p-2 shadow-xl md:top-12 md:right-0 md:bottom-[unset] md:left-[unset] md:w-auto md:-translate-x-[unset] md:p-4">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/10 p-1">
                                <svg
                                    width={24}
                                    height={24}
                                    x={0}
                                    y={0}
                                    viewBox="0 0 500 500"
                                    xmlSpace="preserve"
                                    className="size-full object-contain"
                                >
                                    <g>
                                        <path
                                            fillRule="evenodd"
                                            d="M237.317 302.108v-46.444c0-3.708-3.01-6.701-6.718-6.701h-12.092l36.222-51.071v35.169c0 3.708 3.01 6.696 6.664 6.696h20.153zm57.181-75.749h-26.387v-49.496c0-6.496-8.404-9.186-12.146-3.88l-55.892 78.802c-3.142 4.431.032 10.582 5.482 10.582h18.38v60.782c0 6.484 8.353 9.197 12.146 3.869l63.899-90.082c3.121-4.397-.036-10.577-5.482-10.577m115.921 138.756c-12.414 0-22.518-10.087-22.518-22.502 0-12.409 10.104-22.496 22.518-22.496s22.518 10.087 22.518 22.496c0 12.414-10.103 22.502-22.518 22.502m-133.226 46.691c-5.213-6.024-12.361-10.302-20.476-11.839v-39.231c35.792-2.144 67.07-21.352 85.826-49.577l33.965 19.626a36.18 36.18 0 0 0 0 23.663zM250 457.728c-12.414 0-22.464-10.093-22.464-22.496 0-12.409 10.05-22.507 22.464-22.507s22.518 10.098 22.518 22.507c0 12.403-10.104 22.496-22.518 22.496M123.492 354.447a36.18 36.18 0 0 0 0-23.663l34.018-19.626c18.702 28.225 49.98 47.432 85.826 49.577v39.231a35.6 35.6 0 0 0-20.476 11.839zm-33.911 10.668c-12.414 0-22.464-10.087-22.464-22.502 0-12.409 10.05-22.496 22.464-22.496s22.518 10.087 22.518 22.496c0 12.414-10.104 22.502-22.518 22.502M67.117 157.382c0-12.398 10.05-22.497 22.464-22.497s22.518 10.098 22.518 22.497c0 12.414-10.103 22.507-22.518 22.507s-22.464-10.093-22.464-22.507m155.744-69.177a35.6 35.6 0 0 0 20.476 11.834v39.231c-35.846 2.144-67.124 21.346-85.826 49.582l-34.018-19.632a36.2 36.2 0 0 0 0-23.668zM250 42.267c12.414 0 22.518 10.098 22.518 22.507 0 12.404-10.103 22.502-22.518 22.502s-22.464-10.098-22.464-22.502c0-12.409 10.05-22.507 22.464-22.507m126.508 103.286a36.2 36.2 0 0 0 0 23.668l-33.965 19.632c-18.756-28.236-50.034-47.438-85.826-49.582V100.04c8.115-1.537 15.263-5.815 20.476-11.834zm33.911-10.668c12.414 0 22.518 10.098 22.518 22.497 0 12.414-10.103 22.507-22.518 22.507-12.414 0-22.518-10.093-22.518-22.507 0-12.399 10.104-22.497 22.518-22.497M96.299 307.348c8.115 1.537 15.262 5.82 20.475 11.845l34.018-19.632a110.63 110.63 0 0 1 0-99.111l-34.018-19.643c-5.213 6.024-12.361 10.302-20.475 11.85zM250 347.541c53.795 0 97.541-43.756 97.541-97.541 0-53.779-43.746-97.541-97.541-97.541-53.742 0-97.541 43.762-97.541 97.541 0 53.785 43.799 97.541 97.541 97.541m133.28-28.348a35.64 35.64 0 0 1 20.422-11.845v-114.69a35.7 35.7 0 0 1-20.422-11.85l-34.018 19.643a110.63 110.63 0 0 1 0 99.111zm33.857-11.845v-114.69c16.606-3.155 29.182-17.762 29.182-35.276 0-19.788-16.123-35.9-35.899-35.9-10.856 0-20.583 4.842-27.14 12.484l-99.368-57.364c8.046-23.098-9.03-47.733-33.911-47.733-24.513 0-42.047 24.219-33.857 47.733l-99.368 57.364c-6.61-7.642-16.337-12.484-27.193-12.484-19.777 0-35.9 16.112-35.9 35.9 0 17.514 12.629 32.121 29.236 35.276v114.69c-16.606 3.149-29.236 17.762-29.236 35.265 0 19.798 16.123 35.905 35.9 35.905 10.856 0 20.583-4.848 27.193-12.479l99.368 57.364c-8.189 23.549 9.364 47.728 33.857 47.728 24.861 0 41.957-24.596 33.911-47.728l99.368-57.364c6.557 7.631 16.284 12.479 27.14 12.479 19.777 0 35.899-16.106 35.899-35.905 0-17.504-12.576-32.116-29.182-35.265"
                                            clipRule="evenodd"
                                            fill="#009313"
                                            opacity={1}
                                            data-original="#000000"
                                            className=""
                                        />
                                    </g>
                                </svg>
                            </div>
                            <div>
                                <p className="mb-0 font-heading text-3xl text-accent">
                                    150+
                                </p>
                                <p className="mb-0 text-sm font-medium text-black">
                                    years of combined experience
                                </p>
                            </div>
                        </div>

                        <div className="absolute -right-6 -bottom-3 z-20 hidden overflow-hidden rounded-2xl shadow-lg ring-4 ring-slate-200 md:block md:w-[40%] lg:right-0 lg:bottom-0 lg:w-[60%]">
                            <img
                                src="/images/forest-power-grid.jpg"
                                alt="Industrial pipelines"
                                className="h-50 w-full object-cover lg:h-75"
                            />
                        </div> */}
                    </div>
                    <div className="flex flex-col justify-center">
                        <TopLabel text={c.who_label || 'Who We Are'} />
                        <h2>{c.who_title || 'We Build Complex Infrastructure'}</h2>
                        <p className="font-medium md:text-lg">
                            {c.who_lead || 'Where Others See Complexity, We See Opportunity'}
                        </p>
                        {c.who_p1 ? (
                            <div className="rich-text" dangerouslySetInnerHTML={{ __html: c.who_p1 }} />
                        ) : (
                            <p>
                                Cube Grid Advisors is a portfolio company of I
                                Squared Capital — the leading independent global
                                infrastructure investor managing $70 billion+ in
                                assets. We are an integrated energy infrastructure
                                platform focused on identifying, developing,
                                constructing, operating, and scaling complex assets
                                across India's power value chain.
                            </p>
                        )}

                        {c.who_p2 ? (
                            <div className="rich-text" dangerouslySetInnerHTML={{ __html: c.who_p2 }} />
                        ) : (
                            <p>
                                India's energy transition demands ₹2.44 lakh crore
                                in new transmission infrastructure, which include
                                EHVAC and HVDC transmission lines, large AC
                                sub-stations, HVDC terminals and FACTS devices.
                                These complex projects require deep domain
                                expertise, institutional capital, and the tenacity
                                to deliver in challenging regulatory and terrain
                                environments.
                            </p>
                        )}
                        {c.who_p3 ? (
                            <div className="rich-text" dangerouslySetInnerHTML={{ __html: c.who_p3 }} />
                        ) : (
                            <p>
                                Our leadership brings 150+ years of combined
                                experience — each CXO with 30+ years of hands-on
                                experience developing, constructing, and operating
                                energy infrastructure at scale. From India's first
                                HVDC lines to next-generation SMR nuclear plants,
                                we've done it before.
                            </p>
                        )}
                        {/* <ul className="mt-2 grid grid-cols-2 space-y-3 md:space-y-4">
                            {initiatives.map(({ label, icon: Icon }: any, index: number) => (
                                <li
                                    key={index}
                                    className="flex items-start gap-3 md:gap-4"
                                >
                                    <div className="mt-1 flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary md:mt-px md:size-10">
                                        <Icon
                                            className="size-4 md:size-5"
                                            strokeWidth={1.8}
                                            aria-hidden="true"
                                        />
                                    </div>
                                    <span className="font-semibold text-gray-900">
                                        {label}
                                    </span>
                                </li>
                            ))}
                        </ul> */}
                        <ul className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-2 md:gap-4 lg:grid-cols-2">
                            {initiatives.map(({ label, icon: Icon }: any, index: number) => (
                                <li
                                    key={index}
                                    className="group flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-3 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg md:p-4"
                                >
                                    <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white md:size-12">
                                        <Icon
                                            className="size-5 md:size-6"
                                            strokeWidth={1.8}
                                            aria-hidden="true"
                                        />
                                    </div>
                                    <span className="leading-snug font-semibold text-gray-900">
                                        {label}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                {/* <ul className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-6">
                    {initiatives.map(({ label, icon: Icon }: any, index: number) => (
                        <li
                            key={index}
                            className="group flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-3 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg md:p-4"
                        >
                            <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white md:size-12">
                                <Icon
                                    className="size-5 md:size-6"
                                    strokeWidth={1.8}
                                    aria-hidden="true"
                                />
                            </div>
                            <span className="leading-snug font-semibold text-gray-900">
                                {label}
                            </span>
                        </li>
                    ))}
                </ul> */}
                {/* <div className="pt-28">
                    <div className="mb-12 text-center md:mb-16">
                        <h2>What Our Purpose Means</h2>
                        <p>
                            India is the world’s 3rd largest greenhouse gas
                            emitter after China and the United States, emitting
                            ~2.8 Gt of CO₂ annually from fossil fuels, with
                            total GHG emissions nearing 3.5–4 Gt CO₂eq. Nearly
                            90% of these emissions come from power generation,
                            transport, and C&I sectors. Under the Paris
                            Agreement, India must decarbonise while continuing
                            to grow. Yet India’s story is also one of a nation
                            that must simultaneously industrialise, urbanise,
                            and electrify: with per capita electricity
                            consumption at just 1,395 kWh — one-third of the
                            global average — India’s energy demand is set to
                            grow faster than any other country through 2050.
                        </p>
                        <p>
                            As India electrifies transport, industry, and
                            buildings, electricity’s share of final energy must
                            rise from 21% today to 60% by 2070.{' '}
                        </p>
                        <p>
                            Every developed economy is ultimately an electrified
                            economy. This transition cannot happen on fossil
                            fuels alone — it requires clean energy at scale,
                            transmitted reliably across the country. That
                            requires the grid. We build the grid.
                        </p>
                    </div>
                    <div className="relative z-2 mt-20 grid grid-cols-2 gap-3 md:gap-6 lg:grid-cols-6">
                        <div className="flex w-full flex-col items-start gap-3 rounded-xl bg-white p-2 ring ring-gray-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:flex-row md:items-start md:gap-4 md:p-4">
                            <div>
                                <div className="mb-1 text-lg font-semibold text-secondary md:mb-2 md:text-3xl lg:text-2xl">
                                    <AnimatedStat from={0} to={3.5} />{' '}
                                    <span>Gt CO₂eq</span>
                                </div>
                                <div className="text-sm font-medium md:text-base">
                                    Emitted annually — 3rd globally
                                </div>
                            </div>
                        </div>
                        <div className="flex w-full flex-col items-start gap-3 rounded-xl bg-[#f4f4f4] p-2 ring ring-gray-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:flex-row md:items-start md:gap-4 md:p-4">
                            <div>
                                <div className="mb-1 text-lg font-semibold text-secondary md:mb-2 md:text-3xl lg:text-2xl">
                                    <span>$</span>
                                    <AnimatedStat
                                        from={1000}
                                        to={1395}
                                        suffix="kWh"
                                    />
                                </div>
                                <div className="text-sm font-medium md:text-base">
                                    per capita consumption today (global avg:
                                    ~3,500 kWh)
                                </div>
                            </div>
                        </div>
                        <div className="flex w-full flex-col items-start gap-3 rounded-xl bg-white p-2 ring ring-gray-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:flex-row md:items-start md:gap-4 md:p-4">
                            <div>
                                <div className="mb-1 text-lg font-semibold text-secondary md:mb-2 md:text-3xl lg:text-2xl">
                                    <AnimatedStat
                                        from={10}
                                        to={45}
                                        suffix="%"
                                    />
                                </div>
                                <div className="text-sm font-medium md:text-base">
                                    Emissions intensity reduction by 2030 vs
                                    2005
                                </div>
                            </div>
                        </div>
                        <div className="flex w-full flex-col items-start gap-3 rounded-xl bg-[#f4f4f4] p-2 ring ring-gray-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:flex-row md:items-start md:gap-4 md:p-4">
                            <div>
                                <div className="mb-1 text-lg font-semibold text-secondary md:mb-2 md:text-3xl lg:text-2xl">
                                    <AnimatedStat from={1000} to={1800} />{' '}
                                    <span>GW</span>
                                </div>
                                <div className="text-sm font-medium md:text-base">
                                    Non-fossil capacity target by 2047
                                </div>
                            </div>
                        </div>
                        <div className="flex w-full flex-col items-start gap-3 rounded-xl bg-white p-2 ring ring-gray-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:flex-row md:items-start md:gap-4 md:p-4">
                            <div>
                                <div className="mb-1 text-lg font-semibold text-secondary md:mb-2 md:text-3xl lg:text-2xl">
                                    <span>21% → 60%</span>
                                </div>
                                <div className="text-sm font-medium md:text-base">
                                    Electricity share of final energy by 2070
                                </div>
                            </div>
                        </div>
                        <div className="flex w-full flex-col items-start gap-3 rounded-xl bg-[#f4f4f4] p-2 ring ring-gray-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:flex-row md:items-start md:gap-4 md:p-4">
                            <div>
                                <div className="mb-1 text-lg font-semibold text-secondary md:mb-2 md:text-3xl lg:text-2xl">
                                    <span>Net Zero 2070</span>
                                </div>
                                <div className="text-sm font-medium md:text-base">
                                    India's climate commitment
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </MaxWidthWrapper>
            <section className="pt-10 pb-20" id="vission-mission">
                <MaxWidthWrapper>
                    <div className="mb-12 text-center md:mb-16">
                        <h2>{c.vm_heading || 'Our Vision & Mission'}</h2>
                        <p className="mx-auto max-w-2xl md:text-lg">
                            {c.vm_intro || 'The guiding principles that drive our commitment to building sustainable, resilient, and highly complex energy infrastructure for tomorrow.'}
                        </p>
                    </div>

                    {/* <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                        <div className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-accent/5 ring ring-gray-200 transition-colors duration-300 group-hover:bg-accent">
                                <svg
                                    className="h-8 w-8 text-accent transition-colors duration-300 group-hover:text-white"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                    />
                                </svg>
                            </div>
                            <h3 className="mb-4 text-2xl font-semibold text-black">
                                Our Vision
                            </h3>
                            <p className="mb-0">
                                To be the premier energy infrastructure
                                platform, bridging the gap between complexity
                                and execution to power India's sustainable and
                                resilient future. Lorem ipsum dolor sit amet
                                consectetur adipisicing elit. Quis doloremque
                                adipisci aliquam facere repellat velit
                                voluptatum mollitia at ipsum? Obcaecati beatae
                                excepturi tempora qui consectetur? Laboriosam
                                quo nemo laborum sed!
                            </p>
                        </div>

                        <div className="group rounded-2xl bg-primary p-6 shadow-sm ring-1 ring-gray-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-white transition-colors duration-300 group-hover:bg-accent">
                                <svg
                                    className="h-8 w-8 text-accent transition-colors duration-300 group-hover:text-white"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M13 10V3L4 14h7v7l9-11h-7z"
                                    />
                                </svg>
                            </div>
                            <h3 className="mb-4 text-2xl font-semibold text-white">
                                Our Mission
                            </h3>
                            <p className="mb-0 text-white">
                                To identify, develop, and scale highly complex
                                energy assets with precision and domain
                                expertise, delivering long-term value to our
                                stakeholders and communities. Lorem ipsum dolor
                                sit amet consectetur adipisicing elit. Sunt, ea?
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Expedita ipsum iure quos
                                voluptatem animi! Facilis voluptas magni
                                reprehenderit minus aperiam?
                            </p>
                        </div>
                    </div> */}
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
                        <article className="group relative flex flex-col overflow-hidden rounded-2xl bg-white p-8 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-12px_rgba(0,0,0,0.08)] ring ring-accent/20 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.18)] md:p-8">
                            <div className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-accent/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                            <div className="relative mb-8 flex items-start justify-between">
                                <div className="flex size-18 items-center justify-center rounded-xl bg-linear-to-br from-accent/10 to-accent/5 p-2 ring-1 ring-accent/20 transition-all duration-500 group-hover:ring-accent">
                                    <img
                                        src="/images/icons/vission.png"
                                        alt=""
                                    />
                                </div>
                            </div>

                            <p className="relative mb-3 text-xs font-semibold tracking-[0.2em] text-accent uppercase">
                                {c.vision_label || "Where we're headed"}
                            </p>
                            <h3 className="relative mb-5 text-3xl font-semibold tracking-tight text-black md:text-4xl">
                                {c.vision_title || 'Our Vision'}
                            </h3>
                            {c.vision_text ? (
                                <div className="rich-text relative mb-0 text-base md:text-lg" dangerouslySetInnerHTML={{ __html: c.vision_text }} />
                            ) : (
                                <p className="relative mb-0 text-base md:text-lg">
                                    To be the premier energy infrastructure
                                    platform, bridging the gap between complexity
                                    and execution to power India's sustainable and
                                    resilient future. We envision a smarter, more
                                    connected energy ecosystem driven by innovation,
                                    operational excellence, and sustainable
                                    infrastructure that creates long-term value for
                                    communities, industries, and future generations.
                                </p>
                            )}
                        </article>

                        <article className="group relative flex flex-col overflow-hidden rounded-2xl bg-white p-8 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-12px_rgba(0,0,0,0.08)] ring ring-accent/20 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.18)] md:p-8">
                            <div className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-accent/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                            <div className="relative mb-8 flex items-start justify-between">
                                <div className="flex size-18 items-center justify-center rounded-xl bg-linear-to-br from-accent/10 to-accent/5 p-2 ring-1 ring-accent/20 transition-all duration-500 group-hover:ring-accent">
                                    <img
                                        src="/images/icons/mission.png"
                                        alt=""
                                    />
                                </div>
                            </div>

                            <p className="relative mb-3 text-xs font-semibold tracking-[0.2em] text-accent uppercase">
                                {c.mission_label || 'What we do'}
                            </p>
                            <h3 className="relative mb-5 text-3xl font-semibold tracking-tight text-black md:text-4xl">
                                {c.mission_title || 'Our Mission'}
                            </h3>
                            {c.mission_text ? (
                                <div className="rich-text relative mb-0 text-base md:text-lg" dangerouslySetInnerHTML={{ __html: c.mission_text }} />
                            ) : (
                                <p className="relative mb-0 text-base md:text-lg">
                                    To identify, develop, and scale highly complex
                                    energy assets with precision and domain
                                    expertise, delivering long-term value to our
                                    stakeholders and communities. We are committed
                                    to transforming the energy landscape through
                                    strategic investments, innovative solutions, and
                                    efficient project execution. By combining
                                    technical excellence with a forward-thinking
                                    approach.
                                </p>
                            )}
                        </article>
                    </div>
                </MaxWidthWrapper>
            </section>
            <section className="bg-[#f4f4f4] pt-16 pb-20" id="values">
                <MaxWidthWrapper>
                    <div className="mb-10 flex flex-col items-center text-center">
                        <h2>{c.values_heading || 'Our Core Values'}</h2>
                        <p className="md:text-lg">
                            {c.values_intro || 'Five values. One culture. Every project, every decision.'}
                        </p>
                    </div>

                    <div className="grid gap-4 lg:grid-cols-5">
                        {values.map((item) => (
                            <article
                                key={item.title}
                                className="group flex flex-col rounded-2xl bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-primary md:p-6"
                            >
                                <div className="mb-6 flex size-12 items-center justify-center rounded-lg bg-[#f4f4f4] p-1 text-xl transition-all duration-300">
                                    <img
                                        src={item.icon}
                                        alt=""
                                        className="h-full w-full object-contain"
                                    />
                                </div>

                                <div className="transition-all duration-300 group-hover:text-white">
                                    <h3 className="text-xl font-semibold">
                                        {item.title}
                                    </h3>

                                    <p className="mt-4 mb-0 text-sm md:text-base">
                                        {item.subtitle}{' '}
                                        <Link
                                            href="/our-values"
                                            className="inline-flex cursor-pointer items-center text-sm font-medium text-accent underline underline-offset-4 opacity-90 transition-all duration-300 group-hover:text-white hover:opacity-100"
                                        >
                                            Read more
                                        </Link>
                                        {/* <button
                                            type="button"
                                            onClick={() =>
                                                setSelectedValue(item)
                                            }
                                            className="inline-flex cursor-pointer items-center text-sm font-medium text-accent underline underline-offset-4 opacity-90 transition-all duration-300 group-hover:text-white hover:opacity-100"
                                        >
                                            Read more
                                        </button> */}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>
                    {/* <Dialog
                        open={!!selectedValue}
                        onOpenChange={(open) => !open && setSelectedValue(null)}
                    >
                        <DialogContent className="p-7 sm:max-w-4xl">
                            <DialogTitle className="sr-only">
                                {selectedValue?.title} Details
                            </DialogTitle>

                            {selectedValue && (
                                <div className="space-y-4">
                                    <div>
                                        <h3 className="text-2xl font-semibold">
                                            {selectedValue.title}
                                        </h3>
                                        <p className="mt-1 text-lg font-medium">
                                            {selectedValue.subtitle}
                                        </p>
                                    </div>

                                    <p>{selectedValue.description}</p>

                                    <div className="pt-2">
                                        <h4 className="text-lg font-semibold tracking-wide">
                                            In Practice:
                                        </h4>
                                        <ul className="mt-3 grid grid-cols-2 space-y-3 gap-x-6">
                                            {selectedValue.inPractice.map(
                                                (point, idx) => (
                                                    <li
                                                        key={idx}
                                                        className="flex items-start gap-2"
                                                    >
                                                        <BadgeCheck
                                                            size={20}
                                                            className="mt-0.5 shrink-0 text-accent"
                                                        />
                                                        <span className="text-base">
                                                            {point}
                                                        </span>
                                                    </li>
                                                ),
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </DialogContent>
                    </Dialog> */}
                </MaxWidthWrapper>
            </section>
            {/* <section className="relative overflow-hidden bg-white pt-16 pb-6 md:pb-24">
                <MaxWidthWrapper>
                    <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-24">
                        <div className="order-2 lg:order-1">
                            <TopLabel text="Our Investor" />
                            <h2>Owned by I Squared Capital</h2>

                            <p className="font-medium md:text-lg">
                                Cube Grid Advisors is a portfolio company of I
                                Squared Capital
                            </p>
                            <p className="mb-0">
                                I Squared Capital is a leading global
                                infrastructure investment manager with $50
                                billion+ in assets under management. Founded in
                                2012, I Squared builds and scales essential
                                infrastructure businesses across global markets.
                            </p>
                            <div className="mt-8 grid grid-cols-1 gap-3 lg:grid-cols-2">
                                {[
                                    '$50B+ in assets under management',
                                    '90+ portfolio companies globally',
                                    '70+ countries of operation',
                                    '300+ infrastructure professionals',
                                ].map((point) => (
                                    <div
                                        key={point}
                                        className="flex items-start gap-3 font-semibold text-gray-900"
                                    >
                                        <div className="flex h-5.5 w-5.5 shrink-0 items-center justify-center rounded-full bg-accent">
                                            <svg
                                                className="h-3.5 w-3.5 text-white"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={3}
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                        </div>
                                        {point}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="order-1 flex h-40 items-center justify-center overflow-hidden rounded-lg shadow-md ring ring-gray-200 md:order-2 md:h-auto md:rounded-2xl lg:shadow-xl">
                            <img
                                src="/images/isquare-img.webp"
                                alt=""
                                className="size-full object-cover"
                            />
                        </div>
                    </div>
                </MaxWidthWrapper>
            </section> */}
            <Footer />
        </>
    );
}

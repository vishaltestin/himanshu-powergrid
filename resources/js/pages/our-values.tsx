import PageBanner from '@/components/common/page-banner';
import TopLabel from '@/components/common/top-label';
import Footer from '@/components/footer';
import MaxWidthWrapper from '@/components/max-width-wrapper';
import { NavbarThree } from '@/components/navbar-3';
import { BadgeCheck } from 'lucide-react';
import { useEffect, useState } from 'react';

interface ValueItem {
    id: string;
    icon: string;
    title: string;
    subtitle: string;
    description: string;
    inPractice: string[];
}

const values: ValueItem[] = [
    {
        id: 'integrity',
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
        id: 'social-impact',
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
        id: 'respect',
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
        id: 'collaboration',
        icon: '/images/icons/infra.png',
        title: 'Collaboration',
        subtitle: 'We build together, we succeed together.',
        description:
            'Transmission is a team sport. TBCB projects involve dozens of stakeholders incl external stakeholders like EPC contractors, OEMs, regulators, local communities, and financial partners and internal stakeholders like D&E, Surveyor, Treasury, Finance, Projects, Safety and Quality, Regulatory, Accounts, Audit, Tax, Policy Advocacy, Contracts, Claims, Bidding, SCM, Corporate Affairs, Asset Management, HR, Planning etc. We collaborate genuinely: sharing knowledge, aligning incentives, and treating every partner as essential to the outcome.',
        inPractice: [
            'Early and genuine engagement with communities along every project corridor',
            'Transparent, fair dealing with EPC and supply chain partners',
            'Co-developing solutions with regulators rather than litigating against them',
            'Sharing lessons learned openly across the project ecosystem',
            'We believe in team-work',
        ],
    },
    {
        id: 'innovation',
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

export default function OurValues() {
    const [activeHash, setActiveHash] = useState<string>('');

    useEffect(() => {
        const hash = window.location.hash.replace('#', '');
        if (hash) {
            setActiveHash(hash);
            const el = document.getElementById(hash);
            if (el) {
                setTimeout(() => {
                    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 100);
            }
        }
    }, []);

    return (
        <>
            <NavbarThree />
            <PageBanner title="Our Core Values" image="/images/values.png" />

            <section className="py-14 md:py-20">
                <MaxWidthWrapper>
                    <div className="mb-16 flex flex-col items-center text-center">
                        <p className="mb-0 max-w-5xl md:text-lg">
                            Our five core values shape our culture, guide our
                            decisions, and define how we work. They reflect our
                            commitment to integrity, social impact, respect,
                            collaboration, and innovation in every project we
                            undertake.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-6">
                        {values.map((item, index) => {
                            const isFirstRow = index < 3;
                            return (
                                <article
                                    key={item.id}
                                    id={item.id}
                                    onClick={() => setActiveHash(item.id)}
                                    className={`group relative flex flex-col justify-between overflow-hidden rounded-xl bg-[#f6f6f6] p-5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl md:p-5 ${
                                        isFirstRow
                                            ? 'lg:col-span-2'
                                            : 'md:col-span-1 lg:col-span-3'
                                    }`}
                                >
                                    <div>
                                        <div className="mb-4 flex items-center justify-between gap-4">
                                            <div className="flex items-center gap-3.5">
                                                <div className="flex size-14 shrink-0 items-center justify-center rounded-lg bg-white p-2 ring-1 ring-gray-200 transition-colors duration-300">
                                                    <img
                                                        src={item.icon}
                                                        alt={item.title}
                                                        className="size-full object-contain"
                                                    />
                                                </div>
                                            </div>
                                            {/* <span className="font-heading text-2xl font-bold text-gray-200 transition-colors duration-300 group-hover:text-accent/30">
                                                0{index + 1}
                                            </span> */}
                                        </div>
                                        <h3 className="mb-4 text-xl font-medium text-black md:text-3xl">
                                            {item.title}
                                        </h3>
                                        <p className="font-medium text-gray-800 md:text-base">
                                            {item.subtitle}
                                        </p>
                                        <p className="mb-5 leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                    <div className="rounded-lg bg-white p-4 ring-1 ring-gray-200/70 lg:min-h-60 lg:h-60">
                                        <h4 className="mb-2.5 text-xs font-bold tracking-wider text-black uppercase">
                                            In Practice
                                        </h4>
                                        <ul
                                            className={`grid gap-2 ${
                                                !isFirstRow
                                                    ? 'grid-cols-1 sm:grid-cols-2'
                                                    : 'grid-cols-1'
                                            }`}
                                        >
                                            {item.inPractice.map(
                                                (point, idx) => (
                                                    <li
                                                        key={idx}
                                                        className="flex items-start gap-2"
                                                    >
                                                        <BadgeCheck
                                                            size={16}
                                                            className="mt-0.5 shrink-0 text-accent"
                                                        />
                                                        <span className="text-sm md:text-base">
                                                            {point}
                                                        </span>
                                                    </li>
                                                ),
                                            )}
                                        </ul>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </MaxWidthWrapper>
            </section>

            <Footer />
        </>
    );
}

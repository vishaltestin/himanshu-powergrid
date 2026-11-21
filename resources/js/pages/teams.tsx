import PageBanner from '@/components/common/page-banner';
import Footer from '@/components/footer';
import MaxWidthWrapper from '@/components/max-width-wrapper';
import { NavbarThree } from '@/components/navbar-3';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { Award, Link } from 'lucide-react';
import { useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Head } from '@inertiajs/react';

type TeamMember = {
    id: number;
    name: string;
    designation: string;
    image: string;
    description: string;
    fullDetails?: {
        paragraphs: string[];
        highlights: {
            value: string;
            label: string;
        }[];
    };
};

const boardOfDirectors: TeamMember[] = [
    {
        id: 101,
        name: 'Mr. Arun Sharma',
        designation: 'CEO of CubeGrid Advisors Pvt Ltd',
        image: '/images/arun-sharma.jpeg',
        description:
            'Arun Sharma is the Chief Executive Officer of Cube Grid Advisors Private Limited (CGAPL). He brings in over three decades of extensive experience in the power and energy sector. Mr. Sharma’s expertise spans the management of nuclear power projects...',
        fullDetails: {
            paragraphs: [
                "Arun Sharma is the Chief Executive Officer of Cube Grid Advisors Private Limited (CGAPL). He brings in over three decades of extensive experience in the power and energy sector.",
                "Mr. Sharma’s expertise spans the management of nuclear power projects, combined cycle power plants, oil and gas EPC projects, including compressor stations, pump stations, sulphur recovery units, tankages, transmission lines, and power projects. With a strong foundation in business assurance, risk management, and internal audit, he ensures sustainable business operations and transformative project delivery.",
                "A seasoned industry leader, Mr. Sharma holds a Bachelor of Technology degree in Electrical and Electronics Engineering from the National Institute of Technology, Rourkela, and an MBA in Finance from the Management Development Institute, Gurgaon. He is also a qualified Associate Member of the Institute of Company Secretaries of India (ACS, Law) and the Institute of Cost Accountants of India (AICWA).",
                "He has also held key leadership positions at KazStroyService, Punj Lloyd Limited and at Enron. His career began at the Nuclear Power Corporation of India Limited, where he contributed to the commissioning and operation of the Primary Heat Transport System at the Kakrapara and Rajasthan Atomic Power Stations.",
                "Arun Sharma’s proven leadership and deep technical expertise continue to drive innovation and growth in the power infrastructure sector."
            ],
            highlights: [
            ],
        },
    },
    {
        id: 102,
        name: 'Mr. Rajesh Suri',
        designation: 'CTO of CubeGrid Advisors Pvt Ltd',
        image: '/images/rajesh-suri.jpeg',
        description:
            "A veteran infrastructure professional with over 40 years of experience in power transmission, with deep specialization in HVDC and FACTS technologies spanning 3. Mr. Suri's career spans India's most important power sector institutions...",
        fullDetails: {
            paragraphs: [
                "A veteran infrastructure professional with over 40 years of experience in power transmission, with deep specialization in HVDC and FACTS technologies spanning 3. Mr. Suri's career spans India's most important power sector institutions — from NTPC and Power Grid Corporation to Siemens, GE Grid Solutions (formerly Alstom Grid), and Sterlite Power.",
                "His expertise covers the full lifecycle of transmission infrastructure — from design engineering and bid evaluation to large-scale construction management, commissioning, and long-term asset operations. He has been instrumental in some of India's most complex and strategically important HVDC projects.",
                "Mr.Suri is a distinguished member of CIGRE and has been a member of IEC and CIGRE Working Groups on HVDC systems. Mr. Suri has published several papers for international conferences. He brings deep experience coordinating with international financial agencies including the World Bank and ADB. His career trajectory — NTPC → PGCIL → Siemens → GE/Alstom → Sterlite Power → Cube Grid — represents four decades at the heart of India's HVDC and power transmission story.",
            ],
            highlights: [
                // { value: '40+', label: 'Years Experience' },
                // { value: '±800kV', label: 'UHVDC Expertise' },
                // { value: '6 GW', label: 'Champa-Kurukshetra' },
                // { value: 'IEC', label: 'CIGRE Member' },
            ],
        },
    },
    // {
    //     id: 103,
    //     name: 'Mr. Aman Kumar',
    //     designation: 'CubeGrid Advisors Pvt Ltd',
    //     image: 'https://placehold.co/300x400',
    //     description:
    //         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis vitae quae doloremque harum hic sequi numquam nostrum repudiandae cumque aliquam, ex consequuntur, itaque sed labore odio illo quibusdam quidem aliquid reiciendis...',
    //     fullDetails: {
    //         paragraphs: [
    //             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis vitae quae doloremque harum hic sequi numquam nostrum repudiandae cumque aliquam, ex consequuntur, itaque sed labore odio illo quibusdam quidem aliquid reiciendis cum autem, unde inventore? Commodi debitis animi tenetur",
    //             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis vitae quae doloremque harum hic sequi numquam nostrum repudiandae cumque aliquam, ex consequuntur, itaque sed labore odio illo quibusdam quidem aliquid reiciendis cum autem, unde inventore? Commodi debitis animi tenetur",
    //             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis vitae quae doloremque harum hic sequi numquam nostrum repudiandae cumque aliquam, ex consequuntur, itaque sed labore odio illo quibusdam quidem aliquid reiciendis cum autem, unde inventore? Commodi debitis animi tenetur",
    //             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis vitae quae doloremque harum hic sequi numquam nostrum repudiandae cumque aliquam, ex consequuntur, itaque sed labore odio illo quibusdam quidem aliquid reiciendis cum autem, unde inventore? Commodi debitis animi tenetur",
    //         ],
    //         highlights: [
    //         ],
    //     },
    // },
    // {
    //     id: 104,
    //     name: 'Mr. Suraj Kumar',
    //     designation: 'CubeGrid Advisors Pvt Ltd',
    //     image: 'https://placehold.co/300x400',
    //     description:
    //         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis vitae quae doloremque harum hic sequi numquam nostrum repudiandae cumque aliquam, ex consequuntur, itaque sed labore odio illo quibusdam quidem aliquid reiciendis...',
    //     fullDetails: {
    //         paragraphs: [
    //             "A veteran infrastructure professional with over 40 years of experience in power transmission, with deep specialization in HVDC and FACTS technologies spanning 30+ years. Mr. Suri's career spans India's most important power sector institutions — from NTPC and Power Grid Corporation to Siemens, GE Grid Solutions (formerly Alstom Grid), and Sterlite Power.",
    //             "His expertise covers the full lifecycle of transmission infrastructure — from design engineering and bid evaluation to large-scale construction management, commissioning, and long-term asset operations. He has been instrumental in some of India's most complex and strategically important HVDC projects.",
    //             "Landmark project — Champa-Kurukshetra UHVDC: Mr. Suri played a key role in the execution of the ±800 kV, 6,000 MW Champa-Kurukshetra UHVDC project — one of the world's largest and most technically advanced HVDC systems. Spanning ~1,365 km from Chhattisgarh to Haryana, the project achieved several global firsts, including the first ±800 kV system with a dedicated metallic return conductor and one of only three projects globally integrating two separately designed bipoles running in parallel.",
    //             "A member of IEC and CIGRE Working Groups on HVDC systems, Mr. Suri has published at IEEE conferences and brings deep experience coordinating with international financial agencies including the World Bank and ADB. His career trajectory — NTPC → PGCIL → Siemens → GE/Alstom → Sterlite Power → Cube Grid — represents four decades at the heart of India's HVDC and power transmission story.",
    //         ],
    //         highlights: [
    //             { value: '40+', label: 'Years Experience' },
    //             { value: '±800kV', label: 'UHVDC Expertise' },
    //             { value: '6 GW', label: 'Champa-Kurukshetra' },
    //             { value: 'IEC', label: 'CIGRE Member' },
    //         ],
    //     },
    // },
];

const team: TeamMember[] = [
    {
        id: 1,
        name: 'Suraj Kumar',
        designation: 'Chief Operating Officer',
        image: '/images/user/user.png',
        description:
            'Suraj Kumar plays a key role in overseeing the company’s day-to-day operations and ensuring the successful execution of power transmission and infrastructure projects. With a strong focus on operational efficiency, quality, and safety, he works closely with multidisciplinary teams to maintain high standards throughout every stage of project delivery.',
    },
    {
        id: 2,
        name: 'Jane Smith',
        designation: 'Chief Operating Officer',
        image: '/images/user/user.png',
        description:
            'Jane Smith oversees strategic operations and works closely with engineering and project teams to ensure smooth execution of critical power infrastructure initiatives. With a focus on efficiency, coordination, and quality, she helps strengthen operational processes while ensuring projects meet the highest standards of reliability, safety, and performance.',
    },
    {
        id: 3,
        name: 'Michael Brown',
        designation: 'Creative Director',
        image: '/images/user/user.png',
        description:
            'Michael Brown leads the company’s creative vision and brand communication across digital and corporate platforms. He focuses on presenting complex energy and infrastructure solutions through clear, engaging visual experiences. His work helps maintain a consistent brand identity while bringing innovation and creativity to the company’s communication and digital presence.',
    },
    {
        id: 4,
        name: 'Sarah Wilson',
        designation: 'Marketing Director',
        image: '/images/user/user.png',
        description:
            'Sarah Wilson leads marketing and brand communication initiatives focused on strengthening the company’s presence within the energy and infrastructure sector. She develops strategic campaigns, manages communication across key channels, and works with internal teams to highlight the company’s capabilities, values, and commitment to delivering reliable and sustainable solutions.',
    },
    {
        id: 5,
        name: 'David Lee',
        designation: 'Technology Director',
        image: '/images/user/user.png',
        description:
            'David Lee leads technology initiatives focused on digital innovation and smarter infrastructure solutions. He works closely with technical and operational teams to identify opportunities for improving efficiency, monitoring, and project performance. His leadership supports the adoption of modern technologies while helping the organization build reliable and future-ready energy infrastructure.',
    },
];

export default function Teams() {
    const [activeMember, setActiveMember] = useState<TeamMember | null>(null);
    return (
        <>
            <Head title="Management Team" />
            <NavbarThree />
            <PageBanner title="Management Team" image='/images/team-2.png' />
            <MaxWidthWrapper className="pt-24 md:pb-24">
                <div className="mb-8 flex flex-col items-center text-center md:mb-12">
                    {/* <h2>Our leadership</h2> */}
                    <p className="max-w-6xl text-lg">
                        Our leadership team is expanding rapidly. Each CXO being onboarded brings 30+ years of hands-on experience in developing, constructing, and operating infrastructure assets at scale — with 150+ years of combined experience across transmission, storage, distribution, nuclear, and hydrogen.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
                    {boardOfDirectors.map((director) => (
                        <div
                            key={director.id}
                            className="group relative flex overflow-hidden rounded-2xl ring ring-primary/20"
                        >
                            <div className="relative w-[38%] shrink-0 overflow-hidden bg-slate-100">
                                <img
                                    src={director.image}
                                    alt={director.name}
                                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="inset-0sm:hidden absolute" />
                                <span className="absolute bottom-3 left-3 text-lg font-semibold text-white drop-shadow-sm sm:hidden">
                                    {director.name}
                                </span>
                            </div>

                            <div className="flex flex-col justify-between p-6 sm:p-7">
                                <div>
                                    <h3 className="font-heading text-3xl">
                                        {director.name}
                                    </h3>

                                    <p className="text-sm text-accent">
                                        {director.designation}
                                    </p>
                                    <p className="mb-0">
                                        {director.description}
                                    </p>
                                    {director.fullDetails && (
                                        <Dialog>
                                            <DialogTrigger asChild>
                                                <button className="mt-6 rounded-sm px-2 py-1 text-sm font-medium text-primary ring ring-primary transition-all hover:bg-primary hover:text-white">
                                                    Read more
                                                </button>
                                            </DialogTrigger>
                                            <DialogContent className="p-6 sm:max-w-4xl">
                                                <DialogHeader>
                                                    <div className="flex gap-4">
                                                        <div className="size-16 overflow-hidden rounded-full">
                                                            <img
                                                                src={
                                                                    director.image
                                                                }
                                                                alt={
                                                                    director.name
                                                                }
                                                                className="size-full object-cover object-top"
                                                            />
                                                        </div>
                                                        <div>
                                                            <DialogTitle className="mb-0 font-heading text-3xl">
                                                                {director.name}
                                                            </DialogTitle>
                                                            <DialogDescription className="mb-0 text-base font-medium text-accent">
                                                                {
                                                                    director.designation
                                                                }
                                                            </DialogDescription>
                                                        </div>
                                                    </div>
                                                </DialogHeader>
                                                <div className="flex max-h-[60vh] custom-scrollbar items-start gap-8 overflow-y-auto">
                                                    <div className="mt-4 flex-1 space-y-4">
                                                        {director.fullDetails.paragraphs.map(
                                                            (
                                                                paragraph,
                                                                index,
                                                            ) => (
                                                                <p key={index}>
                                                                    {paragraph}
                                                                </p>
                                                            ),
                                                        )}
                                                    </div>
                                                    {director.fullDetails
                                                        .highlights.length >
                                                        0 && (
                                                        <div className="flex shrink-0 flex-col gap-4 p-1">
                                                            {director.fullDetails.highlights.map(
                                                                (
                                                                    highlight,
                                                                    index,
                                                                ) => (
                                                                    <div
                                                                        key={
                                                                            index
                                                                        }
                                                                        className="custom-border-200 flex flex-col items-center justify-center rounded-lg bg-gray-100 p-4 text-center transition-transform hover:-translate-y-1"
                                                                    >
                                                                        <span className="mb-1 text-2xl font-medium tracking-tight text-primary">
                                                                            {
                                                                                highlight.value
                                                                            }
                                                                        </span>
                                                                        <span className="text-sm font-semibold text-slate-600">
                                                                            {
                                                                                highlight.label
                                                                            }
                                                                        </span>
                                                                    </div>
                                                                ),
                                                            )}
                                                        </div>
                                                    )}
                                                </div>
                                            </DialogContent>
                                        </Dialog>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <p className='text-xl text-accent font-semibold mt-12 mx-auto text-center italic'>"Building the team that builds India's grid".</p>
            </MaxWidthWrapper>
            {/* <MaxWidthWrapper className="pt-24 md:pb-16">
                <div className="mb-8 flex flex-col items-center text-center md:mb-12">
                    <h2>Senior Leadership</h2>
                </div>
                <div className="grid grid-cols-5 gap-4">
                    {team.map((member, index) => {
                        const column = (index % 5) + 1;
                        const showPanelOnLeft = column >= 4;

                        const isActive = activeMember?.id === member.id;

                        return (
                            <div
                                key={member.id}
                                className="group relative"
                                onMouseEnter={() => setActiveMember(member)}
                                onMouseLeave={() => setActiveMember(null)}
                            >
                                <div
                                    className={cn(
                                        'cursor-pointer',
                                        isActive && 'relative z-30',
                                    )}
                                >
                                    <div className="mb-4 overflow-hidden rounded-xl">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className={cn(
                                                'h-full w-full object-cover transition-all',
                                                isActive && 'scale-105',
                                            )}
                                        />
                                    </div>

                                    <div className="mt-4">
                                        <h3 className="font-heading text-2xl">
                                            {member.name}
                                        </h3>

                                        <p className="text-sm">
                                            {member.designation}
                                        </p>
                                    </div>
                                </div>

                                <AnimatePresence>
                                    {isActive && (
                                        <motion.div
                                            initial={{
                                                width: 0,
                                                opacity: 0,
                                            }}
                                            animate={{
                                                width: 'calc(200% + 1rem)',
                                                opacity: 1,
                                            }}
                                            exit={{
                                                width: 0,
                                                opacity: 0,
                                            }}
                                            transition={{
                                                width: {
                                                    duration: 0.4,
                                                    ease: [0.22, 1, 0.36, 1],
                                                },
                                                opacity: {
                                                    duration: 0.15,
                                                },
                                            }}
                                            className={cn(
                                                'pointer-events-none absolute top-0 z-20 h-full rounded-xl bg-primary p-6',
                                                showPanelOnLeft
                                                    ? 'right-[calc(100%+1rem)]'
                                                    : 'left-[calc(100%+1rem)]',
                                            )}
                                        >
                                            <span
                                                className={cn(
                                                    'absolute top-6 h-0 w-0 border-y-8 border-y-transparent',
                                                    showPanelOnLeft
                                                        ? '-right-2 border-l-8 border-l-primary'
                                                        : '-left-2 border-r-8 border-r-primary',
                                                )}
                                            />

                                            <div className="h-full w-full overflow-hidden">
                                                <p className="mb-2 text-sm text-white">
                                                    {member.designation}
                                                </p>

                                                <h2 className="mb-4 text-3xl text-white">
                                                    {member.name}
                                                </h2>

                                                <WordAnimation
                                                    text={member.description}
                                                />
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>
            </MaxWidthWrapper> */}

            <Footer />
        </>
    );
}

type WordAnimationProps = {
    text: string;
};

function WordAnimation({ text }: WordAnimationProps) {
    const words = text.split(' ');

    return (
        <p className="text-lg text-white">
            {words.map((word, index) => (
                <motion.span
                    key={`${word}-${index}`}
                    initial={{
                        opacity: 0,
                        y: 5,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.25,
                        delay: 0.25 + index * 0.025,
                        ease: 'easeOut',
                    }}
                    className="mr-[0.3em] inline-block"
                >
                    {word}
                </motion.span>
            ))}
        </p>
    );
}

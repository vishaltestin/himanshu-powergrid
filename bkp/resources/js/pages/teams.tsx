import PageBanner from '@/components/common/page-banner';
import Footer from '@/components/footer';
import MaxWidthWrapper from '@/components/max-width-wrapper';
import { NavbarThree } from '@/components/navbar-3';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { Award, Link } from 'lucide-react';
import { useState } from 'react';

type TeamMember = {
    id: number;
    name: string;
    designation: string;
    image: string;
    description: string;
};

const boardOfDirectors: TeamMember[] = [
    {
        id: 101,
        name: 'Rajesh Suri',
        designation: 'Managing Director',
        image: 'https://framerusercontent.com/images/hK1eZ3VGLVaJraDkTjWFkYpu2Y.png?width=961&height=1200',
        description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis vitae quae doloremque harum hic sequi numquam nostrum repudiandae cumque aliquam, ex consequuntur, itaque sed labore odio illo quibusdam quidem aliquid reiciendis cum autem, unde inventore? Commodi debitis animi tenetur perferendis.',
    },
    {
        id: 102,
        name: 'Rajesh Suri',
        designation: 'Director',
        image: 'https://framerusercontent.com/images/hK1eZ3VGLVaJraDkTjWFkYpu2Y.png?width=961&height=1200',
        description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis vitae quae doloremque harum hic sequi numquam nostrum repudiandae cumque aliquam, ex consequuntur, itaque sed labore odio illo quibusdam quidem aliquid reiciendis cum autem, unde inventore? Commodi debitis animi tenetur perferendis.',
    },
];

const team: TeamMember[] = [
    {
        id: 1,
        name: 'Rajesh Suri',
        designation: 'Co-Founder & Head of Design & Engineering',
        image: 'https://framerusercontent.com/images/hK1eZ3VGLVaJraDkTjWFkYpu2Y.png?width=961&height=1200',
        description:
            "A veteran infrastructure professional with over 40 years of experience in power transmission, with deep specialization in HVDC and FACTS technologies spanning 30+ years. Mr. Suri's career spans India's most important power sector institutions — from NTPC and Power Grid Corporation to Siemens, GE Grid Solutions (formerly Alstom Grid), and Sterlite Power.",
    },
    {
        id: 2,
        name: 'Jane Smith',
        designation: 'Chief Operating Officer',
        image: 'https://framerusercontent.com/images/hK1eZ3VGLVaJraDkTjWFkYpu2Y.png?width=961&height=1200',
        description:
            'Jane oversees operations and works closely with teams to ensure smooth execution.',
    },
    {
        id: 3,
        name: 'Michael Brown',
        designation: 'Creative Director',
        image: 'https://framerusercontent.com/images/hK1eZ3VGLVaJraDkTjWFkYpu2Y.png?width=961&height=1200',
        description:
            'Michael leads the creative vision and ensures consistency across all brand experiences.',
    },
    {
        id: 4,
        name: 'Sarah Wilson',
        designation: 'Marketing Director',
        image: 'https://framerusercontent.com/images/hK1eZ3VGLVaJraDkTjWFkYpu2Y.png?width=961&height=1200',
        description:
            'Sarah develops marketing strategies and drives brand communication across channels.',
    },
    {
        id: 5,
        name: 'David Lee',
        designation: 'Technology Director',
        image: 'https://framerusercontent.com/images/hK1eZ3VGLVaJraDkTjWFkYpu2Y.png?width=961&height=1200',
        description:
            "David leads the technology team and oversees the organization's digital infrastructure.",
    },
];

export default function Teams() {
    const [activeMember, setActiveMember] = useState<TeamMember | null>(null);
    return (
        <>
            <NavbarThree />
            <PageBanner title="Management Team" />
            <MaxWidthWrapper className="pt-24 md:pb-16">
                <div className="mb-8 flex flex-col items-center text-center md:mb-12">
                    <h2>Board of Directors</h2>
                    <p className="max-w-4xl text-lg">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem, tempora quos, quasi, iste quisquam voluptate pariatur perspiciatis enim maiores amet quae exercitationem voluptatem.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
                    {boardOfDirectors.map((director) => (
                        <div
                            key={director.id}
                            className="group relative flex overflow-hidden ring ring-primary/20 rounded-2xl"
                        >
                            <div className="relative overflow-hidden bg-slate-100 w-1/2 shrink-0">
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
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </MaxWidthWrapper>
            <MaxWidthWrapper className="pt-24 md:pb-16">
                <div className="mb-8 flex flex-col items-center text-center md:mb-12">
                    <h2>Our Leadership</h2>
                    <p className="max-w-4xl text-lg">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem, tempora quos, quasi, iste quisquam voluptate pariatur.
                    </p>
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
                                            {/* Triangle */}
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
            </MaxWidthWrapper>

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

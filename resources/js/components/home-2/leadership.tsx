import React, { useEffect, useRef } from 'react';
import {
    motion,
    useMotionValue,
    useTransform,
    animate,
    useInView,
} from 'framer-motion';
import MaxWidthWrapper from '../max-width-wrapper';
import TopLabel from '../common/top-label';
import { Calendar, Factory, Globe2, ShieldCheck } from 'lucide-react';

export const AnimatedStat = ({
    from = 0,
    to,
    suffix = '',
    decimals = 0,
    duration = 2.5,
}: any) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });
    const count = useMotionValue(from);

    useEffect(() => {
        if (isInView) {
            animate(count, to, { duration, ease: 'easeOut' });
        }
    }, [isInView, count, to, duration]);

    const display = useTransform(count, (latest) => {
        const fixed = Number(latest).toFixed(decimals);
        const parts = fixed.split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        return parts.join('.') + suffix;
    });

    return <motion.span ref={ref}>{display}</motion.span>;
};

const Leadership = () => {
    return (
        <section className="pt-12 pb-16">
            <MaxWidthWrapper>
                <div className="mb-12 flex flex-col items-center text-center">
                    <TopLabel text="Leadership" />
                    <h2>Management Team</h2>
                    <p className="max-w-3xl text-lg">
                        150+ years of combined experience. Each CXO brings 30+
                        years of hands-on experience developing, constructing,
                        and operating infrastructure at scale.
                    </p>
                </div>
                <div className="grid w-full grid-cols-1 items-stretch gap-4 md:gap-6 lg:grid-cols-12">
                    {/* LEFT COLUMN: Photo & Name */}
                    <div className="flex min-h-0 flex-col lg:col-span-4">
                        <div className="relative min-h-0 flex-1 overflow-hidden rounded-xl">
                            <img
                                src="https://placehold.co/600x500"
                                alt="Executive Portrait"
                                className="block h-full w-full object-cover"
                            />
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white w-[93%] p-4 rounded-lg">
                                <h3 className='font-heading text-2xl'>Rajesh Suri</h3>
                                <p className='mb-0 text-accent'>Co-Founder & Head of Design & Engineering</p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Description & Stats Grid */}
                    <div className="flex flex-col gap-4 md:gap-6 lg:col-span-8">
                        {/* Description Block */}
                        <div className="flex-1 rounded-xl bg-primary/10 p-6">
                            <p className="text-primary">
                                A veteran infrastructure professional with over
                                40 years of experience in power transmission,
                                with deep specialization in HVDC and FACTS
                                technologies spanning 30+ years. Mr. Suri's
                                career spans India's most important power sector
                                institutions — from NTPC and Power Grid
                                Corporation to Siemens, GE Grid Solutions
                                (formerly Alstom Grid), and Sterlite Power.
                            </p>
                            <p className="mb-0 text-primary">
                                His expertise covers the full lifecycle of
                                transmission infrastructure — from design
                                engineering and bid evaluation to large-scale
                                construction management, commissioning, and
                                long-term asset operations. He has been
                                instrumental in some of India's most complex and
                                strategically important HVDC projects.
                            </p>
                        </div>

                        {/* Stats 2x2 Grid */}
                        <div className="grid shrink-0 grid-cols-1 gap-4 sm:grid-cols-4 md:gap-4">
                            {/* Stat 1 */}
                            <div className="rounded-xl p-4 ring ring-gray-200">
                                <div className="mb-2 text-3xl font-bold text-black">
                                    <AnimatedStat from={10} to={40} suffix="+" />
                                </div>
                                <div className="text-sm font-medium tracking-widest text-black">
                                    Years Experience
                                </div>
                            </div>

                            <div className="rounded-xl p-4 ring ring-gray-200">
                                <div className="mb-2 text-3xl font-bold text-black">
                                    <span>±</span><AnimatedStat from={100} to={800} suffix="kV" />
                                </div>
                                <div className="text-sm font-medium tracking-widest text-black">
                                    UHVDC Expertise
                                </div>
                            </div>

                            <div className="rounded-xl p-4 ring ring-gray-200">
                                <div className="mb-2 text-3xl font-bold text-black">
                                    <AnimatedStat from={0} to={6} suffix="GW" />
                                </div>
                                <div className="text-sm font-medium tracking-widest text-black">
                                    Champa-Kurukshetra
                                </div>
                            </div>

                            <div className="rounded-xl p-4 ring ring-gray-200">
                                <div className="mb-2 text-3xl font-bold text-black">
                                    <span>IEC</span>
                                </div>
                                <div className="text-sm font-medium tracking-widest text-black">
                                    CIGRE Member
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </MaxWidthWrapper>
        </section>
    );
};

export default Leadership;

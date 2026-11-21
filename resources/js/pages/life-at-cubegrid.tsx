import PageBanner from '@/components/common/page-banner';
import TopLabel from '@/components/common/top-label';
import Footer from '@/components/footer';
import MaxWidthWrapper from '@/components/max-width-wrapper';
import { NavbarThree } from '@/components/navbar-3';
import { Link } from '@inertiajs/react';
import { ArrowRight, Pause, Play } from 'lucide-react';
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const impactCards = [
    {
        id: 1,
        title: 'PEOPLE FIRST',
        description:
            'Performance is built on people, powered by trust and respect',
        image: '/images/people-first.jpg',
        className: 'lg:col-span-1 lg:row-span-1',
    },
    {
        id: 2,
        title: 'OPPORTUNITY TO IMPACT LIVES',
        description:
            'Every project powers homes, livelihoods, and communities across India',
        image: '/images/impact-lives.jpg',
        className: 'lg:col-span-1 lg:row-span-1',
    },
    {
        id: 3,
        title: 'INCLUSIVE WORKFORCE',
        description:
            "A diverse, equitable workplace where every voice shapes India's energy future",
        image: '/images/inclusive-workforce.jpg',
        className: 'lg:col-span-1 lg:row-span-1',
    },
    {
        id: 4,
        title: 'TURNING POTENTIAL INTO LEADERSHIP',
        description:
            'Structured pathways that elevate talent into leaders of tomorrow',
        image: '/images/leadership.jpg',
        className: 'lg:col-span-1 lg:row-span-1',
    },
    {
        id: 5,
        title: 'CHALLENGES SHAPE IMPACT',
        description:
            "Step into roles that test limits and power the nation's future",
        image: '/images/challenges.jpg',
        className: 'lg:col-span-2 lg:row-span-1',
    },
];

export default function LifeAtCubeGrid() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = async () => {
        if (!videoRef.current) return;

        try {
            if (videoRef.current.paused) {
                await videoRef.current.play();
                setIsPlaying(true);
            } else {
                videoRef.current.pause();
                setIsPlaying(false);
            }
        } catch (error) {
            console.error('Video could not be played:', error);
        }
    };

    return (
        <>
            <NavbarThree />
            <PageBanner title="Life at CubeGrid" image="/images/life-at-2.png" />
            <MaxWidthWrapper className="pt-12 md:pt-24 pb-12 md:pb-20">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:gap-24">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col justify-center items-center md:items-start text-center md:text-start"
                    >
                        <TopLabel text="working at cubegrid" />
                        <h2>
                            We turn ambition into innovation with clean energy
                            delivery.
                        </h2>
                        <p>
                            At CubeGrid, that is the work. We plan and build
                            India's most critical transmission infrastructure —
                            projects that power millions, enable renewable
                            energy at scale, and demand the best of every person
                            involved. Our teams bring engineering depth,
                            stakeholder empathy, and an unrelenting drive to
                            deliver. If you are drawn to work that is difficult
                            by design and meaningful by outcome, CubeGrid is
                            where you belong.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="h-full w-full overflow-hidden rounded-xl lg:rounded-3xl"
                    >
                        <img
                            src="https://img.magnific.com/premium-photo/two-workers-inspecting-electrical-tower-sunset_204719-25797.jpg?w=720"
                            alt="Aerial view of winding forest road"
                            className="h-full w-full object-cover"
                        />
                    </motion.div>
                </div>
            </MaxWidthWrapper>
            <MaxWidthWrapper className="pt-12 pb-24">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 flex flex-col items-center text-center"
                >
                    <h2>why CubeGrid</h2>
                    <p className="md:max-w-3xl md:text-lg">
                        CubeGrid global workforce of over 360 dedicated
                        professionals is driven by a passion for enhancing
                        essential infrastructure assets that will lead to a
                        higher quality of life for all.
                    </p>
                </motion.div>
                <div className="grid md:h-190 md:grid-cols-6 md:grid-rows-12 gap-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="md:col-span-4 md:row-span-7"
                    >
                        <div className="group relative h-full w-full overflow-hidden rounded-xl bg-gray-200">
                            <img
                                src="https://img.magnific.com/free-photo/top-shot-three-unrecognizable-business-people-sitting-meeting-looking-charts_1098-17726.jpg?t=st=1792241025~exp=1792244625~hmac=100a759c5081eef1a5d98841b23cc139566da81014f60ff6a91ae0edcabdc6e2&w=1480"
                                alt="People First"
                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/35 to-transparent" />
                            <div className="absolute right-3 bottom-3 left-3 overflow-hidden rounded-md text-white">
                                <div className="relative z-10 p-4">
                                    <h3 className="mb-0 font-heading text-2xl drop-shadow-sm">
                                        We take a rigorous & analytical approach
                                        to risk
                                    </h3>
                                </div>

                                <div className="max-h-0 overflow-hidden transition-all duration-1000 ease-out group-hover:max-h-50">
                                    <p className="mb-0 px-4 pb-4 font-medium drop-shadow-sm">
                                        We take a deeply analytical approach to
                                        investing and have a carefully curated
                                        risk management framework. One of our
                                        risk management tools includes a “double
                                        underwrite” methodology, where an
                                        entirely separate team reviews a deal
                                        teams’ analysis and proposal.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="md:col-span-2 md:row-span-6"
                    >
                        <div className="group relative h-full w-full overflow-hidden rounded-xl bg-gray-200">
                            <img
                                src="images/team.jpg"
                                alt="People First"
                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/35 to-transparent" />
                            <div className="absolute right-3 bottom-3 left-3 overflow-hidden rounded-md text-white">
                                <div className="relative z-10 p-4">
                                    <h3 className="mb-0 font-heading text-2xl drop-shadow-sm">
                                        People First
                                    </h3>
                                </div>
                                <div className="max-h-0 overflow-hidden transition-all duration-1000 ease-out group-hover:max-h-50">
                                    <p className="mb-0 px-4 pb-4 font-medium drop-shadow-sm">
                                        Performance is built on people, powered
                                        by trust and respect
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="md:col-span-2 md:row-span-6"
                    >
                        <div className="group relative h-full w-full overflow-hidden rounded-xl bg-gray-200">
                            <img
                                src="https://img.magnific.com/free-vector/worldwide-connection-blue-background-illustration-vector_53876-76812.jpg?t=st=1792240947~exp=1792244547~hmac=7c004d7591c333b1a0567197e807111a621372e73aaac31c92cb8e59e14d0eae&w=1480"
                                alt="People First"
                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/35 to-transparent" />
                            <div className="absolute right-3 bottom-3 left-3 overflow-hidden rounded-md text-white">
                                <div className="relative z-10 p-4">
                                    <h3 className="mb-0 font-heading text-2xl drop-shadow-sm">
                                        We value global perspectives and local
                                        insights
                                    </h3>
                                </div>
                                <div className="max-h-0 overflow-hidden transition-all duration-1000 ease-out group-hover:max-h-50">
                                    <p className="mb-0 px-4 pb-4 font-medium drop-shadow-sm">
                                        We have a global network of nine
                                        offices, but we also value local
                                        insights that offer operational,
                                        technical, and regulatory insights that
                                        give us an advantage.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="md:col-span-2 md:row-span-5"
                    >
                        <div className="group relative h-full w-full overflow-hidden rounded-xl bg-gray-200">
                            <img
                                src="images/transmission-infra.jpg"
                                alt="People First"
                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/35 to-transparent" />
                            <div className="absolute right-3 bottom-3 left-3 overflow-hidden rounded-md text-white">
                                <div className="relative z-10 p-4">
                                    <h3 className="mb-0 font-heading text-2xl drop-shadow-sm">
                                        We are business builders at our core
                                    </h3>
                                </div>
                                <div className="max-h-0 overflow-hidden transition-all duration-1000 ease-out group-hover:max-h-50">
                                    <p className="mb-0 px-4 pb-4 font-medium drop-shadow-sm">
                                        We value entrepreneurial capabilities
                                        but also encourage collaboration because
                                        we work in an environment where input
                                        from every team member contributes to
                                        the firm’s success.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="md:col-span-2 md:row-span-5"
                    >
                        <div className="group relative h-full w-full overflow-hidden rounded-xl bg-gray-200">
                            <img
                                src="https://img.magnific.com/free-photo/people-working-project-laptop_23-2147707784.jpg?t=st=1792240893~exp=1792244493~hmac=9da28d4b8a6eb3fc265d698bf47765f71ab074c1efdf4d538005094f589edafe&w=1480"
                                alt="People First"
                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/35 to-transparent" />
                            <div className="absolute right-3 bottom-3 left-3 overflow-hidden rounded-md text-white">
                                <div className="relative z-10 p-4">
                                    <h3 className="mb-0 font-heading text-2xl drop-shadow-sm">
                                        We support each other to do our best
                                        work
                                    </h3>
                                </div>
                                <div className="max-h-0 overflow-hidden transition-all duration-1000 ease-out group-hover:max-h-50">
                                    <p className="mb-0 px-4 pb-4 font-medium drop-shadow-sm">
                                        Our team members thrive on motivating
                                        each other to reach new heights while
                                        providing a supportive network that
                                        empowers everyone to succeed.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className="relative mt-20 hidden aspect-video overflow-hidden rounded-2xl">
                    <video
                        ref={videoRef}
                        src="/images/power-5-b.mp4"
                        poster="/images/work-1.jpg"
                        className="absolute inset-0 h-full w-full object-cover"
                        controls={isPlaying}
                        preload="metadata"
                    />
                    {!isPlaying && (
                        <div className="absolute inset-0 bg-black/30 transition-opacity duration-500" />
                    )}

                    {!isPlaying && (
                        <button
                            type="button"
                            onClick={handlePlay}
                            aria-label={
                                isPlaying ? 'Pause video' : 'Play video'
                            }
                            className="absolute top-1/2 left-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 shadow-2xl backdrop-blur-md transition-all duration-300 hover:scale-110 sm:h-28 sm:w-28"
                        >
                            <Play
                                size={34}
                                fill="currentColor"
                                className="text-white"
                            />
                        </button>
                    )}
                    {/* <iframe
                        title="culture (1080p)"
                        src="https://player.vimeo.com/video/1016200385"
                        className="absolute inset-0 h-full w-full"
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    /> */}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.8 }}
                    className="pt-24"
                >
                    <div className="relative flex w-full items-center justify-start overflow-hidden rounded-3xl bg-slate-950">
                        <div className="absolute inset-0 z-0">
                            <img
                                src="/images/career-2.png"
                                alt="Power grid construction workers"
                                className="h-full w-full scale-105 transform object-cover object-top transition-transform duration-1000 hover:scale-100"
                            />
                            <div className="absolute inset-0 bg-black/50" />
                        </div>

                        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-10 md:py-20 sm:px-8 lg:px-12">
                            <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
                                <div className="mb-3 flex items-center md:mb-6">
                                    <span className="text-sm font-semibold tracking-widest text-white uppercase">
                                        Careers
                                    </span>
                                </div>
                                <h2 className="mb-8 text-white">
                                    BUILD YOUR FUTURE WITH A TEAM THAT POWERS
                                    PROGRESS
                                </h2>

                                {/* Call to Action Button */}
                                <div className="flex">
                                    <Link
                                        href="/career"
                                        className="flex items-center gap-2 rounded-md bg-white px-6 py-4 text-black transition-all duration-300 hover:bg-black hover:text-white"
                                    >
                                        View Open Vacancies
                                        <ArrowRight size={20} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </MaxWidthWrapper>
            <Footer />
        </>
    );
}

import PageBanner from '@/components/common/page-banner';
import TopLabel from '@/components/common/top-label';
import Footer from '@/components/footer';
import MaxWidthWrapper from '@/components/max-width-wrapper';
import { NavbarThree } from '@/components/navbar-3';
import { Link } from '@inertiajs/react';
import { ArrowRight, Pause, Play } from 'lucide-react';
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const defaultCards = [
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

const cardSpans = [
    'md:col-span-4 md:row-span-7',
    'md:col-span-2 md:row-span-6',
    'md:col-span-2 md:row-span-6',
    'md:col-span-2 md:row-span-5',
    'md:col-span-2 md:row-span-5',
];

export default function LifeAtCubeGrid({ content }: { content?: any }) {
    const c = content ?? {};

    const cards = (
        Array.isArray(c.cards) && c.cards.length
            ? c.cards.map((item: any, i: number) => ({
                  image: item?.image || defaultCards[i]?.image || '/images/people-first.jpg',
                  title: item?.title || '',
                  text: item?.text || '',
                  span: cardSpans[i] ?? 'md:col-span-2 md:row-span-5',
              }))
            : defaultCards.map((card: any, i: number) => ({ ...card, span: cardSpans[i] ?? 'md:col-span-2 md:row-span-5' }))
    ).filter((card: any) => card.title);

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
            <PageBanner title={content?.banner_title || "Life at CubeGrid"} image={content?.banner_image || "/images/life-at-2.png"} />
            <MaxWidthWrapper className="pt-12 md:pt-24 pb-12 md:pb-20">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:gap-24">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col justify-center items-center md:items-start text-center md:text-start"
                    >
                        <TopLabel text={c.intro_label || 'working at cubegrid'} />
                        <h2>
                            {c.intro_heading || 'We turn ambition into innovation with clean energy delivery.'}
                        </h2>
                        {c.intro_body ? (
                            <div className="rich-text" dangerouslySetInnerHTML={{ __html: c.intro_body }} />
                        ) : (
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
                        )}
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="h-full w-full overflow-hidden rounded-xl lg:rounded-3xl"
                    >
                        <img
                            src={c.intro_image || 'https://img.magnific.com/premium-photo/two-workers-inspecting-electrical-tower-sunset_204719-25797.jpg?w=720'}
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
                    <h2>{c.why_heading || 'why CubeGrid'}</h2>
                    {c.why_intro ? (
                        <div className="rich-text md:max-w-3xl md:text-lg" dangerouslySetInnerHTML={{ __html: c.why_intro }} />
                    ) : (
                        <p className="md:max-w-3xl md:text-lg">
                            CubeGrid global workforce of over 360 dedicated
                            professionals is driven by a passion for enhancing
                            essential infrastructure assets that will lead to a
                            higher quality of life for all.
                        </p>
                    )}
                </motion.div>
                <div className="grid md:h-190 md:grid-cols-6 md:grid-rows-12 gap-4">
                    {cards.map((card: any, i: number) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                            className={card.span}
                        >
                            <div className="group relative h-full w-full overflow-hidden rounded-xl bg-gray-200">
                                <img
                                    src={card.image}
                                    alt={card.title}
                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/35 to-transparent" />
                                <div className="absolute right-3 bottom-3 left-3 overflow-hidden rounded-md text-white">
                                    <div className="relative z-10 p-4">
                                        <h3 className="mb-0 font-heading text-2xl drop-shadow-sm">
                                            {card.title}
                                        </h3>
                                    </div>
                                    <div className="max-h-0 overflow-hidden transition-all duration-1000 ease-out group-hover:max-h-50">
                                        <p className="mb-0 px-4 pb-4 font-medium drop-shadow-sm">
                                            {card.text}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
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
                                        {c.cta_label || 'Careers'}
                                    </span>
                                </div>
                                <h2 className="mb-8 text-white">
                                    {c.cta_heading || 'BUILD YOUR FUTURE WITH A TEAM THAT POWERS PROGRESS'}
                                </h2>

                                {/* Call to Action Button */}
                                <div className="flex">
                                    <Link
                                        href={c.cta_link || '/career'}
                                        className="flex items-center gap-2 rounded-md bg-white px-6 py-4 text-black transition-all duration-300 hover:bg-black hover:text-white"
                                    >
                                        {c.cta_button || 'View Open Vacancies'}
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

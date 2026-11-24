import PageBanner from '@/components/common/page-banner';
import ThemeButton from '@/components/common/theme-button';
import Footer from '@/components/footer';
import PowerCTA from '@/components/home/cta';
import MaxWidthWrapper from '@/components/max-width-wrapper';
import { NavbarThree } from '@/components/navbar-3';
import { pillarsData } from '@/utils/data';
import { Head, Link } from '@inertiajs/react';
import { Check, CheckCheck, Info } from 'lucide-react';
import { useState } from 'react';

interface Pillar {
    title: string;
    desc: string;
    alias: string;
    image: string;
    features: string[];
    subtitle: string;
}

export default function PillarDetail({ alias, content }: { alias: string; content?: any }) {
    const c = content ?? {};
    const pillar: Pillar | undefined = pillarsData.find(
        (item) => item.alias === alias,
    );

    if (!pillar) {
        return <div>Pillar not found</div>;
    }

    const resolved: Pillar = {
        title: c.pillar_title || pillar.title,
        desc: c.pillar_desc || pillar.desc,
        alias: pillar.alias,
        image: c.pillar_image || pillar.image,
        subtitle: c.pillar_subtitle || pillar.subtitle,
        features:
            (Array.isArray(c.features) && c.features.length
                ? c.features.map((f: any) => f?.feature ?? f).filter(Boolean)
                : pillar.features),
    };

    return (
        <>
            <Head title={resolved.title} />
            <NavbarThree />
            <PageBanner title={content?.banner_title || "Our Pillars"} image={content?.banner_image || "/images/business-2.jpg"} />
            <MaxWidthWrapper>
                <section className="pt-10 pb-8 lg:pt-24 lg:pb-10">
                    <div className="grid items-start gap-4 lg:gap-10 lg:grid-cols-[1fr_0.8fr]">
                        <div>
                            <p className="mb-5 font-semibold text-accent uppercase">
                                {resolved.subtitle}
                            </p>

                            <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl">
                                {resolved.title}
                            </h1>
                        </div>
                        <div>
                            <p className="md:text-lg">{resolved.desc}</p>
                        </div>
                    </div>
                </section>
            </MaxWidthWrapper>
            <MaxWidthWrapper className="max-w-6xl">
                <div className="aspect-2/1 overflow-hidden rounded-xl bg-gray-100">
                    <img
                        src={resolved.image}
                        alt={resolved.title}
                        className="h-full w-full object-cover"
                    />
                </div>

                <div className="pt-4 lg:pt-20">
                    <h3 className="mb-4 lg:mb-8 text-xl md:text-2xl lg:text-4xl font-semibold">
                        {c.section_heading || "Building the infrastructure behind India's energy future."}
                    </h3>

                    {c.section_body ? (
                        <div className="rich-text" dangerouslySetInnerHTML={{ __html: c.section_body }} />
                    ) : (
                        <>
                            <p>{resolved.desc}</p>

                            <p>
                                Our approach combines technical expertise, disciplined
                                execution, and long-term thinking to develop
                                infrastructure capable of supporting India's rapidly
                                evolving energy requirements.
                            </p>
                        </>
                    )}
                </div>

                <section className="pb-10 lg:pb-20">
                    {/* <div>
                        <h3 className='text-4xl font-semibold mb-8'>
                            What we work across
                        </h3>
                    </div> */}

                    <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-5">
                        {resolved.features.map((tag: string) => (
                            <div
                                key={tag}
                                className="group flex items-center gap-3 rounded-xl border border-gray-200/80 bg-white/70 p-3 shadow-xs backdrop-blur-xs transition-all hover:border-accent/40 hover:bg-white hover:shadow-sm"
                            >
                                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                                    {/* A checkmark or small dot often looks much cleaner than an Info circle */}
                                    <CheckCheck size={20} />
                                </div>

                                <span className="leading-snug font-semibold text-gray-800">
                                    {tag}
                                </span>
                            </div>
                        ))}
                    </div>
                </section>
            </MaxWidthWrapper>
            {/* <PowerCTA /> */}
            <section className="pt-8 md:pb-16">
                <MaxWidthWrapper className="max-w-full px-0 md:max-w-346">
                    <div className="group relative overflow-hidden md:min-h-100 md:rounded-4xl">
                        {' '}
                        <video
                            src="/images/power-2.mp4"
                            autoPlay
                            loop
                            muted
                            className="absolute inset-0 h-full w-full object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-black/20" />
                        <div className="relative z-10 flex items-center justify-center px-4 py-12 text-center sm:px-10 md:min-h-100 md:px-6 md:py-16">
                            <div className="mx-auto max-w-5xl">
                                <h2 className="text-4xl text-white sm:text-5xl md:text-6xl lg:text-6xl">
                                    {c.cta_heading || "Let's Build Your Next Energy Project"}
                                </h2>
                                <p className="mx-auto mt-6 text-base text-white md:max-w-2xl md:text-lg">
                                    {c.cta_text || "Whether you're planning a new project or exploring a partnership, we're ready to understand your requirements and help you take the next step."}
                                </p>
                                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                                    <ThemeButton
                                        text={c.cta_button || 'Enquire Now'}
                                        link={c.cta_link || '/enquiry'}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </MaxWidthWrapper>
            </section>
            <Footer />
        </>
    );
}

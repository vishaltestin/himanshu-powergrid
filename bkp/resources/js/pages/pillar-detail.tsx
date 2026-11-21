import PageBanner from '@/components/common/page-banner';
import Footer from '@/components/footer';
import PowerCTA from '@/components/home/cta';
import MaxWidthWrapper from '@/components/max-width-wrapper';
import { NavbarThree } from '@/components/navbar-3';
import { pillarsData } from '@/utils/data';
import { Head, Link } from '@inertiajs/react';
import { Info } from 'lucide-react';
import { useState } from 'react';

interface Pillar {
    title: string;
    desc: string;
    alias: string;
    image: string;
    features: string[];
    subtitle: string;
}

export default function PillarDetail({ alias }: { alias: string }) {
    const pillar: Pillar | undefined = pillarsData.find(
        (item) => item.alias === alias
    );

    if (!pillar) {
        return <div>Pillar not found</div>;
    }

    return (
        <>
            <Head title={pillar.title} />
            <NavbarThree />
            <PageBanner title='Our Business' />
            <MaxWidthWrapper>
                <section className="pb-16 pt-10 lg:pb-10 lg:pt-24">
                    <div className="grid items-start gap-10 lg:grid-cols-[1fr_0.8fr]">
                        <div>
                            <p className="mb-5 font-semibold uppercase text-accent">
                                {pillar.subtitle}
                            </p>

                            <h1 className="text-6xl font-heading">
                                {pillar.title}
                            </h1>
                        </div>
                        <div>
                            <p className="text-lg">
                                {pillar.desc}
                            </p>
                        </div>
                    </div>
                </section>

            </MaxWidthWrapper>
            <MaxWidthWrapper className='max-w-6xl'>
                <div className="aspect-2/1 overflow-hidden rounded-xl bg-gray-100">
                    <img
                        src={pillar.image}
                        alt={pillar.title}
                        className="h-full w-full object-cover"
                    />
                </div>

                <div className="pt-20 pb-14">
                    <h3 className='text-4xl font-semibold mb-8'>
                        Building the infrastructure behind India's energy future.
                    </h3>

                    <p>
                        {pillar.desc}
                    </p>

                    <p>
                        Our approach combines technical expertise,
                        disciplined execution, and long-term thinking
                        to develop infrastructure capable of supporting
                        India's rapidly evolving energy requirements.
                    </p>
                </div>

                <section className='pb-20'>
                    <div>
                        <h3 className='text-4xl font-semibold mb-8'>
                            What we work across
                        </h3>
                    </div>

                    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {pillar.features.map((tag) => (
                            <div
                                key={tag}
                                className="rounded-2xl ring ring-gray-200 bg-white p-6"
                            >
                                <div className="mb-8 flex size-12 items-center justify-center rounded-md p-2 bg-accent/10 text-accent">
                                    <Info className='text-accent' />
                                </div>

                                <h3 className="text-xl font-semibold">
                                    {tag}
                                </h3>

                                <p className="mt-2">
                                    Supporting scalable and reliable
                                    infrastructure across this area.
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
            </MaxWidthWrapper>
            <PowerCTA />
            <Footer />
        </>
    );
}

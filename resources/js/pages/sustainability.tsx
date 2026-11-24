import PageBanner from '@/components/common/page-banner';
import TopLabel from '@/components/common/top-label';
import Footer from '@/components/footer';
import MaxWidthWrapper from '@/components/max-width-wrapper';
import { NavbarThree } from '@/components/navbar-3';
import { Link } from '@inertiajs/react';
import { ArrowUpRight, CornerDownLeftIcon } from 'lucide-react';
import { useState } from 'react';

export default function Sustainability({ content }: { content?: any }) {
    const c = content ?? {};
    return (
        <>
            <NavbarThree />
            <PageBanner title={content?.banner_title || "Sustainability"} image={content?.banner_image} />
            <MaxWidthWrapper className="pt-24 md:pb-16">
                {/* <div className="mb-16 flex flex-col items-center text-center">
                        <TopLabel text="SELECTED PROJECTS" />
                        <h2>We Build Complex Infrastructure</h2>
                    <p className='text-lg max-w-4xl mb-0'>We are an integrated energy infrastructure platform focused on identifying, developing, constructing, operating, and scaling complex assets across India's power value chain.</p>
                </div> */}
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:gap-20">
                    <div className="h-full w-full overflow-hidden rounded-xl lg:rounded-3xl">
                        <img
                            src={c.hero_image || '/images/sustain-4.jpg'}
                            alt="Aerial view of winding forest road"
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="mt-4 flex flex-col text-center md:text-start">
                        <h2>{c.heading || 'Sustainability'}</h2>

                        {c.body_1 ? (
                            <div className="rich-text" dangerouslySetInnerHTML={{ __html: c.body_1 }} />
                        ) : (
                            <p>
                                CubeGrid has always considered Environment, Social
                                and Governance (ESG) as key business imperatives and
                                integrates sustainable practices into its
                                operations, projects, and long-term strategy. The
                                company aligns its activities with applicable
                                Sustainable Development Goals (SDGs), focusing on
                                responsible resource management, environmental
                                stewardship, social responsibility, and ethical
                                governance. Through continuous innovation and
                                responsible decision-making, CubeGrid strives to
                                create lasting value while contributing to a more
                                sustainable and resilient future.
                            </p>
                        )}
                        {c.body_2 ? (
                            <div className="rich-text mb-0" dangerouslySetInnerHTML={{ __html: c.body_2 }} />
                        ) : (
                            <p className='mb-0'>
                                Lorem ipsum dolor sit, amet consectetur adipisicing
                                elit. Iure tenetur modi, quis quaerat commodi
                                ducimus aperiam harum nihil. Consequatur modi
                                nostrum harum consectetur voluptates numquam iste
                                nulla repellendus officia aspernatur.
                                nostrum harum consectetur voluptates numquam iste
                                nulla repellendus officia aspernatur.
                            </p>
                        )}
                    </div>
                </div>
                {c.body_3 ? (
                    <div className="rich-text mt-10" dangerouslySetInnerHTML={{ __html: c.body_3 }} />
                ) : (
                    <p className="mt-10">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Accusamus autem architecto molestiae eveniet explicabo,
                        tempora delectus omnis, maxime obcaecati voluptatem ipsa
                        totam facere ab expedita exercitationem. Quam corporis
                        molestiae blanditiis soluta quidem expedita vero facere
                        doloremque iste animi sapiente, numquam perferendis minus
                        perspiciatis aperiam. Magni facilis, maiores tempore facere
                        sequi, officia doloremque inventore exercitationem deleniti
                        sit eveniet? Perferendis molestiae ipsum voluptatibus
                        reiciendis esse id, magnam non accusamus dignissimos
                        repudiandae repellat amet deserunt ab quod rerum. Saepe
                        aliquid laboriosam adipisci et voluptatibus tempora commodi
                        illum, ipsum officiis nam, delectus eius amet aspernatur
                        vero incidunt pariatur in nesciunt neque quam dolor esse!
                    </p>
                )}
            </MaxWidthWrapper>

            <Footer />
        </>
    );
}

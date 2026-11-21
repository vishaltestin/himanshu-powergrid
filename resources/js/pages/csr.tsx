import PageBanner from '@/components/common/page-banner';
import TopLabel from '@/components/common/top-label';
import Footer from '@/components/footer';
import MaxWidthWrapper from '@/components/max-width-wrapper';
import { NavbarThree } from '@/components/navbar-3';
import { Link } from '@inertiajs/react';
import { ArrowUpRight, CornerDownLeftIcon } from 'lucide-react';
import { useState } from 'react';

export default function Csr() {
    return (
        <>
            <NavbarThree />
            <PageBanner title="Corporate Social Responsibility" />
            <MaxWidthWrapper className="pt-24 md:pb-16">
                {/* <div className="mb-16 flex flex-col items-center text-center">
                        <TopLabel text="SELECTED PROJECTS" />
                        <h2>We Build Complex Infrastructure</h2>
                    <p className='text-lg max-w-4xl mb-0'>We are an integrated energy infrastructure platform focused on identifying, developing, constructing, operating, and scaling complex assets across India's power value chain.</p>
                </div> */}
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:gap-20">
                    <div className="h-full w-full overflow-hidden rounded-xl lg:rounded-3xl">
                        <img
                            src="/images/csr.jpg    "
                            alt="Aerial view of winding forest road"
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="mt-4 flex flex-col text-center md:text-start">
                        <h2>Corporate Social Responsibility</h2>

                        <p>
                            Corporate Social Responsibility (CSR) has become an
                            integral part of responsible and sustainable
                            business practices today. At CubeGrid, CSR goes
                            beyond statutory compliance and is deeply embedded
                            into the company’s vision, mission, and values.
                            Through meaningful initiatives focused on community
                            development, education, environmental
                            sustainability, healthcare, and social well-being,
                            CubeGrid strives to create a positive and lasting
                            impact on society while contributing to inclusive
                            growth.
                        </p>
                        <p className="mb-0">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Iure tenetur modi, quis quaerat commodi
                            ducimus aperiam harum nihil. Consequatur modi
                            nostrum harum consectetur voluptates numquam iste
                            nulla repellendus officia aspernatur. nostrum harum
                            consectetur voluptates numquam iste nulla
                            repellendus officia aspernatur.
                        </p>
                    </div>
                </div>
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
            </MaxWidthWrapper>

            <Footer />
        </>
    );
}

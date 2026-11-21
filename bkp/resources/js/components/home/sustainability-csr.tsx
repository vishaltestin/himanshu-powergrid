import { Link } from '@inertiajs/react';
import ThemeButton from '../common/theme-button';
import TopLabel from '../common/top-label';
import MaxWidthWrapper from '../max-width-wrapper';

function SustainabilityCsr() {
    return (
        <>
            <section className="md:pt-12 pb-10 md:pb-20">
                <MaxWidthWrapper>
                    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:gap-24">
                        <div className="h-full w-full overflow-hidden rounded-xl lg:rounded-3xl">
                            <img
                                src="/images/sustain-3.webp"
                                alt="Aerial view of winding forest road"
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div className="flex flex-col justify-center text-center md:text-start">
                            <h2>Sustainability</h2>

                            <p>
                                CubeGrid has always considered Environment,
                                Social and Governance (ESG) as key business
                                imperatives and integrates sustainable practices
                                into its operations, projects, and long-term
                                strategy. The company aligns its activities with
                                applicable Sustainable Development Goals (SDGs),
                                focusing on responsible resource management,
                                environmental stewardship, social
                                responsibility, and ethical governance. Through
                                continuous innovation and responsible
                                decision-making, CubeGrid strives to create
                                lasting value while contributing to a more
                                sustainable and resilient future.
                            </p>
                            <div className="mt-4">
                                <Link href="#" className='ring-2 ring-accent px-6 py-3 rounded-sm font-heading text-lg hover:bg-accent transition-all duration-300 hover:text-white'>Explore</Link>
                            </div>
                        </div>
                    </div>
                </MaxWidthWrapper>
            </section>
            <section className="pt-12 pb-10">
                <MaxWidthWrapper>
                    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:gap-24">
                        <div className="flex flex-col justify-center order-2 md:order-1 text-center md:text-start">
                            <h2>Corporate Social Responsibility</h2>

                            <p>
                                Corporate Social Responsibility (CSR) has become
                                an integral part of responsible and sustainable
                                business practices today. At CubeGrid, CSR goes
                                beyond statutory compliance and is deeply
                                embedded into the company’s vision, mission, and
                                values. Through meaningful initiatives focused
                                on community development, education,
                                environmental sustainability, healthcare, and
                                social well-being, CubeGrid strives to create a
                                positive and lasting impact on society while
                                contributing to inclusive growth.
                            </p>

                            <div className="mt-4">
                                <Link href="#" className='ring-2 ring-accent px-6 py-3 rounded-sm font-heading text-lg hover:bg-accent transition-all duration-300 hover:text-white'>Explore</Link>
                            </div>
                        </div>

                        <div className="h-full w-full overflow-hidden rounded-xl lg:rounded-3xl order-1 md:order-2">
                            <img
                                src="/images/csr.jpg"
                                alt="Aerial view of winding forest road"
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>
                </MaxWidthWrapper>
            </section>
        </>
    );
}

export default SustainabilityCsr;

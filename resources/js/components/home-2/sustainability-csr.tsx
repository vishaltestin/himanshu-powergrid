import AnimatedButton from '../common/animated-button';
import ThemeButton from '../common/theme-button';
import TopLabel from '../common/top-label';
import MaxWidthWrapper from '../max-width-wrapper';

function SustainabilityCsr() {
    return (
        <>
            {/* <section className="pt-12 pb-24">
                <MaxWidthWrapper>
                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24">
                        <div className="h-full w-full overflow-hidden rounded-3xl">
                            <img
                                src="/images/sustain-2.jpg"
                                alt="Aerial view of winding forest road"
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div className="flex flex-col justify-center">
                            <h2>Sustainability</h2>

                            <p>
                                CubeGrid has always considered Environment,
                                Social and Governance (ESG) as key business
                                imperatives and aligns its business activities
                                with the applicable SDGs, demonstrating its
                                commitment to sustainability.
                            </p>
                            <div className="mt-2 mb-10">
                                <ThemeButton link="#" text="Know More" />
                            </div>
                        </div>
                    </div>
                </MaxWidthWrapper>
            </section> */}
            <section className="pb-28">
                <MaxWidthWrapper>
                    <div className="grid grid-cols-2 gap-24">
                        <div className="flex flex-col">
                            <div className="h-90 w-full overflow-hidden rounded-3xl">
                                <img
                                    src="/images/sustain-3.webp"
                                    alt="Aerial view of winding forest road"
                                    className="h-full w-full object-cover object-center"
                                />
                            </div>
                            <div className="mx-auto -mt-32 flex w-[90%] flex-col items-center justify-center rounded-2xl bg-[#f4f4f4] p-4 text-center">
                                <h3 className="font-heading-2 text-3xl font-semibold tracking-tight">
                                    Sustainability
                                </h3>

                                <p>
                                    CubeGrid has always considered Environment,
                                    Social and Governance (ESG) as key business
                                    imperatives and aligns its business
                                    activities with the applicable SDGs,
                                    demonstrating its commitment to
                                    sustainability.
                                </p>

                                <div className="mt-2">
                                    <AnimatedButton textClassName="text-black" link="#" text="Know More" />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="h-90 w-full overflow-hidden rounded-3xl">
                                <img
                                    src="/images/csr.jpg"
                                    alt="Aerial view of winding forest road"
                                    className="h-full w-full object-cover object-bottom"
                                />
                            </div>
                            <div className="mx-auto -mt-32 flex w-[90%] flex-col items-center justify-center rounded-2xl bg-[#f4f4f4] p-4 text-center">
                                <h3 className="font-heading-2 text-3xl font-semibold tracking-tight">
                                    CSR
                                </h3>

                                <p>
                                    Corporate social responsibility (CSR) has
                                    become one of the standard business
                                    practices of current time. More than a
                                    statutory compliance CSR is embedded into
                                    the vision and mission of CubeGrid.
                                </p>

                                <div className="mt-2">
                                    <AnimatedButton textClassName="text-black" link="#" text="Know More" />
                                </div>
                            </div>
                        </div>
                    </div>
                </MaxWidthWrapper>
            </section>
        </>
    );
}

export default SustainabilityCsr;

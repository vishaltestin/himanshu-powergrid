import React from 'react';
import MaxWidthWrapper from '../max-width-wrapper';
import TopLabel from '../common/top-label';
import ThemeButton from '../common/theme-button';
import AnimatedButton from '../common/animated-button';

function PowerCTA() {
    return (
        <section className="pt-8 pb-16">
            <MaxWidthWrapper>
                <div className="group/cta relative min-h-[420px] overflow-hidden rounded-4xl">
                    {' '}
                    <img
                        src="/images/cta.jpg"
                        className="absolute inset-0 h-full w-full object-cover object-center"
                    />
                    {/* <video
                        src="/images/power-2.mp4"
                        autoPlay
                        loop
                        muted
                        className="absolute inset-0 h-full w-full object-cover object-center"
                    /> */}
                    <div className="absolute inset-0 bg-black/20" />
                    {/* Content */}
                    <div className="relative z-10 flex min-h-100 items-center justify-center px-6 py-16 text-center sm:px-10">
                        <div className="mx-auto max-w-4xl">
                            {/* <div className="mb-6 flex items-center justify-center">
                                <span className="text-sm font-medium tracking-widest text-white uppercase">
                                    Powering Progress
                                </span>
                            </div> */}
                            <h2 className="h2 text-4xl text-white sm:text-5xl md:text-6xl lg:text-6xl">
                                Empowering the Future of Energy Transmission
                            </h2>
                            <p className="mx-auto mt-6 max-w-2xl text-base text-white md:text-lg">
                                Reliable transmission solutions engineered to
                                connect power, strengthen grids, and support a
                                more resilient energy future.
                            </p>
                            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                                <AnimatedButton text="Explore Our Solutions" />
                            </div>
                        </div>
                    </div>
                </div>
            </MaxWidthWrapper>
        </section>
    );
}

export default PowerCTA;

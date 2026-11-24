import React from 'react';
import MaxWidthWrapper from '../max-width-wrapper';
import TopLabel from '../common/top-label';
import ThemeButton from '../common/theme-button';

function PowerCTA({ content }: { content?: any }) {
    const c = content ?? {};
    return (
        <section className="pt-8 md:pb-16">
            <MaxWidthWrapper className='max-w-full px-0 md:max-w-346'>
                <div className="group relative md:min-h-100 overflow-hidden md:rounded-4xl">
                    {' '}
                    <video
                        src="/images/power-2.mp4"
                        autoPlay
                        loop
                        muted
                        className="absolute inset-0 h-full w-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                    {/* Content */}
                    <div className="relative z-10 flex py-12 md:min-h-100 items-center justify-center px-4 md:px-6 md:py-16 text-center sm:px-10">
                        <div className="mx-auto max-w-5xl">
                            {/* <div className="mb-6 flex items-center justify-center">
                                <span className="text-sm font-medium tracking-widest text-white uppercase">
                                    Powering Progress
                                </span>
                            </div> */}
                            <h2 className="text-4xl text-white sm:text-5xl md:text-6xl lg:text-6xl">
                                {c.cta_heading || 'Empowering the Future of Energy Transmission'}
                            </h2>
                            <p className="mx-auto mt-6 md:max-w-2xl text-base text-white md:text-lg">
                                Reliable transmission solutions engineered to
                                connect power, strengthen grids, and support a
                                more resilient energy future.
                            </p>
                            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                                <ThemeButton text="Enquire Now" link='/enquiry' />
                            </div>
                        </div>
                    </div>
                </div>
            </MaxWidthWrapper>
        </section>
    );
}

export default PowerCTA;

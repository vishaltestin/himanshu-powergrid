import AnimatedButton from '@/components/common/animated-button';
import TopLabel from '@/components/common/top-label';
import { Link } from '@inertiajs/react';
import { ArrowRight } from 'lucide-react';
import MaxWidthWrapper from '@/components/max-width-wrapper';
import { BlockProps } from './shared';

export default function ImageCta({ data }: BlockProps) {
    if (data.style === 'banner') {
        return (
            <MaxWidthWrapper className="pt-12 pb-24">
                <div className="relative flex w-full items-center justify-start overflow-hidden rounded-3xl bg-slate-950">
                    <div className="absolute inset-0 z-0">
                        {data.image && <img src={data.image} alt="" className="h-full w-full scale-105 transform object-cover object-top transition-transform duration-1000 hover:scale-100" />}
                        <div className="absolute inset-0 bg-black/50" />
                    </div>
                    <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-10 sm:px-8 md:py-20 lg:px-12">
                        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
                            {data.label && (
                                <div className="mb-3 flex items-center md:mb-6">
                                    <span className="text-sm font-semibold tracking-widest text-white uppercase">{data.label}</span>
                                </div>
                            )}
                            {data.heading && <h2 className="mb-8 text-white">{data.heading}</h2>}
                            {data.text && <p className="mb-8 text-white md:text-lg">{data.text}</p>}
                            {data.button_text && (
                                <Link href={data.button_link || '#'} className="flex items-center gap-2 rounded-md bg-white px-6 py-4 text-black transition-all duration-300 hover:bg-black hover:text-white">
                                    {data.button_text}
                                    <ArrowRight size={20} />
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </MaxWidthWrapper>
        );
    }

    return (
        <section className="pt-8 pb-16">
            <MaxWidthWrapper>
                <div className="group/cta relative min-h-[420px] overflow-hidden rounded-4xl">
                    {data.image && <img src={data.image} alt="" className="absolute inset-0 h-full w-full object-cover object-center" />}
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="relative z-10 flex min-h-100 items-center justify-center px-6 py-16 text-center sm:px-10">
                        <div className="mx-auto max-w-4xl">
                            {data.label && <TopLabel text={data.label} />}
                            {data.heading && <h2 className="h2 text-4xl text-white sm:text-5xl md:text-6xl lg:text-6xl">{data.heading}</h2>}
                            {data.text && <p className="mx-auto mt-6 max-w-2xl text-base text-white md:text-lg">{data.text}</p>}
                            {data.button_text && (
                                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                                    <AnimatedButton text={data.button_text} link={data.button_link || '#'} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </MaxWidthWrapper>
        </section>
    );
}

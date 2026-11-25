import ThemeButton from '@/components/common/theme-button';
import MaxWidthWrapper from '@/components/max-width-wrapper';
import { BlockProps } from './shared';

export default function VideoCta({ data }: BlockProps) {
    return (
        <section className="pt-8 md:pb-16">
            <MaxWidthWrapper className="max-w-full px-0 md:max-w-346">
                <div className="group relative overflow-hidden md:min-h-100 md:rounded-4xl">
                    {data.video ? (
                        <video src={data.video} poster={data.image || undefined} autoPlay loop muted playsInline className="absolute inset-0 h-full w-full object-cover object-center" />
                    ) : (
                        data.image && <img src={data.image} alt="" className="absolute inset-0 h-full w-full object-cover object-center" />
                    )}
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="relative z-10 flex items-center justify-center px-4 py-12 text-center sm:px-10 md:min-h-100 md:px-6 md:py-16">
                        <div className="mx-auto max-w-5xl">
                            {data.heading && <h2 className="text-4xl text-white sm:text-5xl md:text-6xl lg:text-6xl">{data.heading}</h2>}
                            {data.text && <p className="mx-auto mt-6 text-base text-white md:max-w-2xl md:text-lg">{data.text}</p>}
                            {data.button_text && (
                                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                                    <ThemeButton text={data.button_text} link={data.button_link || '#'} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </MaxWidthWrapper>
        </section>
    );
}

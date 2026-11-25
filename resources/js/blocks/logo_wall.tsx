import TopLabel from '@/components/common/top-label';
import MaxWidthWrapper from '@/components/max-width-wrapper';
import { arr, BlockProps, Html, Lines } from './shared';

export default function LogoWall({ data }: BlockProps) {
    const logos = arr(data.logos);
    return (
        <section className="relative overflow-hidden bg-white pb-16">
            <MaxWidthWrapper>
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24">
                    <div>
                        {data.label && <TopLabel text={data.label} />}
                        {data.heading && <h2 className="h2"><Lines text={data.heading} /></h2>}
                        <Html html={data.body} />
                    </div>
                    <div className="relative flex w-full overflow-hidden bg-white">
                        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                            {logos.map((logo, i) => (
                                <div key={i} className="group custom-border-200 flex min-h-24 shrink-0 items-center justify-center rounded-lg px-10 py-4 transition-colors duration-300">
                                    {logo.image && <img src={logo.image} alt={logo.name || ''} loading="lazy" className="h-full w-full object-contain transition-all duration-300 group-hover:scale-110" />}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </MaxWidthWrapper>
        </section>
    );
}

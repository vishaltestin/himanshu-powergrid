import MaxWidthWrapper from '@/components/max-width-wrapper';
import { CheckCheck } from 'lucide-react';
import { arr, BlockProps, Html } from './shared';

export default function DetailIntro({ data }: BlockProps) {
    const features = arr<string>(data.features);
    return (
        <>
            <MaxWidthWrapper>
                <section className="pt-10 pb-8 lg:pt-24 lg:pb-10">
                    <div className="grid items-start gap-4 lg:grid-cols-[1fr_0.8fr] lg:gap-10">
                        <div>
                            {data.subtitle && <p className="mb-5 font-semibold text-accent uppercase">{data.subtitle}</p>}
                            {data.title && <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl">{data.title}</h1>}
                        </div>
                        <div>{data.description && <p className="md:text-lg">{data.description}</p>}</div>
                    </div>
                </section>
            </MaxWidthWrapper>
            <MaxWidthWrapper className="max-w-6xl">
                {data.image && (
                    <div className="aspect-2/1 overflow-hidden rounded-xl bg-gray-100">
                        <img src={data.image} alt={data.title || ''} className="h-full w-full object-cover" />
                    </div>
                )}
                {(data.section_heading || data.body) && (
                    <div className="pt-4 lg:pt-20">
                        {data.section_heading && <h3 className="mb-4 text-xl font-semibold md:text-2xl lg:mb-8 lg:text-4xl">{data.section_heading}</h3>}
                        <Html html={data.body} />
                    </div>
                )}
                <section className="pb-10 lg:pb-20">
                    {features.length > 0 && (
                        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-5">
                            {features.map((tag, i) => (
                                <div key={i} className="group flex items-center gap-3 rounded-xl border border-gray-200/80 bg-white/70 p-3 shadow-xs backdrop-blur-xs transition-all hover:border-accent/40 hover:bg-white hover:shadow-sm">
                                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                                        <CheckCheck size={20} />
                                    </div>
                                    <span className="leading-snug font-semibold text-gray-800">{tag}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </section>
            </MaxWidthWrapper>
        </>
    );
}

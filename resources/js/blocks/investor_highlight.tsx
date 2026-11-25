import MaxWidthWrapper from '@/components/max-width-wrapper';
import { arr, BlockProps } from './shared';

export default function InvestorHighlight({ data }: BlockProps) {
    const stats = arr(data.stats);
    return (
        <section className="relative mt-12 overflow-hidden bg-[#0a1726] pt-12 pb-16 text-[#e8f1f8] md:pt-20 md:pb-24">
            <div aria-hidden className="pointer-events-none absolute inset-0 mask-[radial-gradient(ellipse_at_center,#000_30%,transparent_75%)]">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(79,163,204,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(79,163,204,0.08)_1px,transparent_1px)] bg-[size:56px_56px]" />
                <div className="grid-shine-sweep absolute inset-0 bg-[linear-gradient(rgba(156,201,230,0.32)_1px,transparent_1px),linear-gradient(90deg,rgba(156,201,230,0.2)_1px,transparent_1px)] bg-[size:56px_56px]" />
            </div>
            <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_500px_at_85%_40%,rgba(79,163,204,0.22),transparent_60%),radial-gradient(700px_400px_at_10%_100%,rgba(15,90,148,0.35),transparent_60%)]" />
            <MaxWidthWrapper>
                <div className="relative grid grid-cols-1 gap-12 md:gap-16 lg:grid-cols-12 lg:items-center">
                    <div className="order-2 lg:order-1 lg:col-span-7">
                        {data.label && <p className="mb-4 text-xs font-semibold tracking-[0.24em] text-[#4fa3cc] uppercase md:mb-6 md:text-sm">{data.label}</p>}
                        {data.title && <h2 className="bg-linear-to-b from-white to-[#9cc9e6] bg-clip-text text-transparent">{data.title}</h2>}
                        {data.subtitle && <p className="mb-3 text-lg leading-relaxed font-medium md:text-xl">{data.subtitle}</p>}
                        {data.description && <p className="mb-10 max-w-xl leading-relaxed text-white">{data.description}</p>}
                        {stats.length > 0 && (
                            <dl className="investor-stats">
                                {stats.map((stat, i) => (
                                    <div key={i} className="investor-stat">
                                        <dt className="text-2xl leading-none font-medium text-white md:text-2xl">{stat.value}</dt>
                                        <dd className="mt-2 text-xs leading-snug text-[#9fb4c8] md:text-sm">{stat.label}</dd>
                                    </div>
                                ))}
                            </dl>
                        )}
                    </div>
                    {data.image && (
                        <div className="order-1 lg:order-2 lg:col-span-5">
                            <div className="investor-visual">
                                <div className="investor-frame">
                                    <img src={data.image} alt={data.title || ''} className="w-60" />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </MaxWidthWrapper>
        </section>
    );
}

import MaxWidthWrapper from '@/components/max-width-wrapper';
import { arr, BlockProps, Html } from './shared';

export default function VisionMission({ data }: BlockProps) {
    const cards = arr(data.cards);
    return (
        <section className="pt-10 pb-20">
            <MaxWidthWrapper>
                {(data.heading || data.intro) && (
                    <div className="mb-12 text-center md:mb-16">
                        {data.heading && <h2>{data.heading}</h2>}
                        {data.intro && <p className="mx-auto max-w-2xl md:text-lg">{data.intro}</p>}
                    </div>
                )}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
                    {cards.map((card, i) => (
                        <article
                            key={i}
                            className="group relative flex flex-col overflow-hidden rounded-2xl bg-white p-8 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-12px_rgba(0,0,0,0.08)] ring ring-accent/20 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.18)] md:p-8"
                        >
                            <div className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-accent/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
                            {card.icon && (
                                <div className="relative mb-8 flex items-start justify-between">
                                    <div className="flex size-18 items-center justify-center rounded-xl bg-linear-to-br from-accent/10 to-accent/5 p-2 ring-1 ring-accent/20 transition-all duration-500 group-hover:ring-accent">
                                        <img src={card.icon} alt="" />
                                    </div>
                                </div>
                            )}
                            {card.label && <p className="relative mb-3 text-xs font-semibold tracking-[0.2em] text-accent uppercase">{card.label}</p>}
                            {card.title && <h3 className="relative mb-5 text-3xl font-semibold tracking-tight text-black md:text-4xl">{card.title}</h3>}
                            <Html html={card.text} className="relative mb-0 text-base md:text-lg" />
                        </article>
                    ))}
                </div>
            </MaxWidthWrapper>
        </section>
    );
}

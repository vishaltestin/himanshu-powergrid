import AnimatedButton from '@/components/common/animated-button';
import MaxWidthWrapper from '@/components/max-width-wrapper';
import { arr, BlockProps, SectionHeader } from './shared';

export default function ImageCards({ data }: BlockProps) {
    const items = arr(data.items);
    return (
        <section className="pb-20 md:pb-28">
            <MaxWidthWrapper>
                <SectionHeader label={data.label} heading={data.heading} intro={data.intro} />
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-24">
                    {items.map((item, i) => (
                        <div key={i} className="flex flex-col">
                            <div className="h-72 w-full overflow-hidden rounded-3xl md:h-90">
                                {item.image && <img src={item.image} alt={item.title || ''} className="h-full w-full object-cover object-center" />}
                            </div>
                            <div className="mx-auto -mt-32 flex w-[90%] flex-col items-center justify-center rounded-2xl bg-[#f4f4f4] p-4 text-center">
                                {item.title && <h3 className="font-heading-2 text-3xl font-semibold tracking-tight">{item.title}</h3>}
                                {item.text && <p>{item.text}</p>}
                                {item.button_text && (
                                    <div className="mt-2">
                                        <AnimatedButton textClassName="text-black" link={item.button_link || '#'} text={item.button_text} />
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </MaxWidthWrapper>
        </section>
    );
}

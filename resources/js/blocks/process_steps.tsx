import MaxWidthWrapper from '@/components/max-width-wrapper';
import { motion } from 'framer-motion';
import { arr, BlockProps, SectionHeader } from './shared';

export default function ProcessSteps({ data }: BlockProps) {
    const steps = arr(data.steps);
    const cols = { 1: 'lg:grid-cols-1', 2: 'lg:grid-cols-2', 3: 'lg:grid-cols-3', 4: 'lg:grid-cols-4', 5: 'lg:grid-cols-5', 6: 'lg:grid-cols-6' }[Math.min(6, Math.max(1, steps.length))];

    return (
        <section className="mb-10 bg-[#f4f4f4] pt-16 pb-10 md:mb-16 md:pb-20">
            <MaxWidthWrapper>
                <SectionHeader label={data.label} heading={data.heading} intro={data.intro} className="md:mb-8" />
                <div className={`relative hidden lg:grid ${cols}`}>
                    {steps.map((step, index) => {
                        const isImageTop = index % 2 === 0;
                        const text = (pos: 'top' | 'bottom') => (
                            <div className={`flex h-full flex-col px-2 text-center ${pos === 'top' ? 'justify-end pb-10' : 'justify-start pt-10'}`}>
                                <h3 className="mb-3 font-heading text-2xl">{step.title}</h3>
                                <p className="mb-0 text-sm">{step.description}</p>
                            </div>
                        );
                        const image = (pos: 'top' | 'bottom') => (
                            <div className={`h-full w-full overflow-hidden bg-gray-200 ${pos === 'top' ? 'rounded-t-full' : 'rounded-b-full'}`}>
                                {step.image && <img src={step.image} alt={step.title} className="h-full w-full object-cover transition-all duration-300 group-hover:scale-110" />}
                            </div>
                        );
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-100px' }}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                className="group relative z-10 flex h-110 flex-col"
                            >
                                <div className="absolute top-1/2 left-1/2 z-20 flex size-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-sm font-bold text-white shadow-sm transition-all duration-300 group-hover:size-14 group-hover:bg-accent">
                                    {step.number || String(index + 1).padStart(2, '0')}
                                </div>
                                <div className="relative flex w-full flex-1 flex-col justify-end">{isImageTop ? image('top') : text('top')}</div>
                                <div className="relative flex w-full flex-1 flex-col justify-start">{isImageTop ? text('bottom') : image('bottom')}</div>
                            </motion.div>
                        );
                    })}
                </div>
                <div className="relative flex flex-col gap-16 lg:hidden">
                    <div className="approach-dashed-border absolute top-0 bottom-0 left-5 z-0 w-px md:left-24" />
                    {steps.map((step, index) => (
                        <div key={index} className="relative z-10 flex flex-col pl-16 md:pl-48">
                            <div className="absolute top-8 left-5 z-20 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-sm font-bold text-white shadow-sm md:left-24">
                                {step.number || String(index + 1).padStart(2, '0')}
                            </div>
                            <div className="flex flex-col gap-0 md:flex-row md:gap-10">
                                <div className="mb-6 h-40 shrink-0 overflow-hidden rounded-lg bg-gray-200 md:aspect-square">
                                    {step.image && <img src={step.image} alt={step.title} className="h-full w-full object-cover" />}
                                </div>
                                <div className="mt-0 md:mt-4">
                                    <h3 className="mb-2 font-heading text-xl md:text-2xl">{step.title}</h3>
                                    <p className="max-w-md text-sm">{step.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </MaxWidthWrapper>
        </section>
    );
}

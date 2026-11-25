import DynamicForm from '@/components/blocks/dynamic-form';
import TopLabel from '@/components/common/top-label';
import MaxWidthWrapper from '@/components/max-width-wrapper';
import { cn } from '@/lib/utils';
import { BlockProps, Html } from './shared';

export default function FormSection({ data, sectionId }: BlockProps) {
    const gray = data.background === 'gray';
    return (
        <section className={cn('relative scroll-mt-14 overflow-hidden py-16 md:py-24', gray ? 'bg-[#f4f4f4]' : 'bg-white')}>
            <MaxWidthWrapper>
                <div className="relative mx-auto max-w-4xl">
                    {(data.label || data.heading || data.intro) && (
                        <div className="mb-10 flex flex-col items-center text-center md:mb-12">
                            {data.label && <TopLabel text={data.label} />}
                            {data.heading && <h2>{data.heading}</h2>}
                            <Html html={data.intro} className="mx-auto max-w-3xl md:text-lg" />
                        </div>
                    )}
                    <div className={cn('rounded-2xl bg-white p-6 md:p-10', gray ? 'ring ring-accent-foreground lg:p-12' : 'shadow-xl ring-1 ring-accent/30')}>
                        <DynamicForm
                            sectionId={sectionId}
                            data={data}
                            labelStyle={data.label_style === 'hidden' ? 'hidden' : 'above'}
                            buttonAlign="center"
                            buttonClassName={gray ? undefined : 'bg-accent hover:bg-accent/90 py-4'}
                        />
                    </div>
                </div>
            </MaxWidthWrapper>
        </section>
    );
}

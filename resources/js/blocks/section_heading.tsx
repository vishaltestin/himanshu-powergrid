import TopLabel from '@/components/common/top-label';
import MaxWidthWrapper from '@/components/max-width-wrapper';
import { cn } from '@/lib/utils';
import { BlockProps, Html } from './shared';

export default function SectionHeading({ data }: BlockProps) {
    const center = data.align !== 'left';
    return (
        <MaxWidthWrapper className="pt-12 md:pt-20">
            <div className={cn('flex flex-col', center ? 'items-center text-center' : 'items-start')}>
                {data.label && <TopLabel text={data.label} />}
                {data.heading && <h2>{data.heading}</h2>}
                <Html html={data.intro} className={cn('max-w-4xl md:text-lg', center && 'mx-auto')} />
            </div>
        </MaxWidthWrapper>
    );
}

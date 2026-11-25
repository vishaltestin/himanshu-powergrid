import AnimatedButton from '@/components/common/animated-button';
import { cn } from '@/lib/utils';
import { BlockProps, Lines } from './shared';

export default function VideoHero({ data }: BlockProps) {
    return (
        <div className={cn('relative w-full', data.height === 'medium' ? 'h-164' : 'h-176')}>
            {data.video && <video src={data.video} autoPlay loop muted playsInline className="absolute inset-0 h-full w-full object-cover object-center" />}
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="absolute bottom-10 left-0 z-10 w-full p-8 md:p-12 lg:p-24">
                <h1 className="font-heading-2 text-5xl leading-tight font-semibold text-white uppercase drop-shadow-lg md:text-7xl md:leading-20">
                    <Lines text={data.heading} />
                </h1>
                {data.text && <p className="mt-4 mb-8 max-w-4xl text-lg text-white drop-shadow-md md:text-xl">{data.text}</p>}
                {data.button_text && <AnimatedButton text={data.button_text} link={data.button_link || '#'} />}
            </div>
        </div>
    );
}

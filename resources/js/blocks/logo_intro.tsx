import MaxWidthWrapper from '@/components/max-width-wrapper';
import { BlockProps, Html } from './shared';

export default function LogoIntro({ data }: BlockProps) {
    return (
        <MaxWidthWrapper className="pt-24 pb-16">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
                <div className="flex flex-col justify-center lg:col-span-7">
                    {data.heading && <h2>{data.heading}</h2>}
                    {data.lead && <p className="font-medium md:text-lg">{data.lead}</p>}
                    <Html html={data.body} className="mb-0" />
                </div>
                {data.image && (
                    <div className="relative h-full lg:col-span-5">
                        <div className="h-full">
                            <div className="investor-frame-2">
                                <img src={data.image} alt={data.heading || ''} className="w-60" />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </MaxWidthWrapper>
    );
}

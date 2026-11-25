import MaxWidthWrapper from '@/components/max-width-wrapper';
import { cn } from '@/lib/utils';
import { BlockProps, Html } from './shared';

export default function RichText({ data }: BlockProps) {
    const width = data.width === 'narrow' ? 'max-w-3xl' : data.width === 'normal' ? 'max-w-5xl' : '';
    return (
        <MaxWidthWrapper className={cn('pt-16 pb-24 md:pb-32', width)}>
            <Html
                html={data.body}
                className="space-y-8 [&_h2]:mb-4 [&_h3]:mb-4 [&_h3]:text-2xl [&_h3]:font-semibold [&_h3]:tracking-tight [&_li]:mb-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_section]:mb-8 [&_section]:space-y-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6"
            />
        </MaxWidthWrapper>
    );
}

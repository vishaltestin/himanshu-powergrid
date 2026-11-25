import MaxWidthWrapper from '@/components/max-width-wrapper';
import { BlockProps } from './shared';

export default function MapEmbed({ data }: BlockProps) {
    const raw: string = data.url || '';
    const src = /<iframe/i.test(raw) ? (raw.match(/src="([^"]+)"/)?.[1] ?? '') : raw.trim();
    if (!src) return null;
    return (
        <section className="pt-20 pb-20">
            <MaxWidthWrapper>
                <div className="relative h-140 w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-100 shadow-sm">
                    <iframe src={src} title={data.title || 'Map'} className="h-full w-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
                </div>
            </MaxWidthWrapper>
        </section>
    );
}

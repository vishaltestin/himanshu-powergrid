import PageBanner from '@/components/common/page-banner';
import { BlockProps } from './shared';

export default function PageBannerBlock({ data }: BlockProps) {
    return <PageBanner title={data.title} subtitle={data.subtitle} image={data.image || undefined} />;
}

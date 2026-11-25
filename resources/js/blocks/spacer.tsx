import { BlockProps } from './shared';

const SIZES: Record<string, string> = { sm: 'h-6 md:h-8', md: 'h-12 md:h-16', lg: 'h-20 md:h-28' };

export default function Spacer({ data }: BlockProps) {
    return <div aria-hidden className={SIZES[data.size] || SIZES.md} />;
}

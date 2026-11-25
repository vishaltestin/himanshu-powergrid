import { animate, motion, useInView, useMotionValue, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';

type Props = { from?: number; to: number; suffix?: string; decimals?: number; duration?: number };

/** Counts up from `from` to `to` the first time it scrolls into view. */
export function AnimatedStat({ from = 0, to, suffix = '', decimals = 0, duration = 2.5 }: Props) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });
    const count = useMotionValue(from);

    useEffect(() => {
        if (isInView) animate(count, to, { duration, ease: 'easeOut' });
    }, [isInView, count, to, duration]);

    const display = useTransform(count, (latest) => {
        const parts = Number(latest).toFixed(decimals).split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        return parts.join('.') + suffix;
    });

    return <motion.span ref={ref}>{display}</motion.span>;
}

export default AnimatedStat;

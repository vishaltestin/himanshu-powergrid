/**
 * Helpers shared by all page-builder blocks.
 */
import TopLabel from '@/components/common/top-label';
import { cn } from '@/lib/utils';
import { usePage } from '@inertiajs/react';
import {
    Award, BadgeCheck, BatteryCharging, Briefcase, Building2, CalendarDays, CheckCheck, Clock, Cpu,
    DatabaseZap, Droplet, Eye, Factory, FileText, Globe, Handshake, Heart, Home, Landmark, Leaf,
    Lightbulb, LucideIcon, Mail, MapPin, Phone, Plug, Radiation, Rocket, Settings, ShieldCheck, Spool,
    Star, Sun, Target, TrendingUp, Users, UtilityPole, Wind, Zap,
} from 'lucide-react';
import React from 'react';

export type BlockProps<T = Record<string, any>> = {
    data: T;
    sectionId: number;
    anchor?: string | null;
    index: number;
};

/** Icons selectable in the admin (config/page-blocks.php → icons). */
const ICONS: Record<string, LucideIcon> = {
    zap: Zap, plug: Plug, 'utility-pole': UtilityPole, spool: Spool, 'building-2': Building2,
    settings: Settings, landmark: Landmark, globe: Globe, mail: Mail, phone: Phone, 'map-pin': MapPin,
    'check-check': CheckCheck, 'badge-check': BadgeCheck, 'shield-check': ShieldCheck, leaf: Leaf,
    sun: Sun, wind: Wind, droplet: Droplet, factory: Factory, users: Users, briefcase: Briefcase,
    award: Award, target: Target, eye: Eye, lightbulb: Lightbulb, handshake: Handshake,
    'trending-up': TrendingUp, radiation: Radiation, home: Home, star: Star, heart: Heart, clock: Clock,
    'calendar-days': CalendarDays, 'file-text': FileText, 'battery-charging': BatteryCharging, cpu: Cpu,
    rocket: Rocket, 'database-zap': DatabaseZap,
};

export function Icon({ name, className, strokeWidth }: { name?: string | null; className?: string; strokeWidth?: number }) {
    const Cmp = name ? ICONS[name] : null;
    return Cmp ? <Cmp className={className} strokeWidth={strokeWidth} /> : null;
}

/** Admin-authored HTML (sanitised server-side). */
export function Html({ html, className, as: Tag = 'div' }: { html?: string | null; className?: string; as?: any }) {
    if (!html) return null;
    return <Tag className={cn('rich-text', className)} dangerouslySetInnerHTML={{ __html: html }} />;
}

/** Text with newlines turned into <br/>. */
export function Lines({ text }: { text?: string | null }) {
    if (!text) return null;
    const parts = String(text).split(/\r?\n/);
    return (
        <>
            {parts.map((p, i) => (
                <React.Fragment key={i}>
                    {p}
                    {i < parts.length - 1 && <br />}
                </React.Fragment>
            ))}
        </>
    );
}

/** Wraps `highlight` inside `text` with a span. */
export function Highlight({ text, highlight, className = 'text-accent' }: { text?: string; highlight?: string; className?: string }) {
    if (!text) return null;
    if (!highlight || !text.includes(highlight)) return <>{text}</>;
    const [before, ...rest] = text.split(highlight);
    return (
        <>
            {before}
            <span className={className}>{highlight}</span>
            {rest.join(highlight)}
        </>
    );
}

/** Label + heading + intro block used by most sections. */
export function SectionHeader({
    label, heading, intro, introHtml, align = 'center', className, introClassName,
}: {
    label?: string; heading?: string; intro?: string; introHtml?: string; align?: 'center' | 'left';
    className?: string; introClassName?: string;
}) {
    if (!label && !heading && !intro && !introHtml) return null;
    return (
        <div className={cn('mb-8 flex flex-col md:mb-12', align === 'center' ? 'items-center text-center' : 'items-start text-left', className)}>
            {label && <TopLabel text={label} />}
            {heading && <h2>{heading}</h2>}
            {intro && <p className={cn('md:max-w-3xl md:text-lg', introClassName)}>{intro}</p>}
            {introHtml && <Html html={introHtml} className={cn('md:max-w-3xl md:text-lg', introClassName)} />}
        </div>
    );
}

export const arr = <T = any,>(v: unknown): T[] => (Array.isArray(v) ? (v as T[]) : []);

export function useSettings(): Record<string, any> {
    return (usePage<any>().props.settings ?? {}) as Record<string, any>;
}

/** True for absolute / external URLs that should not use Inertia navigation. */
export const isExternal = (href?: string) => !!href && (/^(https?:)?\/\//.test(href) || href.startsWith('mailto:') || href.startsWith('tel:') || /\.(pdf|docx?|mp4)$/i.test(href));

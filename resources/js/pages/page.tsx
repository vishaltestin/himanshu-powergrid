import Footer from '@/components/footer';
import { NavbarThree } from '@/components/navbar-3';
import type { BlockProps } from '@/blocks/shared';
import { Head } from '@inertiajs/react';
import { ComponentType } from 'react';

type Section = { id: number; type: string; anchor?: string | null; data: Record<string, any> };

type Props = {
    page: { id: number; title: string; slug: string; isHome: boolean; isDraft: boolean };
    sections: Section[];
    meta: { title?: string; description?: string | null; image?: string | null };
    editUrl?: string | null;
};

const modules = import.meta.glob<{ default: ComponentType<BlockProps> }>(['../blocks/*.tsx', '!../blocks/shared.tsx'], { eager: true });
const BLOCKS: Record<string, ComponentType<BlockProps>> = Object.fromEntries(
    Object.entries(modules).map(([path, mod]) => [path.replace(/^.*\/(.+)\.tsx$/, '$1'), mod.default]),
);

export function AdminBar({ editUrl, isDraft }: { editUrl?: string | null; isDraft?: boolean }) {
    if (!editUrl) return null;
    return (
        <div className="fixed right-4 bottom-4 z-[60] flex items-center gap-2 rounded-full bg-slate-900/90 py-1.5 pr-1.5 pl-4 text-sm text-white shadow-xl backdrop-blur">
            {isDraft && <span className="rounded-full bg-amber-400 px-2 py-0.5 text-xs font-semibold text-black">Draft</span>}
            <span className="hidden sm:inline">Admin</span>
            <a href={editUrl} className="rounded-full bg-white px-3 py-1 font-semibold text-slate-900 hover:bg-accent hover:text-white">
                Edit page
            </a>
        </div>
    );
}

export default function Page({ page, sections, meta, editUrl }: Props) {
    return (
        <>
            <Head title={meta.title || page.title}>
                {meta.description && <meta name="description" content={meta.description} />}
                {meta.title && <meta property="og:title" content={meta.title} />}
                {meta.description && <meta property="og:description" content={meta.description} />}
                {meta.image && <meta property="og:image" content={meta.image} />}
            </Head>
            <NavbarThree />
            {sections.map((section, index) => {
                const Block = BLOCKS[section.type];
                if (!Block) {
                    return import.meta.env.DEV ? (
                        <div key={section.id} className="m-4 rounded border border-dashed border-red-400 p-4 text-sm text-red-600">
                            Unknown section type “{section.type}”
                        </div>
                    ) : null;
                }
                return (
                    <div key={section.id} id={section.anchor || undefined} className={section.anchor ? 'scroll-mt-24' : undefined} data-section={section.type}>
                        <Block data={section.data || {}} sectionId={section.id} anchor={section.anchor} index={index} />
                    </div>
                );
            })}
            <Footer />
            <AdminBar editUrl={editUrl} isDraft={page.isDraft} />
        </>
    );
}

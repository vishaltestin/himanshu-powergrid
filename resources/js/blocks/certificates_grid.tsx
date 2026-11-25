import MaxWidthWrapper from '@/components/max-width-wrapper';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Eye } from 'lucide-react';
import { useState } from 'react';
import { arr, BlockProps, Html } from './shared';

export default function CertificatesGrid({ data }: BlockProps) {
    const items = arr(data.items);
    const [selected, setSelected] = useState<any | null>(null);

    return (
        <>
            <MaxWidthWrapper className="py-24">
                {(data.heading || data.intro) && (
                    <div className="mb-8 flex flex-col items-center text-center md:mb-12">
                        {data.heading && <h2>{data.heading}</h2>}
                        <Html html={data.intro} className="md:max-w-4xl md:text-lg" />
                    </div>
                )}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {items.map((cert, i) => (
                        <div
                            key={i}
                            className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-[0_2px_8px_rgba(15,23,42,0.04)] ring ring-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(15,23,42,0.09)] hover:ring-accent"
                        >
                            <div className="relative flex h-80 items-center justify-center overflow-hidden bg-gray-100 p-3">
                                {cert.image && <img src={cert.image} alt={cert.title} className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105" loading="lazy" />}
                                {cert.issued_year && (
                                    <span className="absolute top-2.5 right-2.5 rounded bg-white/90 px-2 py-0.5 text-[11px] font-semibold text-slate-700 shadow-xs ring ring-slate-200/60 backdrop-blur-xs">{cert.issued_year}</span>
                                )}
                                <button
                                    type="button"
                                    onClick={() => setSelected(cert)}
                                    className="absolute inset-0 flex cursor-pointer items-center justify-center gap-2 bg-slate-900/30 opacity-0 backdrop-blur-[1px] transition-opacity duration-200 group-hover:opacity-100"
                                >
                                    <span className="inline-flex items-center gap-2 rounded-sm bg-white px-6 py-3 text-xs font-semibold text-accent shadow-md transition-all duration-300 hover:bg-accent hover:text-white">
                                        <Eye size={18} /> {data.preview_text}
                                    </span>
                                </button>
                            </div>
                            <div className="flex flex-1 flex-col justify-between p-4">
                                {cert.category && <span className="mb-1.5 text-xs font-medium tracking-wide text-accent uppercase">{cert.category}</span>}
                                <h3 className="line-clamp-2 text-lg font-semibold">{cert.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </MaxWidthWrapper>
            <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
                {selected && (
                    <DialogContent className="max-h-[95vh] gap-0 overflow-hidden p-0 sm:max-w-5xl">
                        <DialogHeader className="border-b px-6 py-4">
                            <DialogTitle className="mb-0 font-sans text-xl">{selected.title}</DialogTitle>
                        </DialogHeader>
                        <div className="flex max-h-[calc(95vh-80px)] justify-center overflow-auto bg-slate-100 p-4">
                            {selected.file && selected.file !== '#' ? (
                                <iframe src={selected.file} title={selected.title} className="h-[75vh] w-full rounded-md bg-white" />
                            ) : (
                                <img src={selected.image} alt={selected.title} className="max-h-[75vh] max-w-full object-contain" />
                            )}
                        </div>
                    </DialogContent>
                )}
            </Dialog>
        </>
    );
}

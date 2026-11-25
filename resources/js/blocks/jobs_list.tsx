import { prefillForm } from '@/components/blocks/dynamic-form';
import MaxWidthWrapper from '@/components/max-width-wrapper';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { motion } from 'framer-motion';
import { ArrowRight, Briefcase, CheckCircle2, Clock, MapPin } from 'lucide-react';
import { useState } from 'react';
import { arr, BlockProps, Html } from './shared';

const PANELS = ['bg-[#E4EBF5]', 'bg-[#E3F5EC]', 'bg-[#E2EEFB]', 'bg-[#FFF5DA]'];

export default function JobsList({ data }: BlockProps) {
    const jobs = arr(data.jobs);
    const [open, setOpen] = useState<any | null>(null);

    const apply = (job: any) => {
        setOpen(null);
        if (data.form_field) prefillForm(data.form_field, job.title);
        const el = document.getElementById(data.form_anchor || 'apply-form');
        setTimeout(() => el?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
    };

    return (
        <MaxWidthWrapper className="pt-24 pb-16 md:pb-24">
            {(data.heading || data.intro) && (
                <div className="mb-10 flex flex-col items-center text-center">
                    {data.heading && <h2>{data.heading}</h2>}
                    <Html html={data.intro} className="max-w-3xl text-lg" />
                </div>
            )}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                {jobs.map((job, index) => (
                    <motion.article
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex flex-col rounded-2xl bg-white p-2 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                    >
                        <div className={`${PANELS[index % PANELS.length]} flex flex-1 flex-col rounded-2xl p-5`}>
                            {job.location && (
                                <div className="flex items-start justify-between gap-3">
                                    <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-gray-700">{job.location}</span>
                                </div>
                            )}
                            {job.department && (
                                <p className="mt-6 flex items-center gap-1.5 text-sm text-gray-800">
                                    <Briefcase className="h-3.5 w-3.5" aria-hidden />
                                    {job.department}
                                </p>
                            )}
                            <h3 className="mt-1 text-lg leading-snug font-semibold text-gray-900 md:text-xl">{job.title}</h3>
                            {job.summary && <p className="mt-3 line-clamp-2">{job.summary}</p>}
                            <div className="mt-4 flex flex-wrap gap-2">
                                {[job.type, job.experience].filter(Boolean).map((t: string) => (
                                    <span key={t} className="rounded-full px-3 py-1 text-xs text-gray-900 ring ring-gray-500/60">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="px-3 pt-4 pb-2">
                            <div className="flex w-full items-center justify-between">
                                <button type="button" onClick={() => setOpen(job)} className="rounded-full text-sm font-semibold transition-colors hover:text-primary focus:outline-none">
                                    {data.view_details_text}
                                </button>
                                <button
                                    type="button"
                                    onClick={() => apply(job)}
                                    className="flex items-center justify-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold text-black ring ring-primary transition-all duration-300 hover:bg-primary hover:text-white focus:outline-none"
                                >
                                    {data.apply_text}
                                    <ArrowRight className="h-3.5 w-3.5" />
                                </button>
                            </div>
                        </div>
                    </motion.article>
                ))}
            </div>

            <Dialog open={!!open} onOpenChange={(o) => !o && setOpen(null)}>
                {open && (
                    <DialogContent className="sm:max-w-5xl">
                        <DialogHeader>
                            <div className="pr-8">
                                {open.department && <span className="mb-2 inline-block rounded-sm bg-accent/10 px-3 py-1.5 text-xs font-semibold text-accent">{open.department}</span>}
                                <DialogTitle className="mb-0 text-2xl">{open.title}</DialogTitle>
                            </div>
                            <DialogDescription className="flex flex-wrap gap-4 pt-2">
                                {open.location && (
                                    <span className="flex items-center gap-1">
                                        <MapPin className="h-3.5 w-3.5" /> {open.location}
                                    </span>
                                )}
                                {open.experience && (
                                    <span className="flex items-center gap-1">
                                        <Clock className="h-3.5 w-3.5" /> {open.experience}
                                    </span>
                                )}
                            </DialogDescription>
                        </DialogHeader>
                        <div className="max-h-[60vh] space-y-6 overflow-y-auto p-6">
                            {(open.overview || open.summary) && (
                                <div>
                                    <h4 className="mb-2 text-lg font-medium text-gray-900">{data.overview_heading}</h4>
                                    <p className="text-black">{open.overview || open.summary}</p>
                                </div>
                            )}
                            {[
                                [data.responsibilities_heading, arr<string>(open.responsibilities)],
                                [data.requirements_heading, arr<string>(open.requirements)],
                            ].map(([heading, list]: any, i) =>
                                list.length ? (
                                    <div key={i}>
                                        <h4 className="mb-2 text-lg font-medium text-gray-900">{heading}</h4>
                                        <ul className="space-y-2">
                                            {list.map((item: string, idx: number) => (
                                                <li key={idx} className="flex items-start gap-2 text-black">
                                                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-yellow-400" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ) : null,
                            )}
                        </div>
                        <DialogFooter className="gap-2">
                            <button type="button" onClick={() => setOpen(null)} className="rounded-md px-5 py-2.5 text-sm font-semibold text-gray-700 ring ring-gray-300 transition-colors hover:bg-gray-100">
                                {data.close_text}
                            </button>
                            <button
                                type="button"
                                onClick={() => apply(open)}
                                className="rounded-md px-5 py-2.5 text-sm font-semibold text-black ring ring-primary transition-all duration-300 hover:bg-primary hover:text-white"
                            >
                                {data.apply_role_text}
                            </button>
                        </DialogFooter>
                    </DialogContent>
                )}
            </Dialog>
        </MaxWidthWrapper>
    );
}

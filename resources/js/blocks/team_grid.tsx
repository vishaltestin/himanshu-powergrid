import MaxWidthWrapper from '@/components/max-width-wrapper';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { arr, BlockProps } from './shared';

type Member = {
    id: number;
    name: string;
    designation?: string;
    image: string;
    description?: string;
    paragraphs: string[];
    highlights: { value?: string; label?: string }[];
};

export default function TeamGrid({ data }: BlockProps) {
    const members = arr<Member>(data.members);
    return (
        <MaxWidthWrapper className="pt-24 md:pb-24">
            {data.intro && (
                <div className="mb-8 flex flex-col items-center text-center md:mb-12">
                    <p className="max-w-6xl text-lg">{data.intro}</p>
                </div>
            )}
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
                {members.map((m) => (
                    <div key={m.id} className="group relative flex overflow-hidden rounded-2xl ring ring-primary/20">
                        <div className="relative w-[38%] shrink-0 overflow-hidden bg-slate-100">
                            <img src={m.image} alt={m.name} className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
                        </div>
                        <div className="flex flex-col justify-between p-6 sm:p-7">
                            <div>
                                <h3 className="font-heading text-2xl sm:text-3xl">{m.name}</h3>
                                {m.designation && <p className="text-sm text-accent">{m.designation}</p>}
                                {m.description && <p className="mb-0">{m.description}</p>}
                                {(m.paragraphs.length > 0 || m.highlights.length > 0) && data.read_more_text && (
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <button className="mt-6 rounded-sm px-2 py-1 text-sm font-medium text-primary ring ring-primary transition-all hover:bg-primary hover:text-white">
                                                {data.read_more_text}
                                            </button>
                                        </DialogTrigger>
                                        <DialogContent className="p-6 sm:max-w-4xl">
                                            <DialogHeader>
                                                <div className="flex gap-4">
                                                    <div className="size-16 overflow-hidden rounded-full">
                                                        <img src={m.image} alt={m.name} className="size-full object-cover object-top" />
                                                    </div>
                                                    <div>
                                                        <DialogTitle className="mb-0 font-heading text-3xl">{m.name}</DialogTitle>
                                                        <DialogDescription className="mb-0 text-base font-medium text-accent">{m.designation}</DialogDescription>
                                                    </div>
                                                </div>
                                            </DialogHeader>
                                            <div className="custom-scrollbar flex max-h-[60vh] flex-col items-start gap-8 overflow-y-auto sm:flex-row">
                                                <div className="mt-4 flex-1 space-y-4">
                                                    {m.paragraphs.map((p, i) => (
                                                        <p key={i}>{p}</p>
                                                    ))}
                                                </div>
                                                {m.highlights.length > 0 && (
                                                    <div className="flex shrink-0 flex-col gap-4 p-1">
                                                        {m.highlights.map((h, i) => (
                                                            <div key={i} className="custom-border-200 flex flex-col items-center justify-center rounded-lg bg-gray-100 p-4 text-center transition-transform hover:-translate-y-1">
                                                                <span className="mb-1 text-2xl font-medium tracking-tight text-primary">{h.value}</span>
                                                                <span className="text-sm font-semibold text-slate-600">{h.label}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        </DialogContent>
                                    </Dialog>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {data.quote && <p className="mx-auto mt-12 text-center text-xl font-semibold text-accent italic">{data.quote}</p>}
        </MaxWidthWrapper>
    );
}

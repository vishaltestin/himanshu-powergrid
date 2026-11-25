import TopLabel from '@/components/common/top-label';
import MaxWidthWrapper from '@/components/max-width-wrapper';
import { Link } from '@inertiajs/react';
import { ArrowUpRight } from 'lucide-react';
import { arr, BlockProps, Html } from './shared';

export default function ProjectsGrid({ data }: BlockProps) {
    const items = arr(data.items);
    return (
        <MaxWidthWrapper className="pt-12 pb-12 md:pb-16 lg:pt-24">
            {(data.label || data.heading || data.intro) && (
                <div className="mb-16 flex flex-col items-center text-center">
                    {data.label && <TopLabel text={data.label} />}
                    {data.heading && <h2>{data.heading}</h2>}
                    <Html html={data.intro} className="mb-0 max-w-4xl md:text-lg" />
                </div>
            )}
            <div className="grid gap-12 lg:grid-cols-3">
                {items.map((project, index) => (
                    <Link href={project.link || '#'} className="group" key={index}>
                        <div className="relative h-70 overflow-hidden rounded-xl bg-gray-200">
                            {project.image && <img src={project.image} alt={project.title} className="h-full w-full object-cover transition-transform duration-800 ease-out group-hover:scale-110" />}
                            {project.category && (
                                <div className="absolute top-4 left-4">
                                    <span className="inline-flex rounded-sm bg-white px-3 pt-1.5 pb-1 text-sm font-semibold tracking-tighter text-black uppercase shadow-sm">{project.category}</span>
                                </div>
                            )}
                        </div>
                        <div className="pt-5">
                            <h3 className="font-heading text-2xl md:text-3xl">{project.title}</h3>
                            {project.description && <p className="mt-4">{project.description}</p>}
                            <div className="custom-border-top-200 mt-3 flex items-center justify-between pt-2">
                                <span className="font-medium text-accent">{project.location}</span>
                                {data.link_text && (
                                    <span className="group/link relative inline-flex items-center gap-2 pb-1 font-semibold text-primary hover:text-accent">
                                        <span>{data.link_text}</span>
                                        <ArrowUpRight size={16} />
                                        <span className="absolute bottom-0 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover/link:w-full" />
                                    </span>
                                )}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </MaxWidthWrapper>
    );
}

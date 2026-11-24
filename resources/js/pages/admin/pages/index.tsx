import { Card, PageHeader } from '@/components/admin/fields';
import { PAGE_SCHEMAS } from '@/admin/schemas';
import { Link } from '@inertiajs/react';
import { ChevronRight, FileText } from 'lucide-react';

export default function PagesIndex({ stored }: { stored: Record<string, { updated_at: string }> }) {
    return (
        <>
            <PageHeader
                title="Pages"
                description="Edit the text and images of every page on the website. Changes save instantly and the design stays exactly as it is."
            />

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {PAGE_SCHEMAS.map((schema) => {
                    const meta = stored[schema.key];
                    return (
                        <Link key={schema.key} href={`/admin/pages/${schema.key}/edit`}>
                            <Card className="group h-full p-5 transition-all hover:border-accent/40 hover:shadow-md">
                                <div className="mb-3 flex items-start justify-between">
                                    <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                        <FileText size={18} />
                                    </div>
                                    <ChevronRight
                                        size={16}
                                        className="mt-1 text-gray-300 transition-transform group-hover:translate-x-0.5 group-hover:text-accent"
                                    />
                                </div>
                                <p className="font-medium text-gray-900">{schema.title}</p>
                                <p className="mt-1 line-clamp-2 text-sm text-gray-500">
                                    {schema.description}
                                </p>
                                <p className="mt-3 text-[11px] font-medium tracking-wide text-gray-400 uppercase">
                                    {meta ? `Edited ${meta.updated_at}` : 'Using default content'}
                                </p>
                            </Card>
                        </Link>
                    );
                })}
            </div>
        </>
    );
}

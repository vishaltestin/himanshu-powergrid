import { Card, PageHeader, StatusPill } from '@/components/admin/fields';
import { Button } from '@/components/ui/button';
import { Link, router } from '@inertiajs/react';
import { ArrowDown, ArrowUp, Pencil, Plus, Trash2 } from 'lucide-react';

export default function BannerIndex({ banners }: { banners: any[] }) {
    const toggle = (id: number) => router.post(`/admin/banners/${id}/toggle-status`);
    const move = (id: number, direction: 'up' | 'down') =>
        router.post(`/admin/banners/${id}/move`, { direction }, { preserveScroll: true });

    const remove = (id: number) => {
        if (confirm('Delete this banner?')) router.delete(`/admin/banners/${id}`);
    };

    return (
        <>
            <PageHeader
                title="Banners"
                description="Slides shown in the home page hero carousel."
                actions={
                    <Button asChild>
                        <Link href="/admin/banners/create">
                            <Plus size={15} /> New banner
                        </Link>
                    </Button>
                }
            />

            {banners.length === 0 ? (
                <Card className="p-12 text-center text-gray-400">
                    No banners yet. Create the first hero slide.
                </Card>
            ) : (
                <div className="space-y-3">
                    {banners.map((banner, index) => (
                        <Card key={banner.id} className="flex flex-wrap items-center gap-4 p-4">
                            <div className="flex flex-col gap-1">
                                <button
                                    onClick={() => move(banner.id, 'up')}
                                    disabled={index === 0}
                                    className="rounded p-1 text-gray-400 hover:bg-gray-100 disabled:opacity-30"
                                    title="Move up"
                                >
                                    <ArrowUp size={14} />
                                </button>
                                <button
                                    onClick={() => move(banner.id, 'down')}
                                    disabled={index === banners.length - 1}
                                    className="rounded p-1 text-gray-400 hover:bg-gray-100 disabled:opacity-30"
                                    title="Move down"
                                >
                                    <ArrowDown size={14} />
                                </button>
                            </div>

                            <div className="size-24 shrink-0 overflow-hidden rounded-lg bg-gray-100">
                                {banner.image ? (
                                    <img src={banner.image} alt="" className="size-full object-cover" />
                                ) : (
                                    <div className="flex size-full items-center justify-center text-xs text-gray-400">
                                        No image
                                    </div>
                                )}
                            </div>

                            <div className="min-w-0 flex-1">
                                <p className="truncate font-medium text-gray-900">{banner.title}</p>
                                <p className="mt-0.5 line-clamp-1 text-sm text-gray-500">
                                    {banner.description || '—'}
                                </p>
                                <div className="mt-2 flex items-center gap-3 text-xs text-gray-400">
                                    <span>Button: {banner.button_text || '—'}</span>
                                    <span>Highlight: {banner.highlight || '—'}</span>
                                </div>
                            </div>

                            <StatusPill status={banner.status} />

                            <div className="flex items-center gap-1.5">
                                <Button variant="outline" size="sm" onClick={() => toggle(banner.id)}>
                                    {banner.status ? 'Disable' : 'Enable'}
                                </Button>
                                <Button variant="outline" size="sm" asChild>
                                    <Link href={`/admin/banners/${banner.id}/edit`}>
                                        <Pencil size={14} /> Edit
                                    </Link>
                                </Button>
                                <Button
                                    variant="destructive"
                                    size="sm"
                                    onClick={() => remove(banner.id)}
                                    title="Delete"
                                >
                                    <Trash2 size={14} />
                                </Button>
                            </div>
                        </Card>
                    ))}
                </div>
            )}
        </>
    );
}

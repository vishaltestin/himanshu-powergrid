import { Card, PageHeader, StatusPill } from '@/components/admin/fields';
import { Button } from '@/components/ui/button';
import { Link, router } from '@inertiajs/react';
import { Pencil, Plus, Trash2 } from 'lucide-react';

const TYPE_LABELS: Record<string, string> = {
    blog: 'Blog',
    news: 'News',
    'press-release': 'Press Release',
};

export default function BlogIndex({ posts }: { posts: any[] }) {
    const toggle = (id: number) => router.post(`/admin/blogs/${id}/toggle-status`);

    const remove = (id: number) => {
        if (confirm('Delete this post?')) router.delete(`/admin/blogs/${id}`);
    };

    return (
        <>
            <PageHeader
                title="Blogs & News"
                description="Posts shown on the Blogs and News & Updates pages."
                actions={
                    <Button asChild>
                        <Link href="/admin/blogs/create">
                            <Plus size={15} /> New post
                        </Link>
                    </Button>
                }
            />

            {posts.length === 0 ? (
                <Card className="p-12 text-center text-gray-400">No posts yet.</Card>
            ) : (
                <Card className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b border-gray-100 text-left text-xs tracking-wide text-gray-400 uppercase">
                                <th className="px-5 py-3 font-medium">Post</th>
                                <th className="px-5 py-3 font-medium">Type</th>
                                <th className="px-5 py-3 font-medium">Date</th>
                                <th className="px-5 py-3 font-medium">Status</th>
                                <th className="px-5 py-3 text-right font-medium">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {posts.map((post) => (
                                <tr key={post.id} className="border-b border-gray-50 last:border-0 hover:bg-gray-50/60">
                                    <td className="px-5 py-3">
                                        <div className="flex items-center gap-3">
                                            <div className="size-12 shrink-0 overflow-hidden rounded-md bg-gray-100">
                                                {post.thumbnail ? (
                                                    <img src={post.thumbnail} alt="" className="size-full object-cover" />
                                                ) : null}
                                            </div>
                                            <div className="min-w-0">
                                                <p className="max-w-md truncate font-medium text-gray-900">
                                                    {post.title}
                                                </p>
                                                <p className="max-w-md truncate text-xs text-gray-400">
                                                    {post.short_description}
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-5 py-3">
                                        <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-600">
                                            {TYPE_LABELS[post.type] ?? post.type}
                                        </span>
                                    </td>
                                    <td className="px-5 py-3 text-gray-500">
                                        {post.date ? new Date(post.date).toLocaleDateString('en-GB', {
                                            day: '2-digit',
                                            month: 'short',
                                            year: 'numeric',
                                        }) : '—'}
                                    </td>
                                    <td className="px-5 py-3">
                                        <StatusPill status={post.status} />
                                    </td>
                                    <td className="px-5 py-3">
                                        <div className="flex justify-end gap-1.5">
                                            <Button variant="outline" size="sm" onClick={() => toggle(post.id)}>
                                                {post.status ? 'Unpublish' : 'Publish'}
                                            </Button>
                                            <Button variant="outline" size="sm" asChild>
                                                <Link href={`/admin/blogs/${post.id}/edit`}>
                                                    <Pencil size={14} />
                                                </Link>
                                            </Button>
                                            <Button variant="destructive" size="sm" onClick={() => remove(post.id)}>
                                                <Trash2 size={14} />
                                            </Button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </Card>
            )}
        </>
    );
}

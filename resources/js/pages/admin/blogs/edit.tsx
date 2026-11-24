import {
    Card,
    ImageField,
    PageHeader,
    SelectField,
    TextAreaField,
    TextField,
    ToggleField,
} from '@/components/admin/fields';
import { Button } from '@/components/ui/button';
import { Link, useForm } from '@inertiajs/react';
import { ArrowLeft, Loader2 } from 'lucide-react';
import { FormEvent } from 'react';

export default function BlogEdit({ post }: { post: any }) {
    const { data, setData, post: submitForm, put, processing, errors } = useForm({
        type: post?.type ?? 'blog',
        title: post?.title ?? '',
        thumbnail: post?.thumbnail ?? '',
        short_description: post?.short_description ?? '',
        description: post?.description ?? '',
        date: post?.date ? String(post.date).slice(0, 10) : new Date().toISOString().slice(0, 10),
        order: post?.order ?? 1,
        status: post ? !!post.status : true,
    });

    const submit = (e: FormEvent) => {
        e.preventDefault();
        if (post) {
            put(`/admin/blogs/${post.id}`);
        } else {
            submitForm('/admin/blogs');
        }
    };

    return (
        <>
            <PageHeader
                title={post ? 'Edit post' : 'New post'}
                description="Long description accepts HTML (p, h2, ul, li, strong…)."
                actions={
                    <Button variant="outline" asChild>
                        <Link href="/admin/blogs">
                            <ArrowLeft size={15} /> Back
                        </Link>
                    </Button>
                }
            />

            <Card className="max-w-3xl p-6">
                <form onSubmit={submit} className="space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                        <TextField
                            label="Title"
                            required
                            value={data.title}
                            onChange={(e) => setData('title', e.target.value)}
                            error={errors.title}
                        />
                        <SelectField
                            label="Type"
                            required
                            value={data.type}
                            onChange={(e) => setData('type', e.target.value)}
                            options={[
                                { value: 'blog', label: 'Blog' },
                                { value: 'news', label: 'News' },
                                { value: 'press-release', label: 'Press Release' },
                            ]}
                        />
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                        <TextField
                            label="Date"
                            type="date"
                            required
                            value={data.date}
                            onChange={(e) => setData('date', e.target.value)}
                            error={errors.date}
                        />
                        <TextField
                            label="Order"
                            type="number"
                            min={0}
                            required
                            value={data.order}
                            onChange={(e) => setData('order', Number(e.target.value))}
                        />
                    </div>

                    <ImageField
                        label="Thumbnail"
                        value={data.thumbnail}
                        onChange={(v) => setData('thumbnail', v)}
                        error={errors.thumbnail}
                        hint="Shown on the listing cards (16:9 works best)."
                    />

                    <TextAreaField
                        label="Short description"
                        hint="Preview text on listing cards (line-clamped to 2 lines)."
                        value={data.short_description}
                        onChange={(e) => setData('short_description', e.target.value)}
                        rows={3}
                    />

                    <TextAreaField
                        label="Full content (HTML)"
                        value={data.description}
                        onChange={(e) => setData('description', e.target.value)}
                        rows={12}
                        className="[&_textarea]:font-mono [&_textarea]:text-xs"
                    />

                    <ToggleField
                        label="Published"
                        checked={data.status}
                        onChange={(v) => setData('status', v)}
                    />

                    <div className="flex gap-3 border-t border-gray-100 pt-5">
                        <Button type="submit" disabled={processing}>
                            {processing && <Loader2 className="size-4 animate-spin" />}
                            {post ? 'Save changes' : 'Create post'}
                        </Button>
                        <Button type="button" variant="outline" asChild>
                            <Link href="/admin/blogs">Cancel</Link>
                        </Button>
                    </div>
                </form>
            </Card>
        </>
    );
}

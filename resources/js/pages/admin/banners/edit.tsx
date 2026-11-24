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

export default function BannerEdit({ banner }: { banner: any }) {
    const { data, setData, post, put, processing, errors } = useForm({
        title: banner?.title ?? '',
        highlight: banner?.highlight ?? '',
        highlight_class: banner?.highlight_class ?? 'text-accent',
        description: banner?.description ?? '',
        image: banner?.image ?? '',
        button_text: banner?.button_text ?? '',
        button_link: banner?.button_link ?? '',
        order: banner?.order ?? 1,
        status: banner ? !!banner.status : true,
    });

    const submit = (e: FormEvent) => {
        e.preventDefault();
        if (banner) {
            put(`/admin/banners/${banner.id}`);
        } else {
            post('/admin/banners');
        }
    };

    return (
        <>
            <PageHeader
                title={banner ? 'Edit banner' : 'New banner'}
                description="Title highlight colours one word inside the heading."
                actions={
                    <Button variant="outline" asChild>
                        <Link href="/admin/banners">
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
                            placeholder="Powering India's Green Transition"
                        />
                        <div className="grid grid-cols-2 gap-3">
                            <TextField
                                label="Highlighted word"
                                value={data.highlight}
                                onChange={(e) => setData('highlight', e.target.value)}
                                error={errors.highlight}
                                placeholder="Green"
                                hint="Exact word in the title"
                            />
                            <SelectField
                                label="Highlight colour"
                                value={data.highlight_class}
                                onChange={(e) => setData('highlight_class', e.target.value)}
                                options={[
                                    { value: 'text-accent', label: 'Accent (green)' },
                                    { value: 'text-primary', label: 'Primary' },
                                    { value: 'text-accent-foreground', label: 'Accent foreground' },
                                ]}
                            />
                        </div>
                    </div>

                    <TextAreaField
                        label="Description"
                        value={data.description}
                        onChange={(e) => setData('description', e.target.value)}
                        error={errors.description}
                        rows={3}
                    />

                    <ImageField
                        label="Slide image"
                        value={data.image}
                        onChange={(v) => setData('image', v)}
                        error={errors.image}
                        hint="Recommended size 1920×1080. External URLs are also accepted."
                    />

                    <div className="grid gap-5 sm:grid-cols-2">
                        <TextField
                            label="Button text"
                            value={data.button_text}
                            onChange={(e) => setData('button_text', e.target.value)}
                            placeholder="Explore"
                        />
                        <TextField
                            label="Button link"
                            value={data.button_link}
                            onChange={(e) => setData('button_link', e.target.value)}
                            placeholder="/projects or https://..."
                        />
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                        <TextField
                            label="Order"
                            type="number"
                            min={0}
                            required
                            value={data.order}
                            onChange={(e) => setData('order', Number(e.target.value))}
                            error={errors.order}
                        />
                        <div className="flex items-end pb-1">
                            <ToggleField
                                label="Visible on site"
                                checked={data.status}
                                onChange={(v) => setData('status', v)}
                            />
                        </div>
                    </div>

                    <div className="flex gap-3 border-t border-gray-100 pt-5">
                        <Button type="submit" disabled={processing}>
                            {processing && <Loader2 className="size-4 animate-spin" />}
                            {banner ? 'Save changes' : 'Create banner'}
                        </Button>
                        <Button type="button" variant="outline" asChild>
                            <Link href="/admin/banners">Cancel</Link>
                        </Button>
                    </div>
                </form>
            </Card>
        </>
    );
}

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

export default function EventEdit({ event }: { event: any }) {
    const { data, setData, post: create, put, processing, errors } = useForm({
        title: event?.title ?? '',
        description: event?.description ?? '',
        date: event?.date ?? '',
        time: event?.time ?? '',
        location: event?.location ?? '',
        category: event?.category ?? '',
        image: event?.image ?? '',
        price: event?.price ?? '',
        badge: event?.badge ?? 'Upcoming',
        order: event?.order ?? 1,
        status: event ? !!event.status : true,
    });

    const submit = (e: FormEvent) => {
        e.preventDefault();
        if (event) {
            put(`/admin/events/${event.id}`);
        } else {
            create('/admin/events');
        }
    };

    return (
        <>
            <PageHeader
                title={event ? 'Edit event' : 'New event'}
                description="Date and time are display strings — write them exactly as they should appear."
                actions={
                    <Button variant="outline" asChild>
                        <Link href="/admin/events">
                            <ArrowLeft size={15} /> Back
                        </Link>
                    </Button>
                }
            />

            <Card className="max-w-3xl p-6">
                <form onSubmit={submit} className="space-y-5">
                    <TextField
                        label="Title"
                        required
                        value={data.title}
                        onChange={(e) => setData('title', e.target.value)}
                        error={errors.title}
                    />

                    <TextAreaField
                        label="Description"
                        value={data.description}
                        onChange={(e) => setData('description', e.target.value)}
                        rows={3}
                    />

                    <div className="grid gap-5 sm:grid-cols-2">
                        <TextField
                            label="Date"
                            value={data.date}
                            onChange={(e) => setData('date', e.target.value)}
                            placeholder="November 15, 2026"
                        />
                        <TextField
                            label="Time"
                            value={data.time}
                            onChange={(e) => setData('time', e.target.value)}
                            placeholder="9:00 AM - 5:00 PM"
                        />
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                        <TextField
                            label="Location"
                            value={data.location}
                            onChange={(e) => setData('location', e.target.value)}
                            placeholder="India, New Delhi"
                        />
                        <TextField
                            label="Category"
                            value={data.category}
                            onChange={(e) => setData('category', e.target.value)}
                            placeholder="Grid Technology"
                        />
                    </div>

                    <div className="grid gap-5 sm:grid-cols-3">
                        <TextField
                            label="Price"
                            value={data.price}
                            onChange={(e) => setData('price', e.target.value)}
                            placeholder="Free / $149"
                        />
                        <SelectField
                            label="Badge"
                            value={data.badge}
                            onChange={(e) => setData('badge', e.target.value)}
                            options={[
                                { value: 'Upcoming', label: 'Upcoming' },
                                { value: 'Free', label: 'Free' },
                                { value: 'Sold Out', label: 'Sold Out' },
                            ]}
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
                        label="Image"
                        value={data.image}
                        onChange={(v) => setData('image', v)}
                        error={errors.image}
                    />

                    <ToggleField
                        label="Visible on site"
                        checked={data.status}
                        onChange={(v) => setData('status', v)}
                    />

                    <div className="flex gap-3 border-t border-gray-100 pt-5">
                        <Button type="submit" disabled={processing}>
                            {processing && <Loader2 className="size-4 animate-spin" />}
                            {event ? 'Save changes' : 'Create event'}
                        </Button>
                        <Button type="button" variant="outline" asChild>
                            <Link href="/admin/events">Cancel</Link>
                        </Button>
                    </div>
                </form>
            </Card>
        </>
    );
}

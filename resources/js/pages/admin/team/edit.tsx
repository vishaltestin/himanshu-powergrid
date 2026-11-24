import {
    Card,
    ImageField,
    PageHeader,
    RepeaterField,
    SelectField,
    TextAreaField,
    TextField,
    ToggleField,
} from '@/components/admin/fields';
import { Button } from '@/components/ui/button';
import { Link, useForm } from '@inertiajs/react';
import { ArrowLeft, Loader2 } from 'lucide-react';
import { FormEvent } from 'react';

export default function TeamEdit({ member }: { member: any }) {
    const { data, setData, post, put, processing, errors } = useForm({
        group: member?.group ?? 'board',
        name: member?.name ?? '',
        designation: member?.designation ?? '',
        image: member?.image ?? '',
        description: member?.description ?? '',
        paragraphs: member?.paragraphs ?? [],
        highlights: member?.highlights ?? [],
        order: member?.order ?? 1,
        status: member ? !!member.status : true,
    });

    const submit = (e: FormEvent) => {
        e.preventDefault();
        if (member) {
            put(`/admin/team-members/${member.id}`);
        } else {
            post('/admin/team-members');
        }
    };

    return (
        <>
            <PageHeader
                title={member ? 'Edit team member' : 'New team member'}
                description="Bio paragraphs and highlight tiles appear in the “Read more” dialog."
                actions={
                    <Button variant="outline" asChild>
                        <Link href="/admin/team-members">
                            <ArrowLeft size={15} /> Back
                        </Link>
                    </Button>
                }
            />

            <Card className="max-w-3xl p-6">
                <form onSubmit={submit} className="space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                        <SelectField
                            label="Group"
                            required
                            value={data.group}
                            onChange={(e) => setData('group', e.target.value)}
                            options={[
                                { value: 'board', label: 'Board of Directors' },
                                { value: 'leadership', label: 'Senior Leadership' },
                            ]}
                        />
                        <TextField
                            label="Name"
                            required
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            error={errors.name}
                            placeholder="Mr. Arun Sharma"
                        />
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                        <TextField
                            label="Designation"
                            value={data.designation}
                            onChange={(e) => setData('designation', e.target.value)}
                            placeholder="CEO of CubeGrid Advisors Pvt Ltd"
                        />
                        <TextField
                            label="Order"
                            type="number"
                            min={0}
                            required
                            value={data.order}
                            onChange={(e) => setData('order', Number(e.target.value))}
                            error={errors.order}
                        />
                    </div>

                    <ImageField
                        label="Photo"
                        value={data.image}
                        onChange={(v) => setData('image', v)}
                        error={errors.image}
                        hint="Portrait photos work best (cropped top-aligned on the site)."
                    />

                    <TextAreaField
                        label="Short description"
                        hint="Shown on the card; ends with “…” before Read more."
                        value={data.description}
                        onChange={(e) => setData('description', e.target.value)}
                        rows={4}
                    />

                    <RepeaterField
                        label="Bio paragraphs"
                        hint="Full text shown inside the Read more dialog."
                        stringMode
                        items={data.paragraphs}
                        onChange={(v) => setData('paragraphs', v)}
                        addLabel="Add paragraph"
                    />

                    <RepeaterField
                        label="Highlight tiles"
                        hint="Optional stat tiles next to the bio (e.g. 40+ / Years Experience)."
                        columns={[
                            { key: 'value', label: 'Value', placeholder: '40+' },
                            { key: 'label', label: 'Label', placeholder: 'Years Experience' },
                        ]}
                        items={data.highlights}
                        onChange={(v) => setData('highlights', v)}
                        addLabel="Add highlight"
                    />

                    <ToggleField
                        label="Visible on site"
                        checked={data.status}
                        onChange={(v) => setData('status', v)}
                    />

                    <div className="flex gap-3 border-t border-gray-100 pt-5">
                        <Button type="submit" disabled={processing}>
                            {processing && <Loader2 className="size-4 animate-spin" />}
                            {member ? 'Save changes' : 'Create member'}
                        </Button>
                        <Button type="button" variant="outline" asChild>
                            <Link href="/admin/team-members">Cancel</Link>
                        </Button>
                    </div>
                </form>
            </Card>
        </>
    );
}

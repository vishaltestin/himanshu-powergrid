import {
    Card,
    FieldShell,
    ImageField,
    PageHeader,
    RepeaterField,
    RichTextField,
    TextAreaField,
    TextField,
} from '@/components/admin/fields';
import { getPageSchema, FieldSpec } from '@/admin/schemas';
import { Button } from '@/components/ui/button';
import { Link, useForm } from '@inertiajs/react';
import { ArrowLeft, Loader2 } from 'lucide-react';
import { FormEvent } from 'react';

function FieldRenderer({
    spec,
    value,
    error,
    onChange,
}: {
    spec: FieldSpec;
    value: any;
    error?: string;
    onChange: (v: any) => void;
}) {
    switch (spec.type) {
        case 'text':
            return (
                <TextField
                    label={spec.label}
                    hint={spec.hint}
                    placeholder={spec.placeholder}
                    value={value ?? ''}
                    error={error}
                    onChange={(e) => onChange(e.target.value)}
                />
            );
        case 'html':
            return (
                <RichTextField
                    label={spec.label}
                    hint={spec.hint}
                    value={value ?? ''}
                    error={error}
                    placeholder={spec.placeholder}
                    onChange={onChange}
                />
            );
        case 'textarea':
            return (
                <TextAreaField
                    label={spec.label}
                    hint={spec.hint}
                    placeholder={spec.placeholder}
                    value={value ?? ''}
                    error={error}
                    rows={4}
                    onChange={(e) => onChange(e.target.value)}
                />
            );
        case 'image':
            return (
                <ImageField
                    label={spec.label}
                    hint={spec.hint}
                    value={value ?? ''}
                    error={error}
                    onChange={onChange}
                />
            );
        case 'number':
            return (
                <TextField
                    label={spec.label}
                    hint={spec.hint}
                    type="number"
                    value={value ?? ''}
                    error={error}
                    onChange={(e) => onChange(Number(e.target.value))}
                />
            );
        case 'select':
            return (
                <div>
                    <label className="mb-1.5 block text-sm font-medium text-gray-700">
                        {spec.label}
                    </label>
                    <select
                        value={value ?? ''}
                        onChange={(e) => onChange(e.target.value)}
                        className="w-full cursor-pointer appearance-none rounded-md border border-gray-300 bg-white px-3.5 py-2.5 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
                    >
                        {(spec.options ?? []).map((o) => (
                            <option key={o.value} value={o.value}>
                                {o.label}
                            </option>
                        ))}
                    </select>
                    {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
                </div>
            );
        case 'list':
            return (
                <RepeaterField
                    label={spec.label}
                    hint={spec.hint}
                    columns={spec.columns}
                    stringMode={spec.stringMode}
                    items={Array.isArray(value) ? value : []}
                    onChange={onChange}
                    addLabel={`Add ${spec.label.toLowerCase()}`}
                />
            );
        case 'object':
            return (
                <FieldShell label={spec.label} hint={spec.hint} error={error}>
                    <div className="space-y-3 rounded-md border border-gray-200 bg-gray-50/50 p-3">
                        {(spec.fields ?? []).map((child) => (
                            <FieldRenderer
                                key={child.key}
                                spec={child}
                                value={value?.[child.key]}
                                onChange={(v) => onChange({ ...(value ?? {}), [child.key]: v })}
                            />
                        ))}
                    </div>
                </FieldShell>
            );
        default:
            return null;
    }
}

export default function PageEdit({
    page,
    content,
    updatedAt,
}: {
    page: string;
    content: Record<string, any>;
    updatedAt?: string;
}) {
    const schema = getPageSchema(page);
    const { data, setData, put, processing, errors } = useForm<Record<string, any>>({
        content: content ?? {},
    });

    const setValue = (key: string, value: any) => {
        setData('content', { ...(data.content ?? {}), [key]: value });
    };

    const submit = (e: FormEvent) => {
        e.preventDefault();
        put(`/admin/pages/${page}`);
    };

    if (!schema) {
        return (
            <>
                <PageHeader title="Page not found" />
                <Card className="p-8 text-center text-gray-500">
                    No editor is registered for “{page}”.
                    <div className="mt-4">
                        <Button asChild>
                            <Link href="/admin/pages">Back to pages</Link>
                        </Button>
                    </div>
                </Card>
            </>
        );
    }

    return (
        <>
            <PageHeader
                title={schema.title}
                description={`${schema.description}${updatedAt ? ` · Last saved ${updatedAt}` : ''}`}
                actions={
                    <Button variant="outline" asChild>
                        <Link href="/admin/pages">
                            <ArrowLeft size={15} /> All pages
                        </Link>
                    </Button>
                }
            />

            <form onSubmit={submit} className="max-w-4xl space-y-6 pb-24">
                {schema.sections.map((section, i) => (
                    <Card key={i} className="overflow-hidden p-6" >
                        <div id={`section-${i}`} />
                        {section.title && (
                            <h2 className="mb-5 flex items-center gap-2 border-b border-gray-100 pb-3 text-sm font-semibold tracking-wide text-gray-500 uppercase">
                                <span className="flex size-6 items-center justify-center rounded-md bg-slate-950 text-[11px] font-bold text-accent">
                                    {i + 1}
                                </span>
                                {section.title}
                            </h2>
                        )}
                        <div className="space-y-5">
                            {section.fields.map((field) => (
                                <FieldRenderer
                                    key={field.key}
                                    spec={field}
                                    value={data.content?.[field.key]}
                                    error={(errors as any)?.[`content.${field.key}`]}
                                    onChange={(v) => setValue(field.key, v)}
                                />
                            ))}
                        </div>
                    </Card>
                ))}

                {/* Sticky save bar */}
                <div className="fixed inset-x-0 bottom-0 z-40 border-t border-gray-200 bg-white/95 backdrop-blur lg:pl-60">
                    <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-3.5">
                        <p className="text-sm text-gray-500">
                            Changes go live the moment you save — the design never moves.
                        </p>
                        <div className="flex gap-3">
                            <Button type="button" variant="outline" asChild>
                                <Link href="/admin/pages">Cancel</Link>
                            </Button>
                            <Button type="submit" disabled={processing}>
                                {processing && <Loader2 className="size-4 animate-spin" />}
                                Save changes
                            </Button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}

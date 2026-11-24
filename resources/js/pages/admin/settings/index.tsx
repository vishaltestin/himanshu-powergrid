import {
    Card,
    ImageField,
    PageHeader,
    RepeaterField,
    TextAreaField,
    TextField,
} from '@/components/admin/fields';
import { SETTING_SPECS } from '@/admin/schemas';
import { Button } from '@/components/ui/button';
import { useForm } from '@inertiajs/react';
import { Loader2 } from 'lucide-react';
import { FormEvent } from 'react';
import { toast } from 'sonner';

interface SettingRow {
    key: string;
    value: string | null;
    group: string;
    type: string;
}


/* ------------------------------------------------------------------ */
/* Structured editors (no raw JSON)                                    */
/* ------------------------------------------------------------------ */

function LinkGroupsField({ value, onChange }: { value: string; onChange: (v: string) => void }) {
    let groups: any[] = [];
    try {
        groups = value ? JSON.parse(value) : [];
    } catch {
        groups = [];
    }
    const safe = Array.isArray(groups) ? groups : [];
    const g0 = safe[0] ?? { title: 'Quick Links', links: [] };
    const g1 = safe[1] ?? { title: 'Resources', links: [] };

    const emit = (a: any, b: any) => onChange(JSON.stringify([a, b]));

    return (
        <div className="space-y-4">
            {[0, 1].map((idx) => {
                const g = idx === 0 ? g0 : g1;
                const set = (patch: any) => {
                    const next = [g0, g1].map((x, i) => (i === idx ? { ...x, ...patch } : x));
                    emit(next[0], next[1]);
                };
                return (
                    <div key={idx} className="rounded-md border border-gray-200 bg-gray-50/50 p-3">
                        <TextField
                            label={`Column ${idx + 1} title`}
                            value={g?.title ?? ''}
                            placeholder={idx === 0 ? 'Quick Links' : 'Resources'}
                            onChange={(e) => set({ title: e.target.value })}
                        />
                        <div className="mt-3">
                            <RepeaterField
                                label="Links"
                                columns={[
                                    { key: 'title', label: 'Label', placeholder: 'Home' },
                                    { key: 'href', label: 'URL', placeholder: '/' },
                                ]}
                                items={Array.isArray(g?.links) ? g.links : []}
                                onChange={(links) => set({ links })}
                                addLabel="Add link"
                            />
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

function SocialLinksField({ value, onChange }: { value: string; onChange: (v: string) => void }) {
    let items: any[] = [];
    try {
        items = value ? JSON.parse(value) : [];
    } catch {
        items = [];
    }
    const safe = Array.isArray(items) ? items : [];

    const emit = (next: any[]) =>
        onChange(
            JSON.stringify(
                next.map((s) => ({
                    key: (s.label ?? '').trim().toLowerCase(),
                    label: s.label ?? '',
                    url: s.url ?? '',
                })),
            ),
        );

    return (
        <RepeaterField
            label="Social links"
            hint="Use labels: Facebook, Twitter, LinkedIn, YouTube (label decides the icon)."
            columns={[
                { key: 'label', label: 'Network', placeholder: 'LinkedIn' },
                { key: 'url', label: 'URL', placeholder: 'https://linkedin.com/company/...' },
            ]}
            items={safe}
            onChange={emit}
            addLabel="Add social link"
        />
    );
}

function InvestorSectionField({ value, onChange }: { value: string; onChange: (v: string) => void }) {
    let obj: any = {};
    try {
        obj = value ? JSON.parse(value) : {};
    } catch {
        obj = {};
    }
    const o = obj && typeof obj === 'object' && !Array.isArray(obj) ? obj : {};
    const set = (patch: any) => onChange(JSON.stringify({ ...o, ...patch }));

    return (
        <div className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
                <TextField
                    label="Small label"
                    value={o.label ?? ''}
                    placeholder="Our Investors"
                    onChange={(e) => set({ label: e.target.value })}
                />
                <TextField
                    label="Heading"
                    value={o.title ?? ''}
                    placeholder="Backed by global infrastructure capital"
                    onChange={(e) => set({ title: e.target.value })}
                />
            </div>
            <TextField
                label="Subheading"
                value={o.subtitle ?? ''}
                onChange={(e) => set({ subtitle: e.target.value })}
            />
            <TextAreaField
                label="Description"
                rows={3}
                value={o.description ?? ''}
                onChange={(e) => set({ description: e.target.value })}
            />
            <ImageField label="Image" value={o.image ?? ''} onChange={(v) => set({ image: v })} />
            <RepeaterField
                label="Stats"
                columns={[
                    { key: 'value', label: 'Value', placeholder: '3' },
                    { key: 'label', label: 'Caption', placeholder: 'GW under construction' },
                ]}
                items={Array.isArray(o.stats) ? o.stats : []}
                onChange={(stats) => set({ stats })}
                addLabel="Add stat"
            />
        </div>
    );
}

export default function SettingsIndex({ settings }: { settings: SettingRow[] }) {
    const existing = Object.fromEntries(settings.map((s) => [s.key, s]));

    const initialValues = SETTING_SPECS.map((spec) => ({
        key: spec.key,
        value: existing[spec.key]?.value ?? '',
        group: spec.group.toLowerCase(),
        type: spec.type,
    }));

    const { data, setData, put, processing, errors } = useForm({ settings: initialValues });

    const setValue = (key: string, value: string) => {
        setData(
            'settings',
            data.settings.map((s) => (s.key === key ? { ...s, value } : s)),
        );
    };

    const getValue = (key: string) => data.settings.find((s) => s.key === key)?.value ?? '';

    const submit = (e: FormEvent) => {
        e.preventDefault();
        put('/admin/settings', {
            onSuccess: () => toast.success('Settings saved.'),
        });
    };

    const groups = [...new Set(SETTING_SPECS.map((s) => s.group))];

    const renderInput = (spec: (typeof SETTING_SPECS)[number]) => {
        const error = (errors as any)?.[`settings.${initialValues.findIndex((s) => s.key === spec.key)}.value`];

        switch (spec.type) {
            case 'textarea':
                return (
                    <TextAreaField
                        key={spec.key}
                        label={spec.label}
                        hint={spec.hint}
                        value={getValue(spec.key)}
                        onChange={(e) => setValue(spec.key, e.target.value)}
                        error={error}
                        rows={3}
                    />
                );
            case 'image':
                return (
                    <ImageField
                        key={spec.key}
                        label={spec.label}
                        hint={spec.hint}
                        value={getValue(spec.key)}
                        onChange={(v) => setValue(spec.key, v)}
                        error={error}
                    />
                );
            case 'linkgroups':
                return (
                    <div key={spec.key}>
                        <LinkGroupsField
                            value={getValue(spec.key)}
                            onChange={(v) => setValue(spec.key, v)}
                        />
                    </div>
                );
            case 'social':
                return (
                    <div key={spec.key}>
                        <SocialLinksField
                            value={getValue(spec.key)}
                            onChange={(v) => setValue(spec.key, v)}
                        />
                    </div>
                );
            case 'investor':
                return (
                    <div key={spec.key}>
                        <InvestorSectionField
                            value={getValue(spec.key)}
                            onChange={(v) => setValue(spec.key, v)}
                        />
                    </div>
                );
            case 'json':
                return (
                    <div key={spec.key}>
                        <TextAreaField
                            label={spec.label}
                            hint={spec.hint}
                            value={getValue(spec.key)}
                            onChange={(e) => setValue(spec.key, e.target.value)}
                            error={error}
                            rows={8}
                            className="[& textarea]:font-mono [& textarea]:text-xs"
                        />
                        <JsonPreviewHint value={getValue(spec.key)} />
                    </div>
                );
            default:
                return (
                    <TextField
                        key={spec.key}
                        label={spec.label}
                        hint={spec.hint}
                        value={getValue(spec.key)}
                        onChange={(e) => setValue(spec.key, e.target.value)}
                        error={error}
                    />
                );
        }
    };

    return (
        <>
            <PageHeader
                title="Settings"
                description="Site-wide details used in the header, footer and contact blocks."
            />

            <form onSubmit={submit} className="max-w-3xl space-y-6">
                {groups.map((group) => (
                    <Card key={group} className="p-6">
                        <h2 className="mb-4 border-b border-gray-100 pb-3 text-sm font-semibold tracking-wide text-gray-500 uppercase">
                            {group}
                        </h2>
                        <div className="space-y-5">
                            {SETTING_SPECS.filter((s) => s.group === group).map(renderInput)}
                        </div>
                    </Card>
                ))}

                <div className="flex gap-3">
                    <Button type="submit" disabled={processing}>
                        {processing && <Loader2 className="size-4 animate-spin" />}
                        Save settings
                    </Button>
                </div>
            </form>
        </>
    );
}

function JsonPreviewHint({ value }: { value: string }) {
    if (!value) return null;
    try {
        JSON.parse(value);
        return <p className="mt-1 text-xs text-emerald-600">✓ Valid JSON</p>;
    } catch {
        return <p className="mt-1 text-xs text-red-500">✗ Invalid JSON — fix before saving</p>;
    }
}

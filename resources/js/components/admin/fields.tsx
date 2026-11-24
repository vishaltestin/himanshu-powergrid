import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import axios from 'axios';
import { ArrowDown, ArrowUp, Loader2, Trash2, Upload } from 'lucide-react';
import { ChangeEvent, useRef, useState } from 'react';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';

/* ------------------------------------------------------------------ */
/* Basic fields                                                        */
/* ------------------------------------------------------------------ */

export function FieldShell({
    label,
    hint,
    error,
    required,
    children,
    className,
}: {
    label?: string;
    hint?: string;
    error?: string;
    required?: boolean;
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div className={className}>
            {label && (
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                    {label}
                    {required && <span className="ml-0.5 text-red-500">*</span>}
                </label>
            )}
            {children}
            {hint && !error && <p className="mt-1 text-xs text-gray-400">{hint}</p>}
            {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
        </div>
    );
}

const inputClass =
    'w-full rounded-md border border-gray-300 bg-white px-3.5 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 outline-none transition-shadow focus:border-accent focus:ring-2 focus:ring-accent/20';

export function TextField({
    label,
    hint,
    error,
    required,
    className,
    ...props
}: React.InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
    hint?: string;
    error?: string;
}) {
    return (
        <FieldShell label={label} hint={hint} error={error} required={required} className={className}>
            <input {...props} className={cn(inputClass, props.type === 'hidden' && 'hidden')} />
        </FieldShell>
    );
}

export function TextAreaField({
    label,
    hint,
    error,
    required,
    className,
    rows = 4,
    ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    label?: string;
    hint?: string;
    error?: string;
}) {
    return (
        <FieldShell label={label} hint={hint} error={error} required={required} className={className}>
            <textarea rows={rows} {...props} className={cn(inputClass, 'resize-y')} />
        </FieldShell>
    );
}

export function SelectField({
    label,
    hint,
    error,
    required,
    className,
    options,
    ...props
}: React.SelectHTMLAttributes<HTMLSelectElement> & {
    label?: string;
    hint?: string;
    error?: string;
    options: { value: string | number; label: string }[];
}) {
    return (
        <FieldShell label={label} hint={hint} error={error} required={required} className={className}>
            <select {...props} className={cn(inputClass, 'cursor-pointer appearance-none')}>
                {options.map((o) => (
                    <option key={o.value} value={o.value}>
                        {o.label}
                    </option>
                ))}
            </select>
        </FieldShell>
    );
}

export function ToggleField({
    label,
    checked,
    onChange,
    hint,
}: {
    label: string;
    checked: boolean;
    onChange: (v: boolean) => void;
    hint?: string;
}) {
    return (
        <FieldShell label={label} hint={hint}>
            <button
                type="button"
                role="switch"
                aria-checked={checked}
                onClick={() => onChange(!checked)}
                className={cn(
                    'relative inline-flex h-6 w-11 items-center rounded-full transition-colors',
                    checked ? 'bg-accent' : 'bg-gray-300',
                )}
            >
                <span
                    className={cn(
                        'inline-block size-4 transform rounded-full bg-white shadow transition-transform',
                        checked ? 'translate-x-6' : 'translate-x-1',
                    )}
                />
            </button>
        </FieldShell>
    );
}

/* ------------------------------------------------------------------ */
/* Rich text editor (Quill WYSIWYG) — stores clean HTML                */
/* ------------------------------------------------------------------ */

const richModules = {
    toolbar: [
        [{ header: [2, 3, 4, false] }],
        ['bold', 'italic', 'underline'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        ['link'],
        ['clean'],
    ],
};

const richFormats = ['header', 'bold', 'italic', 'underline', 'list', 'bullet', 'link'];

export function RichTextField({
    label,
    hint,
    value,
    onChange,
    error,
    placeholder,
}: {
    label?: string;
    hint?: string;
    value: string;
    onChange: (v: string) => void;
    error?: string;
    placeholder?: string;
}) {
    return (
        <FieldShell label={label} hint={hint} error={error}>
            <div className="rich-editor overflow-hidden rounded-md border border-gray-300 bg-white transition-shadow focus-within:border-accent focus-within:ring-2 focus-within:ring-accent/20">
                <ReactQuill
                    theme="snow"
                    value={value ?? ''}
                    onChange={(v: string) => onChange(v === '<p><br></p>' ? '' : v)}
                    modules={richModules}
                    formats={richFormats as any}
                    placeholder={placeholder || 'Type here — leave empty to keep the current website text'}
                />
            </div>
        </FieldShell>
    );
}

/* ------------------------------------------------------------------ */
/* Image field: preview + upload + URL paste                           */
/* ------------------------------------------------------------------ */

export function ImageField({
    label,
    value,
    onChange,
    error,
    hint,
    accept = 'image/*',
}: {
    label?: string;
    value: string;
    onChange: (v: string) => void;
    error?: string;
    hint?: string;
    accept?: string;
}) {
    const fileRef = useRef<HTMLInputElement>(null);
    const [uploading, setUploading] = useState(false);
    const [dragOver, setDragOver] = useState(false);

    const upload = async (file: File) => {
        setUploading(true);
        try {
            const form = new FormData();
            form.append('file', file);
            const { data } = await axios.post('/admin/media', form, {
                headers: { Accept: 'application/json' },
            });
            onChange(data.url);
        } catch (err: any) {
            const message =
                err?.response?.data?.errors?.file?.[0] ||
                err?.response?.data?.message ||
                'Upload failed. Please try again.';
            alert(message);
        } finally {
            setUploading(false);
        }
    };

    const onPick = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) upload(file);
        e.target.value = '';
    };

    return (
        <FieldShell label={label} hint={hint} error={error}>
            <div className="space-y-2">
                <div
                    onDragOver={(e) => {
                        e.preventDefault();
                        setDragOver(true);
                    }}
                    onDragLeave={() => setDragOver(false)}
                    onDrop={(e) => {
                        e.preventDefault();
                        setDragOver(false);
                        const file = e.dataTransfer.files?.[0];
                        if (file) upload(file);
                    }}
                    className={cn(
                        'relative flex min-h-32 items-center justify-center overflow-hidden rounded-md border-2 border-dashed border-gray-300 bg-gray-50 transition-colors',
                        dragOver && 'border-accent bg-accent/5',
                    )}
                >
                    {value ? (
                        <img src={value} alt="" className="max-h-48 w-full object-contain p-2" />
                    ) : (
                        <div className="py-6 text-center text-sm text-gray-400">
                            {uploading ? (
                                <Loader2 className="mx-auto mb-2 size-5 animate-spin" />
                            ) : (
                                <Upload className="mx-auto mb-2 size-5" />
                            )}
                            Drag &amp; drop an image, or{' '}
                            <button
                                type="button"
                                className="font-medium text-accent underline"
                                onClick={() => fileRef.current?.click()}
                            >
                                browse
                            </button>
                        </div>
                    )}
                    {uploading && (
                        <div className="absolute inset-0 flex items-center justify-center bg-white/70">
                            <Loader2 className="size-6 animate-spin text-accent" />
                        </div>
                    )}
                </div>

                <div className="flex gap-2">
                    <input
                        type="text"
                        value={value || ''}
                        onChange={(e) => onChange(e.target.value)}
                        placeholder="Paste image URL or upload"
                        className={cn(inputClass, 'flex-1')}
                    />
                    <Button type="button" variant="outline" onClick={() => fileRef.current?.click()} disabled={uploading}>
                        Upload
                    </Button>
                    {value && (
                        <Button type="button" variant="ghost" onClick={() => onChange('')} title="Clear">
                            <Trash2 size={15} />
                        </Button>
                    )}
                </div>

                <input ref={fileRef} type="file" accept={accept} className="hidden" onChange={onPick} />
            </div>
        </FieldShell>
    );
}

/* ------------------------------------------------------------------ */
/* Repeater: edit a list of objects (or plain strings)                 */
/* ------------------------------------------------------------------ */

export interface RepeaterColumn {
    key: string;
    label: string;
    type?: 'text' | 'textarea';
    placeholder?: string;
}

export function RepeaterField({
    label,
    hint,
    columns,
    items,
    onChange,
    addLabel = 'Add item',
    stringMode = false,
}: {
    label?: string;
    hint?: string;
    columns?: RepeaterColumn[];
    items: any[];
    onChange: (items: any[]) => void;
    addLabel?: string;
    stringMode?: boolean;
}) {
    const list = items ?? [];

    const update = (index: number, patch: any) => {
        const next = list.map((item, i) => (i === index ? (stringMode ? patch : { ...item, ...patch }) : item));
        onChange(next);
    };

    const move = (index: number, dir: -1 | 1) => {
        const target = index + dir;
        if (target < 0 || target >= list.length) return;
        const next = [...list];
        [next[index], next[target]] = [next[target], next[index]];
        onChange(next);
    };

    return (
        <FieldShell label={label} hint={hint}>
            <div className="space-y-3">
                {list.length === 0 && (
                    <p className="rounded-md border border-dashed border-gray-300 px-3 py-4 text-center text-sm text-gray-400">
                        No items yet.
                    </p>
                )}

                {list.map((item, index) => (
                    <div key={index} className="rounded-md border border-gray-200 bg-white p-3">
                        <div className="mb-2 flex items-center justify-between">
                            <span className="text-xs font-semibold tracking-wide text-gray-400 uppercase">
                                {stringMode ? `Item ${index + 1}` : `#${index + 1}`}
                            </span>
                            <div className="flex gap-1">
                                <button
                                    type="button"
                                    onClick={() => move(index, -1)}
                                    className="rounded p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-700"
                                    title="Move up"
                                >
                                    <ArrowUp size={14} />
                                </button>
                                <button
                                    type="button"
                                    onClick={() => move(index, 1)}
                                    className="rounded p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-700"
                                    title="Move down"
                                >
                                    <ArrowDown size={14} />
                                </button>
                                <button
                                    type="button"
                                    onClick={() => onChange(list.filter((_, i) => i !== index))}
                                    className="rounded p-1 text-gray-400 hover:bg-red-50 hover:text-red-600"
                                    title="Remove"
                                >
                                    <Trash2 size={14} />
                                </button>
                            </div>
                        </div>

                        {stringMode ? (
                            <textarea
                                rows={3}
                                value={item ?? ''}
                                onChange={(e) => update(index, e.target.value)}
                                className={cn(inputClass, 'resize-y')}
                            />
                        ) : (
                            <div className="grid gap-3 sm:grid-cols-2">
                                {(columns ?? []).map((col) => (
                                    <div key={col.key} className={col.type === 'textarea' ? 'sm:col-span-2' : ''}>
                                        <label className="mb-1 block text-xs font-medium text-gray-500">
                                            {col.label}
                                        </label>
                                        {col.type === 'textarea' ? (
                                            <textarea
                                                rows={3}
                                                value={item?.[col.key] ?? ''}
                                                placeholder={col.placeholder}
                                                onChange={(e) => update(index, { [col.key]: e.target.value })}
                                                className={cn(inputClass, 'resize-y')}
                                            />
                                        ) : (
                                            <input
                                                type="text"
                                                value={item?.[col.key] ?? ''}
                                                placeholder={col.placeholder}
                                                onChange={(e) => update(index, { [col.key]: e.target.value })}
                                                className={inputClass}
                                            />
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}

                <Button type="button" variant="outline" size="sm" onClick={() => {
                    if (stringMode) {
                        onChange([...list, '']);
                    } else {
                        const blank: Record<string, string> = {};
                        (columns ?? []).forEach((c) => (blank[c.key] = ''));
                        onChange([...list, blank]);
                    }
                }}>
                    + {addLabel}
                </Button>
            </div>
        </FieldShell>
    );
}

/* ------------------------------------------------------------------ */
/* Page header used by all admin screens                               */
/* ------------------------------------------------------------------ */

export function PageHeader({
    title,
    description,
    actions,
}: {
    title: string;
    description?: string;
    actions?: React.ReactNode;
}) {
    return (
        <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
            <div>
                <h1 className="text-2xl font-semibold tracking-tight text-gray-900">{title}</h1>
                {description && <p className="mt-1 text-sm text-gray-500">{description}</p>}
            </div>
            {actions && <div className="flex flex-wrap items-center gap-2">{actions}</div>}
        </div>
    );
}

export function Card({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div className={cn('rounded-xl border border-gray-200 bg-white shadow-sm', className)}>
            {children}
        </div>
    );
}

export function StatusPill({ status }: { status: boolean | string }) {
    const active = status === true || status === 'active' || status === 'read';
    const isNew = status === 'new';
    return (
        <span
            className={cn(
                'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
                isNew
                    ? 'bg-blue-50 text-blue-600 ring-1 ring-blue-200'
                    : active
                      ? 'bg-emerald-50 text-emerald-600 ring-1 ring-emerald-200'
                      : 'bg-gray-100 text-gray-500 ring-1 ring-gray-200',
            )}
        >
            {isNew ? 'New' : active ? 'Active' : status === 'archived' ? 'Archived' : 'Inactive'}
        </span>
    );
}

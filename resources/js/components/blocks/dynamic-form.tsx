import { cn } from '@/lib/utils';
import axios from 'axios';
import { ArrowRight, ChevronDown, CloudUpload } from 'lucide-react';
import { FormEvent, useEffect, useMemo, useRef, useState } from 'react';
import { toast } from 'sonner';

export type FormFieldDef = {
    label?: string;
    name?: string;
    type?: 'text' | 'email' | 'tel' | 'number' | 'textarea' | 'select' | 'file';
    width?: 'full' | 'half';
    placeholder?: string;
    required?: boolean;
    options?: string[];
};

type Props = {
    sectionId: number;
    data: Record<string, any>;
    labelStyle?: 'above' | 'hidden';
    buttonClassName?: string;
    buttonAlign?: 'start' | 'center';
};

/** Fires a prefill for a form field (used by the jobs list "Apply" buttons). */
export function prefillForm(field: string, value: string) {
    window.dispatchEvent(new CustomEvent('cg:form-prefill', { detail: { field, value } }));
}

const inputClass =
    'w-full rounded-md bg-gray-100 px-4 py-3.5 text-gray-900 placeholder:text-gray-500 ring-1 ring-gray-200 transition-shadow focus:ring-2 focus:ring-accent focus:outline-none';

export default function DynamicForm({ sectionId, data, labelStyle = 'above', buttonClassName, buttonAlign = 'start' }: Props) {
    const fields: FormFieldDef[] = useMemo(() => (Array.isArray(data.fields) ? data.fields.filter((f: FormFieldDef) => f?.name) : []), [data.fields]);
    const empty = useMemo(() => Object.fromEntries(fields.filter((f) => f.type !== 'file').map((f) => [f.name!, ''])), [fields]);

    const [values, setValues] = useState<Record<string, string>>(empty);
    const [files, setFiles] = useState<Record<string, File | null>>({});
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [sending, setSending] = useState(false);
    const fileRefs = useRef<Record<string, HTMLInputElement | null>>({});

    useEffect(() => {
        const onPrefill = (e: Event) => {
            const { field, value } = (e as CustomEvent).detail || {};
            if (field && fields.some((f) => f.name === field)) setValues((v) => ({ ...v, [field]: value }));
        };
        window.addEventListener('cg:form-prefill', onPrefill);
        return () => window.removeEventListener('cg:form-prefill', onPrefill);
    }, [fields]);

    const submit = async (e: FormEvent) => {
        e.preventDefault();
        setSending(true);
        setErrors({});
        const body = new FormData();
        body.append('section_id', String(sectionId));
        Object.entries(values).forEach(([k, v]) => body.append(k, v ?? ''));
        Object.entries(files).forEach(([k, f]) => f && body.append(k, f));

        try {
            const res = await axios.post('/form-submissions', body, { headers: { Accept: 'application/json' } });
            toast.success(res.data?.message || data.success_message);
            setValues(empty);
            setFiles({});
        } catch (err: any) {
            const bag = err?.response?.data?.errors;
            if (bag) {
                setErrors(Object.fromEntries(Object.entries(bag).map(([k, v]: any) => [k, Array.isArray(v) ? v[0] : String(v)])));
                toast.error(err.response.data.message || data.error_message);
            } else {
                toast.error(data.error_message || 'Something went wrong. Please try again.');
            }
        } finally {
            setSending(false);
        }
    };

    const renderInput = (f: FormFieldDef) => {
        const name = f.name!;
        const common = {
            id: `f-${sectionId}-${name}`,
            name,
            required: !!f.required,
            placeholder: f.placeholder || (labelStyle === 'hidden' ? f.label : undefined),
            'aria-label': f.label,
        };
        const set = (e: any) => setValues((v) => ({ ...v, [name]: e.target.value }));

        switch (f.type) {
            case 'textarea':
                return <textarea {...common} rows={5} value={values[name] ?? ''} onChange={set} className={cn(inputClass, 'resize-y')} />;
            case 'select':
                return (
                    <div className="relative">
                        <select {...common} value={values[name] ?? ''} onChange={set} className={cn(inputClass, 'cursor-pointer appearance-none pr-10 text-gray-800')}>
                            <option value="" disabled>
                                {f.placeholder || f.label}
                            </option>
                            {(f.options || []).map((o) => (
                                <option key={o} value={o}>
                                    {o}
                                </option>
                            ))}
                        </select>
                        <ChevronDown className="pointer-events-none absolute top-1/2 right-4 h-4 w-4 -translate-y-1/2 text-gray-800" />
                    </div>
                );
            case 'file':
                return (
                    <>
                        <input
                            ref={(el) => {
                                fileRefs.current[name] = el;
                            }}
                            type="file"
                            name={name}
                            accept=".pdf,.doc,.docx"
                            className="hidden"
                            onChange={(e) => setFiles((s) => ({ ...s, [name]: e.target.files?.[0] ?? null }))}
                        />
                        <div
                            role="button"
                            tabIndex={0}
                            onClick={() => fileRefs.current[name]?.click()}
                            onKeyDown={(e) => e.key === 'Enter' && fileRefs.current[name]?.click()}
                            onDragOver={(e) => e.preventDefault()}
                            onDrop={(e) => {
                                e.preventDefault();
                                const file = e.dataTransfer.files?.[0];
                                if (file) setFiles((s) => ({ ...s, [name]: file }));
                            }}
                            className="flex w-full cursor-pointer flex-col items-center justify-center rounded-md bg-primary/10 px-6 py-8.5 transition-all hover:bg-accent/30"
                        >
                            <CloudUpload className="mb-2 h-10 w-10 stroke-[2.2] text-slate-900" />
                            <p className="mb-1 text-base font-semibold text-slate-900">{files[name]?.name || data.upload_text}</p>
                            <p className="mb-0 text-xs text-slate-500">{data.upload_hint}</p>
                        </div>
                    </>
                );
            default:
                return <input {...common} type={f.type || 'text'} value={values[name] ?? ''} onChange={set} className={inputClass} />;
        }
    };

    return (
        <form className="space-y-5" onSubmit={submit} encType="multipart/form-data" noValidate={false}>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {fields.map((f) => (
                    <div key={f.name} className={cn(f.width === 'half' ? 'sm:col-span-1' : 'sm:col-span-2')}>
                        {labelStyle === 'above' && f.label && (
                            <label htmlFor={`f-${sectionId}-${f.name}`} className="mb-2 block text-sm font-medium text-gray-800">
                                {f.label}
                                {f.required && <span className="text-red-500"> *</span>}
                            </label>
                        )}
                        {renderInput(f)}
                        {errors[f.name!] && <p className="mt-1 mb-0 text-sm text-red-600">{errors[f.name!]}</p>}
                    </div>
                ))}
            </div>
            <div className={cn('flex pt-2', buttonAlign === 'center' && 'justify-center')}>
                <button
                    type="submit"
                    disabled={sending}
                    className={cn(
                        'mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-3.5 font-semibold text-white transition-colors duration-300 hover:bg-primary/90 disabled:opacity-60 sm:w-auto',
                        buttonClassName,
                    )}
                >
                    {sending ? data.sending_text || '…' : data.submit_text || 'Submit'}
                    <ArrowRight className="h-4 w-4" />
                </button>
            </div>
        </form>
    );
}

import { PageHeader } from '@/components/admin/fields';
import { Button } from '@/components/ui/button';
import { router } from '@inertiajs/react';
import { Copy, Loader2, Trash2, Upload } from 'lucide-react';
import { ChangeEvent, useRef, useState } from 'react';
import { toast } from 'sonner';

interface MediaFile {
    name: string;
    url: string;
    size: number;
    modified: string;
}

function formatSize(bytes: number) {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export default function MediaIndex({ files }: { files: MediaFile[] }) {
    const fileRef = useRef<HTMLInputElement>(null);
    const [dragOver, setDragOver] = useState(false);
    const [uploading, setUploading] = useState(false);

    const uploadDirect = async (file: File) => {
        setUploading(true);
        const form = new FormData();
        form.append('file', file);
        try {
            const axios = (await import('axios')).default;
            await axios.post('/admin/media', form, { headers: { Accept: 'application/json' } });
            toast.success('File uploaded.');
            router.reload({ only: [] });
        } catch (err: any) {
            toast.error(err?.response?.data?.errors?.file?.[0] || 'Upload failed.');
        } finally {
            setUploading(false);
        }
    };

    const onPick = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) uploadDirect(file);
        e.target.value = '';
    };

    const copy = async (url: string) => {
        try {
            await navigator.clipboard.writeText(url);
            toast.success('URL copied to clipboard.');
        } catch {
            toast.error('Could not copy — select the URL manually.');
        }
    };

    const remove = (file: MediaFile) => {
        if (confirm(`Delete ${file.name}?`)) {
            router.delete('/admin/media', {
                data: { url: file.url },
                preserveScroll: true,
                onSuccess: () => toast.success('File deleted.'),
            });
        }
    };

    return (
        <>
            <PageHeader
                title="Media Library"
                description="Upload images and files, then copy their URLs into any content field."
                actions={
                    <Button onClick={() => fileRef.current?.click()} disabled={uploading}>
                        {uploading ? <Loader2 size={15} className="animate-spin" /> : <Upload size={15} />}
                        Upload files
                    </Button>
                }
            />

            <input ref={fileRef} type="file" multiple className="hidden" onChange={onPick} />

            <div
                onDragOver={(e) => {
                    e.preventDefault();
                    setDragOver(true);
                }}
                onDragLeave={() => setDragOver(false)}
                onDrop={(e) => {
                    e.preventDefault();
                    setDragOver(false);
                    Array.from(e.dataTransfer.files).forEach((f) => uploadDirect(f));
                }}
                className={`mb-6 rounded-xl border-2 border-dashed px-6 py-8 text-center transition-colors ${
                    dragOver ? 'border-accent bg-accent/5' : 'border-gray-300 bg-white'
                }`}
            >
                <Upload className="mx-auto mb-2 size-6 text-gray-400" />
                <p className="text-sm text-gray-500">
                    Drag &amp; drop files here, or{' '}
                    <button
                        type="button"
                        className="font-medium text-accent underline"
                        onClick={() => fileRef.current?.click()}
                    >
                        browse
                    </button>
                </p>
                <p className="mt-1 text-xs text-gray-400">
                    Images, SVG, video and PDF up to 20 MB
                </p>
            </div>

            {files.length === 0 ? (
                <p className="py-12 text-center text-gray-400">No uploaded files yet.</p>
            ) : (
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
                    {files.map((file) => (
                        <div
                            key={file.url}
                            className="group overflow-hidden rounded-xl border border-gray-200 bg-white"
                        >
                            <div className="relative aspect-square bg-gray-100">
                                <img
                                    src={file.url}
                                    alt={file.name}
                                    className="size-full object-cover"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).style.display = 'none';
                                    }}
                                />
                                <div className="absolute inset-0 flex items-center justify-center gap-1 bg-black/0 opacity-0 transition-all group-hover:bg-black/40 group-hover:opacity-100">
                                    <button
                                        onClick={() => copy(file.url)}
                                        className="rounded-md bg-white/90 p-1.5 text-gray-700 hover:bg-white"
                                        title="Copy URL"
                                    >
                                        <Copy size={14} />
                                    </button>
                                    <button
                                        onClick={() => remove(file)}
                                        className="rounded-md bg-white/90 p-1.5 text-red-600 hover:bg-white"
                                        title="Delete"
                                    >
                                        <Trash2 size={14} />
                                    </button>
                                </div>
                            </div>
                            <div className="px-3 py-2">
                                <p className="truncate text-xs font-medium text-gray-700" title={file.name}>
                                    {file.name}
                                </p>
                                <p className="text-[11px] text-gray-400">
                                    {formatSize(file.size)} · {file.modified}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
}

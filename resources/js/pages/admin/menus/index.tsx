import { Card, PageHeader, SelectField, StatusPill, TextField, ToggleField } from '@/components/admin/fields';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { Link, router, useForm } from '@inertiajs/react';
import { ChevronDown, ChevronRight, Loader2, Pencil, Plus, Trash2 } from 'lucide-react';
import { FormEvent, useState } from 'react';

interface MenuRow {
    id: number;
    title: string;
    alias: string;
    menu_position: string;
    parent_id: number | null;
    order: number;
    status: boolean;
}

function MenuDialog({
    open,
    onOpenChange,
    menus,
    item,
    defaultPosition,
}: {
    open: boolean;
    onOpenChange: (v: boolean) => void;
    menus: MenuRow[];
    item: MenuRow | null;
    defaultPosition?: string;
}) {
    const { data, setData, post, put, processing, errors, reset, clearErrors } = useForm({
        title: item?.title ?? '',
        alias: item?.alias ?? '/',
        menu_position: item?.menu_position ?? defaultPosition ?? 'main',
        parent_id: item?.parent_id ? String(item.parent_id) : '',
        order: item?.order ?? 1,
        status: item ? item.status : true,
    });

    // Re-seed the form when the dialog target changes
    const [lastId, setLastId] = useState<number | null | undefined>(undefined);
    if (open && lastId !== (item?.id ?? null)) {
        setLastId(item?.id ?? null);
        reset();
        clearErrors();
        setData({
            title: item?.title ?? '',
            alias: item?.alias ?? '/',
            menu_position: item?.menu_position ?? defaultPosition ?? 'main',
            parent_id: item?.parent_id ? String(item.parent_id) : '',
            order: item?.order ?? 1,
            status: item ? item.status : true,
        });
    }

    const parents = menus.filter(
        (m) => m.parent_id === null && m.menu_position === data.menu_position,
    );

    const submit = (e: FormEvent) => {
        e.preventDefault();
        // Empty parent_id ('') is converted to null server-side by Laravel.
        const done = () => {
            onOpenChange(false);
            reset();
        };
        if (item) {
            put(`/admin/menus/${item.id}`, { onSuccess: done });
        } else {
            post('/admin/menus', { onSuccess: done });
        }
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-lg">
                <DialogHeader>
                    <DialogTitle>{item ? 'Edit menu item' : 'New menu item'}</DialogTitle>
                    <DialogDescription>
                        Links point at paths like /about-us, full URLs, or # for dropdown-only parents.
                    </DialogDescription>
                </DialogHeader>

                <form onSubmit={submit} className="space-y-4 pt-2">
                    <div className="grid gap-4 sm:grid-cols-2">
                        <TextField
                            label="Title"
                            required
                            value={data.title}
                            onChange={(e) => setData('title', e.target.value)}
                            error={errors.title}
                        />
                        <TextField
                            label="Link (href)"
                            required
                            value={data.alias}
                            onChange={(e) => setData('alias', e.target.value)}
                            error={errors.alias}
                            placeholder="/about-us"
                        />
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                        <SelectField
                            label="Position"
                            value={data.menu_position}
                            onChange={(e) => setData('menu_position', e.target.value)}
                            options={[
                                { value: 'main', label: 'Main navigation' },
                                { value: 'footer', label: 'Footer' },
                            ]}
                        />
                        <SelectField
                            label="Parent"
                            value={data.parent_id}
                            onChange={(e) => setData('parent_id', e.target.value)}
                            options={[
                                { value: '', label: '— Top level —' },
                                ...parents
                                    .filter((p) => p.id !== item?.id)
                                    .map((p) => ({ value: String(p.id), label: p.title })),
                            ]}
                        />
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
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
                                label="Visible"
                                checked={data.status}
                                onChange={(v) => setData('status', v)}
                            />
                        </div>
                    </div>

                    <div className="flex justify-end gap-2 border-t border-gray-100 pt-4">
                        <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
                            Cancel
                        </Button>
                        <Button type="submit" disabled={processing}>
                            {processing && <Loader2 className="size-4 animate-spin" />}
                            Save
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
}

export default function MenuIndex({ menus }: { menus: MenuRow[] }) {
    const [dialogOpen, setDialogOpen] = useState(false);
    const [editing, setEditing] = useState<MenuRow | null>(null);
    const [defaultPosition, setDefaultPosition] = useState<string | undefined>(undefined);
    const [expanded, setExpanded] = useState<Record<number, boolean>>({});

    const openCreate = (position?: string) => {
        setEditing(null);
        setDefaultPosition(position);
        setDialogOpen(true);
    };

    const openEdit = (item: MenuRow) => {
        setEditing(item);
        setDefaultPosition(undefined);
        setDialogOpen(true);
    };

    const toggle = (id: number) => router.post(`/admin/menus/${id}/toggle-status`, {}, { preserveScroll: true });

    const remove = (item: MenuRow) => {
        const message = item.parent_id
            ? `Delete “${item.title}”?`
            : `Delete “${item.title}” and all of its sub-items?`;
        if (confirm(message)) router.delete(`/admin/menus/${item.id}`, { preserveScroll: true });
    };

    const positions = [
        { key: 'main', label: 'Main navigation' },
        { key: 'footer', label: 'Footer' },
    ];

    return (
        <>
            <PageHeader
                title="Menus"
                description="The main navigation bar is rendered from these items."
                actions={
                    <Button onClick={() => openCreate('main')}>
                        <Plus size={15} /> New menu item
                    </Button>
                }
            />

            {positions.map((pos) => {
                const roots = menus
                    .filter((m) => m.menu_position === pos.key && m.parent_id === null)
                    .sort((a, b) => a.order - b.order);

                return (
                    <div key={pos.key} className="mb-8">
                        <div className="mb-3 flex items-center justify-between">
                            <h2 className="text-sm font-semibold tracking-wide text-gray-500 uppercase">
                                {pos.label}
                            </h2>
                            <Button variant="outline" size="sm" onClick={() => openCreate(pos.key)}>
                                <Plus size={13} /> Add
                            </Button>
                        </div>

                        <Card className="divide-y divide-gray-50">
                            {roots.length === 0 && (
                                <p className="px-5 py-6 text-center text-sm text-gray-400">
                                    No items yet.
                                </p>
                            )}

                            {roots.map((root) => {
                                const children = menus
                                    .filter((m) => m.parent_id === root.id)
                                    .sort((a, b) => a.order - b.order);
                                const isOpen = expanded[root.id] ?? children.length > 0;

                                return (
                                    <div key={root.id}>
                                        <div className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50/70">
                                            {children.length > 0 ? (
                                                <button
                                                    onClick={() =>
                                                        setExpanded((s) => ({ ...s, [root.id]: !isOpen }))
                                                    }
                                                    className="text-gray-400 hover:text-gray-600"
                                                >
                                                    {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                                                </button>
                                            ) : (
                                                <span className="w-4" />
                                            )}

                                            <span className="flex-1 font-medium text-gray-800">
                                                {root.title}
                                            </span>
                                            <code className="hidden rounded bg-gray-100 px-2 py-0.5 text-xs text-gray-500 sm:block">
                                                {root.alias}
                                            </code>
                                            <StatusPill status={root.status} />

                                            <div className="flex gap-1.5">
                                                <Button variant="ghost" size="sm" onClick={() => toggle(root.id)}>
                                                    {root.status ? 'Hide' : 'Show'}
                                                </Button>
                                                <Button variant="ghost" size="sm" onClick={() => openEdit(root)}>
                                                    <Pencil size={14} />
                                                </Button>
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    onClick={() => remove(root)}
                                                    className="text-red-500 hover:text-red-600"
                                                >
                                                    <Trash2 size={14} />
                                                </Button>
                                            </div>
                                        </div>

                                        {isOpen &&
                                            children.map((child) => (
                                                <div
                                                    key={child.id}
                                                    className="flex items-center gap-3 border-t border-gray-50 bg-gray-50/40 py-2.5 pr-4 pl-10"
                                                >
                                                    <span className="flex-1 text-sm text-gray-600">
                                                        {child.title}
                                                    </span>
                                                    <code className="hidden rounded bg-white px-2 py-0.5 text-xs text-gray-400 ring-1 ring-gray-200 sm:block">
                                                        {child.alias}
                                                    </code>
                                                    <StatusPill status={child.status} />
                                                    <div className="flex gap-1.5">
                                                        <Button variant="ghost" size="sm" onClick={() => toggle(child.id)}>
                                                            {child.status ? 'Hide' : 'Show'}
                                                        </Button>
                                                        <Button variant="ghost" size="sm" onClick={() => openEdit(child)}>
                                                            <Pencil size={14} />
                                                        </Button>
                                                        <Button
                                                            variant="ghost"
                                                            size="sm"
                                                            onClick={() => remove(child)}
                                                            className="text-red-500 hover:text-red-600"
                                                        >
                                                            <Trash2 size={14} />
                                                        </Button>
                                                    </div>
                                                </div>
                                            ))}
                                    </div>
                                );
                            })}
                        </Card>
                    </div>
                );
            })}

            <MenuDialog
                open={dialogOpen}
                onOpenChange={setDialogOpen}
                menus={menus}
                item={editing}
                defaultPosition={defaultPosition}
            />
        </>
    );
}

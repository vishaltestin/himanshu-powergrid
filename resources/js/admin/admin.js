/**
 * Admin panel behaviour (Blade + Alpine.js).
 *
 *  - Rich text editors (Quill) for [data-richtext]
 *  - Repeaters: add / remove / duplicate / collapse / drag-sort rows
 *  - Media fields: upload, pick from library, clear, live preview
 *  - Drag & drop ordering for lists ([data-sortable-url])
 *  - Slug auto-generation, confirm dialogs, unsaved-change guard
 */
import Alpine from 'alpinejs';
import Sortable from 'sortablejs';
import Quill from 'quill';

const csrf = () => document.querySelector('meta[name="csrf-token"]')?.content ?? '';

async function request(url, { method = 'GET', body, json = true } = {}) {
    const headers = { 'X-CSRF-TOKEN': csrf(), Accept: 'application/json', 'X-Requested-With': 'XMLHttpRequest' };
    if (json && body && !(body instanceof FormData)) {
        headers['Content-Type'] = 'application/json';
        body = JSON.stringify(body);
    }
    const res = await fetch(url, { method, headers, body, credentials: 'same-origin' });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
        const first = data?.errors ? Object.values(data.errors)[0] : null;
        throw new Error((Array.isArray(first) ? first[0] : null) || data?.message || 'Request failed');
    }
    return data;
}

/* ───────────────────────── Toasts ───────────────────────── */

window.toast = (message, type = 'success') => {
    window.dispatchEvent(new CustomEvent('toast', { detail: { message, type } }));
};

/* ───────────────────────── Rich text ───────────────────────── */

function initRichText(root = document) {
    root.querySelectorAll('[data-richtext]:not([data-ready])').forEach((wrap) => {
        // Never initialise editors inside <template> rows
        if (wrap.closest('template')) return;
        wrap.dataset.ready = '1';

        const input = wrap.querySelector('input[type="hidden"], textarea');
        const holder = wrap.querySelector('[data-editor]');
        const quill = new Quill(holder, {
            theme: 'snow',
            placeholder: wrap.dataset.placeholder || 'Write here…',
            modules: {
                toolbar: [
                    [{ header: [2, 3, 4, false] }],
                    ['bold', 'italic', 'underline', 'link'],
                    [{ list: 'ordered' }, { list: 'bullet' }],
                    ['blockquote', 'clean'],
                ],
            },
        });

        if (input.value) {
            quill.clipboard.dangerouslyPasteHTML(input.value);
        }

        quill.on('text-change', () => {
            const html = quill.root.innerHTML;
            input.value = html === '<p><br></p>' ? '' : html;
            input.dispatchEvent(new Event('input', { bubbles: true }));
        });
    });
}

/* ───────────────────────── Repeaters ───────────────────────── */

let uid = 0;
const nextIndex = () => `n${Date.now().toString(36)}${(uid++).toString(36)}`;

function initSortables(root = document) {
    root.querySelectorAll('[data-repeater-rows]:not([data-sortable-ready])').forEach((list) => {
        if (list.closest('template')) return;
        list.dataset.sortableReady = '1';
        Sortable.create(list, {
            handle: '[data-drag-handle]',
            animation: 150,
            draggable: ':scope > [data-repeater-row]',
            onEnd: () => {
                markDirty(list);
                renumber(list);
            },
        });
    });

    root.querySelectorAll('[data-sortable-url]:not([data-sortable-ready])').forEach((list) => {
        list.dataset.sortableReady = '1';
        Sortable.create(list, {
            handle: '[data-drag-handle]',
            animation: 150,
            onEnd: async () => {
                const ids = [...list.querySelectorAll(':scope > [data-id]')].map((el) => el.dataset.id);
                try {
                    await request(list.dataset.sortableUrl, { method: 'POST', body: { ids } });
                    window.toast('Order saved');
                } catch (e) {
                    window.toast(e.message, 'error');
                }
            },
        });
    });
}

function renumber(list) {
    [...list.querySelectorAll(':scope > [data-repeater-row]')].forEach((row, i) => {
        const n = row.querySelector(':scope > div [data-row-number]');
        if (n) n.textContent = i + 1;
    });
}

function refreshRowTitle(row) {
    const source = row.querySelector('[data-row-title-source]');
    const target = row.querySelector('[data-row-title]');
    if (!target) return;
    const text = source ? (source.value || '').trim() : '';
    target.textContent = text || target.dataset.placeholder || 'Item';
}

function initAll(root = document) {
    initRichText(root);
    initSortables(root);
    root.querySelectorAll?.('[data-repeater-row]').forEach(refreshRowTitle);
}

document.addEventListener('click', (e) => {
    const add = e.target.closest('[data-repeater-add]');
    if (add) {
        e.preventDefault();
        const repeater = add.closest('[data-repeater]');
        const tpl = repeater.querySelector(':scope > template');
        const list = repeater.querySelector(':scope > [data-repeater-rows]');
        const html = tpl.innerHTML.replaceAll(tpl.dataset.placeholder, nextIndex());
        const wrapper = document.createElement('div');
        wrapper.innerHTML = html.trim();
        const row = wrapper.firstElementChild;
        list.appendChild(row);
        initAll(row);
        renumber(list);
        repeater.querySelector(':scope > [data-repeater-empty]')?.classList.add('hidden');
        row.querySelector('input:not([type=hidden]), textarea, select')?.focus();
        markDirty(list);
        return;
    }

    const remove = e.target.closest('[data-repeater-remove]');
    if (remove) {
        e.preventDefault();
        if (!confirm('Remove this item?')) return;
        const row = remove.closest('[data-repeater-row]');
        const list = row.parentElement;
        row.remove();
        renumber(list);
        markDirty(list);
        return;
    }

    const dup = e.target.closest('[data-repeater-duplicate]');
    if (dup) {
        e.preventDefault();
        const row = dup.closest('[data-repeater-row]');
        const list = row.parentElement;
        const repeater = list.closest('[data-repeater]');
        const tpl = repeater.querySelector(':scope > template');
        // Re-create from the template, then copy values across by field suffix
        const html = tpl.innerHTML.replaceAll(tpl.dataset.placeholder, nextIndex());
        const wrapper = document.createElement('div');
        wrapper.innerHTML = html.trim();
        const clone = wrapper.firstElementChild;
        const src = [...row.querySelectorAll('[name]')];
        const dst = [...clone.querySelectorAll('[name]')];
        dst.forEach((el, i) => {
            const from = src[i];
            if (!from) return;
            if (el.type === 'checkbox') el.checked = from.checked;
            else el.value = from.value;
        });
        row.after(clone);
        initAll(clone);
        clone.querySelectorAll('[data-media-field]').forEach(updateMediaPreview);
        renumber(list);
        markDirty(list);
        return;
    }

    const toggle = e.target.closest('[data-repeater-toggle]');
    if (toggle) {
        e.preventDefault();
        const row = toggle.closest('[data-repeater-row]');
        row.querySelector(':scope > [data-row-body]').classList.toggle('hidden');
        toggle.querySelector('svg')?.classList.toggle('-rotate-90');
        return;
    }

    const collapseAll = e.target.closest('[data-repeater-collapse-all]');
    if (collapseAll) {
        e.preventDefault();
        const repeater = collapseAll.closest('[data-repeater]');
        const bodies = repeater.querySelectorAll(':scope > [data-repeater-rows] > [data-repeater-row] > [data-row-body]');
        const shouldHide = [...bodies].some((b) => !b.classList.contains('hidden'));
        bodies.forEach((b) => b.classList.toggle('hidden', shouldHide));
    }
});

document.addEventListener('input', (e) => {
    if (e.target.matches('[data-row-title-source]')) {
        refreshRowTitle(e.target.closest('[data-repeater-row]'));
    }
    if (e.target.closest('[data-media-field]') && e.target.matches('[data-media-input]')) {
        updateMediaPreview(e.target.closest('[data-media-field]'));
    }
});

/* ───────────────────────── Media fields ───────────────────────── */

const isImage = (url) => /\.(png|jpe?g|gif|webp|avif|svg)(\?.*)?$/i.test(url) || /images\.(pexels|unsplash)|img\./i.test(url);
const isVideo = (url) => /\.(mp4|webm|mov)(\?.*)?$/i.test(url);

function updateMediaPreview(field) {
    const input = field.querySelector('[data-media-input]');
    const preview = field.querySelector('[data-media-preview]');
    if (!preview) return;
    const url = (input.value || '').trim();
    if (!url) {
        preview.innerHTML = '<span class="text-[11px] text-slate-400">No file</span>';
        return;
    }
    if (isImage(url)) {
        preview.innerHTML = `<img src="${url}" class="h-full w-full object-cover" alt="">`;
    } else if (isVideo(url)) {
        preview.innerHTML = `<video src="${url}" class="h-full w-full object-cover" muted></video>`;
    } else {
        const ext = url.split('.').pop().split('?')[0].toUpperCase().slice(0, 4);
        preview.innerHTML = `<span class="text-xs font-semibold text-slate-500">${ext}</span>`;
    }
}

async function uploadFile(file, uploadUrl) {
    const fd = new FormData();
    fd.append('file', file);
    return request(uploadUrl, { method: 'POST', body: fd });
}

document.addEventListener('change', async (e) => {
    const fileInput = e.target.closest('[data-media-upload]');
    if (!fileInput || !fileInput.files?.length) return;
    const field = fileInput.closest('[data-media-field]');
    const input = field.querySelector('[data-media-input]');
    const label = field.querySelector('[data-upload-label]');
    const original = label?.textContent;
    if (label) label.textContent = 'Uploading…';
    try {
        const data = await uploadFile(fileInput.files[0], window.adminConfig.mediaUploadUrl);
        input.value = data.url;
        input.dispatchEvent(new Event('input', { bubbles: true }));
        window.toast('File uploaded');
    } catch (err) {
        window.toast(err.message, 'error');
    } finally {
        if (label) label.textContent = original;
        fileInput.value = '';
    }
});

document.addEventListener('click', (e) => {
    const pick = e.target.closest('[data-media-pick]');
    if (pick) {
        e.preventDefault();
        const field = pick.closest('[data-media-field]');
        const input = field.querySelector('[data-media-input]');
        window.dispatchEvent(new CustomEvent('media-picker:open', {
            detail: {
                accept: field.dataset.accept || 'image',
                onSelect: (url) => {
                    input.value = url;
                    input.dispatchEvent(new Event('input', { bubbles: true }));
                },
            },
        }));
        return;
    }

    const clear = e.target.closest('[data-media-clear]');
    if (clear) {
        e.preventDefault();
        const field = clear.closest('[data-media-field]');
        const input = field.querySelector('[data-media-input]');
        input.value = '';
        input.dispatchEvent(new Event('input', { bubbles: true }));
    }
});

/* Alpine component for the shared media picker modal */
document.addEventListener('alpine:init', () => {
    Alpine.data('mediaPicker', () => ({
        open: false,
        loading: false,
        uploading: false,
        files: [],
        search: '',
        accept: 'image',
        onSelect: null,
        async show({ accept, onSelect }) {
            this.accept = accept || 'image';
            this.onSelect = onSelect;
            this.open = true;
            await this.load();
        },
        async load() {
            this.loading = true;
            try {
                const data = await request(window.adminConfig.mediaListUrl);
                this.files = data.files || [];
            } catch (e) {
                window.toast(e.message, 'error');
            } finally {
                this.loading = false;
            }
        },
        get filtered() {
            const q = this.search.toLowerCase();
            return this.files.filter((f) => {
                if (q && !f.name.toLowerCase().includes(q) && !f.url.toLowerCase().includes(q)) return false;
                if (this.accept === 'image') return f.kind === 'image';
                return true;
            });
        },
        choose(file) {
            this.onSelect?.(file.url);
            this.open = false;
        },
        async upload(event) {
            const file = event.target.files?.[0];
            if (!file) return;
            this.uploading = true;
            try {
                const data = await uploadFile(file, window.adminConfig.mediaUploadUrl);
                await this.load();
                this.choose({ url: data.url });
            } catch (e) {
                window.toast(e.message, 'error');
            } finally {
                this.uploading = false;
                event.target.value = '';
            }
        },
    }));

    Alpine.data('toaster', () => ({
        items: [],
        add({ message, type }) {
            const id = Date.now() + Math.random();
            this.items.push({ id, message, type });
            setTimeout(() => this.remove(id), type === 'error' ? 6000 : 3000);
        },
        remove(id) {
            this.items = this.items.filter((t) => t.id !== id);
        },
    }));

    Alpine.data('slugField', (initial = '', locked = false) => ({
        slug: initial,
        touched: !!initial || locked,
        fromTitle(title) {
            if (this.touched) return;
            this.slug = slugify(title);
        },
    }));
});

function slugify(text) {
    return (text || '')
        .toString()
        .toLowerCase()
        .normalize('NFKD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9/]+/g, '-')
        .replace(/\/+/g, '/')
        .replace(/(^[-/]+|[-/]+$)/g, '');
}
window.slugify = slugify;

/* ───────────────────────── Confirm + dirty guard ───────────────────────── */

document.addEventListener('submit', (e) => {
    const form = e.target;
    if (form.dataset.confirm && !confirm(form.dataset.confirm)) {
        e.preventDefault();
        return;
    }
    if (form.hasAttribute('data-dirty-guard')) {
        form.dataset.submitting = '1';
    }
});

function markDirty(el) {
    const form = el.closest?.('form[data-dirty-guard]');
    if (form) form.dataset.dirty = '1';
}

document.addEventListener('input', (e) => markDirty(e.target));
document.addEventListener('change', (e) => markDirty(e.target));

window.addEventListener('beforeunload', (e) => {
    const dirty = document.querySelector('form[data-dirty-guard][data-dirty="1"]:not([data-submitting="1"])');
    if (dirty) {
        e.preventDefault();
        e.returnValue = '';
    }
});

/* ───────────────────────── Boot ───────────────────────── */

window.Alpine = Alpine;
window.adminRequest = request;

document.addEventListener('DOMContentLoaded', () => {
    initAll(document);
    document.querySelectorAll('[data-media-field]').forEach(updateMediaPreview);
});

Alpine.start();

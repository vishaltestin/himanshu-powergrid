<div x-data="mediaPicker" x-cloak @media-picker:open.window="show($event.detail)" @keydown.escape.window="open = false">
    <div x-show="open" x-transition.opacity class="fixed inset-0 z-[90] bg-slate-900/60" @click="open = false"></div>
    <div x-show="open" x-transition class="fixed inset-4 z-[95] mx-auto flex max-w-5xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl sm:inset-10">
        <div class="flex items-center gap-3 border-b border-slate-200 px-5 py-4">
            <h3 class="flex-1 text-base font-semibold">Media library</h3>
            <div class="relative hidden sm:block">
                <x-admin.icon name="search" class="pointer-events-none absolute top-2.5 left-3 size-4 text-slate-400"/>
                <input type="search" x-model="search" placeholder="Search files…" class="a-input w-56 pl-9">
            </div>
            <label class="a-btn-primary">
                <x-admin.icon name="upload" class="size-4"/>
                <span x-text="uploading ? 'Uploading…' : 'Upload new'"></span>
                <input type="file" class="hidden" @change="upload($event)">
            </label>
            <button type="button" class="a-icon-btn" @click="open = false"><x-admin.icon name="x"/></button>
        </div>
        <div class="flex-1 overflow-y-auto bg-slate-50 p-5">
            <p x-show="loading" class="py-10 text-center text-sm text-slate-500">Loading…</p>
            <p x-show="!loading && filtered.length === 0" class="py-10 text-center text-sm text-slate-500">No files yet — upload one to get started.</p>
            <div class="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-6">
                <template x-for="file in filtered" :key="file.url">
                    <button type="button" @click="choose(file)" class="group overflow-hidden rounded-lg bg-white text-left ring-1 ring-slate-200 hover:ring-2 hover:ring-brand-500">
                        <div class="flex aspect-square items-center justify-center overflow-hidden bg-slate-100">
                            <template x-if="file.kind === 'image'"><img :src="file.url" class="h-full w-full object-cover" loading="lazy" alt=""></template>
                            <template x-if="file.kind === 'video'"><video :src="file.url" class="h-full w-full object-cover" muted></video></template>
                            <template x-if="file.kind === 'file'"><span class="text-xs font-semibold text-slate-500" x-text="file.ext"></span></template>
                        </div>
                        <p class="truncate px-2 py-1.5 text-[11px] text-slate-600" x-text="file.name"></p>
                    </button>
                </template>
            </div>
        </div>
    </div>
</div>

@php($category = $activityCategory ?? null)
<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
    <div>
        <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Title <span class="text-red-500">*</span></label>
        <input name="title" value="{{ old('title', $category?->title) }}" required class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 dark:border-gray-700 dark:bg-gray-900 dark:text-white" />
        @error('title') <p class="mt-1 text-sm text-red-500">{{ $message }}</p> @enderror
    </div>
    <!-- <div>
        <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Slug <span class="text-red-500">*</span></label>
        <input name="slug" value="{{ old('slug', $category?->slug) }}" class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 dark:border-gray-700 dark:bg-gray-900 dark:text-white" />
        @error('slug') <p class="mt-1 text-sm text-red-500">{{ $message }}</p> @enderror
    </div> -->
    <div>
        <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Status <span class="text-red-500">*</span></label>
        <select name="status" class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 dark:border-gray-700 dark:bg-gray-900 dark:text-white">
            <option value="1" @selected(old('status', $category?->status ?? true))>Active</option>
            <option value="0" @selected(! old('status', $category?->status ?? true))>Inactive</option>
        </select>
    </div>
    <div>
        <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Guidelines PDF</label>

        <input name="pdf" type="file" accept="application/pdf" class="block w-full text-sm text-gray-500 file:mr-4 file:rounded-lg file:border-0 file:bg-blue-50 file:px-4 file:py-2.5 file:text-sm file:font-semibold file:text-blue-700 hover:file:bg-blue-100 dark:text-gray-400 dark:file:bg-gray-800 dark:file:text-gray-300" />

        @if(isset($activityCategory) && $activityCategory->pdf)
        <div class="mt-2 flex items-center gap-2">
            <span class="text-xs text-gray-500">Current: {{ basename($activityCategory->pdf) }}</span>
            <a href="{{ asset($activityCategory->pdf) }}" target="_blank" class="text-sm text-blue-600 hover:underline">Preview</a>
        </div>
        @endif

        @error('pdf')<p class="mt-1 text-sm text-red-500">{{ $message }}</p>@enderror
    </div>
    
    <!-- <div>
        <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Order</label>
        <input name="order" type="number" min="0" value="{{ old('order', $category?->order) }}" placeholder="Automatically assigned if empty" class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 dark:border-gray-700 dark:bg-gray-900 dark:text-white" />
        @error('order') <p class="mt-1 text-sm text-red-500">{{ $message }}</p> @enderror
    </div> -->
    <!-- <div class="md:col-span-2">
        <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Description</label>
        <textarea name="description" rows="5" class="w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 dark:border-gray-700 dark:bg-gray-900 dark:text-white">{{ old('description', $category?->description) }}</textarea>
        @error('description') <p class="mt-1 text-sm text-red-500">{{ $message }}</p> @enderror
    </div> -->
</div>

<!-- @push('scripts')
<script>
    document.addEventListener('DOMContentLoaded', function () {
        const titleInput = document.querySelector('input[name="title"]');
        const slugInput = document.querySelector('input[name="slug"]');

        if (titleInput && slugInput) {
            titleInput.addEventListener('keyup', function () {
                const slug = titleInput.value
                    .toLowerCase()
                    .trim()
                    .replace(/[^\w\s-]/g, '')
                    .replace(/[\s_-]+/g, '-')
                    .replace(/^-+|-+$/g, '');

                slugInput.value = slug;
            });
        }
    });
</script>
@endpush -->
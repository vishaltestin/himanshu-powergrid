<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
    <div>
        <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Grade Name <span class="text-red-500">*</span></label>
        <input name="name" value="{{ old('name', $grade?->name) }}" required placeholder="e.g., Grade 1, Kindergarten" class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm dark:border-gray-700 dark:bg-gray-900 dark:text-white focus:border-blue-500 focus:ring-blue-500" />
        @error('name')<p class="mt-1 text-sm text-red-500">{{ $message }}</p>@enderror
    </div>

    <div>
        <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Display Order <span class="text-red-500">*</span></label>
        <input type="number" min="0" name="order" value="{{ old('order', $grade?->order ?? 0) }}" required class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm dark:border-gray-700 dark:bg-gray-900 dark:text-white focus:border-blue-500 focus:ring-blue-500" />
        @error('order')<p class="mt-1 text-sm text-red-500">{{ $message }}</p>@enderror
        <p class="mt-1 text-xs text-gray-500">Lower numbers appear first in dropdowns.</p>
    </div>

    <div>
        <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Status <span class="text-red-500">*</span></label>
        <select name="status" required class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm dark:border-gray-700 dark:bg-gray-900 dark:text-white focus:border-blue-500 focus:ring-blue-500">
            <option value="active" @selected(old('status', $grade?->status) === 'active')>Active</option>
            <option value="inactive" @selected(old('status', $grade?->status) === 'inactive')>Inactive</option>
        </select>
        @error('status')<p class="mt-1 text-sm text-red-500">{{ $message }}</p>@enderror
    </div>
</div>
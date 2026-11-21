<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
    <div>
        <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Name <span class="text-red-500">*</span></label>
        <input type="text" name="name" value="{{ old('name', $testimonial->name ?? '') }}" required class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm dark:border-gray-700 dark:bg-gray-900 dark:text-white" />
        @error('name')<p class="mt-1 text-sm text-red-500">{{ $message }}</p>@enderror
    </div>

    <div>
        <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Designation (Optional)</label>
        <input type="text" name="designation" value="{{ old('designation', $testimonial->designation ?? '') }}" placeholder="e.g. Principal, Zilla Parishad School" class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm dark:border-gray-700 dark:bg-gray-900 dark:text-white" />
        @error('designation')<p class="mt-1 text-sm text-red-500">{{ $message }}</p>@enderror
    </div>

    <div>
        <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Date <span class="text-red-500">*</span></label>
        <input type="date" name="date" value="{{ old('date', isset($testimonial) ? $testimonial->date->format('Y-m-d') : date('Y-m-d')) }}" required class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm dark:border-gray-700 dark:bg-gray-900 dark:text-white" />
        @error('date')<p class="mt-1 text-sm text-red-500">{{ $message }}</p>@enderror
    </div>

    <div class="flex items-center gap-6 pt-6">
        <label class="relative inline-flex cursor-pointer items-center">
            <input type="checkbox" name="status" value="1" class="peer sr-only" @checked(old('status', $testimonial->status ?? true))>
            <div class="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
            <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Active</span>
        </label>

        <label class="relative inline-flex cursor-pointer items-center">
            <input type="checkbox" name="is_show_on_home" value="1" class="peer sr-only" @checked(old('is_show_on_home', $testimonial->is_show_on_home ?? false))>
            <div class="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-green-500 peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
            <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Show on Home Page</span>
        </label>
    </div>

    <div class="md:col-span-2">
        <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Testimonial Description <span class="text-red-500">*</span></label>
        <textarea name="testimonial" rows="5" required class="w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm dark:border-gray-700 dark:bg-gray-900 dark:text-white">{{ old('testimonial', $testimonial->testimonial ?? '') }}</textarea>
        @error('testimonial')<p class="mt-1 text-sm text-red-500">{{ $message }}</p>@enderror
    </div>
</div>
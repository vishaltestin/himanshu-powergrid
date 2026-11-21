@php($vid = $video ?? null)
<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
    <!-- Title -->
    <div>
        <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Title <span class="text-red-500">*</span></label>
        <input type="text" name="title" value="{{ old('title', $vid?->title) }}" required class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm dark:border-gray-700 dark:bg-gray-900 dark:text-white" />
        @error('title')<p class="mt-1 text-sm text-red-500">{{ $message }}</p>@enderror
    </div>

    <!-- Alias (Slug) -->
    <div>
        <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Alias (Slug) <span class="text-red-500">*</span></label>
        <input type="text" name="alias" value="{{ old('alias', $vid?->alias) }}" required class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm dark:border-gray-700 dark:bg-gray-900 dark:text-white" />
        @error('alias')<p class="mt-1 text-sm text-red-500">{{ $message }}</p>@enderror
    </div>

    <!-- Grade & Theme Filters -->
    <div>
        <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Target Grade</label>
        <select name="grade_id" class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm dark:border-gray-700 dark:bg-gray-900 dark:text-white">
            <option value="">-- Global / All Grades --</option>
            @foreach($grades as $grade)
                <option value="{{ $grade->id }}" @selected(old('grade_id', $vid?->grade_id) == $grade->id)>{{ $grade->name }}</option>
            @endforeach
        </select>
        @error('grade_id')<p class="mt-1 text-sm text-red-500">{{ $message }}</p>@enderror
    </div>

    <div>
        <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Theme / Category</label>
        <select name="category_id" class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm dark:border-gray-700 dark:bg-gray-900 dark:text-white">
            <option value="">-- Global / No Theme --</option>
            @foreach($categories as $category)
                <option value="{{ $category->id }}" @selected(old('category_id', $vid?->category_id) == $category->id)>{{ $category->title }}</option>
            @endforeach
        </select>
        @error('category_id')<p class="mt-1 text-sm text-red-500">{{ $message }}</p>@enderror
    </div>

    <!-- Links -->
    <div>
        <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">YouTube Link <span class="text-red-500">*</span></label>
        <input type="text" name="youtube_link" value="{{ old('youtube_link', $vid?->youtube_link) }}" required placeholder="https://youtube.com/..." class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm dark:border-gray-700 dark:bg-gray-900 dark:text-white" />
        @error('youtube_link')<p class="mt-1 text-sm text-red-500">{{ $message }}</p>@enderror
    </div>

    <div>
        <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">External Link (Optional)</label>
        <input type="text" name="external_link" value="{{ old('external_link', $vid?->external_link) }}" class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm dark:border-gray-700 dark:bg-gray-900 dark:text-white" />
        @error('external_link')<p class="mt-1 text-sm text-red-500">{{ $message }}</p>@enderror
    </div>

    <!-- Order and Status -->
    <div>
        <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Order</label>
        <input name="order" type="number" min="0" value="{{ old('order', $vid?->order) }}" placeholder="Automatically assigned if empty" class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm dark:border-gray-700 dark:bg-gray-900 dark:text-white" />
        @error('order')<p class="mt-1 text-sm text-red-500">{{ $message }}</p>@enderror
    </div>

    <div class="flex flex-col justify-center pt-6">
        <label class="relative inline-flex cursor-pointer items-center">
            <input type="checkbox" name="status" value="1" class="peer sr-only" @checked(old('status', $vid?->status ?? true))>
            <div class="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300"></div>
            <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Active / Visible</span>
        </label>
    </div>

    <!-- Thumbnail (LFM) -->
    <div class="md:col-span-2">
        <label for="thumbnail" class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Video Thumbnail <span class="text-red-500">*</span></label>
        <div class="flex gap-2">
            <input id="thumbnail" type="text" name="thumbnail" value="{{ old('thumbnail', $vid?->thumbnail) }}" required readonly class="h-11 w-full rounded-lg border border-gray-300 bg-gray-50 px-4 text-sm text-gray-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300" placeholder="Browse to select an image...">
            <button id="lfm-btn" type="button" class="shrink-0 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700">Browse LFM</button>
        </div>
        <div id="holder" class="mt-3">
            @if(isset($vid) && $vid->thumbnail)
                <img src="{{ $vid->thumbnail }}" class="h-20 w-auto rounded-lg border border-gray-200 object-cover shadow-sm">
            @endif
        </div>
        @error('thumbnail')<p class="mt-1 text-sm text-red-500">{{ $message }}</p>@enderror
    </div>

    <!-- Descriptions -->
    <div class="md:col-span-2">
        <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Short Description</label>
        <textarea name="short_description" rows="2" class="w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm dark:border-gray-700 dark:bg-gray-900 dark:text-white">{{ old('short_description', $vid?->short_description) }}</textarea>
    </div>

    <div class="md:col-span-2">
        <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Detailed Description</label>
        <textarea name="description" rows="5" class="w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm dark:border-gray-700 dark:bg-gray-900 dark:text-white">{{ old('description', $vid?->description) }}</textarea>
    </div>
</div>

@push('scripts')
<script>
    document.addEventListener('DOMContentLoaded', function () {
        // Alias Generator
        const titleInput = document.querySelector('input[name="title"]');
        const slugInput = document.querySelector('input[name="alias"]');

        if (titleInput && slugInput) {
            titleInput.addEventListener('keyup', function() {
                const slug = titleInput.value
                    .toLowerCase()
                    .trim()
                    .replace(/[^\w\s-]/g, '')
                    .replace(/[\s_-]+/g, '-')
                    .replace(/^-+|-+$/g, '');

                slugInput.value = slug;
            });
        }

        // LFM Script
        const lfmBtn = document.getElementById('lfm-btn');
        if (lfmBtn) {
            lfmBtn.addEventListener('click', function (e) {
                e.preventDefault();
                const route_prefix = '/admin-dashboard/laravel-filemanager';
                window.open(route_prefix + '?type=image', 'FileManager', 'width=900,height=600');
                
                window.SetUrl = function (items) {
                    const filePath = items[0].url; 
                    document.getElementById('thumbnail').value = filePath;
                    document.getElementById('holder').innerHTML = `<img src="${filePath}" class="h-20 w-auto rounded-lg border border-gray-200 object-cover shadow-sm">`;
                };
            });
        }
    });
</script>
@endpush
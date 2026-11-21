<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
    <div>
        <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Badge Title <span class="text-red-500">*</span></label>
        <input type="text" name="title" value="{{ old('title', $badge->title ?? '') }}" required class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm dark:border-gray-700 dark:bg-gray-900 dark:text-white" />
        @error('title')<p class="mt-1 text-sm text-red-500">{{ $message }}</p>@enderror
    </div>

    <div>
        <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Linked Theme / Category <span class="text-red-500">*</span></label>
        <select name="category_id" required class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm dark:border-gray-700 dark:bg-gray-900 dark:text-white">
            <option value="">Select a Theme</option>
            @foreach($categories as $category)
                <option value="{{ $category->id }}" @selected(old('category_id', $badge->category_id ?? '') == $category->id)>{{ $category->title }}</option>
            @endforeach
        </select>
        @error('category_id')<p class="mt-1 text-sm text-red-500">{{ $message }}</p>@enderror
    </div>

    <div class="md:col-span-2">
        <label for="image" class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Badge Icon / Image <span class="text-red-500">*</span></label>
        <div class="flex gap-2">
            <input id="image" type="text" name="image" value="{{ old('image', $badge->image ?? '') }}" required readonly class="h-11 w-full rounded-lg border border-gray-300 bg-gray-50 px-4 text-sm text-gray-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300" placeholder="Browse to select an image...">
            <button id="lfm-btn" type="button" class="shrink-0 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700">Browse LFM</button>
        </div>
        <div id="holder" class="mt-3">
            @if(isset($badge) && $badge->image)
                <img src="{{ $badge->image }}" class="h-20 w-20 rounded-full border border-gray-200 object-cover shadow-sm bg-white p-1">
            @endif
        </div>
        @error('image')<p class="mt-1 text-sm text-red-500">{{ $message }}</p>@enderror
    </div>

    <div class="flex items-center pt-2">
        <label class="relative inline-flex cursor-pointer items-center">
            <input type="checkbox" name="status" value="1" class="peer sr-only" @checked(old('status', $badge->status ?? true))>
            <div class="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
            <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Active</span>
        </label>
    </div>

    <div class="md:col-span-2">
        <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Description (Optional)</label>
        <textarea name="description" rows="3" class="w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm dark:border-gray-700 dark:bg-gray-900 dark:text-white">{{ old('description', $badge->description ?? '') }}</textarea>
    </div>
</div>

@push('scripts')
<script>
    document.addEventListener('DOMContentLoaded', function () {
        const lfmBtn = document.getElementById('lfm-btn');
        if (lfmBtn) {
            lfmBtn.addEventListener('click', function (e) {
                e.preventDefault();
                window.open('/admin-dashboard/laravel-filemanager?type=image', 'FileManager', 'width=900,height=600');
                window.SetUrl = function (items) {
                    const filePath = items[0].url; 
                    document.getElementById('image').value = filePath;
                    document.getElementById('holder').innerHTML = `<img src="${filePath}" class="h-20 w-20 rounded-full border border-gray-200 object-cover shadow-sm bg-white p-1">`;
                };
            });
        }
    });
</script>
@endpush
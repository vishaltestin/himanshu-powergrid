<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
    <!-- Title -->
    <div>
        <label for="title" class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Partner Name <span class="text-red-500">*</span></label>
        <input type="text" name="title" id="title" value="{{ old('title', $partner->title ?? '') }}" required
            class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white">
        @error('title')<p class="mt-1 text-sm text-red-500">{{ $message }}</p>@enderror
    </div>

    <!-- Status -->
    <div class="flex flex-col justify-center pt-6">
        <label class="relative inline-flex cursor-pointer items-center">
            <input type="checkbox" name="status" value="1" class="peer sr-only" @checked(old('status', $partner->status ?? true))>
            <div class="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
            <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Active / Visible</span>
        </label>
    </div>

    <!-- LFM Image Selector -->
    <div class="md:col-span-2">
        <label for="thumbnail" class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Partner Logo / Image <span class="text-red-500">*</span></label>
        <div class="flex gap-2">
            <input id="thumbnail" type="text" name="image" value="{{ old('image', $partner->image ?? '') }}" required readonly
                class="h-11 w-full rounded-lg border border-gray-300 bg-gray-50 px-4 text-sm text-gray-600 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300"
                placeholder="Click browse to select an image...">
            <button id="lfm-btn" type="button" class="shrink-0 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700 focus:ring-4 focus:ring-blue-300">
                Browse LFM
            </button>
        </div>
        @error('image')<p class="mt-1 text-sm text-red-500">{{ $message }}</p>@enderror

        <!-- Dynamic Image Preview -->
        <div id="holder" class="mt-3">
            @if(isset($partner) && $partner->image)
                <img src="{{ $partner->image }}" alt="Preview" class="h-20 w-auto rounded-lg border border-gray-200 object-cover shadow-sm dark:border-gray-700">
            @endif
        </div>
    </div>

    <!-- Description -->
    <div class="md:col-span-2">
        <label for="description" class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Description (Optional)</label>
        <textarea name="description" id="description" rows="4"
            class="w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white">{{ old('description', $partner->description ?? '') }}</textarea>
        @error('description')<p class="mt-1 text-sm text-red-500">{{ $message }}</p>@enderror
    </div>
</div>

@push('scripts')
<script>
    document.addEventListener('DOMContentLoaded', function () {
        const lfmBtn = document.getElementById('lfm-btn');
        
        lfmBtn.addEventListener('click', function (e) {
            e.preventDefault();
            
            // Your LFM route prefix as defined in web.php
            const route_prefix = '/admin-dashboard/laravel-filemanager';
            window.open(route_prefix + '?type=image', 'FileManager', 'width=900,height=600');
            
            // This function is automatically called by LFM when a file is chosen
            window.SetUrl = function (items) {
                const filePath = items[0].url; 
                
                // Set the hidden input value
                document.getElementById('thumbnail').value = filePath;
                
                // Render the preview image
                const holder = document.getElementById('holder');
                holder.innerHTML = `<img src="${filePath}" class="h-20 w-auto rounded-lg border border-gray-200 object-cover shadow-sm dark:border-gray-700">`;
            };
        });
    });
</script>
@endpush
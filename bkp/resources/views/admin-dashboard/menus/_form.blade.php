<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
    <div>
        <label for="title" class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Menu Title <span class="text-red-500">*</span></label>
        <input type="text" name="title" id="title" value="{{ old('title', $menu->title ?? '') }}" required
            class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
            placeholder="e.g. About Us">
        @error('title')<p class="mt-1 text-sm text-red-500">{{ $message }}</p>@enderror
    </div>

    <div>
        <label for="alias" class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Alias (Slug) <span class="text-red-500">*</span></label>
        <input type="text" name="alias" id="alias" value="{{ old('alias', $menu->alias ?? '') }}" required
            class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
            placeholder="e.g. about-us">
        @error('alias')<p class="mt-1 text-sm text-red-500">{{ $message }}</p>@enderror
    </div>

    <div>
        <label for="menu_position" class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Position <span class="text-red-500">*</span></label>
        <select name="menu_position" id="menu_position" required class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm dark:border-gray-700 dark:bg-gray-900 dark:text-white">
            <option value="main" @selected(old('menu_position', $menu->menu_position ?? '') == 'main')>Main Header</option>
            <option value="footer" @selected(old('menu_position', $menu->menu_position ?? '') == 'footer')>Footer</option>
        </select>
        @error('menu_position')<p class="mt-1 text-sm text-red-500">{{ $message }}</p>@enderror
    </div>

    <div>
        <label for="parent_id" class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Parent Menu (Optional)</label>
        <select name="parent_id" id="parent_id" class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm dark:border-gray-700 dark:bg-gray-900 dark:text-white">
            <option value="">None (Top Level)</option>
            @foreach($parentMenus as $parent)
                <option value="{{ $parent->id }}" @selected(old('parent_id', $menu->parent_id ?? '') == $parent->id)>
                    {{ $parent->title }}
                </option>
            @endforeach
        </select>
        @error('parent_id')<p class="mt-1 text-sm text-red-500">{{ $message }}</p>@enderror
    </div>

    <div>
        <label for="order" class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Display Order <span class="text-red-500">*</span></label>
        <input type="number" name="order" id="order" value="{{ old('order', $menu->order ?? 1) }}" min="1" required
            class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white">
        @error('order')<p class="mt-1 text-sm text-red-500">{{ $message }}</p>@enderror
    </div>

    <div class="flex flex-col justify-center pt-6">
        <label class="relative inline-flex cursor-pointer items-center">
            <input type="checkbox" name="status" value="1" class="peer sr-only" @checked(old('status', $menu->status ?? true))>
            <div class="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
            <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Active / Visible</span>
        </label>
    </div>

    <div class="col-span-1">
        <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Menu Icon (Optional)</label>
        @if(isset($menu) && $menu->icon)
            <div class="mb-2 flex items-center gap-3">
                <img src="{{ asset($menu->icon) }}" alt="Icon" class="h-12 w-12 rounded-lg bg-gray-50 object-contain p-1 border border-gray-200">
                <span class="text-xs text-gray-500">Current Icon</span>
            </div>
        @endif
        <input type="file" name="icon" accept="image/*" class="block w-full text-sm text-gray-500 file:mr-4 file:rounded-full file:border-0 file:bg-blue-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-blue-700 hover:file:bg-blue-100 dark:file:bg-gray-800 dark:file:text-gray-300">
        @error('icon')<p class="mt-1 text-sm text-red-500">{{ $message }}</p>@enderror
    </div>

    <div class="col-span-1">
        <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Banner Image (Optional)</label>
        @if(isset($menu) && $menu->banner_image)
            <div class="mb-2">
                <img src="{{ asset($menu->banner_image) }}" alt="Banner" class="h-20 w-auto rounded-lg object-cover border border-gray-200">
            </div>
        @endif
        <input type="file" name="banner_image" accept="image/*" class="block w-full text-sm text-gray-500 file:mr-4 file:rounded-full file:border-0 file:bg-blue-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-blue-700 hover:file:bg-blue-100 dark:file:bg-gray-800 dark:file:text-gray-300">
        @error('banner_image')<p class="mt-1 text-sm text-red-500">{{ $message }}</p>@enderror
    </div>
</div>
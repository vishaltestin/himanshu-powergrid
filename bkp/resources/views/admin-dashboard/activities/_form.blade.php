<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
    <div>
        <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Title <span
                class="text-red-500">*</span></label>
        <input name="title" value="{{ old('title', $activity?->title) }}" required
            class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm dark:border-gray-700 dark:bg-gray-900 dark:text-white" />
        @error('title')<p class="mt-1 text-sm text-red-500">{{ $message }}</p>@enderror
    </div>

    <div>
        <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Slug <span
                class="text-red-500">*</span></label>
        <input name="slug" value="{{ old('slug', $activity?->slug) }}"
            class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm dark:border-gray-700 dark:bg-gray-900 dark:text-white" />
        @error('slug')<p class="mt-1 text-sm text-red-500">{{ $message }}</p>@enderror
    </div>

    <div>
        <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Select Theme<span
                class="text-red-500">*</span></label>
        <select name="category_id" required
            class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm dark:border-gray-700 dark:bg-gray-900 dark:text-white focus:border-blue-500 focus:ring-blue-500">
            <option value="">Select a Theme</option>
            @foreach($categories as $category)
            <option value="{{ $category->id }}" @selected(old('category_id', $activity?->category_id) == $category->id)>
                {{ $category->title }}
            </option>
            @endforeach
        </select>
        @error('category_id')<p class="mt-1 text-sm text-red-500">{{ $message }}</p>@enderror
    </div>

    <div>
        <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Select Grade<span
                class="text-red-500">*</span></label>
        <select name="grade_id" required
            class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm dark:border-gray-700 dark:bg-gray-900 dark:text-white focus:border-blue-500 focus:ring-blue-500">
            <option value="">Select a Grade</option>
            @foreach($grades as $grade)
            <option value="{{ $grade->id }}" @selected(old('grade_id', $activity?->grade_id) == $grade->id)>
                {{ $grade->name }}
            </option>
            @endforeach
        </select>
        @error('grade_id')<p class="mt-1 text-sm text-red-500">{{ $message }}</p>@enderror
    </div>

    <div>
        <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Order</label>
        <input name="order" type="number" min="0" value="{{ old('order', $activity?->order) }}"
            placeholder="Automatically assigned if empty"
            class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm dark:border-gray-700 dark:bg-gray-900 dark:text-white" />
        @error('order')<p class="mt-1 text-sm text-red-500">{{ $message }}</p>@enderror
    </div>

    <div>
        <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">External Link</label>
        <input name="external_link" type="url" value="{{ old('external_link', $activity?->external_link) }}"
            class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm dark:border-gray-700 dark:bg-gray-900 dark:text-white" />
        @error('external_link')<p class="mt-1 text-sm text-red-500">{{ $message }}</p>@enderror
    </div>

    <div>
        <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
            Activity Thumbnail <span class="text-red-500">*</span>
        </label>

        <div class="flex gap-2">
            <input id="thumbnail" type="text" name="image" value="{{ old('image', $activity?->image) }}"
                class="h-11 w-full rounded-lg border border-gray-300 bg-gray-50 px-4 text-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 focus:outline-none"
                >

            <button id="lfm" data-input="thumbnail" data-preview="holder" type="button"
                class="whitespace-nowrap rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700">
                Choose Image
            </button>
        </div>

        <!-- <div id="holder" class="mt-3">
            @if(old('image', $activity?->image))
            <img src="{{ old('image', $activity?->image) }}" style="height: 5rem;" class="rounded-md object-cover shadow-sm">
            @endif
        </div> -->

        @error('image')<p class="mt-1 text-sm text-red-500">{{ $message }}</p>@enderror
    </div>

    <div>
        <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">PDF (Guidelines)</label>

        <input name="pdf" type="file" accept="application/pdf"
            class="block w-full text-sm text-gray-500 file:mr-4 file:rounded-lg file:border-0 file:bg-blue-50 file:px-4 file:py-2.5 file:text-sm file:font-semibold file:text-blue-700 hover:file:bg-blue-100 dark:text-gray-400 dark:file:bg-gray-800 dark:file:text-gray-300" />

        @if($activity?->pdf_url)
        <div class="mt-2 flex items-center gap-2">
            <span class="text-xs text-gray-500">Current: {{ basename($activity->pdf) }}</span>
            <a href="{{ $activity->pdf_url }}" target="_blank" class="text-sm text-blue-600 hover:underline">Preview</a>
        </div>
        @endif

        @error('pdf')<p class="mt-1 text-sm text-red-500">{{ $message }}</p>@enderror
    </div>

    <div>
        <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Activity Deadline
            (Optional)</label>
        <div class="relative">
            <input type="text" id="deadline-picker" name="deadline"
                value="{{ old('deadline', isset($activity) && $activity->deadline ? $activity->deadline->format('Y-m-d') : '') }}"
                placeholder="YYYY-MM-DD"
                class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm dark:border-gray-700 dark:bg-gray-900 dark:text-white" />

            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
                <svg class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            </div>
        </div>
        @error('deadline')<p class="mt-1 text-sm text-red-500">{{ $message }}</p>@enderror
    </div>

    <div>
        <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Status <span
                class="text-red-500">*</span></label>
        <select name="status"
            class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm dark:border-gray-700 dark:bg-gray-900 dark:text-white">
            <option value="draft" @selected(old('status', $activity?->status ?? 'draft') === 'draft')>Draft</option>
            <option value="active" @selected(old('status', $activity?->status) === 'active')>Active</option>
            <option value="inactive" @selected(old('status', $activity?->status) === 'inactive')>Inactive</option>
        </select>
    </div>

    <div class="md:col-span-2">
        <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Description</label>
        <textarea name="description" rows="7"
            class="w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm dark:border-gray-700 dark:bg-gray-900 dark:text-white">{{ old('description', $activity?->description) }}</textarea>
        @error('description')<p class="mt-1 text-sm text-red-500">{{ $message }}</p>@enderror
    </div>
</div>


@push('styles')
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css">
@endpush

@push('scripts')
<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>
<script src="/vendor/laravel-filemanager/js/stand-alone-button.js"></script>
<script>
    document.addEventListener('DOMContentLoaded', function () {
        $('#lfm').filemanager('image', {
            prefix: '/admin-dashboard/laravel-filemanager'
        });

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
<script>
    document.addEventListener('DOMContentLoaded', function () {
        // Initialize Flatpickr on our specific input
        flatpickr("#deadline-picker", {
            dateFormat: "Y-m-d",
            minDate: "today", // Prevents admin from selecting a deadline in the past!
            disableMobile: "true" // Forces the beautiful desktop calendar on mobile devices too
        });
    });
</script>
@endpush
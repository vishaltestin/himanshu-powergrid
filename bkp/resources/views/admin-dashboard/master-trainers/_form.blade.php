<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
    <!-- Name -->
    <div>
        <label for="name" class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Master Trainer Name <span class="text-red-500">*</span></label>
        <input type="text" name="name" id="name" value="{{ old('name', $masterTrainer->name ?? '') }}" required
            class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white">
        @error('name')<p class="mt-1 text-sm text-red-500">{{ $message }}</p>@enderror
    </div>

    <!-- District -->
    <div>
        <label for="district" class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">District</label>
        <input type="text" name="district" id="district" value="{{ old('district', $masterTrainer->district ?? '') }}" 
            class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white">
        @error('district')<p class="mt-1 text-sm text-red-500">{{ $message }}</p>@enderror
    </div>

    <!-- School Name -->
    <div class="md:col-span-2">
        <label for="school_name" class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Eco Club School Name</label>
        <input type="text" name="school_name" id="school_name" value="{{ old('school_name', $masterTrainer->school_name ?? '') }}" 
            class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white">
        @error('school_name')<p class="mt-1 text-sm text-red-500">{{ $message }}</p>@enderror
    </div>

    <!-- Contact Number -->
    <div>
        <label for="contact_number" class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Contact Number</label>
        <input type="text" name="contact_number" id="contact_number" value="{{ old('contact_number', $masterTrainer->contact_number ?? '') }}" 
            class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white">
        @error('contact_number')<p class="mt-1 text-sm text-red-500">{{ $message }}</p>@enderror
    </div>

    <!-- Email ID -->
    <div>
        <label for="email" class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Email ID</label>
        <input type="email" name="email" id="email" value="{{ old('email', $masterTrainer->email ?? '') }}" 
            class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white">
        @error('email')<p class="mt-1 text-sm text-red-500">{{ $message }}</p>@enderror
    </div>
</div>
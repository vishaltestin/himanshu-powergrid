@props([
    'action',
    'message' => 'Are you sure?',
])

<div x-data="{ open: false }" class="inline-flex">

    <!-- Trigger -->
    <button
        type="button"
        @click="open = true"
    >
        <svg
            class="text-gray-700 cursor-pointer size-5 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 0 0-1 1v3M4 7h16"
            />
        </svg>
    </button>

    <!-- Modal -->
    <div
        x-show="open"
        x-transition
        x-cloak
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
    >
        <div
            @click.away="open = false"
            class="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl"
        >
            <h2 class="text-lg font-semibold text-gray-800">
                Confirm Delete
            </h2>

            <p class="mt-2 text-sm text-gray-500">
                {{ $message }}
            </p>

            <div class="mt-6 flex justify-end gap-3">

                <button
                    type="button"
                    @click="open = false"
                    class="rounded-lg border border-gray-300 px-4 py-2 text-sm"
                >
                    Cancel
                </button>

                <form
                    action="{{ $action }}"
                    method="POST"
                >
                    @csrf
                    @method('DELETE')

                    <button
                        type="submit"
                        class="rounded-lg bg-red-500 px-4 py-2 text-sm text-white hover:bg-red-600"
                    >
                        Delete
                    </button>
                </form>

            </div>
        </div>
    </div>

</div>
@props([
    'action',
    'status' => false,
    'message' => 'Are you sure?',
])

<div x-data="{ open: false }" class="inline-flex">

    <!-- Trigger -->
    <button
        type="button"
        @click="open = true"
    >

        @if($status)

            <!-- Active -->
            <x-ui.badge :color="'success'">
                Active
            </x-ui.badge>

        @else

            <!-- Inactive -->
            <x-ui.badge :color="'error'">
                Inactive
            </x-ui.badge>

        @endif

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
                Confirm Status Change
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

                    <button
                        type="submit"
                        class="rounded-lg bg-blue-500 px-4 py-2 text-sm text-white hover:bg-blue-600"
                    >
                        Confirm
                    </button>
                </form>

            </div>
        </div>
    </div>

</div>
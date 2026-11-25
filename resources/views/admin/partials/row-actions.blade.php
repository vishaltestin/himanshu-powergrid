{{-- @param string $edit, string $delete, ?string $confirm --}}
<div class="flex items-center justify-end gap-1">
    <a href="{{ $edit }}" class="a-btn-secondary px-2.5 py-1 text-xs"><x-admin.icon name="edit" class="size-3.5"/> Edit</a>
    <form method="POST" action="{{ $delete }}" data-confirm="{{ $confirm ?? 'Delete this item? This cannot be undone.' }}">
        @csrf @method('DELETE')
        <button class="a-icon-btn hover:!text-red-600" title="Delete"><x-admin.icon name="trash" class="size-4"/></button>
    </form>
</div>

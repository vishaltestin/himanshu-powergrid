@extends('layouts.app')

@section('content')
<div class="container-fluid">
    <div class="card">
        <div class="card-header d-flex justify-content-between">
            <span>Menu Details</span>
            <a href="{{ route('admin.menus.index') }}" class="btn btn-sm btn-secondary">Back</a>
        </div>

        <div class="card-body">
            <table class="table table-bordered">
                <tr><th width="200">Title</th><td>{{ $menu->title }}</td></tr>
                <tr><th>Alias</th><td>{{ $menu->alias }}</td></tr>
                <tr><th>Position</th><td>{{ ucfirst($menu->menu_position) }}</td></tr>
                <tr><th>Parent Menu</th><td>{{ $menu->parent?->title ?? '-' }}</td></tr>
                <tr><th>Order</th><td>{{ $menu->order }}</td></tr>
                <tr><th>Icon</th><td>{{ $menu->icon ?? '-' }}</td></tr>
                <tr><th>Status</th><td>{{ $menu->status ? 'Active' : 'Inactive' }}</td></tr>
                @if ($menu->banner_image)
                    <tr>
                        <th>Banner Image</th>
                        <td><img src="{{ $menu->banner_image }}" class="img-thumbnail" style="max-height: 200px;"></td>
                    </tr>
                @endif
            </table>
        </div>
    </div>
</div>
@endsection
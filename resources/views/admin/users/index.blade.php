@extends('admin.layouts.app')
@section('title', 'Admin users')
@section('breadcrumbs')<span class="font-medium text-slate-800">Admin users</span>@endsection

@section('content')
    @include('admin.partials.page-header', ['title' => 'Admin users', 'subtitle' => 'People who can sign in to this admin panel.', 'actions' => '<a href="' . route('admin.users.create') . '" class="a-btn-primary">+ New admin</a>'])
    <div class="a-card overflow-hidden">
        <table class="a-table">
            <thead class="bg-slate-50"><tr><th>Name</th><th>Role</th><th>Status</th><th>Last login</th><th></th></tr></thead>
            <tbody class="divide-y divide-slate-100 bg-white">
            @foreach ($users as $u)
                <tr>
                    <td><p class="font-medium text-slate-900">{{ $u->name }} @if($u->id === auth()->id())<span class="text-xs text-slate-400">(you)</span>@endif</p><p class="text-xs text-slate-500">{{ $u->email }}</p></td>
                    <td><span class="a-badge bg-slate-100 text-slate-700 capitalize">{{ $u->roles->pluck('name')->implode(', ') }}</span></td>
                    <td>@if($u->status)<span class="a-badge bg-emerald-50 text-emerald-700">Active</span>@else<span class="a-badge bg-red-50 text-red-600">Suspended</span>@endif</td>
                    <td class="text-xs text-slate-500">{{ $u->last_login ? \Illuminate\Support\Carbon::parse($u->last_login)->diffForHumans() : 'Never' }}</td>
                    <td>@include('admin.partials.row-actions', ['edit' => route('admin.users.edit', $u), 'delete' => route('admin.users.destroy', $u)])</td>
                </tr>
            @endforeach
            </tbody>
        </table>
    </div>
@endsection

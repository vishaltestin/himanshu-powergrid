@extends('layouts.app')
@section('content')
<x-common.page-breadcrumb pageTitle="Activities" />
<x-common.component-card title="Create Activity">
    <form method="POST" enctype="multipart/form-data" action="{{ route('admin.activities.store') }}" class="space-y-6">@csrf @include('admin-dashboard.activities._form', ['activity' => null])<div class="flex justify-end gap-3"><x-ui.link href="{{ route('admin.activities.index') }}" variant="outline" size="sm">Cancel</x-ui.link><x-ui.button type="submit" variant="primary" size="sm">Create Activity</x-ui.button></div>
    </form>
</x-common.component-card>
@endsection
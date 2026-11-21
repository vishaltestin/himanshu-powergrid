@extends('layouts.app')
@section('content')
<x-common.page-breadcrumb pageTitle="Activity Categories" />
<x-common.component-card title="Edit Activity Category">
    <form method="POST" action="{{ route('admin.activity-categories.update', $activityCategory) }}" enctype="multipart/form-data" class="space-y-6">@csrf @method('PUT') @include('admin-dashboard.activity-categories._form')
        <div class="flex justify-end gap-3"><x-ui.link href="{{ route('admin.activity-categories.index') }}" variant="outline" size="sm">Cancel</x-ui.link><x-ui.button type="submit" variant="primary" size="sm">Save Changes</x-ui.button></div>
    </form>
</x-common.component-card>
@endsection

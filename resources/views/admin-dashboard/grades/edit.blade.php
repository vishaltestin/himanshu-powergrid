@extends('layouts.app')
@section('content')
<x-common.page-breadcrumb pageTitle="Grades" />
<x-common.component-card title="Edit Grade">
    <form method="POST" action="{{ route('admin.grades.update', $grade) }}" class="space-y-6">
        @csrf 
        @method('PUT') 
        @include('admin-dashboard.grades._form', ['grade' => $grade])
        
        <div class="flex justify-end gap-3">
            <x-ui.link href="{{ route('admin.grades.index') }}" variant="outline" size="sm">Cancel</x-ui.link>
            <x-ui.button type="submit" variant="primary" size="sm">Save Changes</x-ui.button>
        </div>
    </form>
</x-common.component-card>
@endsection
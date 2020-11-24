@extends('layouts.main-layout')
@section('content')

<main>
    <form action="{{ route('post-store') }}" method="post">
        @csrf
        @method('post')
        <div>
            <label for="name">Name</label>
            <input type="text" name="name" value="{{ old('name') }}">
        </div>
        <div>
            <label for="description">Description</label>
            <input type="description" name="description" value="{{ old('description') }}">
        </div>
        <div>
            <label for="likes">Likes</label>
            <input type="number" name="likes" value="{{ old('likes', 0) }}">
        </div>
        <div>
            <label for="shares">Shares</label>
            <input type="number" name="shares" value="{{ old('shares', 0) }}">
        </div>
        <button class="btn btn-success" type="submit">Create</button>
    </form>

</main>

@endsection
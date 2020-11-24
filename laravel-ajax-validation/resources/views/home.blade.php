@extends('layouts.main-layout')
@section('content')

<main>

<div class="card">
    <div class="card-header">
        Posts
        <div>
            <input id="best-of" type="checkbox">
            <label for="">Post</label>
        </div>
        <div>
            <a class="btn btn-success" href="{{ route('post-create') }}">Create Post</a>
        </div>
    </div>

    <div class="card-body">
        
        <ul id="post">

        </ul>

    </div>

</div>
</main>

@endsection
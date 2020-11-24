@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">
                    POST:
                    {{ $post -> name }}
                </div>

                <div class="card-body">

                    <h1>{{ $post -> name }}</h1> <br>
                    {{ $post -> description }}
                    {{ $post -> likes }}
                    {{ $post -> shares }}
                    <br><br>

                    @auth
                    <a class="btn btn-secondary" href="{{ route('home')}}">GO BACK</a>

                    <a class="btn btn-primary" href="">EDIT</a>

                    <a class="btn btn-primary" href="{{ route('post-delete', $post -> id) }}">DELETE</a>

                    @else
                    LOG IN TO EDIT/DELETE POSTS
                    @endauth
                </div>
            </div>
        </div>
    </div>
</div>
@endsection

@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">POSTS 
                
                    @auth
                        <a class="btn btn-warning" href="{{ route('post-create') }}">CREATE POST</a>
                        @else
                        LOGIN TO CREATE A NEW POST
                    @endauth
                </div>
                <div class="card-body">
                    <ul>
                        @foreach($posts as $post) 

                        <li>
                           <a href="{{ route('post-show', $post -> id) }}">
                            {{ $post -> name }}   
                           </a> 
                        </li>

                        @endforeach
                   </ul>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection

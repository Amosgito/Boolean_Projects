@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">CREATE POST</div>

                <div class="card-body">
                    <form action="{{ route('post-store') }}" method="post">
                        @csrf
                        @method('post')
                        <div>
                            <label for="name">Name</label>
                            <input type="text" name="name">
                        </div>
                        <div>
                            <label for="description">Description</label>
                            <input type="text" name="description">
                        </div>
                        <div>
                            <label for="likes">likes</label>
                            <input type="number" name="likes">
                        </div>
                        <div>
                            <label for="shares">shares</label>
                            <input type="number" name="shares">
                        </div>

                        <a class="btn btn-secondary" href="{{ route('home')}}">GO BACK</a>

                        <button class="btn btn-warning" type="submit">SAVE</button>
                    </form>

                </div>
            </div>
        </div>
    </div>
</div>
@endsection

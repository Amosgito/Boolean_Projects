@extends('layouts.main-layout')

@section('content')
    <main>
        <ul>
            @foreach ($paganti as $item)
                <li>{{$item -> name}} {{$item -> lastname}}</li>
            @endforeach
        </ul>
    </main>
@endsection
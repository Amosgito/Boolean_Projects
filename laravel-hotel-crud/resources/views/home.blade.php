@extends('layouts.main-layout')

@section('content')
    <ul>
        @foreach($stanze as $item) 

            <li>{{$item -> room_number}}</li> 
        
        @endforeach
    </ul>
@endsection
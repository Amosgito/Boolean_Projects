@extends('layouts.main-layout')

@section('content')

    <form action="{{route('stanza-create')}}" method='POST'>
        @csrf
        @method('post')
        <div class='form-group'>
            <label for="room_number">Room Number</label>
            <input type="text" name="room_number">
        </div>
        <div class='form-group'>
            <label for="floor">Floor</label>
            <input type="text" name="floor">
        </div>
        <div class='beds'>
            <label for="beds">Beds</label>
            <input type="text" name="beds">
        </div>
        <button type="submit" name="button">Submit</button>
        
    </form>
    <ul>
        @foreach($stanze as $item) 

            <li><a href="{{route('stanza-show', $item -> id)}}">{{$item -> room_number}}</a></li> 
        
        @endforeach
    </ul>
@endsection
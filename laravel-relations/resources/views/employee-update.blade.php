@extends('layouts.main-layout')
@section('content')

<form action="{{ route('emp-update') }}" method="post">
    @csrf
    @method('post')
   <div>
    <label for="name">name</label><br>
    <input type="text" name="name" value="{{ $emp -> name }}">
   </div>

   <div>
    <label for="lastname">last name</label><br>
    <input type="text" name="lastname" value="{{ $emp -> lastname }}">
   </div>

   <div>
    <label for="location_id">location</label><br>
    <select name="location_id" id=""> 

        @foreach ($locs as $loc)

            @if ($loc -> id === $emp -> id)
            <option value="{{ $loc -> id }}">{{ $loc -> city }}</option>
        @endforeach

    </select>
   </div>

   <button type="submit">UPDATE</button>

</form>

@endsection
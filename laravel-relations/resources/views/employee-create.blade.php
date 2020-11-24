@extends('layouts.main-layout')
@section('content')

<h1>CREATE NEW EMPLOYEE</h1>

<form action="{{ route('store-new') }}" method="post">
    @csrf
    @method('post')
   <div>
    <label for="name">name</label><br>
    <input type="text" name="name" value="">
   </div>

   <div>
    <label for="lastname">last name</label><br>
    <input type="text" name="lastname" value="">
   </div>

   <div>
    <label for="location_id">location</label><br>
    <select name="location_id" id=""> 

        @foreach ($locs as $loc)
            <option value="{{ $loc -> id }}">{{ $loc -> city }}</option>
        @endforeach

    </select>
   </div>

   <button type="submit">CREATE</button>

</form>

@endsection
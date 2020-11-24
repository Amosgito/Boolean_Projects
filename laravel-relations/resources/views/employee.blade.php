@extends('layouts.main-layout')
@section('content')

<h1> 
    
    {{ $emplo -> name}}
    {{ $emplo -> lastname}} 
    :
    <br><br>

    
</h1>

<a href="{{ route('index-home')}}">BACK</a>
@endsection
@extends('layouts.main-layout')
@section('content')
    <main>

        <h1>EMPLOYEES</h1>

        <a href=" {{ route('create-new') }}">CREATE</a>

        <a href="">EDIT</a>

        <ul>
            @foreach($employees as $employee) 
                <li>
                    <a href="{{ route('emp-show', $employee -> id ) }}">

                        {{ $employee -> name }}  
                        {{ $employee -> lastname }}

                    </a>
                    
                    <a href="{{ route('emp-delete', $employee -> id) }}">
                        X
                    </a>
                </li>
            @endforeach
        </ul>

    </main>
@endsection
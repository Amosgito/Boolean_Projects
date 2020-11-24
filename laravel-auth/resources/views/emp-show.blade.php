@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">
                    Employee: {{ $emplo -> name }} {{ $emplo -> lastname }}
                </div>

                <div class="card-body">
                   
                    Name: {{ $emplo -> name }}<br>
                    Lastname: {{ $emplo -> lastname }}<br>
                    City: {{ $emplo -> location -> city }}<br>
                    State: {{ $emplo -> location -> state }}<br><br>

                    <a class="btn btn-secondary" href="{{ route('home') }}">GO BACK</a>

                    @auth
                    <a class="btn btn-primary" href="{{ route('emp-edit', $emplo -> id) }}">EDIT</a>
                    <a class="btn btn-danger" href="{{ route('emp-delete', $emplo -> id) }}">DELETE</a>
                    @else
                    PLEASE LOG IN TO EDIT/DELETE EMPLOYEE
                    @endauth

                </div>
            </div>
        </div>
    </div>
</div>
@endsection

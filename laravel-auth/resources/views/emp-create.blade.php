@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">
                   Create New Employee: 
                </div>

                <div class="card-body">

                   <form action="{{ route('emp-store') }}" method="post">
                        @csrf
                        @method("POST")
                       <div>
                           <label for="name">Name:</label>
                           <input type="text" name="name">
                       </div>

                       <div>
                            <label for="lastname">Last Name:</label>
                            <input type="text" name="lastname">
                       </div>
                       <div>
                           <label for="location_id">City:</label>
                           <select name="location_id" id="">
    
                            @foreach ($cities as $city)
    
                                <option value="{{ $city -> id }}">{{ $city -> city }} ({{ $city -> state }})</option>
    
                            @endforeach
                           </select>
                       </div>

                       <button class="btn btn-warning" type="submit">CREATE</button>
                       <a class="btn btn-secondary" href="{{ route('home') }}">GO BACK</a>


                   </form>
                   

                </div>
            </div>
        </div>
    </div>
</div>
@endsection

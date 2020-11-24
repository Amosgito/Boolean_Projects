@extends('layouts.main-layout')
@section('content')

<h1>EDIT</h1>

<form action="{{ route('pagamento-update', $pagamento -> id) }}" method="POST">

    @csrf
    @method("POST")

    <div class="form-group">
        <label for="status">STATUS</label><br>
        <input type="text" name="status" value="{{$pagamento -> status}}">
    </div>
    <div class="form-group">
        <label for="price">PRICE</label><br>
        <input type="number" name="price" value="{{$pagamento -> price}}">
    </div>

    <button type="submit">UPDATE</button>
</form>

@endsection
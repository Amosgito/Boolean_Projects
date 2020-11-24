@extends('layouts/main-layout')

@section('content')

    <h1>LUNGHE</h1>
    <ul>
        @foreach ($data as $pasta)
            @if ($pasta['tipo']=== 'lunga')
                <li>
                    <h2>{{ $pasta['titolo'] }}</h2>
                    <img src="{{ $pasta['src'] }}" alt="">
                </li>
            @endif
        @endforeach
    </ul>

    <h1>CORTE</h1>
    <ul>
        @foreach ($data as $pasta)
            @if ($pasta['tipo']=== 'corta')
                <li>
                    <h2>{{ $pasta['titolo'] }}</h2>
                    <img src="{{ $pasta['src'] }}" alt="">
                </li>
            @endif
        @endforeach
    </ul>

    <h1>CORTISSIME</h1>
    <ul>
        @foreach ($data as $pasta)
            @if ($pasta['tipo']=== 'cortissima')
                <li>
                    <h2>{{ $pasta['titolo'] }}</h2>
                    <img src="{{ $pasta['src'] }}" alt="">
                </li>
            @endif
        @endforeach
    </ul>

@endsection
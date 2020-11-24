<!-- Creiamo un array contenente le partite di basket di un'ipotetica tappa del calendario. Ogni array avrà una squadra di casa e una squadra ospite, punti fatti dalla squadra di casa e punti fatti dalla squadra ospite. Stampiamo a schermo tutte le partite con questo schema.
Olimpia Milano - Cantù | 55-60 -->

<?php

    $partite = [

        'Olimpia Milano - Cantu',
        'Torino - Treviso',
        'Roma - Cagliari',
        'Napoli - Salerno',
        'Bari - Livorno',
        'Venezia - Brescia'
    ];

    $risultati = [

        '55-60',
        '32-64',
        '21-44',
        '56-52',
        '36-42',
        '28-60'
    ];        

    // var_dump($partite);
    // echo '<br>';
    // var_dump($risultati);
    // echo '<br>';
    // echo '<br>';


    for ($i=0; $i < count($partite) ; $i++) { 

        $part = $partite[$i];
        $res = $risultati[$i];
        
        echo $part.'  |  '.$res;
        echo '<br>';
    }
    

?>
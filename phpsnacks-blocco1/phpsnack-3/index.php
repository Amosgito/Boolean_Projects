<!-- Creare un array con 15 numeri casuali, tenendo conto che l'array non dovrà contenere lo stesso numero più di una volta -->

<?php

// correzione


$rnds = [];

while(count($rdns) < 15) {

    $rnd = rand(1, 15);

    if (!in_array($rnd, $rnds)) {

        $rnds[] = $rnd;
    }
}

var_dump($rnds);


    
    // codice trovato su stackoverflow dopo #bandierabianca

    // $random_number_array = range(0, 100);

    // shuffle($random_number_array );

    // $random_number_array = array_slice($random_number_array ,0,15);
    
    // print_r($random_number_array);
    

?>

<?php

$classe = [
    'Mario Rossi' => [
        5, 7, 9, 5, 5, 6, 7, 8
    ],
    'Francesca Bianchi' => [
        9, 10, 9, 9, 8, 9, 10, 10
    ]
];

    foreach ($classe as $name => $v) {
        
        echo $name . ': ';

        $avg = array_sum($v) / count($v);

        echo $avg;
        }
    
?>

<!-- Creare un array contenente qualche alunno di un'ipotetica classe. Ogni
alunno avrà Nome, Cognome e un array contenente i suoi voti scolastici.
Stampare Nome, Cognome e la media dei voti di ogni alunno. -->
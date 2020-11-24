<?php

    $string = "lorem ipsum dolor sit amet, consectetur adip";

    $length = strlen($string);

    $replace = $_GET['badWord'];

    $replaced = str_replace($replace, '***', $string);

    echo $length;
    echo '<br>';
    echo $string;
    echo '<br>';
    echo $replaced;

?>





<!-- Creare una variabile con un paragrafo di testo. Visualizzare a schermo il paragrafo con la relative lunghezza e sostituire la badword passata in GET con tre *. -->
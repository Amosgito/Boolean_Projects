<!-- Passare come parametri GET name, mail e age e verificare (cercando i metodi che non conosciamo nella documentazione) che name sia più lungo di 3 caratteri, che mail contenga un punto e una chiocciola e che age sia un numero. Se tutto è ok stampare "Accesso riuscito", altrimenti "Accesso negato" -->

<?php

    $name = $_GET['name'];
    $mail = $_GET['mail'];
    $age = $_GET['age'];

    var_dump($name);
    var_dump($mail);
    var_dump($age);
    echo '<br>';

    $nome = strlen($name);

    var_dump($nome);

    $isDotPresent = strpos($mail, '.');
    $isAtPresent = strpos($mail, '@');
    $inAge = is_numeric($age);

    var_dump($inAge);

    if($nome > 3 && $isDotPresent && $isAtPresent && $inAge) {

         echo 'accesso riuscito';

    } else {

        echo 'accesso negato';
    }



?>

<!-- && in_array('.', $mail || '@', $mail) && is_int($age) -->
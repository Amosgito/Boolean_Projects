<?php

$servername = "localhost";
    $username = "root";
    $password = "Carpani@2020";
    $dbname = "dbhotel";

    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn && $conn->connect_error) {
        echo "Connection failed: " . $conn->connect_error;
        return;
    }

    //EX1

    // $sql = "
    //     SELECT *
    //     FROM pagamenti
    // ";

    // $result = $conn->query($sql);

    // if ($result && $result->num_rows > 0) {

    //     echo "<ul>";
    //     while($row = $result->fetch_assoc()) {
    //         echo  "<li>" . "id: " . $row['id'] . " " . "|" . " "
    //              . "status:" . $row['status'] . " " . "|" . " "
    //              . "price:" . $row['price'] . '<br>'. "</li>";
    //     }
    //     echo "</ul>";
    // } elseif ($result) {
    //     echo "0 results";
    // } else {
    //     echo "query error";
    // }


    //EX2

    // $sql = "
    //     DELETE
    //     FROM pagamenti
    //     WHERE id = 8
    // ";

    // $result = $conn->query($sql);

    // if ($result && $result->num_rows > 0) {

    //     while($row = $result->fetch_assoc()) {
    //         echo "ospite: " . $row['name'] . " " . $row['lastname'] . '<br>';
    //     }
    //} elseif ($result) {
    //     echo "0 results";
    // } else {
    //     echo "query error";
    // }



        //ESERCIZIO 1
    //  $sql = "
    //     DELETE
    //     FROM pagamenti
    //     WHERE pagante_id = 6 AND status = rejected
    // ";

    // $result = $conn->query($sql);

    // if ($result && $result->num_rows > 0) {

    //     while($row = $result->fetch_assoc()) {
    //         echo "ospite: " . $row['name'] . " " . $row['lastname'] . '<br>';
    //     }
    // }  elseif ($result) {
    //     echo "0 results";
    // } else {
    //     echo "query error";
    // }



    //ESERCIZIO 2

    $sql = "
        SELECT pagamenti.id, pagamenti.status, pagamenti.price
        FROM pagamenti
        WHERE price > 600
    ";

    $result = $conn->query($sql);

    if ($result && $result->num_rows > 0) {
        echo "<ul>";
        while($row = $result->fetch_assoc()) {
            echo  "<li>" . "id: " . $row['id'] . " " . "|" . " "
                 . "status:" . $row['status'] . " " . "|" . " "
                 . "price:" . $row['price'] . '<br>'. "</li>";
        }
        echo "</ul>";
    } 
    

    elseif ($result) {
        echo "0 results";
    } else {
        echo "query error";
    }

    $conn->close();
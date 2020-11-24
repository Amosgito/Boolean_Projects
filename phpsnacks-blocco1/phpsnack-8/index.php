<?php
    require 'db.php';

    foreach ($hotels as $value) {
        $hotel = $value['name'];
        $vote = $value['vote'];
        echo $hotel . ' ' . '<br>' . 'vote:' . ' ' . $vote;
        echo '<br>';
    }

?>
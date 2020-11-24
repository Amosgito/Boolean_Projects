<?php

$posts = [
    '10/01/2019' => [
        [
            'title' => 'Post 1',
            'author' => 'Michele Papagni',
            'text' => 'Testo post 1'
        ],
        [
            'title' => 'Post 2',
            'author' => 'Michele Papagni',
            'text' => 'Testo post 2'
        ],
    ],
    '10/02/2019' => [
        [
            'title' => 'Post 3',
            'author' => 'Michele Papagni',
            'text' => 'Testo post 3'
        ]
    ],
    '15/05/2019' => [
        [
            'title' => 'Post 4',
            'author' => 'Michele Papagni',
            'text' => 'Testo post 4'
        ],
        [
            'title' => 'Post 5',
            'author' => 'Michele Papagni',
            'text' => 'Testo post 5'
        ],
        [
            'title' => 'Post 6',
            'author' => 'Michele Papagni',
            'text' => 'Testo post 6'
        ]
    ],
];


// $keys = array_keys($posts);

// var_dump($posts);

// for ($i=0; $i < count($posts) ; $i++) { 

//     // var_dump ($posts[$i]['title'] . '<br>' . 'title:' . ['title'] . '<br>' . 'author:'. '<br>' . 'text:' . ['text']);
//    $stamp = $posts[$i];

//    var_dump($stamp);
// }

// $data = array_keys($posts);

// foreach ($data as $d) {

//     echo $d;
//     echo '<br>';

//     $sPosts = $posts[$d];

//     foreach ($sPosts as $post) {

//         echo $post['title'];
//         echo '<br>';
//         echo $post['author'];
//         echo '<br>';
//         echo $post['text'];
//         echo '<br>';
//     }
// }

$date = array_keys($posts);
    foreach ($date as $d) {
    
        echo $d;
        echo "<br>";
    
        $sPosts = $posts[$d];
    
        foreach ($sPosts as $post) {
    
            echo $post['title'];
            echo "<br>";
            echo $post['text'];
            echo "<br>";
            echo $post['author'];
            echo "<br>-----------<br>";
        }
    
        echo "<br><br>";
    }






?>
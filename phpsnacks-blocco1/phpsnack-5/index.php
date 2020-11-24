<?php

    $text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";


    // SBAGLIATO
    // $newText = str_replace('. ', '.<br>', $text);


    // CORRETTO
    $str = '<p>' . str_replace('. ', '.</p><p>', $str) . '</p>';

    echo $str;

    // BEST
    $eStr = explode('.', $text);

    foreach ($eStr as $p) {
    
        echo '<p>' . $p . '.</p>';
    }

?>
<!-- 
Prendere un paragrafo abbastanza lungo, contenente diverse frasi.
Prendere il paragrafo e suddividerlo in tanti paragrafi <p>. Ogni punto un
nuovo paragrafo. -->
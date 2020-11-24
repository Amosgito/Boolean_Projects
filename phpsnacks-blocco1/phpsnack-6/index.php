<?php

$db = [
        'teachers' => [
            [
                'name' => 'Michele',
                'lastname' => 'Papagni'
            ],
            [
                'name' => 'Fabio',
                'lastname' => 'Forghieri'
            ]
        ],
        'pm' => [
            [
                'name' => 'Roberto',
                'lastname' => 'Marazzini'
            ],
            [
                'name' => 'Federico',
                'lastname' => 'Pellegrini'
            ]
        ]
    ];

        // $data = array_keys($db);

        // echo $db['name'];

    
        // foreach ($data as $d) {
            
        //     echo $d;
        //     echo '<br>';


        //     $sdb = $db[$d];


            // foreach ($sdb as $data) {
            //     echo '<h1 style="background: gray">'.$data['name'].'</h1>';
            //     echo '<br>';
            //     echo '<h1 style="background: green">'.$data['lastname'].'</h1>';
            //     echo '<br>';
                
            // }


            // CORREZIONE
            $teachers = $db['teachers'];
            $pms = $db['pm'];
        

    ?>

    <div style="background:gray">
        <?php

            foreach ($teachers as $teacher) {

                echo $teacher['name'] . ' ' . $teacher['lastname'] . '<br>';
            }

        ?>    
    </div>
    <div style="background:green">
        <?php

            foreach ($pms as $pm) {

                echo $pm['name'] . ' ' . $pm['lastname'] . '<br>';
            }

        ?>    
    </div>


    <!-- Utilizzare questo array: https://pastebin.com/CkX3680A.
Stampiamo il nostro array mettendo gli insegnanti in un rettangolo grigio
e i PM in un rettangolo verde. -->
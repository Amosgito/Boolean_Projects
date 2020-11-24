<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
<style>
    * {

        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {

        width: 100vw;
        height: 100vh;
        background: purple;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: white;
    }

    h1 {

        margin-bottom: 10px;
    }

    div {

        border: 1px solid white;
        border-radius: 5px;
        padding: 20px;
        width: 200px;
        margin-bottom: 20px;
    }
</style>

</head>
<body>

<h1>User</h1> 
   
<?php

        class User {

            public $name;
            public $password;

            public function __construct($name, $password) {

                $this -> name = $name;
                $this -> password = $password;
            } 

            public function __toString() {

                return "name: " . $this -> name .  "<br>"
                        ."password: " . $this -> password . "<br>";
            }
        }

        $user1 = new user("davide", "8357234895");
        $user2 = new user("bix", "òakjfngbh");
?>

        <div>
        <?php echo $user1;?> 
        </div>
        <div>
        <?php echo $user2;?> 
        </div>

</body>
</html>





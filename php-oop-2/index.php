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

            margin: 10px;
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

    <?php

    class Square {

        public $lato;

        public function __construct($lato) {

            $this -> lato = $lato;
        }

        public function getArea() {

            return $this -> lato * $this -> lato;
        }

        public function getPerimeter() {

            return 4 * $this -> lato;
        }

        public function __toString() {

            return "area: " . $this -> getArea() . "<br>"
                            . "perimeter: " . $this -> getPerimeter() . "<br>";
        }
    }

    class Cube extends Square{

        public function __construct($lato) {

            parent::__construct($lato);
        }

        public function getCubeArea() {

            return 6 * ($this -> lato * $this -> lato);
        }

        public function getCubeVolume() {

            return $this -> lato * $this -> lato * $this -> lato;
        }

        public function __toString() {

            return "area: " . $this -> getCubeArea() . "<br>"
            . "volume: " . $this -> getCubeVolume() . "<br>";
        }
    }

$sq1 = new Square(10);
$sq2 = new Square(25);

$cu1 = new Cube(5);
$cu2 = new Cube(32);

    ?>

    <h1 class="square">Square</h1>
    <div>
        <?php
           echo "Square 1 :<br>" . $sq1 . "<br>" . "Square 2 :<br>" . $sq2 . "<br>";
        ?>
    </div>
    <h1 class="cube">Cube</h1>
    <div>
        <?php
           echo "Cube 1:<br>" . $cu1 . "<br>" . "Cube 2:<br>" . $cu2;
        ?>
    </div>

</body>

</html>

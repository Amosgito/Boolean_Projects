

 
    var array = [];        

    while (array.lenght < 5 ) {
        var numRand= getRandomIntInclusive(1, 90);
        if (array.includes(numRand) == false) {
            array.push(numRand) ;
        }
        
    }
    console.log(array);
    
    alert(array);

    var time = 30;
    
    setTimeout(askNumberUser, 30000)




    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; //Il max è incluso e il min è incluso 
      }

    function askNumberUser() {
        var numberUser = [];

        while (numberUser.length < array.length) {
            var number = parseInt(prompt("dammi i numeri che hai visto uno alla volta"));
            if(!numberUser.includes(number)) {
                numberUser.push(number);
            }
        }

        var numOk = [];
        for (var i= 0; i < numberUser.length; i++) {
            if(array.includes(numberUser[i])) {
                numOk.push(number);
            }
        }

    console.log("numeri indovinati", numOk);
    }

    function showTime() {
        console.log(time);
        if(time == 0) {
            clearInterval(timer);
            askNumberUser();
        }
    }
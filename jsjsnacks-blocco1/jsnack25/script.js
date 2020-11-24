
function newNumberArray () {

    var clientNum = parseInt(prompt("how many numbers?"));
    

    

        $.ajax({

            url: "https://flynn.boolean.careers/exercises/api/array/integers?min=1&max=100&items=0" + clientNum,
            method: "GET",
            success: function ( data, state) {
    
                var success = data["success"];
                var arr = data["response"];
    
                arraySumCalc(arr);
            },
    
            error: function (request, state, error) {
    
                console.log("there was an error" + error);
                console.log("there was an error" + state);
                console.log("there was an error" + request);
            }
        
        })
    }






function arraySumCalc(arr) {

    var sum = 0;

    for (var i=0; i<arr.length;i++) {

        var elem = arr[i];
        sum += elem;
    }

    console.log("arr", arr);
    console.log("sum", sum);
}

function init() {

    newNumberArray();
}


$(document).ready(init);




// Chiedere all'utente quanti elementi vuole includere nell'array.
// Generare attraverso l'API (array/integers) un array contenente N numeri
// compresi tra 1 e 100.
// Stampare a schermo la somma dei numeri generati.

// https://flynn.boolean.careers/exercises/api/array/integers?min=n&max=n&items=n
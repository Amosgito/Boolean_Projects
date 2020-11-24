
function getRandomInt () {

        $.ajax({

            url: "https://flynn.boolean.careers/exercises/api/array/integers?min=1&max=100&items=50",
            method: "GET",
            success: function (data) {
    
                var success = data["success"];
                var arr = data["response"];

                useRandomIntTest();
            },
    
            error: function (request, state, error) {
    
                console.log("there was an error" + error);
                console.log("there was an error" + state);
                console.log("there was an error" + request);
            }
        
        })
    }

function useRandomIntTest(arr) {

    console.log("arr", arr);

    var cont = true;
    while (cont) {

        var number= parseInt(prompt("get me integer number"));
        var isNumberIncluded = arr.includes(number);

        console.log(isNumberIncluded);

        if(isNumberIncluded) {

            console.log("ok");
        
        }else {

            cont = false;
        }

        console.log("the end")
    }
}


function init() {

    getRandomInt();
}


$(document).ready(init);




// Con l'aiuto dell'API Boolean a questo indirizzo (
//     www.boolean.careers/api/array/integers?min=minvalue&max=maxvalue&nItems=number,
//     ), creare un array di 50 numeri compresi tra 1 e 100
//     Chiedere all'utente un numero compreso tra 1 e 100. Se il
//     numero è compreso tra i 50 numeri precedentemente
//     estratti allora il gioco continua, altrimenti termina.
//     Qualora finisca indicare quanti numeri corretti sono stati
//     indovinati
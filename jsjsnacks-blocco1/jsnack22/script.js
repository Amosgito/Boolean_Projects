
function btnListener () {

    var btn = $("#button");
    btn.click(getNewArray);
}



function getNewArray () {

    $.ajax({

        url: "https://flynn.boolean.careers/exercises/api/array/integers?min=50&max=100&items=10",
        method: "GET",
        success: function (data, state) {

            console.log(data);

            var evenTarget = $("#even");
            var oddTarget = $("#odd");
            var success = data["success"];
            var values = data["response"];

            if(success) {

                for (var i= 0; i < values.length; i++) {

                   var value = values[i];
                   var isValueEven = (value % 2 === 0)
                    
                   if (isValueEven) {

                     evenTarget.append(value + "<br>");
                   } else {

                     oddTarget.append(value + "<br>");
                   }
                }
            }
        },

        error: function (request, state, error) {

            console.log("there was an error" + error);
            console.log("there was an error" + state);
            console.log("there was an error" + request);
        }
    })
}

function init() {

    btnListener();
}


$(document).ready(init);


// Creare e stampare a schermo una frase contenente N parole (N in base a quante ne vuole generare l'utente attraverso un prompt), grazie all'utilizzo dell'API e dell'URL random/word.

// https://flynn.boolean.careers/exercises/api/random/word

function btnListener () {

    var btn = $("#button");
    btn.click(getNewWord);
}



function getNewWord () {

    var wordTarget = $("#word");
    wordTarget.html("");

    var words = parseInt(prompt("give me a number 10-20"));

    for (var i = 0; i < words; i++) {

        $.ajax({

            url: "https://flynn.boolean.careers/exercises/api/random/word",
            method: "GET",
            success: function ( data, state) {
    
                var success = data["success"];
                var word = data["response"];
    
                if(success) {
                        
                        wordTarget.append(word + " ")
                        
                    
    
                }
            },
    
            error: function (request, state, error) {
    
                console.log("there was an error" + error);
                console.log("there was an error" + state);
                console.log("there was an error" + request);
            }
        
        })
    }

    
}




function init() {

    btnListener();
}


$(document).ready(init);


// Creare e stampare a schermo una frase contenente N parole (N in base a quante ne vuole generare l'utente attraverso un prompt), grazie all'utilizzo dell'API e dell'URL random/word.

// https://flynn.boolean.careers/exercises/api/random/word
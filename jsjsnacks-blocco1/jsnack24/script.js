
function newNameArray () {


    var nameArray = [];

    for (var i = 0; i < 10; i++) {

        $.ajax({

            url: "https://flynn.boolean.careers/exercises/api/random/word",
            method: "GET",
            success: function ( data, state) {
    
                var success = data["success"];
                var word = data["response"];
    
                if(success) {
                        
                    nameArray.push(word);
                    
                }
            },
    
            error: function (request, state, error) {
    
                console.log("there was an error" + error);
                console.log("there was an error" + state);
                console.log("there was an error" + request);
            }
        
        })
    }

    console.log(nameArray);

    var userName = prompt("give me your name");
    var welcomeTarget = $("#word");
    var welcome = "<h1>Welcome to the party!!!</h1>";
    var getOut = "<h1>Get ot of here!</h1>";

    if (nameArray.includes(userName)) {

        welcomeTarget.append(welcome);
    } else {

        welcomeTarget.append(getOut);
    }

    
}




function init() {

    newNameArray();
}


$(document).ready(init);




// Chiedere all'API 10 nomi da inserire in un array di invitati.
// Una volta generata la lista chiedere all'utente di dire il proprio nome. Se è uno
// degli invitati ritornare un messaggio di benvenuto, altrimenti di accesso
// negato.

// https://flynn.boolean.careers/exercises/api/random/word
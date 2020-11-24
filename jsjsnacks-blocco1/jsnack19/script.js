// generare n array di 10 numeri casuali da 1-100 quanti dice l'utente tramite prompt e stampare gli array

var n = parseInt(prompt("inserisci un numero"));

for (var i = 0; i < n; i++) {
    var array = [];
    for (var j = 0; j < 10; j++) {
        array.push(Math.ceil(Math.random() *100)) ;
    }
    console.log(array);
 }
 
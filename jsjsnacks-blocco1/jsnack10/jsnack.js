// Calcola la somma e la media di 10 numeri chiesti all'utente.


var sum = 0;
for (var i = 0; i < 10; i++) {
    var numeri = parseInt(prompt("dammi un numero"));
    sum += numeri;
}

console.log("la somma del numero è " + sum);
console.log("la media del numero è " + (sum/10));

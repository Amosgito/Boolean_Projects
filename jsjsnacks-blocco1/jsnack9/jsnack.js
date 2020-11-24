// Chiedi un numero di 4 cifre all’utente e calcola la somma
// di tutte le cifre che compongono il numero.
//


//-------------------------------

// var stringaNumero = []
// var numero = parseInt(prompt("dammi un numero da 4 cifre"));
// stringaNumero.push(numero);
// console.log(stringaNumero);
//
// var n = numero % 10;
// var a = Math.floor(numero/10);
// var n1 = a % 10;
// var a1 = Math.floor(a/10);
// var n2 = a1 % 10;
// var a2 = Math.floor(a1/10);
// console.log(n);
// console.log(a);
// console.log(n1);
// console.log(a1);
// console.log(n2);
// console.log(a2);
//
// console.log(n + n1 + n2 + a2);
//
//-----------------------------------------

var numero = prompt("dammi un numero di 4 cifre");

var sum = 0;

for (var i = 0; i < numero.length; i++) {
  sum += parseInt(numero[i]);
}
console.log(sum);

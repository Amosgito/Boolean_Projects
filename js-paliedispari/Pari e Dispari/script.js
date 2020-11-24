// var parDis = prompt("scegli pari o dispari")
// var numUtente = parseInt(prompt("dammi un numero"));
// var numPc = Math.ceil(Math.random() * 50);
// var somma = (numUtente + numPc);
//
// if (somma % 2 == 0 && parDis == "pari") {
//   console.log("HAI VINTO!");
// } else if (somma % 2 == 1 && parDis == "dispari") {
//   console.log("HAI VINTO!");
// } else {
//   console.log("VINCE IL PC");
// }
//
// console.log("Tua scelta: " + parDis);
// console.log("Tuo Numero: " + numUtente);
// console.log("Numero Pc: " + numPc);
// console.log("Somma: " + somma);

// correzione

do {
  var scelta = prompt("pari o dispari?")
}while (scelta != "pari" && scelta != "dispari")

var numUtente = parseInt(prompt("dammi un numero"));
var numPc = getRandomInt(1, 100)
var somma = numPc + numUtente;

if (isPari(somma) == true && scelta == "pari") {
  console.log("HAI VINTO");
}else {
  console.log("HAI PERSO");
}

console.log("tua scelta " + scelta);
console.log("tuo numero " + numUtente);
console.log("numero PC " + numPc);
console.log("somma " + somma);

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Il max è escluso e il min è incluso
}
function isPari(somma) {
  if (somma % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

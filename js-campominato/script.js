// genero l'array di 16 numeri casuali del pc
var numeri = [];

while (numeri.length < 16) {
  var numRand = getRandomIntInclusive(1, 100)
  if (!numeri.includes(numRand)) {
    numeri.push(numRand);
  }
}

console.log(numeri);


//chiedo all'utente tramite prompt di inserire 16 numeri da 1-100 uno alla volta finche non immette un numero presente nell'array del pc, in tal caso stampo hai perso. se immette il numero per il numerop di volte stabilito senza ripetere i numeri del pc l'utente vince.

var numeriUtente = [];
var numUtente;
var gameLosed = false;
var tentativi = 5;

while (numeriUtente.length < tentativi && gameLosed == false) {
  numUtente = parseInt(prompt("dammi un numero da 1-100"));
  numeriUtente.push(numUtente);

  if (numeri.includes(numUtente)) {
    console.log("hai perso");
    gameLosed = true;
  }
  if (numeriUtente.length == tentativi && !numeri.includes(numeriUtente))
    console.log("hai vinto")
}

//stampo le volte che l'utente ha immesso un numero prima di perdere o alla vincita con un .length
console.log("il tuo punteggio è " + numeriUtente.length);


// I numeri non possono essere duplicati
// L’utente non può inserire più volte lo stesso numero.


// funzioni
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Il max è incluso e il min è incluso
}

function correctNum(min, max, num) {
  if (num > min && num < max && num != NaN) {
    return true;
  }
}
// Scrivi un generatore di frasi della Fortuna...
// ad ogni refresh della pagiuna comparirà una frase a caso tra un set di frasi

var frasi = [
  "Oggi troverai una cosa dimenticata",
  "Ciò che è fatto è fatto",
  "Il buon giorno si vede dal mattino",
  "Sicuro di aver chiuso il gas?",
  "Chi semina vento raccoglie tempesta",
  "Il mattino ha l’oro in bocca",
  "Tanto va la gatta al lardo che ci lascia lo zampino"
];

// var fraseRandom = Math.floor((Math.random() * frasi.length));
// var randomFrase = frasi[fraseRandom];
//
// console.log(randomFrase);


var numRand = getRandomIntInclusive(0, frasi.length - 1);
console.log(numRand);
console.log(frasi[numRand]);
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  var result = Math.floor(Math.random() * (max - min + 1)) + min; //Il max è incluso e il min è incluso
  return result;
}

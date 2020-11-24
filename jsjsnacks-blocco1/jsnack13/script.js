// scriviamo un software slotmachine

var simboli = [

]

console.log(simboli);
var simbolo1 = [getRandomIntInclusive(0, simboli.length - 1)];
var simbolo2 = [getRandomIntInclusive(0, simboli.length - 1)];
var simbolo3 = [getRandomIntInclusive(0, simboli.length - 1)];

if (simbolo1 == sombolo2 && simbolo1 == simbolo3) {
  console.log("hai vinto");
}else {
  console.log("hai perso");
}


function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Il max è incluso e il min è incluso
}

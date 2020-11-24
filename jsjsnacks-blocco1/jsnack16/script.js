// crea un array di numeri interi e somma quelli in posizione dispari

var numeri = [];


for (var i = 1; i < 10; i++) {
  var numRand = getRandomIntInclusive(1, 100)
  numeri.push(numRand)
}

console.log(numeri);



function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Il max è incluso e il min è incluso
}

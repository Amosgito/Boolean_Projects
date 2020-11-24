// Crea due array che hanno un numero di elementi diversi. Aggiungi elementi casuali all’array che ha meno elementi, fino a quando ne avrà tanti quanti l’altro.

var array1 = [
  "Gianfranco",
  "Pippo",
  "Giosualdo",
  "Annibale",
  "Pluto",
  "Mario"
];
var array2 = [
  "Ferrari",
  "Esposito",
  "Bianchi",
  "Romano",
  "Colombo",
  "Ricci",
  "Marino",
  "Greco"
];




if (array1.length < array2.length) {
  while (array1.length < array2.length) {
    var newElement = [getRandomIntInclusive(0, array1.length - 1)];
    array1.push(array1[newElement]);
  }
}else {
  while (array2.length < array1.length) {
    var newElement2 = [getRandomIntInclusive(0, array2.length - 1)];
    array2.push(array2[newElement2]);
  }
}

console.log(array1);
console.log(array2);

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Il max è incluso e il min è incluso
}

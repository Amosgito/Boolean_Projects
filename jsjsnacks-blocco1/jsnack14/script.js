// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di invitati.

var nomi = [
 "Gianfranco",
 "Pippo",
 "Giosualdo",
 "Annibale",
 "Pluto",
 "Mario"
]
var cognomi = [
  "Ferrari",
 	"Esposito",
 	"Bianchi",
 	"Romano",
 	"Colombo",
 	"Ricci",
 	"Marino",
  "Greco"
]


var nomiCognomi = [];

for (var i = 0; i < nomi.length; i++) {
  var nome = [getRandomIntInclusive(0, nomi.length - 1)];
  var cognome = [getRandomIntInclusive(0, cognomi.length - 1)];
  nomiCognomi.push(cognomi[cognome] + " " + nomi[nome]);
}

console.log(nomiCognomi);

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Il max è incluso e il min è incluso
}

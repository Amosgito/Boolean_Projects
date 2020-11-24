var parola = prompt("dammi una parola a caso e ti diro se è palindroma");
var parolaInv = reverseString(parola);
var joinArray;
var reverseArray;
var splitString;

if (parolaInv == parola) {
  console.log("la parola " + parola + " è palindroma");
}else {
  console.log("la parola " + parola + " non è palindroma");
}

console.log("l'inverso di " + parola + " è" + " " + parolaInv);


function reverseString(str) {
    splitString = str.split("");
    reverseArray = splitString.reverse();
    joinArray = reverseArray.join("");
    return joinArray;
}

// var parola = prompt("dammi una parola");
// var palindroma = "";
//
// for (var i = parola.length - 1; i > 0; i--) {
//   palindroma += parola[i];
// }
// console.log(palindroma);

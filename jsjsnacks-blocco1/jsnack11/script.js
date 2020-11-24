// Inserisci un numero, se è pari stampa il numero, se e dispari stampa il numero successivo

var num = parseInt(prompt("dammi un numero"));

if (num % 2 == 0) {
  console.log(num);
}else {
  console.log(num + 1);
}

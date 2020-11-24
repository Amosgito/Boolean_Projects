// creo un array
var arrayNumeri = [];
var sum = 0;
// chiedo all'utente di inserire un numero alla volta

// fino a che la somma dei numeri è minore di 50

while (sum < 50) {
    var numero = parseInt(prompt("inserisci un numero"));
    sum = sum + numero;
    if(sum < 50){
        arrayNumeri.push(numero);
    }
    
    console.log(sum);
}

console.log(arrayNumeri);


//chiedo il nome
var nome = prompt("qual'e il tuo nome?");

//chiedo il cognome
var cognome = prompt("e il tuo cognome?");

//chiedo il colore preferito
var colore = prompt("e invece il tuo colore preferito?");

// genero un numero a caso
var ranNum = Math.floor(Math.random() * 100) + 1;

//stampo in pagina la password molto sicura
document.getElementById("password").innerHTML = nome + cognome + colore + ranNum;


var cognome = prompt("dammi il tuo cognome");

var cognomi = ["Rodolfi", "Giuppolini", "Zambambri"];


cognomi.push(cognome);
cognome = toLowerCase(); 
cognomi.sort();
console.log(cognomi);
console.log(cognomi.indexOf(cognome)+1);

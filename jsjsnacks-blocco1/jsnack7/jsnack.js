// Stampa il cubo dei primi N numeri, dove N è un numero
// indicato dall’utente.


var btn = document.getElementById("btn");

btn.addEventListener("click", function(){
  var n = parseInt(document.getElementById("input").value);

  for (var i = 1; i < n + 1; i++) {
    console.log(i**3)
  }
})

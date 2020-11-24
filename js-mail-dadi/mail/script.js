

var listaEmail = ["gianni@gmail.com", "giacomo@gmail.com", "pippo@gmail.com", "arianna@gmail.com", 4, 6, 200];
var inputemail = document.getElementById("email").value;
var mailTrovata = false;
var btn = document.getElementById("btn");

btn.addEventListener("click", function() {
  for (var i = 0; i < listaEmail.length; i++) {
    if (inputemail == listaEmail[i]) {
      mailTrovata = true;
    }
  };
  if (mailTrovata == true) {
    document.getElementById("risultato").innerHTML = "la mail è presente";
  }else {
document.getElementById("risultato").innerHTML = "la mail NON è presente";  };
});

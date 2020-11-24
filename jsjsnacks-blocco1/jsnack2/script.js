var name;
var surname;
var sendBtn = document.getElementById("sendBtn");

sendBtn.addEventListener("click", function (){

  name = document.getElementById("Nome").value;
  surname = document.getElementById("Cognome").value;

  document.getElementById("fullname").innerHTML = name + " " + surname;
  //console.log(name + surname);
});

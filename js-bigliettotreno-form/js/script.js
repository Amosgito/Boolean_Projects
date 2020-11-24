var nome;
var km;
var categoria;
var prezzoKm = 0.21;
var prezzoBiglietto;
var scontoVenti;
var scontoQuaranta;
var creabtn = document.getElementById("crea");
var annullabtn = document.getElementById("annulla");
var elem = document;

creabtn.addEventListener("click", function(){
  nome = elem.getElementById("nome").value;
  km = elem.getElementById("km").value;
  categoria = elem.getElementById("categoria").value;

  prezzoBiglietto = prezzoKm * km;
  scontoVenti = prezzoBiglietto * 0.8;
  scontoQuaranta = prezzoBiglietto * 0.6;

  if (categoria == "Minorenne") {
    elem.getElementById("prezzo").innerHTML = scontoVenti;
  } else if (categoria == "Over65") {
    elem.getElementById("prezzo").innerHTML = scontoQuaranta;
  } else {
    elem.getElementById("prezzo").innerHTML = prezzoBiglietto;
  }

  elem.getElementById("categoria").innerHTML = categoria;
  elem.getElementById("name").innerHTML = nome;
  elem.getElementById("carrozza").innerHTML = Math.ceil(Math.random() * 30);
  elem.getElementById("numeroTreno").innerHTML = Math.ceil(Math.random() * (90000 - 70000 + 1) ) + 70000;
});

annullabtn.addEventListener("click", function(){
  elem.getElementById("name").innerHTML = "";
  elem.getElementById("numeroTreno").innerHTML = "";
  elem.getElementById("carrozza").innerHTML = "";
  elem.getElementById("categoria").innerHTML = "";
  elem.getElementById("prezzo").innerHTML = "";
});

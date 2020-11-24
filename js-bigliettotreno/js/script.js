var nome;
var km;
var categoria;
var prezzoKm = 0.21;
var prezzoBiglietto; //= km * prezzoKM;
var scontoVenti; //= prezzoBiglietto * 0.8;
var scontoQuaranta; //= prezzoBiglietto * 0.6;
var creabtn = document.getElementById("crea");
var elem = document;

creabtn.addEventListener("click", function(){
  nome = elem.getElementById("nome").value;
  km = elem.getElementById("km").value;
  categoria = elem.getElementById("categoria").value;

  prezzoBiglietto = prezzoKm * km;
  scontoVenti = prezzoBiglietto * 0.8;
  scontoQuaranta = prezzoBiglietto * 0.6;

  if (eta < 18) {
    elem.getElementById("prezzo").innerHTML = scontoVenti;
  } else if (eta > 65) {
    elem.getElementById("prezzo").innerHTML = scontoQuaranta;
  } else {
    elem.getElementById("prezzo").innerHTML = prezzoBiglietto;
  }

});

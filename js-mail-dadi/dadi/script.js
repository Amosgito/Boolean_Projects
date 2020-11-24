var dado1 = Math.ceil(Math.random() * 6);
var dado2 = Math.ceil(Math.random() * 6);

document.getElementById("btn").addEventListener("click", function {
  if (dado1 < dado2) {
    console.log("vince giocatore");
  }else if (dado1 > dado2) {
    console.log("vince computer");
  }else {
    console.log("parità");
  }
});

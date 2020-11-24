
var btn = document.getElementById("btn");


btn.addEventListener("click", function() {
 var num = parseInt(prompt("dimmi un numero"));
 var par = document.getElementById("P");

 if (num > 0) {
   par.className = "green";
 } else if (num < 0) {
   par.className = "red";
 } else {
   par.className = "blue";
 }

 // par.calssList.remove("green", "red", "blue");
 //
 // if (num > 0) {
 //   par.classList.add("green");
 // } else if (num < 0) {
 //   par.classList.add("red");
 // } else {
 //   par.classList.add("blue");
 // }


});

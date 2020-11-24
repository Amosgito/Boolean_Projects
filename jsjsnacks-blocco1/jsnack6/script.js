var btn = document.getElementById("btn");

btn.addEventListener("click", function() {

 var num = Math.floor(Math.random() * 10);
 var elem = document.getElementById("p");
 console.log(num);

 if (num%2 == 0) {
   elem.classList.add("testa");
   elem.classList.remove("croce");
 } else {
   elem.classList.add("croce");
   elem.classList.remove("testa");
 }

});

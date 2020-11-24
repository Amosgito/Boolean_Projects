var btn = document.getElementById("btn");

btn.addEventListener("click", function() {

 var num = Math.ceil(Math.random() * 10);
 var elem = document.getElementById("p");
 console.log(num);

 if (num%2 == 0) {
   elem.classList.add("pari");
   elem.classList.remove("dispari");
 } else {
   elem.classList.add("dispari");
   elem.classList.remove("pari");
 }

  elem.innerHTML = num;
});

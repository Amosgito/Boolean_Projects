
for (var i = 1; i < 101; i++) {
    if ((i % 5 == 0) && (i % 3 == 0)) {
    document.getElementById("print").innerHTML += " <li class='colorthree'>fizzbuzz</li>";
  }
    else if (i % 3 == 0) {
    document.getElementById("print").innerHTML += " <li class='colorone'>fizz</li>";
  } else if (i % 5 == 0) {
    document.getElementById("print").innerHTML += " <li class='colortwo'>buzz</li>";
  } else {
    document.getElementById("print").innerHTML += " " + "<li>" + (i) + "</li>";
  }


}

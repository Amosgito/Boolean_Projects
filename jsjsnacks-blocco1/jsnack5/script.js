var num1;
var num2;
var op;
var calcBtn = document.getElementById("calcBtn");
var result;

calcBtn.addEventListener("click", function(){

  num1 = parseInt(document.getElementById("num1").value);
  num2 = parseInt(document.getElementById("num2").value);
  op = document.getElementById("operatore").value;
  result = document.getElementById("result");

  if (op == 1) {
    result.innerHTML = num1 + num2;
  } else if (op == 2) {
    result.innerHTML = num1 - num2;
  }else if (op == 3) {
    result.innerHTML = num1 * num2;
  }else {
    result.innerHTML = num1 / num2;
  }
});

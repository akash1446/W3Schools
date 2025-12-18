function myFunction() {
  var x = document.getElementsByClassName("city");
  for (var i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
}
function displayResult() {
  document.getElementById("myHeader").innerHTML = "Have a nice day!";
}

let $x = 5;
let $y = 6;
let $z = $x + $y;

document.getElementById("demo").innerHTML="The value of z is " + $z;


const _a = 10;
const _b = 12;
const _c = _a * _b;

document.getElementById("demo").innerHTML="The value of c is " + _c;

let carName = "Volvo"

document.getElementById("demo").innerHTML = carName;
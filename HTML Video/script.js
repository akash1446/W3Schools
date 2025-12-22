document.getElementById("demo").innerHTML="<h2>Hello World</h2>";
window.alert(5+6);
alert(20*30);
console.log(50/4);

let text = "";
let i =1;

while(i < 10){
    text +=i;
    i++;
}

document.getElementById("demo").innerHTML =text;

let x = false

let y = new Boolean(false);

document.getElementById("demo").innerHTML = typeof x + "<br>" + typeof y;
let name = null;
let text = "missing"
let result = name ?? text;

document.getElementById("oper").innerHTML="the name is" + result;


let i = 5;

for(let i = 0; i < 10; i++){

}
document.getElementById("loops").innerHTML=text;

while(i < 10){
    text +="The number is " +i;
    i++;
}
document.getElementById("loop").innerHTML=text;

const bikes = ['Glamour','Hero','Tvs','Fasion pro']
let len = bikes.length;

let k = 5;


for(let k = 0;k < 10; k++ ){
    if( k ==3){break ;}
    text+= "The number is  " + i + "<br>";
  
}

document.getElementById("loops").innerHTML=text1;



do {
    type += "The number is " +i;
    i++;
}
while(i < 20);
document.getElementById("oper").innerHTML=type;



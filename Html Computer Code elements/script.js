let age = 16;
let country = "India"
let text = "You can go to Hyderabad";

if(country == "India" && age >= 16){
    text = "you can drive!";
}

document.getElementById("cs").innerHTML = text;

let text1;
if (Math.random() < 0.5){
    text1 = "<a href='https://www.frontlinesedutech.com/'>visit FLM</a>"
}
else{
    text = "<a href='https://www.w3schools.com/js/tryit.asp?filename=tryjs_randomlink'>visit WWF</a>"    
}
document.getElementById("cs").innerHTML = text;
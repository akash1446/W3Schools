try{
const PI = 3.14;
PI = 3.1415;
PI = PI + 10;
}
catch(err){
    document.getElementById("pi").innerHTML=err;
}

const cars = ["saab", "Volvo", "BMW"];

cars[0] = "GLAMOUR";

cars.push("AUdi");

document.getElementById("pi").innerHTML=cars;


document.getElementById("pi").innerHTML =
typeof " " + "<br>" +
typeof "akash" + "<br>" +
typeof "akash Doe" +  "<br>" +
typeof 0 + "<br>" +
typeof 314 + "<br>" +
typeof 3.14 + "<br>" +
typeof (3) + "<br>" +
typeof (3 + 4);

console.log(true == '1');

const array = [1,2,3]
const[first, , third] = array;
console.log(first, third);


let x = 10;
function myFunc(){
     x = 20;
    console.log(x);
}
console.log(x);
myFunc();
console.log(x);


const fruits = ['apple','banana','cherry'];
const[firstFruit, , thirdFruit] = fruits;
console.log(firstFruit, thirdFruit);

console.log(typeof null)

let c = 'hello'
let d =c;
d = 'world';
console.log(c);


let a = [10,20,30,40];
let b = a.map(Math.sqrt);
console.log(b);

console.log([1,2,3].includes(2));


var a1 = 10,
b1=20;
function foo(a1){
    a1 = b1;
    var b1 = a1;
    return a1+b1;
}
console.log(foo(a1));


const data = {x:1, y:2,z:3};
const{z:y} = data;
console.log({z:y});

let A = '5';
let B =5;
console.log(a==b);
console.log(a===b);
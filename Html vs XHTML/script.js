let x = new String("sri");
let y = new String("ram");
document.getElementById("string").innerHTML = (x==y);

let header = "Template Strings";
let tags = ["template strings", "javascript", "es6"];

let html = `<h2>${header}</h2><ul>`;

for (const x of tags) {
  html += `<li>${x}</li>`;
}

html += `</ul>`;
document.getElementById("templates").innerHTML = html;

let text = "Hello";
const myArr = text.split(" ");

text = "";
for (let i = 0; i < myArr.length; i++) {
  text += myArr[i] + "<br>"
}
document.getElementById("string").innerHTML = text;


let w;
function startWorker() {
  const x = document.getElementById("result");
  if(typeof(Worker) !== "undefined") {
    if(typeof(w) == "undefined") {
      w = new Worker("demo_workers.js");
    }
    w.onmessage = function(event) {
      x.innerHTML = event.data;
    };
  } else {
    x.innerHTML = "Sorry! No Web Worker support.";
  }
}

function stopWorker() { 
  w.terminate();
  w = undefined;
}
let a =10
let b=20
let x = 100 + 50 * a - b;
document.getElementById("operator").innerHTML=x;


let z = 10
let y = 20
y++
z--
let k = z / y % y
document.getElementById("operator").innerHTML=k;
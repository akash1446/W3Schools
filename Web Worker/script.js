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

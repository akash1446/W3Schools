const x = document.getElementById("akash");
if(typeof(Worker) !== "undefined") {
  x.innerHTML = "Your browser support Web Workers!";
} else {
  x.innerHTML = "Sorry, your browser does not support Web Workers.";
}
var i = 1;

function timedCount(){
    i = i+1;
    postMessage(i);
    setTimeout("timedCount()",600);
}

timedCount();
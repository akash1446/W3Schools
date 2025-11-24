const x=document.getElementById("result");
if(typeof(Storage)!=="undefined"){
    x.innerHTML = "Your browser support web page!";
}
else{
    x.innerHTML="Sorry, no web Storage  support!";
}
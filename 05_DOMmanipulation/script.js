let x = document.querySelector("h1");
x.style.color="red";
x.style.backgroundColor="yellow";

setTimeout(()=>{
  x.innerHTML="HI";
},5000);

x.addEventListener("click",()=>{
  x.style.color="orange";
  x.style.backgroundColor="green";
});

document.getElementById("welcome").addEventListener("mouseenter",()=>{
  document.getElementById("welcome").style.color="seagreen";
  document.getElementById("welcome").style.backgroundColor="lightblue";
  
});


//  setInterval and clearInterval 

let intervalId = null;

function nameFunc() {
  console.log("Jagriti");
}

function setInt() {
  if (intervalId === null) {
    intervalId = setInterval(nameFunc, 1000);
  }
}

function stopFunc() {
  clearInterval(intervalId);
  intervalId = null;
  console.log("Stopped");
}

document.getElementById("start").addEventListener("click", setInt);
document.getElementById("stop").addEventListener("click", stopFunc);

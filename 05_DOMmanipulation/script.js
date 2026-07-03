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
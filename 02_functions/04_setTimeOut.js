setTimeout(()=>{
  console.log("hello");
}, 5000);
const timeoutId = setTimeout(() => {
  console.log("This won't run");
}, 3000);

clearTimeout(timeoutId);
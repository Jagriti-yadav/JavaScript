arr = [1,2,3,4];
function square(num){
  return num*num;
}
brr = arr.map(square);
console.log(brr);

arr = arr.map((num)=>{
  return num*num;
});
console.log(arr);
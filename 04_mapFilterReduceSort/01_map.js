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

//generate some code to square the numbers in an array using map function
const numbers = [5, 6, 7, 8];
const squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers); // Output: [25, 36, 49, 64]
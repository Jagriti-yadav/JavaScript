arr = [1,2,3,4,5];
brr = arr.filter((num)=>{
  if(num%2==0){
    return true;
  }else{
    return false;
  }
});
console.log(brr);
//generate some code to filter out even numbers from an array using filter function
const numbers = [10, 15, 20, 25, 30];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [10, 20, 30]
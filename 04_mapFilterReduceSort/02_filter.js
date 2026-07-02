arr = [1,2,3,4,5];
brr = arr.filter((num)=>{
  if(num%2==0){
    return true;
  }else{
    return false;
  }
});
console.log(brr);
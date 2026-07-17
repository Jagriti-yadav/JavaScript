const promiseOne = new Promise(function(resolve,reject){
  setTimeout(function(){
    console.log("promiseOne created");
    resolve();
  })
});

console.log(promiseOne);
promiseOne.then(function(){
  console.log("promiseOne resolved");
})

const promiseTwo = new Promise(function(resolve,reject){
  setTimeout(function(){
    resolve({"name":"jagriti", "age":22});
  })
});
promiseTwo.then(function(data){
  console.log(data);
})


const promiseFour = new Promise(function(resolve,reject){
  setTimeout(function(){
    let error = false;
    if(!error){
      resolve({"name":"jagriti", "age":22});
    }else{
      reject("Error: Something went wrong");
    }
  },1000)
});
promiseFour.then(function(user){
  console.log(user);
  return user.name;
}).then(function(username){
  console.log(username);
}).catch(function(error){
  console.log(error);
});

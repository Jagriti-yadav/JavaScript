function User(name,age,isloggin){
  this.name = name;
  this.age = age;
  this.isloggin = isloggin;
  return this;
}
//const userone = User("jagriti",22,true);
//const usertwo = User("sakshi",17,false);

//usertwo has overwritten the userone object because we have not used the new keyword while creating the object. so it will return undefined.
//console.log(userone);

const userone = new User("jagriti",22,true);
const usertwo = new User("sakshi",17,false);
console.log(userone);
console.log(userone.age);
console.log(usertwo);
console.log(usertwo.name);
console.log(userone.constructor);


/**********************************************important**********************************************/

//associated with object
console.log(userone.__proto__);
//associated with function
console.log(User.prototype);
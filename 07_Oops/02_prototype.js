let heroes = ["Ironman", "Thor", "Hulk", "Captain America"];
let heropower = {
  name: "Ironman",
  age: 22,
  power: "Intelligence",
  getPower: function(){
    console.log(this.power);
  }
}
Object.prototype.getName = function(){
  console.log("object prototype");
}

//array and object both are derived from object prototype so we can access the getName method from both array and object.
heropower.getName();
heroes.getName();

Array.prototype.getAge = function(){
  console.log("array prototype");
}
//heropower is an object so it will not be able to access the getAge method because it is associated with array prototype.
heropower.getAge();
heroes.getAge();

//prototype inheritance
const User = {
  name:"John"
}
const Teacher = {
  makeVideo: true
}
const TeacherSupport = {
  makeassignment:"JS assignment",
  fulltime:true,
  __proto__:Teacher
}
Teacher.__proto__ = User;


//Modern Javascript syntax
Object.setPrototype(TeacherSupport,Teacher);

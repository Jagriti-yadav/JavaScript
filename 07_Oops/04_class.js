class User{
  constructor(name,age,password){
    this.name = name;
    this.age = age;
    this.password = password;
  }
  encryptPassword(){
    return `Encrypted password is ${this.password}abc`
  }
  changeUsername(){
    return `${this.name.toUpperCase()}`
  }
}
const chai = new User("jagriti",22,123);
console.log(chai.encryptPassword());
console.log(chai.changeUsername());
console.log(chai);


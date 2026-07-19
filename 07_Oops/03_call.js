function setUsername(username){
  this.username = username;
}
function createUser(username,email,password){
  //setUsername(username);
  setUsername.call(this, username);
  this.email = email;
  this.password = password;
}
const newUser = new createUser("jagriti","abc@gmail.com",12345);
console.log(newUser);
// output - createUser { email: 'abc@gmail.com', password: 12345 }
//why username not displayed?
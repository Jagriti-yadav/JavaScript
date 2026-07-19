class User{
  constructor(username,email,password){
    this.username = username;
    this.email = email;
    this.password = password;
  }
  static createId(){
    return `${this.username}`;
  }
}
const user1 = new User("jagriti","jagriti@gmail.com",1234);
//static function cannot accessible 
//console.log(user1.createId());
//
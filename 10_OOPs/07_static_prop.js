class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Usernaem: ${this.username}`);
  }

  //   static keyword doesn't allow instantiated objects to access static-defined property even if it is inherited by child class
  static createId() {
    return `123`;
  }
}

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const yash = new User("yash");
// console.log(yash.createId()); //does't allow to access static property

const iphone = new Teacher("iphone", "iphone@gmail.com");
iphone.logMe();
iphone.createId();

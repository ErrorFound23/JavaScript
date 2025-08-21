// Object literal
const username = "sujal";
const user = {
  username: "yash",
  loginCount: 9,
  signedIn: true,
  getUserDetails: function () {
    // console.log("Got user details from database")
    // const username = "raj";

    // console.log(`Username: ${username}`); // here, username refer local scope username variable which not declare yet that why it return undefined
    console.log(`Username: ${this.username}`); // here, this key word refer current context or object username
  },
};

// console.log(user.username);
// console.log(user.getUserDetails());

// Constructor function
function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function() {
    console.log(`Welcome, ${this.username}`);
    
  }

  return this; // not mandatory
}

// In following case user2 overwrite existing user1 value
// const user1 = User("yash", 23, true);
// const user2 = User("raj", 2, false);

// In following case we create new insteance(or copy which does't effecte on other) of a every User which does't overwrite a existing value
const user1 = new User("yash", 23, true);
const user2 = new User("raj", 2, false);

// console.log(user1);
// console.log(user2);

console.log(user1.constructor); // reference of own 

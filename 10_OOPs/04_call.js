function SetUsername(username) {
  // complex DB calls
  this.username = username;
  console.log("CALLED");
  
}

function createUser(username, email, password) {
//   SetUsername(username);  // in this case javascript hold reference only or we need to call function explicitly like follows
SetUsername.call(this,username)
  this.email = email;
  this.password = password;
}

const chai = new createUser("yash", "yash@gxy.com", "123")
console.log(chai);

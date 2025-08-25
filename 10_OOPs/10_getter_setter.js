class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  // getter
  // getter by default make property into method like follows.
  // when create a getter or setter their name must be same like property name

  get email() {
    return this._email.toUpperCase();
  }

  set email(value) {
    this._email = value;
  }

  get password() {
    // return this._password.toUpperCase()
    return `${this._password}yash`;
  }

  // setter
  set password(value) {
    this._password = value;
  }
}

const yash = new User("yash@420.com", "abc");

console.log(yash.email);
console.log(yash.password);

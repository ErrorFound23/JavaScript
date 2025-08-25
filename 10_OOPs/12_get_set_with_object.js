const User = {
  _email: "yash@420.com", // underscore(_) define private properties
  _password: "abc",

  get email() { // get the data from a memory
    return this._email.toUpperCase()
  },

  set email(value) { // overwrite the already define value 
    this._email = value

  },
};

const tea = Object.create(User)
console.log(tea.email);

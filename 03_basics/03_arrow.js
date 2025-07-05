const user = {
  // block scope can't work with object
  username: "yash",
  price: 99,
  welcomeMessage: function () {
    console.log(`${this.username}, Welcome to website`);
    console.log(this); // this refer current context
  },
};

// user.welcomeMessage();
// user.username = "raj";
// user.welcomeMessage();

// console.log(this); // In node, deno, bun environment this keyword refer to {}(Empty) object when we work globally but in browser this keyword refer to "window" object

// function one() {
//   let username = "yash";
//   console.log(this);

// //   console.log(this.username); // this keyword only work with Object
// }

// one();

// const one = function () {
//   let username = "yash";
//   console.log(this.username);
// };

const one = () => {
  let username = "yash";
  console.log(this);
  console.log(this.username);
};

// one();

// basic arrow function / Explicite return
// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

// Implicite return
// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2);
const addTwo = (num1, num2) => ({username: "yash"})

console.log(addTwo(4, 4));

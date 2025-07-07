// Simpal if statement

const temperature = 55;

// if (temperature < 50) {
//   console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");

// }
// console.log("execute");

// Comparison Operators: >, <, >=, <=, ==, !=, ===, !==

// const score = 200;

// if (score > 100) {
//   let power = "fly";
//   console.log(`User Power: `, power);
// }
// console.log(`User Power: `, power);

const balance = 1000;

// if (balance > 500) console.log("test"); // shorthand

// if (balance > 500) console.log("test"), console.log("test2");
// ;   not good for project Unreadable code

// if (balance < 500) {
//   console.log("less than");
// } else if (balance < 750) {
//   console.log("less than 750");
// } else if (balance < 900) {
//   console.log("less than 900");
// } else {
//   console.log("less than 1200");
// }

const userLoggedIn = true;
const debitcard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitcard && 2 == 3) {
  console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
    
}
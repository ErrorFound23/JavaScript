// Javascript is a dynamicaly type language

// Primitive

// 7 types : String, Number, Boolean, null, undefined, symbol, BigInt

const score = 100;
const scoreValue = 100.3;
const isLoggedIn = false;
const outsideTemp = null;
let userEmail; // by default undifiend
const id = Symbol("123");
const anotherId = Symbol("123");
// console.log(id === anotherId);
const bigNumber = 747334875839584730534573n; // n => refere BigInt
// console.log(bigNumber);

//  Reference (Non-Primitive)

// Array, Object, Function

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name:"yash",
    age: 20,
}

const myFunction = function(){
    console.log("Hello world");
    
}
// myFunction();

console.log(typeof score);
console.log(typeof scoreValue);
console.log(typeof isLoggedIn);
console.log(typeof outsideTemp);
console.log(typeof userEmail);
console.log(typeof id);
console.log(typeof bigNumber);
console.log(typeof heros);
console.log(typeof myObj);
console.log(typeof myFunction);


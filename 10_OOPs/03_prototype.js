// let myName = "yash     "
// let myGender = "Male     "
// console.log(myName.length);


let myHeros = ["thor", "ironman"];

let heroPower = {
  thor: "Hammer",
  ironman: "iron suit",

  getIronmanPower: function () {
    console.log(`Ironman power is ${this.ironman}`);
  },
};

Object.prototype.yash = function () {
  console.log(`yash is present in all objects`);
};

Array.prototype.heyYash = function () {
  console.log(`Yash says hello`);
};

// heroPower.yash()
myHeros.yash();
myHeros.heyYash();
// heroPower.heyYash()

// inheritance
const User = {
  name: "Ash",
  email: "ash@gmail.com",
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "Js Assignment",
  fullTime: true,
  __proto__: TeachingSupport,
};

Teacher.__proto__ = User;

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

// Interesting
let anotherUsername = "ChaiAurCode    ";

String.prototype.trueLength = function() {
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
    
}

anotherUsername.trueLength()
"yash".trueLength()
"iceTea".trueLength()
const tinderUser = new Object();
// const tinderUser = {} // non-singaleton
tinderUser.id = "123aba";
tinderUser.name = "Dammy";
tinderUser.isLoggedIn = false;
// console.log(tinderUser);

// nested object
const regularUser = {
  email: "yash@420.com",
  fullname: {
    userfullname: {
      firstname: "yash",
      lastname: "rana",
    },
  },
};

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {
  1: "a",
  2: "b",
};
const obj2 = {
  3: "C",
  4: "D",
};

const obj3 = {
  5: "e",
  6: "f",
};

// const obj3 = { obj1, obj2} // make nested object instead of making new combine object
// const obj4 = Object.assign({}, obj1, obj2, obj3) // target, source
// const obj4 = Object.assign(obj1, obj2, obj3) // Invalid syntex: here, we store all object (obj1, obj2, obj3) in a obj1  memory

const obj4 = { ...obj1, ...obj2, ...obj3 }; // spread opt
// console.log(obj4);

const user = [
    {
        id: 1,
        email: "yash@23.com"
    },
    {
        id: 2,
        email: "yash@23.com"
    },
    {
        id: 3,
        email: "yash@420.com"
    },
]

// console.log(user[0].email);
// console.log(tinderUser);
// console.log(Object.keys(tinderUser)); // get all keys from object tinderUser as array
// console.log(Object.values(tinderUser)); // get all values from object tinderUser as array
// console.log(Object.entries(tinderUser)); // get all keys and values from object tinderUser as nested array
// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // return true if key exist in object
// console.log(tinderUser.hasOwnProperty('isLoggedOut')); // return false if key does't exist in object

const course = {
  coursename: "Js in hindi",
  price: 999,
  courseInstructor: "Hitesh"
}

course.coursename // insead of
course.price
course.courseInstructor 
const {coursename, price, courseInstructor: instructor} = course // use this 

console.log(instructor)

// {
//   "name": "hitesh",
//   "coursename": "Js in hindi",
//   "price": "free"
// }


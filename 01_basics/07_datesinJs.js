let myDate = new Date();
// console.log(myDate);
// console.log(typeof myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());


// let newStr = new String('Yash');
// console.log(typeof newStr);
// let newInt = new Number(12);
// console.log(typeof newInt);

// const myCreatedDate = new Date(2023, 0, 23, 5, 2); // here, 0 => define as JAN month
// const myCreatedDate = new Date(2023, 0, 23); 
// const myCreatedDate = new Date("2023-01-23"); 
const myCreatedDate = new Date("01-23-2023"); 
// console.log(myCreatedDate.toLocaleString());

const myTimeStamp = Date.now(); // date start from 1 JAN 1970 and return in milliseconds
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(myTimeStamp / 1000); 
// console.log(Math.floor(Date.now() / 1000)); // for awaid decimal


const newDate = new Date();
// console.log(newDate.getDate());
// console.log(newDate.getDay());
// console.log(newDate.getFullYear());
// console.log(newDate.getHours());
// console.log(newDate.getMilliseconds());
// console.log(newDate.getMinutes());
// console.log(newDate.getMonth() + 1); // here, month start with 0
// console.log(newDate.getSeconds());
// console.log(newDate.getTime());
// console.log(newDate.getTimezoneOffset());
// console.log(newDate.getUTCDate());
// console.log(newDate.getUTCDay());
newDate.toLocaleString('default', {
    weekday: "short"
})
console.log(newDate);

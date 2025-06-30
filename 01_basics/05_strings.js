const name = "yash";
const repoCount = 50;

// console.log(name + repoCount + "Value"); // don't use
console.log(`Hello my name is ${name.toUpperCase()} and my repo count is ${repoCount}`); // use instead


const gameName = new String('Free-Fire'); // constructor call
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.charAt(2));
console.log(gameName.indexOf('F'));

const newSubString = gameName.substring(0, 5)
console.log(newSubString);

const newSliceSting = gameName.slice(-9, 5)
console.log(newSliceSting);

const newTrimString = "     yash      ";
console.log(newTrimString);
console.log(newTrimString.trim());

const url = "https://yash.com/yash%20rana";
console.log(url.replace('%20', '-'));
console.log(url.includes('yash'));
console.log(url.includes('jash'));

console.log(gameName.split('-'));






 


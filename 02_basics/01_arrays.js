// Array

const myArr = [0, 1, 2, 3, 4, 5]; 
// console.log(myArr[0]);

const heros = ["Shaktiman", "Ironman", "Hulk", "Caption America", "Thor odin son", "Black widow"];
// console.log(heros);

const myArr2 = new Array(1, 2, 3, 4, 5)
// console.log(myArr2);

// Array mathods

// myArr.push(6) // add element at the end of the array
// myArr.push(7)  
// myArr.pop() // remove element at the end of the array

// myArr.unshift(6) // add element at the beggning of the array
// console.log(myArr);
// myArr.shift() // remove element at the beggning of the array
// console.log(myArr);

// console.log(myArr.includes(3)); // return true if value occured in array otherwise return false
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9)); // return index of value, if value not found then return -1

// const newArr = myArr.join()
// console.log(myArr); // return array object
// console.log(newArr); // return string


// slice, splice
console.log("A", myArr);
const myn1 = myArr.slice(1, 3) // return copy define range of element, does't change original array  
console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1, 3) // remove define rage of element from original array and return deleted range of elemenet
console.log(myn2);
console.log("C", myArr);




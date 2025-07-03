const marvel_heros = ["Ironman", "Caption America", "Hulk", "Thor", "Black Widow"]
const dc_heros = ["Superman", "Batman", "Flash", "Green Lantern", "wonder Woman"]

// marvel_heros.push(dc_heros) // push method contain any type of value, make nested array 
// console.log(marvel_heros);
// console.log(marvel_heros[5][4]);

// contact
// const heros = marvel_heros.concat(dc_heros) // concat more than one array and return new combine array
// console.log(heros);

// spread opt
// const heros = [...marvel_heros, ...dc_heros]
// console.log(heros);

const nested_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
// console.log(nested_array);
// const single_array = nested_array.flat(1) // remove nestingness from array
// const single_array = nested_array.flat(Infinity)
// console.log(single_array);

// DATA SCRAPPING
// console.log(Array.isArray("yash"));
// console.log(Array.from("yash"));
// console.log(Array.from({name:"yash", age: 20})); // not allow convert object to array 

let gujarati = 50
let english = 50
let math = 34
let science = 32
 
console.log(Array.of(gujarati, english, math, science)); // create a array from given variables 



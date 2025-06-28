// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);8

// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true

/*
    The reason is that an equality check == and comparision > >= < <= work differently.
    Comparisions convert null to a number, treating as 0.
    That's why (3)null >= 0 is true and (1)null > 0 is false.
*/


console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);


// strick check - ===
console.log("2" === 2);




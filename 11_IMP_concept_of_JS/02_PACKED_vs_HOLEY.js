// ~/.jsvu/bin/v8-debug.cmd --allow-natives-syntax
const myArr = [] 
// %DebugPrint(myArr)

// continious, Holey array

// Optimization

// SMI (Small integer)
// Packed element
// Double (float, string, function)

const myArrTwo = [1, 2, 3, 4, 5]
// PACKED_SMI_ELEMENTS

myArrTwo.push(6.0)
// PACKED_DOUBLE_ELEMENTS // Once PACKED_SMI_ELEMENTS convert into PACKED_DOUBLE_ELEMENTS then we can't able to convert it back to PACKED_SMI_ELEMENTS even if we delete PACKED_DOUBLE_ELEMENTS

myArrTwo.push('7')
// PACKED_ELEMENTS

const myArrThree = [1, 2, , 4, 5]
// HOLEY_SMI_ELEMENTSS 

myArrTwo[10] = 11; 
// HOLEY_ELEMENTS // Because it include multiple type like numbers, sting, gaps etc.

console.log(myArrTwo);
console.log(myArrTwo.length);
// costly operation take much time
console.log(myArrTwo[9]); 
console.log(myArrTwo[19]);

// When we access an array

// Bound check (Out of range)
// hasOwnProperty(myArrTwo, 9)
// hasOwnProperty(myArrTwo.prototype, 9)
// hasOwnProperty(object.prototype, 9)

//  Holes are very expensive in js

const myArrFour = [1, 2, 3, 4, 5]
console.log(myArrFour[8]); // out of bound
console.log(myArrFour[2]); // continious or packed

// SMI > DOUBLE > PACKED => Continious
// HOLEY_SMI > HOLEY_DOUBLE > HOLEY_PACKED => HOLEY


const myArrFive = new Array(3)

// just 3 holes. HOLEY_SMI_ELEMENTS
myArrFive[0] = '1' // HOLEY_ELEMENTS
myArrFive[1] = '2' // HOLEY_ELEMENTS
myArrFive[2] = '3' // HOLEY_ELEMENTS

// Better approch
const myArrSix = []
myArrSix.push('1') // PACKED_ELEMENTS
myArrSix.push('2') // PACKED_ELEMENTS
myArrSix.push('3') // PACKED_ELEMENTS

const myArrSeven = [1, 2, 3, 4, 5]
myArrSeven.push(NaN) // PACKED_DOUBLE_ELEMENTS
myArrSeven.push(Infinity) // PACKED_DOUBLE_ELEMENTS
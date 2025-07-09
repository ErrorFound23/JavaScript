const myNums = [1, 2, 3];

// const myTotal = myNums.reduce(function (acc, currVal) {
//     console.log(`acc: ${acc} and currVal: ${currVal}`)
//     return acc + currVal;
// }, 0);

const myTotal = myNums.reduce((acc, currVal) => acc + currVal , 0)
// console.log(myTotal)

const shoppingCart = [
    {
        itemName: "Js course",
        price: 2999,
    },
    {
        itemName: "Py course",
        price: 2499,
    },
    {
        itemName: "C++ course",
        price: 2999,
    },
    {
        itemName: "Rb course",
        price: 2949,
    },
    {
        itemName: "Java course",
        price: 2999,
    },
]

const init = 0
const totalPrice = shoppingCart.reduce((acc, item) => acc + item.price, init)
console.log(totalPrice);

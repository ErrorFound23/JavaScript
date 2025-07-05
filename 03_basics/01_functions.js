function sayMayName() {
  console.log("Y");
  console.log("A");
  console.log("S");
  console.log("H");
}

// sayMayName() // function call
sayMayName; // function reference

// function addToNums(num1, num2) { // parameters
//   console.log(num1 + num2); // Here, function dose't return value(by default it return undefine)
// }

// static parameters
function addToNums(num1, num2) {
  // parameters
  // let result = num1 + num2;
  // return result;
  return num1 + num2;
}

const result = addToNums(3, 5); // arguments

// console.log("Result:", result);

function loginUserMessage(username = "sam") {
  // default value
  if (!username) {
    console.log("Please enter username");
    return;
  }
  return `${username} just logged in`;
}

// console.log(loginUserMessage("yash"))

// Dynamic parameters
function calculateCartPrice(val1, val2, ...num1) {
  // Here, ... operator know as "Rest Operator"
  return num1;
}

// console.log(calculateCartPrice(200, 300, 400, 20000))

const user = {
  username: "Yash rana",
  prices: 300,
};

function handleObject(anyObject) {
  console.log(
    `username is ${anyObject.username} and price is ${anyObject.price}`
  );
}

// handleObject(user)
handleObject({
  username: "raj parekh", 
  price: 299
})

const myNewArray = [200, 300, 400, 500]

function returnSecondValue(getArray) {
  return getArray[1];

} 

console.log(returnSecondValue(myNewArray));

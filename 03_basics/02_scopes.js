// var c = 300 // Global scope

let a = 200;

if (true) {
  let a = 10; // block scope
  const b = 20; // block scope
  //   console.log("INNER: ", a);
}

// console.log(a);
// console.log(b);
// console.log(c);

// Nested scopping

function one() {
  const username = "yash";

  function two() {
    const website = "https://github.com/ErrorFound23/";
    // console.log(username);
  }
//   console.log(website);
  two()
}

one()

if (true)
{
    const username = "yash"

    if (username === "yash") {
        const website = " https://github.com/ErrorFound23/"
        // console.log(username + website);
    }

    // console.log(website);
    
}

// console.log(username); 

// ++++++++++++++++++++++++++ Interesting ++++++++++++++++++++++++++

console.log(addOne(5)) // successfully execute
function addOne(num) {
    return num + 1;
}


console.log(addTwo(5)); // Throw an error
const addTwo = function(num) {
    return num + 2;
}


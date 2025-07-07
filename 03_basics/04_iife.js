// Immediately Invoked Function Expression (IIFE)
// Use to awaid global scope pollution like variables and declaration

// Normal function
(function chai() {
    // Named IIFE
  console.log(`DB CONNECTED`);
})(); // you must add ; at end of IIFE function to end execution context of that function
// TypeError: (intermediate value)(...) is not a function

((name) => console.log(`DB CONNECTED AGAIN ${name}`))("Yash");

 const score = 400; // implicite
//  console.log(score);

 const balance = new Number(500) // explicite
//  console.log(balance);
//  console.log(balance.toString().length);
//  console.log(balance.toFixed(2));

 const obtainScore = 134.8966;
//  console.log(obtainScore.toPrecision(4));

 const handreds = 1000000;
//  console.log(handreds.toLocaleString('en-IN'));


//  ***************************** Maths ************************************


//  console.log(Math);
//  console.log(Math.abs(-4));
//  console.log(Math.abs(4));
//  console.log(Math.round(4.3))
//  console.log(Math.round(4.6))
//  console.log(Math.ceil(4.2));
//  console.log(Math.floor(4.9));
//  console.log(Math.max(2,5,3,6));
//  console.log(Math.min(2,5,3,6));


 
 console.log(Math.random()); // return random value between 0 to 1
 console.log((Math.random() * 6) + 1); // to avoid 0 
 console.log(Math.floor(Math.random() * 6) + 1); // return minimum value

 // ****************  alternate way  *******************
const max_value = 20;
const min_value = 10;

console.log(Math.floor(Math.random() * (max_value - min_value + 1)) + min_value)

 
 
 

 
 
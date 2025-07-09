// for of

const arr = [1, 2, 3, 4, 5];

// for (const num of arr) {
//   console.log(num);
// }

const greetings = "Hello world";
for (const greet of greetings) {
  if (greet === " ") continue;
  // console.log(`Each char is ${greet}`);
}

// maps => orderd, unique, object

const map = new Map();

map.set("IN", "India");
map.set("USA", "Ameria");
map.set("FR", "France");
map.set("IN", "India");

// console.log(map);
for (const [key, value] of map) {
  // console.log(key, ":- ", value);
}

const games = {
  game1: "Free Fire",
  game2: "PUBG",
  game3: "COC",
};

// for (const [key, value] of games) { // not work for object
//   console.log(key, ":- ", value); 
// }

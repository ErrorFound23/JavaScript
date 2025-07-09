const myObject = {
    js: "Jacascript",
    cpp: "C++",
    rb: "Rudy",
    shift: "shift by apple"
}

for (const key in myObject) {
//    console.log(`${key} shortcut is for ${myObject[key]}`);
   
}

const programming = ["JS", "C++", "PY", "JAVA", "RB"]

for (const key in programming) {
//  console.log(programming[key]);
    
}

// Can't iterate Map by for...in
// const map = new Map();

// map.set("IN", "India");
// map.set("USA", "Ameria");
// map.set("FR", "France");
// map.set("IN", "India");

// for (const key in map) {
//     console.log(key);
    
// }

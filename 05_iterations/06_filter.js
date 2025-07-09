const coding = ["js", "ruby", "cpp", "java", "python"];

// const value = coding.forEach((item) => {
//     console.log(item);
//     return item
// })

// console.log(value); //  return undefined

// Filter => return true items based on condition with new array
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.filter((num) => num > 4 ) // Implicite return

// const newNums = myNums.filter((num) => {
// return num > 4; // Explicite return
// });

const newNums = [];
myNums.forEach((num) => {
  if (num > 4) {
    newNums.push(num);
  }
});
// console.log(newNums);

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1982, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Fiction", publish: 2015, edition: 2004 },
  { title: "Book Ten", genre: "Non-Fiction", publish: 2001, edition: 2007 },
];

let userBooks = books.filter(
  (book) => book.genre.toLowerCase() === "History".toLowerCase()
);

userBooks = books.filter((book) => {
  return book.publish >= 1995 && book.genre === "History";
});
console.log(userBooks);

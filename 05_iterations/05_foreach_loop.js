const coding = ["js", "ruby", "cpp", "java", "python"];

// Normal function
// coding.forEach(function(item) {
//     console.log(item);

// })

// Arrow function
// coding.forEach((item) => {
//     console.log(item);

// })

// using fuction reference
const printMe = (item) => {
  // console.log(item);
};
coding.forEach(printMe);

// ++++++++++++++++++++++ interesting +++++++++++++++++++++++++++++
// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);

// })

// array of object with for...each
const myCoding = [
    {
        languageName: "java",
        languageFilename: "java"
    },
    {
        languageName: "javascript",
        languageFilename: "js"
    },
    {
        languageName: "c++",
        languageFilename: "cpp"
    },
    {
        languageName: "python",
        languageFilename: "py"
    },
    {
        languageName: "ruby",
        languageFilename: "rb"
    },
]

myCoding.forEach((item) => {
    console.log(item.languageName);
    
})
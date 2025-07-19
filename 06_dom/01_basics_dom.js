// console.log(document.getElementById("title"));
// console.log(document.getElementById("title").className);
// here, we write className instead of class beause DOM identify class as "className" internally
// console.log(document.getElementById("title").getAttribute("id"));
// console.log(document.getElementById("title").getAttribute("class"));
// console.log(document.getElementById("title").setAttribute("class", "test")); // here, setAttribute always override class value
// console.log(document.getElementById("title"));

// const title = document.getElementById('title')
// console.log(title.style.backgroundColor = "green");
// console.log(title.style = "background-color:red; color:black");
// console.log(title.style.padding = "5px");
// console.log(title.style.borderRadius = "5px");

// console.log(title.innerHTML); // return text with html tag/element
// console.log(title.innerText); // return only text
// console.log(title.textContent); // return text with hindden text

// console.log(document.querySelector('h2'));
// console.log(document.querySelector('#title'));
// console.log(document.querySelector('.heading'));
// console.log(document.querySelector('input[type="password"]'));
// console.log(document.querySelector('p:first-child'));

// const unList = document.querySelector("ul");
// const list = unList.querySelector("li");
// console.log(list);
// list.style.background = "green";
// list.style.padding = "5px";
// list.innerText = "five"

// const nodeList = document.querySelectorAll('li');
// console.log(nodeList);
// nodeList.forEach((l) => {
//     l.style.backgroundColor = "green"
//     l.style.padding = "5px"
// } )

const items = document.getElementsByClassName('list-item')
// can't perform forEach on htmlCollection
// items.forEach(element => {
//     console.log(element); 
// });

// convert htmlCollection in array
const convertedItems = Array.from(items)
convertedItems.forEach(item => item.style.color = "orange")
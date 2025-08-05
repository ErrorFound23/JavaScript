// not better uproch, does not provide featurs like addEventListener
// document.querySelector('#owl').onclick = function() {
//     alert('owl')
// }

// ******************* before addEventListener *******************
// attachEvent()
// jOuery - on

// type, timestamp, defaultPrevented
// target, toElement, srcElement, currentTarget
// clientX, clientY, screenX, screenY
// altKey, ctrlkey, shiftkey, keyCode

// ********************** Event propogation *************************
// document.querySelector('#owl').addEventListener('click', function(e) {
//     // alert('Owl clicked again')
//     console.log(e)
// }, false) // by default false

// Event propogation used for
// Event bubbling - bottom to top or inner to outer html - false
// Event capturing - to to bottom or outer to inner html - true

// document.querySelector("#images").addEventListener(
//   "click",
//   function (e) {
//     console.log("Clicked inside the ul");
//   },
//   false
// );
// document.querySelector("#owl").addEventListener(
//   "click",
//   function (e) {
//     e.stopPropagation(); // to stop propogation or avoid bubbling
//     console.log("Owl clicked ");
//   },
//   false
// );
// document.querySelector("#google").addEventListener("click", function (e) {
//   e.preventDefault(); // to avoid default behaviour of element event
//   e.stopPropagation()
//   console.log("Google Clicked");
// });

document.querySelector("#images").addEventListener("click", function (e) {
  // console.log(e.target.parentNode)
  console.log(e.target.tagName);
  if (e.target.tagName === "IMG") {
    console.log(e.target.id);
    
    let removeIt = e.target.parentNode;
    removeIt.remove();
  }
  // removeIt.parentNode.removeChild(removeIt);
});

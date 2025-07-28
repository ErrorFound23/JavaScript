// Body Mass Index
const form = document.querySelector("form");
// this use case will give you empty
// const height = parseFloat(document.querySelector('#height').value)

form.addEventListener("submit", (e) => {
  e.preventDefault(); // to stop default form action or default behaviour of form like submit data no server or url
  const height = parseFloat(document.querySelector("#height").value);
  const weight = parseFloat(document.querySelector("#weight").value);
  const results = document.querySelector("#results");
  console.log(height);

  // console.log(NaN == NaN);
  // console.log(NaN === NaN);
  // console.log(NaN != NaN);
  // console.log(isNaN(NaN));

  // note: her, NaN is not considered equal to any value, including itself.
  // use isNaN() instead of NaN !== NaN
  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // show the results
    let category = "";
    if (bmi < 18.6) {
      category = "Under Weight";
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      category = "Normal Range";
    } else {
      category = "Over Weight";
    }
    results.innerHTML = `<span>${bmi}</span><br><span>${category}</span>`;
  }
});

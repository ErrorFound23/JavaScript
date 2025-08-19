// fetch('https://something.com').then().catch.finally() // use when consume promise

// creation of promise
const promise1 = new Promise(function (resolve, reject) {
  // Do some async task
  // DB calls, cryptography, network
  setTimeout(function () {
    console.log("Async task is complete");
    resolve();
  }, 1000);
});

promise1.then(function () {
  console.log("Promise consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("async 2 resolved");
});

const promise3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "yash23", email: "yash23@gmail.com" });
  }, 1000);
});

promise3.then(function ({ username, email }) {
  console.log(`username: ${username} and email: ${email}`);
});

const promise4 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "yash23", password: "12345" });
    } else {
      reject("Error: something went wrong");
    }
  }, 1000);
});

// throw an error -- new UnhandledPromiseRejection(reason);
// const username = promise4.then((user) => {
//     console.log(user);
//     return user.username
// })
// console.log(username);

promise4
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then(function (data) {
    // chaining
    // receive data from parent chain
    console.log(data);
  })
  .catch(function (error) {
    // handle error when occurre
    console.log(error);
  })
  .finally(function () {
    console.log("The promise is either resolved or rejected");
  });

const promise5 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "javascript", password: "67890" });
    } else {
      reject("Error: something went wrong");
    }
  }, 1000);
});

// alternative way
async function consumePromise5() {
  // program throw an error when we does't provide try catch block if error occurre
  try {
    const res = await promise5; // does't use promise like this promise5()
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}

consumePromise5();

// async function getUser() {
//   try {
//     const res = await fetch("https://api.github.com/users/yashrana23"); // response data as string (return promise)
//     const data = await res.json(); // convert response into json (return promise)
//     console.log(data);
//   } catch (error) {
//     console.log(error);

//   }
// }

// getUser();

fetch("https://api.github.com/users/yashrana23")
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.log(error);
  });

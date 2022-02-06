/*//timeout callback
setTimeout(() => {
  // function expression
  console.log("hahahahahahahahaha");
}, 3000);

//interval callback
setInterval(() => {
  // function expression
  console.log("hello, i'm studying every second");
}, 1000);
*/

// const sayHello = (cb) => {
//   cb();
// };
// sayHello(() => {
//   console.log("Hello");
// });

// import fetch from "node-fetch";
// fetch("https://jsonplaceholder.typicode.com/users").then((data) => {
//   data.json().then((users) => {
//     // console.log(users);
//     fetch("https://jsonplaceholder.typicode.com/posts").then((data) => {
//         data.json().then((posts) => {
//             // console.log(posts);
//             const userPosts = users.map((user) => {
//             const userPosts = posts.filter((post) => post.userId === user.id);
//             return {
//                 id: user.id,
//                 name: user.name,
//                 posts: userPosts,
//             };
//             });
//             console.log(userPosts);
//         });

//   });
// });

// let posts = fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((data) => {
//     return data.json();
//   })
//   .then((data) => {
//     console.log(data.body);
//   });
//****************************** */

/*
const showArray = (cb) => {
  cb();
};

showArray(() => {
  console.log("This is an array");
});
*/

// const sayHello = (cb) => {
//   cb();
// };
// sayHello(() => {
//   console.log("Hello");
// });
//fetche process
import fetch from "node-fetch";
import fs from "fs";
// fetch("https://jsonplaceholder.typicode.com/users").then((data) =>
//   data.json().then((user) => {
//     console.log(user);
//     users.push(user);
//   })
// );

/* // classic fetch process
fetch("https://jsonplaceholder.typicode.com/users").then((data) =>
  data.json().then((user) => {
    console.log("------USERS------- :", user);
    fetch("https://jsonplaceholder.typicode.com/posts/2").then((data) =>
      data.json().then((post) => {
        console.log("------post:2 ------", post);
      })
    );
    fetch("https://jsonplaceholder.typicode.com/albums/2").then((data) =>
      data.json().then((album) => {
        console.log("------id :3 album------", album);
      })
    );
  })
); */

async function getData() {
  const user = await (
    await fetch("https://jsonplaceholder.typicode.com/users/2")
  ).json(); // if you used await, you need to use async function

  const album2 = await (
    await fetch("https://jsonplaceholder.typicode.com/albums/2")
  ).json();

  const album3 = await (
    await fetch("https://jsonplaceholder.typicode.com/albums/3")
  ).json();

  console.log("user", user);
  console.log("album2", album2);
  console.log("album3", album3);
}

// getData();

//anonimous function ===> ()();
(async () => {
  const user = await (
    await fetch("https://jsonplaceholder.typicode.com/users/2")
  ).json(); // if you used await, you need to use async function

  const album2 = await (
    await fetch("https://jsonplaceholder.typicode.com/albums/2")
  ).json();

  const album3 = await (
    await fetch("https://jsonplaceholder.typicode.com/albums/3")
  ).json();

  console.log("user", user);
  console.log("album2", album2);
  console.log("album3", album3);
})();

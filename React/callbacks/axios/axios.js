import axios from "axios";

//anonimous function creation

(async () => {
  const user = await (
    await axios.get("https://jsonplaceholder.typicode.com/users/2")
  ).data; // if you used await, you need to use async function

  const album2 = await (
    await axios.get("https://jsonplaceholder.typicode.com/albums/2")
  ).data;

  const album3 = await (
    await axios.get("https://jsonplaceholder.typicode.com/albums/3")
  ).data;

  //   console.log("user", user);
  //   console.log("album2", album2);
  //   console.log("album3", album3);
})();

//other usage
(async () => {
  const { data: user2 } = await axios.get(
    "https://jsonplaceholder.typicode.com/users/2"
  ); // if you used await, you need to use async function

  const { data: album2 } = await axios.get(
    "https://jsonplaceholder.typicode.com/albums/2"
  );

  const { data: album3 } = await axios.get(
    "https://jsonplaceholder.typicode.com/albums/3"
  );

  //   console.log("user", user2);
  //   console.log("album2", album2);
  //   console.log("album3", album3);
})();

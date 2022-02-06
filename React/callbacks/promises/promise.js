import axios from "axios";
import fetch from "node-fetch";
/*
const getComment = (number) => {
  return new Promise((resolve, reject) => {
    // console.log("getComment() method ran");
    if (number === 1) {
      resolve("Hello");
    } else {
      reject("An error occured");
    }
    resolve({ text: "Comment 1" }); //resolve sent the data to getComment() method
    reject();
  });
};

getComment(1)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log("get a error: ", err);
  });
*/

const getComment = (number) => {
  return new Promise(async (resolve, reject) => {
    //await keyword must be used in async function
    const { data } = await axios(
      `https://jsonplaceholder.typicode.com/comments/${number}`
    );
    resolve(data);
    // reject("An error occured");
  });
};

const getPost = (post_id) => {
  return new Promise(async (resolve, reject) => {
    //await keyword must be used in async function
    const { data } = await axios(
      `https://jsonplaceholder.typicode.com/posts/${post_id}`
    );
    resolve(data);
    // reject("An error occured too");
  });
};

/*
(async () => {
  try {
    //await getComment(3);
    // .then((data) => {
    //   //it came here when resolve() method run
    //   console.log(data);
    // })
    // .catch((err) => {
    //   console.log("get a error: ", err);
    // } );

    const comment = await getComment(3);

    //   await getPost(1).then((data) => {
    //     //it came here when resolve() method run
    //     console.log(data);
    //   });
    const post = await getPost(1);

    console.log(comment);
    console.log(post);
  } catch (error) {
    console.log("An error occured: ", error);
  }
})();
*/

Promise.all([getComment(3), getPost(1)])
  .then((values) => {
    console.log(values);
  })
  .catch((err) => {
    console.log("get a error: ", err);
  });

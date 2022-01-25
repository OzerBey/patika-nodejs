//// GET operation
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json()) //parse json data
  .then(function (todos) {
    todos.forEach((todo) => {
      console.log(todo.title); //Başlıkları console' a yazdırma
    });
  });

//POST operation
let payload = {
  title: "Blog Title",
  body: "lorem ipsum",
  userId: 1,
};
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify(payload),
  headers: { "Content-type": "application/json; charset=UTF-8" },
})
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((err) => console.log(err));
//NOTE: Aşama aşama fetch().then().then().catch() yapısı

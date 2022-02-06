/* 
push //: adds an element to the end of an array
map //: creates a new array with the results of calling a function on every element in the calling array
find //: returns the value of the first element in the array that satisfies the provided testing function
filter //: creates a new array with all of the elements that pass the test implemented by the provided function
reduce //: reduces the array to a single value by calling a provided function for each element in the array
some //: determines whether at least one element in the array passes the test implemented by the provided function
every //: determines whether all elements in the array pass the test implemented by the provided function
includes //: determines whether an array includes a certain value among its entries
*/

const users = ["Yasin", "Ozer", "Ali", "Zeynep", "Eda"];
const usersObjecs = [
  { name: "Yasin", age: 20 },
  { name: "Ozer", age: 21 },
  { name: "Ali", age: 22 },
  { name: "Zeynep", age: 23 },
];

//push
console.log("result of push function");
users.push("Gizem");
console.log(users);

//map
console.log("result of map function");
const userNames = usersObjecs.map((user) => {
  return user.name;
});
console.log(userNames);

//find
console.log("result of find function");
const findIt = usersObjecs.find((user) => {
  return user.name === "Yasin" && user.age >= 20;
});
console.log(findIt);

//filter
console.log("result of filter function");
const filterIt = usersObjecs.filter(({ age, name }) => {
  return age >= 10 && name === "Ozer";
});
console.log(filterIt);

//reduce
console.log("result of reduce function");
const reduceIt = usersObjecs.reduce((acc, user) => {
  return acc + user.age;
}, 0);
console.log(reduceIt);

//some
console.log("result of some function");
const someIt = usersObjecs.some((user) => {
  return user.age >= 20;
});
console.log(someIt);

//every
console.log("result of every function");
const everyIt = usersObjecs.every((user) => {
  return user.age >= 20;
});
console.log(everyIt);

//includes
console.log("result of includes function");
const includesIt = usersObjecs.includes({ name: "Ali", age: 22 });
console.log(includesIt);

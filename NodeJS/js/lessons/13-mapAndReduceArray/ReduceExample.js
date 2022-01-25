const numbers = [4, 9, 16, 81, 25, 22];
const newArray = numbers.map(Math.sqrt);
console.log(newArray);

//second example
const numbers1 = [65, 44, 12, 4];
const newArray1 = numbers.map(myFunction);

function myFunction(num) {
  return num * 10;
}

console.log(newArray1);

//vs reduce()
const numbers2 = [175, 50, 25];
const newNumber2 = numbers2.reduce(myFunc);

function myFunc(total, num) {
  return total - num;
}

console.log("newNumbers2: " + newNumber2);
//Js Demo: Array.reduce();
const array1 = [1, 2, 3, 4];
const reducer = (previousValue, currentValue) => {
  return previousValue + currentValue;
};
console.log("reducer's result :" + array1.reduce(reducer));
console.log(
  "reducer's result with 2nd parameters:" + array1.reduce(reducer, 5)
);

let result = (num1, num2) => num1 + num2;
console.log(result(2, 4));

function multiParams(...numbers) {
  let total = 0;
  numbers.forEach((element) => {
    total += element;
  });
  return total;
}
console.log(multiParams(2, 3, 4, 5, 6));

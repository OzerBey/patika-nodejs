let calculateFactorial = (num) => {
  return num == 1 ? 1 : num * calculateFactorial(num - 1);
};

// console.log(calculateFactorial(4));


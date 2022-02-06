function sum(a, b) {
  return a + b;
}

// export default sum;

//2nd way to define a function
const sum2 = function (a, b) {
  return a + b;
};

// export { sum, sum2 };

//3rd way to define a function
const sum3 = (a, b) => {
  return a + b;
};

// export { sum3  };

const hello = (message) => {
  //   console.log("Hello, " + message);
  console.log(`Hello, ${message}`);
};

//sub function
const sub = (a, b) => {
  return a - b;
};
const text = "This is a text";
const user = {
  name: "Ozer",
  age: 25,
};

const users = [
  {
    name: "Ozer",
    age: 25,
  },
  {
    name: "Ozer",
    age: 25,
  },
];
export { hello, sum, sum2, sum3, sub, text, user ,users};

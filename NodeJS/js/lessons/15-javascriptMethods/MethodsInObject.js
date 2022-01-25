var person = {
  name: "Yasin",
  surname: "Özer",
  age: 23,
  city: "İstanbul",
  introduce: () => {
    return `My name is ${person.name} ${person.surname}, I'm ${person.age} yo.`;
  },
};
console.log(person.introduce());

person.myCity = function () {
  console.log(`I live in ${person.city}`);
};
person.myCity();

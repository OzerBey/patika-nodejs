/**
 *     Çalışmamızda yapmamızı istediğim şey belirli araba markalarını bir dizi oluşturarak konsola yazdırmak bunun için yapmamız gerekenler çok basit öncelikle bir Array oluşturmalı ve arabalarımızı bu diziye eklemeliyiz.
    Ardından bir while döngüsü oluşturuyoruz ve bu döngüye araba elemanlarımızı ekliyoruz. (döngüyü sınırlandırmayı ve parametre vermeyi unutmuyoruz.)

Bu işlemi önce kendi öğrendiklerimizle deneyebilir ve kodu başarılı bir şekilde yazdıktan sonra isterseniz geliştirebilir ve array metodlarıyla yeni arabalar ekleyebilir veya çıkartabilirsiniz Koda aşağıdaki örnekten ulaşabilirsiniz
*/
let cars = ["Ford", "Toyota", "BMW", "Mercedes", "Ferrari"];
let i = 0;
while (i < 10) {
  console.log(i, cars);
  i++;
}

const numbers = [12, 24, 36];
const tempArray = [];
numbers.forEach((number) => {
  tempArray.push(number + 2);
});
console.log(tempArray);

console.log("---- new example");
const users = [
  { fullName: "Mehmet Veli", isActive: false },
  { fullName: "Ali Duran", isActive: true },
  { fullName: "Ahmet Yılmaz", isActive: true },
  { fullName: "Oğuz Şahin", isActive: false },
];

// const activeUsers = users.filter((user) => {
//   user.isActive === true;
// });

const activeUsers = users.filter((user) => user.isActive === true);
console.log(activeUsers);

console.log(activeUsers.fullName);

//--SORULAR---//
const persons = [
  {
    name: "Yasin",
    age: 25,
    languages: ["JavaScript", "CSS"],
  },
  {
    name: "Özer",
    age: 33,
    languages: ["Java", "HTML"],
  },
];
const greaterThan30 = persons.filter((person) => {
  return person.age > 30;
});
console.log("yası 30dan buyuk olan", greaterThan30);
let knownJs = persons.filter((person) => {
  return person.languages.includes("JavaScript");
});
console.log("js bilen", knownJs);

function getValue(value1, value2, ...args) {
  console.log(value1, args);
}
getValue(1, 2, 4, 4, 5, 3, 6, 6, 6);

const toplama = ({ sayi1, sayi2 }) => {
  // dikkat sadece 2 sayireturn sayi1 + sayi2 + sayi3 + sayi4 + sayi5;
  console.log(sayi1 + sayi2);
};
const sayilar = {
  sayi1: 8,
  sayi2: 4,
  sayi3: 7,
  sayi4: 9,
  sayi5: 11,
};
toplama(sayilar);
//ReferenceError: sayi3 is not defined
//Bir kaç sayı toplamı

const toplamaCoklu = ({ sayi1, sayi2, ...args }) => {
  let sonuc = sayi1 + sayi2;
  for (let sayi in args) {
    sonuc += args[sayi];
  }
  return sonuc;
};

const numbers = {
  sayi1: 8,
  sayi2: 4,
  sayi3: 7,
  sayi4: 9,
  sayi5: 11,
};

let result1 = toplamaCoklu(numbers);
console.log(result1);
// 39 doner

let person = { name: "Selin", city: "Ankara", favoriteColor: "aqua blue" };
let { name1: foo } = person;
console.log("name: ", name1);

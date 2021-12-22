var sports = ["basketball", "football", "tennis"];
var weather = ["rainy", "cloudy", "windy", "sunny"];
let numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
let comolexNumbers = [
  23, 4, 5, 33, 6, 7, 35546, 76, 4, 7, 9, 2, 4, 7, 4, 55, 88, 97, 4, 0, 9, 1,
  22, 45, 23,
];
console.log(sports); // basketball, football, tennis
sports.push("baseball"); // use to add to array
console.log(sports); // basketball, football, tennis, baseball
sports.unshift("yakartop"); // use to add first item for array
sports.slice(0, 0, "Saklanbaç"); // #. indisteki degeri, kaç deger silinecek sayısı, "girilecek deger"
sports.shift();
console.log(sports.includes("baseball"));
console.log("-------------");
console.log(sports.join("~"));
console.log(sports.concat(weather));
console.log(sports);

sports.forEach(function (item, i, sports) {
  //  dizi.forEach(function(diziElemanınınKendisi, diziElemanınınIndeksi, dizininKendisi) {
  console.log(item + " => " + i + "dizi :", sports);
});
//map : Map metodu da forEach gibi kendisine verilen fonksiyonu dizinin her elemanı için uygular fakat forEach'ten farklı olarak sonucu yeni bir dizide tutar. Orijinal dizi olduğu gibi kalır.
let oddNumber = numbers.map(function (number) {
  return number % 2 == 0 ? number : "-";
});
console.log(oddNumber);

let filteredNumbers = numbers.filter(function (number) {
  return number < 5;
});
console.log(filteredNumbers);
console.log(
  comolexNumbers.sort(function (a, b) {
    return a - b; //ascending sorting
  })
);
console.log("--- Alıştırma Soruları ---");
//--- Alıştırma Soruları ---//
/**
1.Soru

let dizi = [2,5,8,11,15,17];

// Uygun dizi metotlarını kullanarak  yukarıda verilen dizinin elemanları içinde 10'dan büyük olan elemanların 5'er katından oluşan yeni bir dizi oluşturun. (sonuç [55, 75, 85] olmalı.)*/

let dizi = [2, 5, 8, 11, 15, 17];
let powerOf5 = dizi.map(function (number) {
  return number > 10 ? number * 5 : number;
});
console.log(powerOf5);
/**
 * 2.Soru

let dizi = [3,6,9,14,16];

// Uygun dizi metotlarını kullanarak, yukarıdaki dizi için aşağıdaki şartları sağlayan myFunction fonksiyonunu yazın.
// Elemanların arasında 5'ten büyük olan olan bir eleman varsa konsola "Beşten büyük bir eleman mevcut." yoksa "5'ten büyük eleman mevcut değil." yazdır.

function myFunction (dizi){
// Kodunuzu buraya yazın.
}

myFunction(dizi);
 */
let dizi2 = [3, 6, 9, 14, 16];

function myFunction(dizi) {
  // Write your code here
  dizi.some(function (number) {
    return number > 5
      ? console.log("5'ten büyük bir eleman mevcut")
      : console.log("5'ten büyük eleman mevvcut değil");
  });
}

myFunction(dizi2);

/**
 * 3. Soru

let dizi = [2,3,4];

// Uygun dizi metodunu kullanarak yukarıda verilen dizinin elemanlarının çarpımının sonucunu (24) veren bir fonksiyon yazınız.
 */
var result = 1;
let array = [2, 3, 4];
//alternative solution -start
for (let i = 0; i < array.length; i++) {
  const element = array[i];
  result *= array[i];
}
console.log("altertaive solution's answer :" + result);
//--alternative solution -end


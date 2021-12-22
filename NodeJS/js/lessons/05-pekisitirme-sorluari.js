/**1 -  Bir dizi veya film listesi parametre alan bir arrow fonksiyonumuz olsun, bunların hervbirini 1'den başlayarak alt alta yazalım.*/
let seriesList = (list) => {
  list.forEach((item, index) => {
    console.log(`${index + 1}. ${item}`);
  });
};
seriesList([
  "the witcher",
  "sherlock holmes",
  "friends",
  "how i met your mother",
]);
console.log("----2. soru");
/* 2 - [1,2,3,4,5] array'ini parametre alan bir arrow fonksiyonumuz olsun. Bu array'in sonucu bize yeni bir array döndürsün. Oluşan yeni array'deki çift sayılar 2, tek sayılar ise 3 ile çarpılmış olsun. [1,2,3,4,5] => [1x3, 2x2, 3x3, 4x2, 5x3] =>Sonuç çıktımız **[3,4,9,8,15]** olacak.

*/
const newArray = (nums) => {
  const newNums = nums.map((item) => {
    if (item % 2 == 0) {
      return item * 2;
    } else if (item % 2 == 1) {
      return item * 3;
    }
  });
  return newNums;
};
console.log(newArray([1, 2, 3, 4, 5])); // output: [3,4,9,8,15]

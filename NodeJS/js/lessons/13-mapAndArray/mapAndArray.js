const numbers = [2, 3, 4, 5, 10];

let orderedNumbers = numbers.map((number, i, array) => {
  return number * 2;
});
console.log(orderedNumbers);
//Örnek 2: Maaş zam hesaplama; İşçilerin aldıkları maaşlara ait bir dizi olsun. Maaşı 3000 TL'nin üzerinde olanlarınkine %15, altında olanlarınkine de %25 zam yapan bir array map oluşturalım.
const wages = [1100, 13000, 2500, 4500, 1500, 25000, 2000];

const paidWages = wages.map((wage) => {
  return wage > 3000 ? wage * 1.15 : wage * 1.25;
});
console.log(paidWages);

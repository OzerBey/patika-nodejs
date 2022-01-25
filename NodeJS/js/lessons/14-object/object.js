let artist = {
  //artist isimli objemiz
  name: "Zoé", //name isimli, "Zoé" primitive değerine sahip property
  album: {
    //album isimli, içerisinde başka bir objeye yer veren property
    title: "Reptilectric",
    year: {
      start: 2002,
      end: 2022,
    },
  },
};

console.log("year of start : " + artist.album.year.start);
console.log("year of end : " + artist.album.year.end);

/*2nd example*/

//aynı değerlere sahip 2 primitive veri tipi
let mesaj = "merhaba";
let başkaBirMesaj = "merhaba";
console.log(mesaj == başkaBirMesaj); //true

//aynı değerlere, farklı memory adreslere sahip 2 obje
let obje = {
  mesaj: "merhaba",
};
let başkaBirObje = {
  mesaj: "merhaba",
};
console.log(obje.mesaj == başkaBirObje.mesaj); //false
/**3th example -object literal*/
let countriesTalkSpanish = {
  continent: "south america",
  language: "spanish",
};

let countriesTalkFrench = new Object();
countriesTalkFrench.continent = "africa";
countriesTalkFrench.language = "french";

console.log(countriesTalkFrench);

let noInheritence = Object.create(null); //herhangi bir kalıtım(inheritence) almaz

let argentina = Object.create(countriesTalkSpanish);
argentina.capital = "beunos aries";
console.log(argentina);
console.log(noInheritence);
// /**fourth example */

// let person = {
//   name: "Jack",
//   age: 20,
// };
// let key = prompt("Kişinin hangi özelliğini öğrenmek isterdiniz?", "name");

// // değişken ile erişim
// alert(person[key]); // Jack (prompt’a “name” yazarsak erişeceğimiz değer)

//// key value deger oluşturma
function objectify(key, value) {
  return {
    [key]: value,
  };
}
console.log(objectify("name", "Ozer")); //  {name: "Ozer"} atanmış yeni değer
console.log("------------");

let person = {
  name: "Jack",
  age: 20,
};
/**
   * Object.keys(obj) – Key’lerden oluşan bir array döner(return).
Object.values(obj) – Value’lardan oluşan bir array döner.
Object.entries(obj) – [key, value] çiftlerinden oluşan bir array döner. 
   */

//   Object.entries(person) = [ ["name","Jack"], ["age",20] ]
console.log(person);

let stringObject = JSON.stringify(person);
console.log("JSON StringObject :" + stringObject);
let newPerson = JSON.parse(stringObject);
console.log("newPerson :" + newPerson.name);

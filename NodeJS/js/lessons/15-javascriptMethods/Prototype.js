const fonksiyonAdi = () => {
  console.log("Merhaba Kodluyoruz");
};
console.log(fonksiyonAdi.name);
// "fonksiyonAdi"

function Insan(isim, yas) {
  this.isim = isim;
  this.yas = yas;
}

const ozer = new Insan("Ozer", 23);
console.log(ozer.yas);
// 23
ozer.yeniOzellik = "İste bu sonradan eklenmiş yeni bir ozellik";

console.log(ozer.yeniOzellik);
//Sınıfa prototype yardımıyla fonksiyon eklemek

Insan.prototype.yeniFonksiyon = () => {
  console.log(`Merhaba Kodluyoruz'a hoşgeldin `);
};
const yasin = new Insan("Yasin", 23);
yasin.yeniFonksiyon();
// Output : "Merhaba <kişi> Kodluyoruz"

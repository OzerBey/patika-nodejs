var makaleler = [
  {
    baslik: "Svelte Nedir? React ve Vue’nün Yerini Alabilir mi?",
    yazar: "Zafer AYAN",
    yayinTarihi: "16/09/2019",
    etiketler: ["hooks", "react", "svelte", "virtual dom", "vue"],
    konu: ["Programlama", "JavaScript"],
  },
  {
    baslik: "Rust Programlama Diline Giriş",
    yazar: "Zafer AYAN",
    yayinTarihi: "09/09/2019",
    etiketler: ["rust", "mozilla"],
    konu: ["Programlama", "Rust"],
  },
  {
    baslik: "Kaos Mühendisliği (Chaos Engineering) Nedir?",
    yazar: "Zafer AYAN",
    yayinTarihi: "02/09/2019",
    etiketler: ["chaos engineering", "chaos monkey", "kaos mühendisliği"],
    konu: ["DevOps"],
  },
  {
    baslik: "Dependency Injection ve Ninject",
    yazar: "Yusuf YILMAZ",
    yayinTarihi: "26/08/2019",
    etiketler: ["dependency injection"],
    konu: ["Tasarım Desenleri ve Prensipler"],
  },
  {
    baslik: "React Native ve Hooks ile bir Haber Uygulaması Yapımı",
    yazar: "Zafer AYAN",
    yayinTarihi: "09/08/2019",
    etiketler: ["fetch api", "react hooks", "react native", "react navigation"],
    konu: ["Programlama", "JavaScript"],
  },
];

for (let i = 0; i < makaleler.length; i++) {
  const element = makaleler[i];
  console.log(element);
}
//Her makalenin başlık ve yazarını tutan bir dizi üretmek isteseydik..
getArticleAndAuthor = (articles) => {
  var tempArticle = [];
  for (let i = 0; i < articles.length; i++) {
    tempArticle.push({
      baslik: articles[i].baslik,
      yazar: articles[i].yazar,
    });
  }
  return tempArticle;
};
console.log("Author and his article :" + getArticleAndAuthor(makaleler));

//with map method
getArticleAndAuthorWithMap = (articles) => {
  return articles.map((x) => ({ baslik: x.baslik, yazar: x.yazar }));
};
console.log(getArticleAndAuthorWithMap(makaleler));

/**
Filter fonksiyonu nedir?
Filter fonksiyonu, belirli bir boolean ifadeye göre ilgili dizi elemanlarının yeni oluşacak diziye aktarılmasını sağlar. 
Örneğin eylül ayı ve sonraki yazıları listelemek isteyelim.
Klasik for döngüsü ile uğraşsaydık aşağıdaki gibi bir kod ortaya çıkacaktı:
 */
//Tarih bilgisinin Date'e döüştürülmesi için metot
// toDate = (strDate) => {
//   var parts = strDate.split("/");
//   var date = new Date(
//     parseInt(parts[2], 10),
//     parseInt(parts[1], 10) - 1,
//     parseInt(parts[0], 10)
//   );
//   return date;
// };

// getEylulSonrasıMakaleler = (makaleler) => {
//   var tempMakaleler = [];
//   for (var i = 0; i < makaleler.length; i++) {
//     if (toDate(makaleler[i].yayinTarihi) >= toDate("01/09/2019"))
//       tempMakaleler.push(makaleler[i]);
//   }
//   return tempMakaleler;
// };

// console.log(getEylulSonrasıMakaleler("makaleler Eylul sonrası" + makaleler));

//filter with Filter() method:
// getAfterSeptemberArticles = (articles) => {
//   return articles.filter((x) =>
//     toDate(x.yayinTarihi >= toDate("01/09/2019")).map((x) => ({
//       baslik: x.baslik,
//       yazar: x.yazar,
//     }))
//   );
// };
//console.log(getAfterSeptemberArticles(makaleler));

/**reduce function */
//sum all the values of an array
let sum = [0, 1, 2, 3, 4, 5].reduce(function (previousValue, currentValue) {
  return previousValue + currentValue;
}, 0);
//sum is 6
console.log("sum of an array :" + sum);

const numberArray = [123, 434, 2, 5, 63242, 3];
function reducer(previous, current, index, array) {
  const returns = previous + current;
  console.log(
    `previous : ${previous}, current : ${current}, index: ${index}, returns : ${returns}`
  );
  return returns;
}

numberArray.reduce(reducer);

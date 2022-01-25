try {
  hello(); // eğer belirlenen şartlar sağlanırsa burası
} catch (err) {
  // belirlenen şartlar sağlanmazsa burası çalışır
  console.log(err);
}

function valid() {
  try {
    if (blabla.value == "") {
      throw "BlaBla alanı boş bırakılamaz!";
    }
  } catch (err) {
    console.log(err);
  }
}

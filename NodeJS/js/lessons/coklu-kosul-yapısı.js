let islem = function (a, b, operator) {
  switch (operator) {
    case "topla":
      return a + b;
      break;
    case "cikar":
      return a - b;
      break;
    case "carp":
      return a * b;
      break;
    case "bol":
      return a / b;
      break;
    case "kare":
      return a ** b;
      break;
    case "kok":
      return Math.floor(Math.sqrt(a));
      break;
    default:
      return "Tanimlanmamis islem";
      break;
  }
};
console.log(islem(23, 14, "topla")); // 37
console.log(islem(16, 2, "kok")); // Tanimlanmamis islem

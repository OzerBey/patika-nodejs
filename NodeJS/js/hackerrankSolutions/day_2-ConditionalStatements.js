function getLetter(s) {
  // Write your code here
  let c = s.charAt(0);
  if (c == "a" || c == "e" || c == "i" || c == "o" || c == "u") {
    return "A";
  } else if (c == "b" || c == "c" || c == "d" || c == "f" || c == "g") {
    return "B";
  } else if (c == "h" || c == "j" || c == "k" || c == "l" || c == "m") {
    return "C";
  } else if (
    c == "n" ||
    c == "p" ||
    c == "q" ||
    c == "r" ||
    c == "s" ||
    c == "t" ||
    c == "v" ||
    c == "w" ||
    c == "x" ||
    c == "y" ||
    c == "z"
  ) {
    return "D";
  }
}

console.log(getLetter("ifelseelseif"));
let boolean;

const isBooleanTrue = boolean ? true : false;
console.log(isBooleanTrue);

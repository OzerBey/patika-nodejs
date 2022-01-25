//https://www.hackerrank.com/challenges/js10-try-catch-and-finally/problem
/**
 * Sample Input 0

"1234"
Sample Output 0

4321 */
function reverseString(s) {
  try {
    s = s.split("").reverse().join("");
  } catch (err) {
    console.log("s.split is not a function");
  }

  console.log(s);
}
reverseString("1234");

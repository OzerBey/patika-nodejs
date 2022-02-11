/**
 * You can specify the lower and upper number of patterns with quantity specifiers. Quantity specifiers are used with curly brackets ({ and }). You put two numbers between the curly brackets - for the lower and upper number of patterns.

For example, to match only the letter a appearing between 3 and 5 times in the string ah, your regex would be /a{3,5}h/.
 */

//test
let A4 = "aaaah";
let A2 = "aaaah";
let multipleA = /a{3,5}h/;
console.log(multipleA.test(A4), multipleA.test(A2));
console.log(A4.match(multipleA));
console.log(A2.match(multipleA));

/**
 * 0 veya daha fazla karakter aramak için : *
 * 1 veya da daha fazla karakter aramak için : +
 */
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/; // Change this line
let result = ohRegex.test(ohStr);
let result2 = ohStr.match(ohRegex).length;
console.log(result);
console.log(result2);

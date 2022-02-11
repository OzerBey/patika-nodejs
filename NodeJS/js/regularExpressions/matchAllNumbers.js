/**Match All Numbers

The shortcut to look for digit characters is \d, with a lowercase d. This is equal to the character class [0-9], which looks for a single character of any number between zero and nine. 
\d is the same as [0-9].
*/
//for example:
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Change this line
let result = movieName.match(numRegex).length;
console.log("The length of numbers  are  " + result);

/***The shortcut to look for non-digit characters is \D. This is equal to the character class [^0-9], which looks for a single character that is not a number between zero and nine. */
// Use the shorthand character class for non-digits \D to count how many non-digits are in movie titles.

//for example
let movieName1 = "2001: A Space Odyssey";
let noNumRegex1 = /\D/g; // Change this line
let result1 = movieName1.match(noNumRegex1);
console.log("resul1:" + result1);

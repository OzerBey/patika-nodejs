// Match Everything But Letters and Numbers
let shortHand = /\W/;
let numbers = "42%";
let sentence = "Coding!";
let result = numbers.match(shortHand);
let result2 = sentence.match(shortHand);
console.log(result);

console.log(result2);

//alphanumeric characters (letters and numbers) that find the first match
let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/gi; // Change this line
let result3 = quoteSample.match(nonAlphabetRegex).length;

console.log(result3);
/**
 * You've learned that you can use a shortcut to match alphanumerics [A-Za-z0-9_] using \w. A natural pattern you might want to search for is the opposite of alphanumerics.

You can search for the opposite of the \w with \W. Note, the opposite pattern uses a capital letter. This shortcut is the same as [^A-Za-z0-9_].
 */

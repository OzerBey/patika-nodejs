/***
 * Check For Mixed Grouping of Characters
Sometimes we want to check for groups of characters using a Regular Expression and to achieve that we use parentheses ().

If you want to find either Penguin or Pumpkin in a string, you can use the following Regular Expression: /P(engu|umpk)in/g

Then check whether the desired string groups are in the test string by using the test() method.
 */

let testStr = "Pumpkin";
let testRegex = /P(engu|umpk)in/;
testRegex.test(testStr);

//requirements
/**
 * Your regex myRegex should return true for the string Franklin D. Roosevelt

Your regex myRegex should return true for the string Eleanor Roosevelt

Your regex myRegex should return false for the string Franklin Rosevelt

Your regex myRegex should return false for the string Frank Roosevelt

You should use .test() to test the regex.

Your result should return true.
 */
//solutuion

let myString = "Eleanor Roosevelt";
let myRegex = /(Eleanor|Franklin D.) Roosevelt/i; //it's my own solution
let result = myRegex.test(myString);

/***
 * let repeatStr = "row row row your boat";
You could use /row row row/, but what if you don't know the specific word repeated? Capture groups can be used to find repeated substrings.

Capture groups are constructed by enclosing the regex pattern to be captured in parentheses. In this case, the goal is to capture a word consisting of alphanumeric characters so the capture group will be \w+ enclosed by parentheses: /(\w+)/.
 */

//example
let repeatRegex = /(\w+) \1 \1/;
repeatRegex.test(repeatStr); // Returns true
repeatStr.match(repeatRegex); // Returns ["row row row", "row"]

//solutuion of the example
let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/;
let result = reRegex.test(repeatNum);
console.log(result);

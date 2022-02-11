/**
 * Search for non-whitespace using \S, which is an uppercase s. This pattern will not match whitespace, carriage return, tab, form feed, and new line characters. You can think of it being similar to the character class [^ \r\t\f\n\v].
 */
let whiteSpace = "Whitespace. Whitespace everywhere!";
let nonSpaceRegex = /\S/g;
whiteSpace.match(nonSpaceRegex).length;

//for example for whiteSpace
let whiteSpace = "Whitespace. Whitespace everywhere!";
let nonSpaceRegex = /\s/g;
whiteSpace.match(nonSpaceRegex).length;

//for example for non whitespace

let whiteSpace = "Whitespace. Whitespace everywhere!";
let nonSpaceRegex = /\S/g;
whiteSpace.match(nonSpaceRegex).length;

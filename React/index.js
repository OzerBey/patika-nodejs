//EcmaScript 6 (ES6) features
/*//var slugify = require("slugify"); // before from ES6
import slugify from "slugify";

// const title = slugify("Hello World");
const title = slugify("Hello World", "*"); //2nd paramter is for options

console.log(title);
*/

// my module creating using ES6
/*import Sum from "./myModule.js";
import { sum2 } from "./myModule.js";
console.log(Sum(1, 2));
console.log(sum2(1, 2));
import { hello } from "./myModule.js";*/

import {
  hello,
  sum,
  sum2,
  sum3,
  sub,
  text,
  user,
  users,
} from "./modules/myModule.js";
hello("Ozer");
console.log(sum(1, 2));
console.log("Result of Sub =>", sub(1, 2));
console.log(text + "=>" + user.name);
console.log(users);

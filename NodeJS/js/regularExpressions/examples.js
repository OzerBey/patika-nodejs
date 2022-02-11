/***
 * 
 * TASK :
 * Usernames are used everywhere on the internet. They are what give users a unique identity on their favorite sites.

You need to check all the usernames in a database. Here are some simple rules that users have to follow when creating their username.

Usernames can only use alpha-numeric characters.

The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.

Username letters can be lowercase and uppercase.

Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.


 */
//solution 1:
let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;
let result = userCheck.test(username);
console.log(result);
/**
 * Code Explanation
^ - start of input
[a-z] - first character is a letter
[a-z]+ - following characters are letters
\d*$ - input ends with 0 or more digits
| - or
^[a-z] - first character is a letter
\d\d+ - following characters are 2 or more digits
$ - end of input
 */

//solution 2:
let username1 = "JackOfAllTrades";
let userCheck1 = /^[a-z]{2,}\d*$/i;
let result1 = userCheck1.test(username1);
console.log(result1);

//solution 3:
let username2 = "JackOfAllTrades";
const userCheck2 = /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i;
let result2 = userCheck2.test(username2);

/***
 * 
 * Code Explanation
^ - start of input
[a-z] - first character is a letter
[0-9]{2,0} - ends with two or more numbers
| - or
[a-z]+ - has one or more letters next
\d* - and ends with zero or more numbers
$ - end of input
i - ignore case of input
 */

//is Even
let evenRegex = /[02468]*/;
let number = "6928347893298";
let result3 = evenRegex.test(number);
let result4 = number.match(evenRegex);
console.log("isEven:" + result3);
console.log("The even numbers are: " + result4);

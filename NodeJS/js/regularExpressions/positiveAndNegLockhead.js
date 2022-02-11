let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
let result = checkPass.test(password); //return true or false
let result2 = password.match(checkPass); //return array of matches
console.log(result);
console.log(result2);

//other example
let sampleWord = "astronaut";
let pwRegex = /(?=\w{6})(?=\w*\d{2})/;
let result = pwRegex.test(sampleWord);

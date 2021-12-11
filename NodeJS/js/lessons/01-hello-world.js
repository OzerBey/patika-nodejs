function regexVar() {
  /*
   * Declare a RegExp object variable named 're'
   * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
   */
  let re = "";
  let arr = new Array();
  let firstVal = re.charAt(0);
  let lastVal = re.charAt(re.length - 1);
  arr.push(firstVal);
  arr.push(lastVal);
  console.log(arr);
  /*
   * Do not remove the return statement
   */
  if (firstVal == lastVal) {
    re = true;
  } else {
    re = false;
  }
  return re;
}
console.log(regexVar());

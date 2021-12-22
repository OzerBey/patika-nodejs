const numbers = [56,15,56,2, 44, 3, 22, 56, 0, 2, 56, 3];

/*
//alternative solution
function getSecondLargest2(nums) {
  // Complete the function
  nums.sort(function (a, b) {
    return b - a;
  });
  firstLargestNumber = Math.max(...nums); // firstLargestNumber
  index = nums.indexOf(firstLargestNumber); // the index of firstLargestNumber
  console.log("index: " + index);
  nums.splice(index, 1); // Delete first largest number
  secondLargestNumber = Math.max(...nums); // firstlargestNumber got removed, lets find next largest number
  return secondLargestNumber; //return the value>
}
//console.log(getSecondLargest2(numbers));
*/

function getSecondLargestNumber(nums) {
  let results = nums.sort(function (a, b) {
    return b - a;
  });
  console.log("Results :", results);

  return results.find((result) => result < nums[0]);
}
console.log(getSecondLargestNumber(numbers));

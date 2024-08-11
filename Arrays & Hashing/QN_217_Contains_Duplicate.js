//Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
var containsDuplicate = function (nums) {
  let obj = {};
  for (let i of nums) {
    if (obj[i]) return true;
    obj[i] = true;
  }
  return false;
};

const removeDuplicate = (nums) => {
  return [...new Set(nums)];
};

let num1 = [1, 2, 3, 1];
let num2 = [1, 2, 3, 4];
let num3 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];

console.log(containsDuplicate(num1), ", removed:-", removeDuplicate(num1));
console.log(containsDuplicate(num2), ", removed:-", removeDuplicate(num2));
console.log(containsDuplicate(num3), ", removed:-", removeDuplicate(num3));

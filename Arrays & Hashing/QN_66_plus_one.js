
var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] === 9) {
      digits[i] = 0;
    } else {
      digits[i] += 1;
      return digits;
      // break;
    }
  }
  if (digits[0] === 0) {
    digits.unshift(1);
    return digits;
  }
};

console.log(plusOne([1,2,3]))
console.log(plusOne([9,9,9]))
console.log(plusOne([9,0,9]))
var reverse = function (x) {
  let max = 2 ** 31 - 1;
  let min = -(2 ** 31);
  let low = false;
  if (x < 0) {
    x = x * -1;
    low = true;
  }
//   let ans = "";
  let ans = 0;
  while (x > 0) {
    let digit = x % 10;
    // ans = ans + digit;
    ans = ans * 10 + digit;
    x = Math.floor(x / 10);
  }
//   ans =+ans
  if (low) {
    ans = -ans;
    if (ans < min) {
      return 0;
    }
    return ans;
  } else if (ans > max) {
    return 0;
  }
  return ans;
};
console.log(reverse(232));
console.log(reverse(-123));
console.log(reverse(120));

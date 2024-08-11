/*
-The thing is with js we can sort strings 
and when we sort an array of different strings 
they will be sorted alphabetically, 
which means all we left to do is find 
the common part between the first and 
the last values in the sorted array. 
-As simple as this.
*/
var longestCommonPrefix = function (strs) {
  strs.sort();
  console.log('strs:', strs)
  for (let i = 0; i < strs[0].length; i++) {
    if (strs[0][i] !== strs[strs.length - 1][i]) {
      return strs[0].slice(0, i);
    }
  }
  return strs[0];
};
let strs1 = ["flower", "flow", "flight"];
let strs2 = ["dog", "racecar", "car"];
let strs3 = ["aa", "aaa", "aa"];
let strs4 = ["vh", "adbc", "ahbcd"];
let strs5 = [""];
let strs6 = ["", "", ""];
console.log(longestCommonPrefix(strs1));
console.log(longestCommonPrefix(strs2));
console.log(longestCommonPrefix(strs3));
console.log(longestCommonPrefix(strs4));
console.log(longestCommonPrefix(strs5));

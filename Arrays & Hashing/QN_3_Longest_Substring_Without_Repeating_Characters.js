
var lengthOfLongestSubstring = function (s) {
  let set = new Set();
  let max = 0;
  let r = 0,l = 0;
while (r < s.length) {
    if (set.has(s[r])) {
      set.delete(s[l++]);
    } else {
      set.add(s[r++]);
      max = Math.max(max, set.size);
    }
  }

  return max;
};

let s1 = "abcabcbb",
  s2 = "bbbbb",
  s3 = "pwwkew";
  s4 = "abcdefghpwwkew";
console.log(lengthOfLongestSubstring(s1));
console.log(lengthOfLongestSubstring(s2));
console.log(lengthOfLongestSubstring(s3));
console.log(lengthOfLongestSubstring(s4));

// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

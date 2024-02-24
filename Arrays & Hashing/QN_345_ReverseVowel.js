var reverseVowels = function (s) {
  let str = s.split("");
  
  let stk = [];
  let vowel = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

  for (let ele of str) {
    if (vowel.includes(ele)) {
      stk.push(ele);
    }
  }
  for (let i = 0; i < str.length; i++) {
    if (vowel.includes(str[i])) {
      let a = stk.pop();
      str[i] = a;
    }
  }
  console.log(str.join(""));
};
let s1 = "hello";
let s2 = "leetcode";
reverseVowels(s1);
reverseVowels(s2);

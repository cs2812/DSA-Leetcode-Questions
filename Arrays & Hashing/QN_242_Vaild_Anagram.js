var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  let o = {};
  let h = {};
  for (let i of s) {
    o[i] = (o[i] || 0) + 1;
  }
  for (let i of t) {
    h[i] = (h[i] || 0) + 1;
  }
  for (let i in h) {
    if (!o[i] || o[i] !== h[i]) {
      return false;
    }
  }
  return true;
};

console.log("2nd Method");
const isAnagram2 = (s, t) => {
  s = s.trim().split("").sort().join("");
  t = t.trim().split("").sort().join("");
  return s === t;
};

let s1 = "rat",
  t1 = "car";
let s2 = "anagram",
  t2 = "nagaram";
console.log(isAnagram(s1, t1));
console.log(isAnagram(s2, t2));
console.log(isAnagram2(s1, t1));
console.log(isAnagram2(s2, t2));

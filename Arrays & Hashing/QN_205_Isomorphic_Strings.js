let checkValue = (o, value) => {
  for (let ele in o) {
    if (o[ele] === value) {
      return false;
    }
  }
  return true;
};

var isIsomorphic = function (s, t) {
  //"bbbaaaba"
  //"aaabbbba"

  //"badc"
  //"baba"
  let o = {};
  for (let i = 0; i < s.length; i++) {
    if (o[s[i]]) {
      if (o[s[i]] !== t[i]) {
        return false;
      }
    } else {
      let res = checkValue(o, t[i]);
      if (res) {
        o[s[i]] = t[i];
      } else {
        return false;
      }
    }
  }
  return true;
};

let s1="bbbaaaba", t1="aaabbbba"
let s2="badc" ,t2="baba"
let s3 = "egg", t3 = "add"
let s4 = "paper", t4 = "title"
console.log(isIsomorphic(s1,t1))
console.log(isIsomorphic(s2,t2))
console.log(isIsomorphic(s3,t3))
console.log(isIsomorphic(s4,t4))
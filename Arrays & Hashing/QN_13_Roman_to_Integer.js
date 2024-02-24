var romanToInt = function (s) {
  let c = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (i === s.length - 1) {
      c += check(s[i]);
    } else if (check(s[i]) < check(s[i + 1])) {
      c -= check(s[i]);
    } else {
      c += check(s[i]);
    }
  }
  return c;
};
function check(n) {
  if (n === "I") return 1;
  if (n === "X") return 10;
  if (n === "C") return 100;
  if (n === "V") return 5;
  if (n === "L") return 50;
  if (n === "D") return 500;
  if (n === "M") return 1000;
}
// let s = "MCMXCIV";  // 1994
// let s = "MMCCCXLI"; //2341
/*
2341
2000 MM
 300 CCC 
  40 XL
   1 I
*/ 
console.log(romanToInt(s));

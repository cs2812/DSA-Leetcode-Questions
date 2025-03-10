// var isSubsequence = function(s, t) {
//     if(s.length > t.length){
//         return false
//     }
//    for(let ele of s){
//        if(!t.includes(ele)){
//            return false
//        }
//        else{
//            t= t.slice(t.indexOf(ele)+1)
//            //slice delete all the element before finded element
//        }
//    }
//    return true
// };

var isSubsequence = function (s, t) {
  if (s.length > t.length) {
    return false;
  }
  let l = 0;
  let r = 0;
  while (l < s.length && r < t.length) {
    if (s[l] === t[r]) {
      l++;
      r++;
    } else {
      r++;
    }
  }
  return l === s.length;
};

// let s1 = "abc",
//   t1 = "ahbgdc";
let s1='';
let t1='ahbgdc';
// let s1 = "axc",
//   t1 = "ahbgdc";
// let s1 = 'dvd'
// let t1= 'asdfavvaasdfd'
console.log(isSubsequence(s1, t1));

// //1.
// var lengthOfLastWord = function(s) {
//   let trimmedString = s.trim();
//   return trimmedString.length - trimmedString.lastIndexOf(' ') - 1;
// /*trimmedString.lastIndexOf(' ') because there is space in between trimmedString. with the help of space index we are getting are result. and -1 just because index start from 0 */ 
// };

//2.
var lengthOfLastWord = function(s) {
   let trimmed = s.trim().split(" ")
  let lastWord = trimmed.at(-1)
   return lastWord.length;
};

//3.Beats = 99.93%
var lengthOfLastWord = function(s) {
   return s.trim().split(" ").at(-1).length
};

//arr.at(-1) === arr[arr.length-1]

let s1 = "   fly me   to   the moon  "
let s2 = "Hello World"
let s3 = "luffy is still joyboy"
console.log(lengthOfLastWord(s1))
console.log(lengthOfLastWord(s2))
console.log(lengthOfLastWord(s3))
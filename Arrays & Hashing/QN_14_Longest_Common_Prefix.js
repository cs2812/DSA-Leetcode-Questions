var longestCommonPrefix = function(strs) {
    if(strs.length==1){
        return strs[0]
    }
let prefix=""
  for(let i=0;i<strs.length;i++){
    let char = strs[0][i]
    for(let j=1;j<strs.length;j++){
      if(char!==strs[j][i]){return prefix}
    }
      prefix+=char
  }
    
}
let strs1 = ["flower","flow","flight"]
let strs2 = ["dog","racecar","car"]
console.log(longestCommonPrefix(strs1))
console.log(longestCommonPrefix(strs2))
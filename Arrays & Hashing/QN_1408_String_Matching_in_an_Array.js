var stringMatching = function(words) {
    let res=[]
    for(let i=0;i<words.length;i++){
      for(let j=0;j<words.length;j++){
        let present = words[j].includes(words[i])
        if(i!==j && present){
            res.push(words[i])
            break;
        }
      }
    }
    return res;
};
let words = ["mass","as","hero","superhero"]
// words = ["leetcode","et","code"]
// words = ["blue","green","bu"]
console.log(stringMatching(words))
// Output: ["as","hero"]
function getHint(secret, guess) {
let secretArr =secret.split("") 
let guessArr =guess.split("") 
let bull =0
for(let i=0;i<guessArr.length;i++){
    if(guessArr[i]==secretArr[i]){
      // console.log("Bull",guessArr[i])
        guessArr.splice(i,1)
        secretArr.splice(i,1)
        bull ++
      i--
    } 
}
let cow=0;
for(let j=0;j<guessArr.length;j++){
    if( secretArr.includes(guessArr[j]) ){
        // console.log("Cow",cow)
        let res = guessArr.splice(j,1)
        let ind =secretArr.indexOf(res[0])
        secretArr.splice(ind,1)
        cow++;
        j--;
    }
}
return bull+"A"+cow+"B"
}
let secret1 = "1123", guess1 = "0111"
let secret2 = "1807", guess2 = "7810"
let secret = "11", guess = "11"

console.log(getHint(secret1,guess1))
console.log(getHint(secret2,guess2))
console.log(getHint(secret,guess))
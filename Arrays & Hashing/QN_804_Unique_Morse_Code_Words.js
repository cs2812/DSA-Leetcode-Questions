var uniqueMorseRepresentations1 = function(words) {
    let code =[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
    let alph=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    let arr=[]
   for(let i=0;i<words.length;i++){
      let morse =create(words[i],code,alph)
      if(!arr.includes(morse)){
          arr.push(morse)
      }
   }
   return arr.length 
};
function create(word,code,alph){
    let bag=""
    for(let i=0;i<word.length;i++){
    let ind = alph.indexOf(word[i])
    bag+=code[ind]
    }
    return bag;
}


// 2nd Method
var uniqueMorseRepresentations2 = function(words) {
    let obj={
        a:".-",
        b:"-...",
        c:"-.-.",
        d:"-..",
        e:".",
        f:"..-.",
        g:"--.",
        h:"....",
        i:"..",
        j:".---",
        k:"-.-",
        l:".-..",
        m:"--",
        n:"-.",
        o:"---",
        p:".--.",
        q:"--.-",
        r:".-.",
        s:"...",
        t:"-",
        u:"..-",
        v:"...-",
        w:".--",
        x:"-..-",
        y:"-.--",
        z:"--.."
    } 
        let set =new Set()
        for(let i=0;i<words.length;i++){
            let morseCode = create(words[i],obj)
            set.add(morseCode)
        }
        return set.size
    };
    function create(word,obj){
        let bag=""
        for(let i=0;i<word.length;i++){
        bag+= obj[word[i]]
        }
        return bag;
    }
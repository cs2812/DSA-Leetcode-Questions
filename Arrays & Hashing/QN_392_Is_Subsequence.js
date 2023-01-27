var isSubsequence = function(s, t) {
    if(s.length > t.length){
        return false
    }
   for(let ele of s){
       if(!t.includes(ele)){
           return false
       }
       else{
           t= t.slice(t.indexOf(ele)+1)
           //slice delete all the element before finded element
       }
   }
   return true 
};

let s1 = "abc", t1 = "ahbgdc"
let s2 = "axc", t2 = "ahbgdc"
console.log(isSubsequence(s1,t1))
console.log(isSubsequence(s2,t2))
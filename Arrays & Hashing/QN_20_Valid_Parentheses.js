var isValid = function(s) {
    if(s.length%2===1){return false}
    let stk=[]
    let stk2=[] 
    for(let ele of s){
        if(ele==="(" || ele==="{" || ele==="["){
            stk.push(ele)
        }
        else{
            stk2.push(ele)
            if(stk[stk.length-1]===check(ele)){stk.pop();stk2.pop()}
        }
    }
    if(!stk.length && !stk2.length)return true;
    else return false;   
   };
   function check(char){
   if(char===")")return "(";
   if(char==="}")return "{";
   if(char==="]")return "["
   }
   let s1 ="([}}])";
   let s2 = "()[]{}";
   let s3 = "(]";
   console.log(isValid(s1))
   console.log(isValid(s2))
   console.log(isValid(s3))
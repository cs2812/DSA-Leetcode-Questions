var generate = function(numRows) {
    let arr=[] 
    if(numRows===1){
      arr=[[1]]
    }
    else{
    arr=[[1],[1,1]] 
    }
    for(let i=1;i<numRows-1;i++){
        let a=[1]
        for(let j=1;j<=arr[i].length;j++){
          if(j===arr[i].length){
            a.push(1)
          }
          else{
            a.push(arr[i][j-1]+arr[i][j])
          }
        }
      arr.push(a)
    }
      return arr
    };
    let num1 = 5
    let num2 = 1
    
    console.log(generate(num1))// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
    console.log(generate(num2))//[[i]]

    console.log("//2nd Method")
    var generate2 = function(numRows) {
      let res=[] 
      for(let i=0;i<numRows;i++){
          let row=[]
          for(let j=0;j<=i;j++){
            if(j===0 || j===i){
              row.push(1)
            }
            else{
              row.push(res[i-1][j-1]+res[i-1][j])
            }
          }
        res.push(row)
      }
        return res
      }
      console.log(generate2(num1))// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
      console.log(generate2(num2))//[[i]]
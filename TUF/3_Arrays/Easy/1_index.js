// 1. Remove duplicates from Sorted array
/*
const removeDuplicate = (arr) => {
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  arr.length = i;
  return arr;
};
console.log(removeDuplicate([1, 1, 2, 2, 3, 4, 4, 5, 5, 6, 7, 7]));
*/


//2. Left rotate an array by n places
/*
const rotateArr=(arr,l,r)=>{
    while(l<r){
        [arr[l],arr[r]]=[arr[r],arr[l]]
        l++;r--
    }
}
let n=3
const arr=[1,2,3,4,5,6,7,8]
rotateArr(arr,0,n-1)
rotateArr(arr,n,arr.length-1)
rotateArr(arr,0,arr.length-1)
console.log(arr)
*/


//3. Move Zeros to end
/*\
let arr=[2,1,0,5,7,0,2,4,0]
let n = arr.length
let j =arr.indexOf(0)
let i=j+1
while(i<n){
    if(arr[i]!==0){
        [arr[i], arr[j]] = [arr[j], arr[i]];
        j++;i++
    }
    else {i++}
}
console.log(arr)
*/



//4. Find missing number in an array
/*
let arr = [1,2,3,5]; let n=arr.length 
let t =((n+1)*(n+2))/2
for(let i=0;i<n;i++){
    t-=arr[i]
}
console.log(t)
*/


//5. Maximum Consecutive Ones
/*
let c=0,m=0
for(let ele of [1,1,0,0,1,1,1,0,1,1]){
if(ele===1){
    c++
    if(m<c){m=c}
}else{c=0}
}
console.log(m)
*/





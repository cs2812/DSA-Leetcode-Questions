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

//6. Maximum Subarray Sum (Brute Force)
/*
const arr = [1, 2, 3, -2, -1, 3, -4, 2, 3, 5, -1, 3];
let max = -Infinity;
for (let i = 0; i < arr.length; i++) {
  let sum = 0;
  for (let j = i; j < arr.length; j++) {
    sum += arr[j];
    max = Math.max(max, sum);
  }
}
console.log(max);
*/

//7. Maximum Subarray Sum (With Kadane's Algorithm)
/*
const arr =[1,2,3,-2,-1,3,-4,2,3,5,-1,3]
let cs=0,ms=0
for(let i=0;i<arr.length;i++){
  cs+=arr[i]
  ms = Math.max(ms,cs)
  if(cs<0){cs=0}
}
console.log(ms)
*/
//6. Longest Subarray with Sum K (Positives [Brute force])
/*
function find(arr, k) {
  let max = -Infinity;
  let l = arr.length;
  for (let i = 0; i < l; i++) {
    let s = 0;
    for (let j = i; j < l; j++) {
      s += arr[j];
      if (s === k) {
        max = Math.max(max, j - i + 1);
      }
    }
  }
  return max;
}

let arr = [1, 2, 0, 1, 2, 1, 0, 3, 2, 1, 3, 0, 2];
// let arr=[1,2,0,1,2,1]
console.log(find(arr, 8));
 */

// Longest Subarray with sum K | [Positives and Negatives]
/*
const find = (arr, k) => {
  let max = -Infinity;
  const preSum = {};
  let s = 0;
  for (let i = 0; i < arr.length; i++) {
    s += arr[i];
    
    if (s === k) {
      max = i + 1;
    } else {
      if (preSum[s - k] !== undefined) {
        max = Math.max(max, i - preSum[s - k]);
      }
    }
      // this condition will handle the case when the sum is repeated or (in Positives and Negatives array)
      if(!preSum[s]){preSum[s]=i}
  }
  return max;
};

let arr=[1,2,0,1,2,1,0,3,2,1,3,0,2]
// let arr = [1, 2, 0, 1, 2, 1];
console.log(find(arr, 8));
*/

// 1. Sort an array of 1s, 2s and 3s

/*
let arr=[1,3,1,2,1,3,1,2,3,1]
const find=(arr)=>{
let mid=0,l=0,r=arr.length-1
while(mid<=r){
    if(arr[mid]===1){
        [arr[mid],arr[l]]=[arr[l],arr[mid]]
        l++;mid++
    }
    else if(arr[mid]===3){
        [arr[mid],arr[r]]=[arr[r],arr[mid]]
        r--;
    }
    else mid++
}
return arr
}
console.log(find(arr))
*/

//2. Find the Majority Element that occurs more than N/2
/*
// Time complexity= O(N) Space complexity = O(N)

const find=(arr)=>{
let o={}
for(let ele of arr){
    o[ele] = (o[ele]||0)+1
}
for(let ele in o){
    if(o[ele]>=Math.floor(arr.length/2)){
        return ele
    }
}
return -1
}

// Time complexity= O(N) Space complexity = O(1)

const find = (arr) => {
  let c = 0,
    ele = null,
    c1 = 0;
  for (let item of arr) {
    if (c === 0) {
      c = 1;
      ele = item;
    } else if (ele === item) {
      c++;
    } else {
      c = 0;
    }
  }
  for (let item of arr) {
    if (item === ele) {
      c1++;
    }
  }
  if(c1>=Math.floor(arr.length/2)){
    return ele
  }
  return -1
  // console.log(ele)
};
const arr = [2, 2, 1, 1, 1, 2, 2];
console.log(find(arr));
*/


// 3. Stock Buy And Sell
/*
=> Brute force
const find=(arr)=>{
let max =0
let min = 0
for(let i=0;i<arr.length;i++){
    if(arr[min]>arr[i]){
        min = i
    }
}
if(min+1>=arr.length){
    return 0
}
max=min+1
for(let i=min+1;i<arr.length;i++){
     if(arr[max]<arr[i]){
         max = i
     }
}
return arr[max]-arr[min]
}

=> optimize
const find=(arr)=>{
    let maxPro = 0;
    let minPrice = Infinity;

    for (let i = 0; i < arr.length; i++) {
        minPrice = Math.min(minPrice, arr[i]);
        maxPro = Math.max(maxPro, arr[i] - minPrice);
    }
    return maxPro;
}
console.log(find(arr))

*/
var removeElement = function(nums, val) {
  let arr = nums.filter((ele)=>ele!==val)
  nums.length=0
  nums.push(...arr)
   return nums.length
}
let  nums = [3,5,2,2,3], val = 3;
let nums1=[7,25,21,2,20,7,24,9,24,24,6,22,5,1,26,17,18,29,25,9,8,27,6,26,8,5,27,5,0,29,26,29,24,18,23,14,25,17,15,20,11,22,4,17,15,0,26,3,21,21,12,0,10,10,26,19,15,23,16,7,14,12,7,8,0,0,14,26,18,22,8,21,6,12,0,21,4,26,16,26,18,21] ; 
let val1 = 26;
// output = [7,25,21,2,20,7,24,9,24,24,6,22,5,1,21,17,18,29,25,9,8,27,6,18,8,5,27,5,0,29,16,29,24,18,23,14,25,17,15,20,11,22,4,17,15,0,4,3,21,21,12,0,10,10,21,19,15,23,16,7,14,12,7,8,0,0,14,0,18,22,8,21,6,12]
let nums2 = [0,1,2,2,3,0,4,2], val2 = 2

console.log(removeElement(nums,val))
console.log(removeElement(nums1,val1))
console.log(removeElement(nums2,val2))
var lengthOfLIS = function(nums) {
   let arr=[nums[0]]
   for(let i=0;i<nums.length;i++){
   if(arr.at(-1)<nums[i]){
       arr.push(nums[i])
   }
   else{
       for(let j=0;j<arr.length;j++){
           if(arr[j]>=nums[i]){
               arr[j]=nums[i]
               break;
           }
       }
   }
   }
 return arr.length;  
};
let nums1 = [10,9,2,5,3,7,101,18]
let nums2 = [0,1,0,3,2,3]
let nums3 = [7,7,7,7,7,7,7]
console.log(lengthOfLIS(nums1))
console.log(lengthOfLIS(nums2))
console.log(lengthOfLIS(nums3))
// For Unsorted Array
var twoSum1 = function(nums, target) {
    let map={};
    for(let i=0;i<nums.length;i++){
      let rest = target - nums[i]
      if(map[rest] || map[rest]===0){ return [map[rest],i] }
      map[nums[i]]=i
    }
};

//For Sorted Array
var twoSum2 = function(nums, target) {
    nums=nums.sort((a,b)=>a-b)
    let i=0,j=nums.length-1
    while(i<j){  
      let sum = nums[i]+nums[j]

      if(sum===target){
        return [i,j]
      }
      else if(sum>target){
          j--
      }
      else if(sum<target){
          i++
      }
    }
};
let nums1 = [2,7,11,15], target1 = 9
let nums2 = [3,2,4], target2 = 6
let nums3 = [3,3], target3 = 6

console.log(twoSum1(nums1,target1))
console.log(twoSum1(nums2,target2))
console.log(twoSum1(nums3,target3))

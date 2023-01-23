//Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
var containsDuplicate = function(nums) {
    let obj={}
    for(let i of nums){
      if(obj[i]) return true
      obj[i]=true
    }
    return false
};
let num1 = [1,2,3,1]
let num2 = [1,2,3,4]
let num3 = [1,1,1,3,3,4,3,2,4,2]
containsDuplicate(num1)
containsDuplicate(num2)
containsDuplicate(num3)
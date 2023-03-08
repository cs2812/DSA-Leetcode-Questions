var triangularSum = function(nums) {
    while(nums.length>1){
        for(let i=0;i<nums.length-1;i++){
          nums[i] = (nums[i]+nums[i+1])%10
        }
      nums.length--
        // console.log("arr",nums)
    } 
    return nums[0];
  }
  // console.log(triangularSum([1,2,3,4,5]))
  console.log(triangularSum([2,6,6,2,5,7]))
  // console.log(triangularSum([2,6,6,5,5,3,3,8,6,4,3,3,5,1,0,1,3,6,9]))
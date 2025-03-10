const findRangSum = (nums, rangArr) => {
  let num = 0;
  for (let i = 0; i < nums.length; i++) {
    num += nums[i];
    nums[i] = num;
  }
  let ans = [];
  for (let rang of rangArr) {
    let rm = rang[0] - 1;
    let add = rang[1];
    if (nums[rm]) {
      ans.push(nums[add] - nums[rm]);
    } else {
      ans.push(nums[add]);
    }
  }
  console.log(ans);
};

findRangSum(
  [1, 2, 3, 4, 5, 6],
  [
    [0, 4],
    [1, 4],
    [3, 4],
    [2, 5],
    [-1, 4],
    [0, 0],
  ]
); //[15,14,9,18,15,1]

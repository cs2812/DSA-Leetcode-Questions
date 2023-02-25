function qnique(set1, set2) {
  let output = [];
  let arr = Array.from(set1);
  for (let i of arr) {
    if (set2.has(i)) {
      output.push(i);
    }
  }
  return output;
}

var intersection = function (nums1, nums2) {
  let set1 = new Set(nums1);
  let set2 = new Set(nums2);
  if (set1.size < set2.size) {
    return qnique(set1, set2);
  } else {
    return qnique(set2, set1);
  }
};



let nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]
let ans =intersection(nums1,nums2)
console.log(ans)

// let nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Explanation: [4,9] is also accepted.
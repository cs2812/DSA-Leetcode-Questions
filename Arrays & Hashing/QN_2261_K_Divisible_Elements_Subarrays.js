var countDistinct = function(nums, k, p) {
    let set = new Set()
    for(let i=0;i<nums.length;i++){
        let count =0;
        let arr="";
        for(let j=i;j<nums.length;j++){
            if(count>=k){
                break;
            }
            else if(nums[j]%p===0){
                count++
            }
            arr+=(nums[j])
            set.add(arr)
        }
    }
    return set.size
  };

  let nums = [2,3,3,2,2], k = 2, p = 2
  //output = 11
  let nums1 = [1,2,3,4], k1 = 4, p1 = 1
  //output = 10

  let res1=countDistinct(nums,k,p)
  let res2 =countDistinct(nums1,k1,p1)
  console.log(res1)
  console.log(res2)
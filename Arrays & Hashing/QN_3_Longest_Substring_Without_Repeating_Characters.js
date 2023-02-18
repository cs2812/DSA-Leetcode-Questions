var lengthOfLongestSubstring = function(s) {
    let map = new Set()
    let max = 0
    let r=0 , l=0
    while(r<s.length){
        if(map.has(s[r])){
            map.delete(s[l++])
        }
        else{
            map.add(s[r++])
            max = Math.max(max,map.size)
        }
    }
    return max;
  
  };

  let  s1 = "abcabcbb",s2= "bbbbb", s3="pwwkew"
  console.log(lengthOfLongestSubstring(s1))
  console.log(lengthOfLongestSubstring(s2))
  console.log(lengthOfLongestSubstring(s3))


// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
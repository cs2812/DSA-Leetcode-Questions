/* Given an input array of N characters consisting only of lowercase alphabets. 
-The task is to find the first non-repeating character, 
each time a character is inserted into the array. 
-If no non-repeating element is fou nd print -1. 
-For example, if the input is [a, a, b, c] then the output is [a, -1, b, b]. 
write a code in javascript.*/

function firstNonRepeatingChar(input) {
  const charCount = {};
  const result = [];

  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }

    let foundNonRepeatingChar = false;
    for (let j = 0; j <= i; j++) {
      if (charCount[input[j]] === 1) {
        result.push(input[j]);
        foundNonRepeatingChar = true;
        break;
      }
    }

    if (!foundNonRepeatingChar) {
      result.push(-1);
    }
  }

  return result;
}
const input = ['a', 'a', 'b', 'c'];
const result = firstNonRepeatingChar(input);
console.log(result); // Output: ['a', -1, 'b', 'b']

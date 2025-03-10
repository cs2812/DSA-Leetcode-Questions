const stringMatching = (arr) => {
    let ans = [];
    arr.sort((a, b) => a.length - b.length); // Sort by length to check smaller strings first
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j].includes(arr[i])) {
                ans.push(arr[i]);
                break; // Move to the next string as soon as a match is found
            }
        }
    }
    return ans;
};

let words = ["mass","as","hero","superhero"]   // Output = [ 'as', 'hero' ] 
// words = ["leetcode","et","code"] //Output = [ 'et', 'code' ]
// words = ["blue","green","bu"]    // Output= []
console.log(stringMatching(words))
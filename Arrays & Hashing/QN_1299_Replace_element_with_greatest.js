var replaceElements = function(arr) {
    if(arr.length===1){
        return [-1]
    }
    let max = arr[arr.length - 1];
    arr[arr.length - 1] = -1;
    
    for(let i = arr.length - 2; i >= 0; i--) {
        let curr = arr[i];
        arr[i] = max;
        if(curr > max) max = curr;
    }
    
    return arr;
};
let arr1 = [17,18,5,4,6,1]
let arr2 = [400]
console.log(replaceElements(arr1))
console.log(replaceElements(arr2))
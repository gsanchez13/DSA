// You are given an integer array nums and an integer k.
// In one operation, you can pick two numbers from the array whose sum equals k and remove them from the array.
// Return the maximum number of operations you can perform on the array.

// Input: nums = [1,2,3,4], k = 5
// Output: 2
// Explanation: Starting with nums = [1,2,3,4]:
// - Remove numbers 1 and 4, then nums = [2,3]
// - Remove numbers 2 and 3, then nums = []
// There are no more pairs that sum up to 5, hence a total of 2 operations.

// Input: nums = [3,1,3,4,3], k = 6
// Output: 1
// Explanation: Starting with nums = [3,1,3,4,3]:
// - Remove the first two 3's, then nums = [1,4,3]
// There are no more pairs that sum up to 6, hence a total of 1 operation.

//1.create return var with times operations can be performed
//2. create obj to match values to see if they equal sum
//3. loop through arr and if condition is met, splice out numbers in condition
//4. add all times condition is met to return var

var maxOperations = function (nums, k) {
    let ops = 0;
    let tracker = new Map();
    if (nums.length === 0) return ops;
    for (let i = 0; i < nums.length; i++) {
        let curr = nums[i];
        if (!tracker[i]) {
            tracker[i] = curr
        }
    }
    for (let key1 in tracker) {
        let currVal = tracker[key1]
        for (let key2 in tracker){
            if(key1 !== key2){
                let nextVal = tracker[key2]
                if(currVal + nextVal === k){
                    ops += 1;
                    delete tracker[key1]
                    //not properly deleting key1 here and is being reused
                    delete tracker[key2]
                }
            }
        }
    }
    return ops
};

let nums1 = [1, 2, 3, 4], k1 = 5;
let nums2 = [3, 1, 3, 4, 3], k2 = 6;
console.log(maxOperations(nums1, k1));
console.log(maxOperations(nums2, k2));
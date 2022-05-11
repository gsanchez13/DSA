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
    if (nums.length === 0) return ops;
    let nums2 = [...nums]
    for (let i = 0; i < nums2.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            if (i !== j && nums2[i] + nums2[j] === k) {
                ops++
                nums2.splice(i, 1)
                nums2.splice(j, 1)
            }
        }
    }
    return ops
};

let nums1 = [1, 2, 3, 4], k1 = 5;
let nums2 = [3, 1, 3, 4, 3], k2 = 6;
let nums3 = [4, 4, 1, 3, 1, 3, 2, 2, 5, 5, 1, 5, 2, 1, 2, 3, 5, 4], k3 = 2
console.log(maxOperations(nums1, k1));
console.log(maxOperations(nums2, k2));
console.log(maxOperations(nums3, k3));

// for (let i = 0; i < nums.length; i++) {
//     let curr = nums[i]
//     if (!tracker[curr]) {
//         tracker[curr] = 1
//     }
//     else {
//         tracker[curr] += 1
//     }
// }
// for (let key1 in tracker) {
//     for(let i = 0; i < nums.length; i++){
//         if(parseInt(key1) + nums[i] === k){
//             console.log(key1, nums[i])
//             ops += 1
//             nums.splice(i, 1)
//             console.log(nums)
//         }
//     }
// }
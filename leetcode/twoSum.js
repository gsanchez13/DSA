// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.


//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}

var twoSum = function (nums, target) {
    result = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] + nums[j] === target && i !== j && result.length !== 2) {
                result.push(i, j)
            }
        }
    }
    return result;
};
 //1. create result variable to return at end
 //2. loop through array first time
 //3. loop through array second time
 //4. set condition that both numbers must equal the target, not be the same index & not have a result already
 //5. add numbers that successfully meet condition to result
 //6. outside of nested loop, return result variable
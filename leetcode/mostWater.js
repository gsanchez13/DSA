// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.
var maxArea = function (height) {
    let first;
    let second;
    let max;
    for (let i = 0; i < height.length; i++) {
        let curr = height[i];
        if (!first) {
            first = curr
        }
        else if(curr >= first){
            second = first;
            first = curr
            max = first * second
        }
    }
    return max
};
// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
// Input: height = [1,1]
// Output: 1
// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.
var maxArea = function (height) {
    let tracker = {};
    let max = 0;
    for (let i = 0, w = 1; i < height.length; i++, w++) {
        let curr = height[i];
        for (let j = 0; j < height.length; j++) {
            let next = height[j]
            if(j !== i){
                if(next <= curr){
                    max = (curr * w)
                    console.log(max)
                }
            }
        }
    }
    console.log(tracker)
    return max
};
// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
// Input: height = [1,1]
// Output: 1
let test1 = [1, 8, 6, 2, 5, 4, 8, 3, 7];
// maxArea(test1)

var maxArea2 = function(height) {
    let n = height.length;
    let left= 0, area= 0;
    let right= n-1;
    
    while(left<right){
        if(height[left]<= height[right])
        {  area= Math.max(area, height[left]*(right-left));
            left++;
        }
        else
        {  area= Math.max(area, height[right]*(right-left));
            right--;
        }
    }
    return area;
};

console.log(maxArea2(test1))
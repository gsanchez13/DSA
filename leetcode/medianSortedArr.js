// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
// The overall run time complexity should be O(log (m+n)).

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

// nums1.length == m
// nums2.length == n
// 0 <= m <= 1000
// 0 <= n <= 1000
// 1 <= m + n <= 2000
// -106 <= nums1[i], nums2[i] <= 106

//one of both arrays can be empty
//comination of both arrays will have a length of at least 1 - 2000
var findMedianSortedArrays = function (nums1, nums2) {
    let totalArr = nums1.concat(nums2).sort(function (a, b) { return a - b });
    let arrLength = totalArr.length;
    let median;
    if (arrLength % 2 === 0) {
        let mid = (arrLength / 2) - 1;
        let first = totalArr[mid]
        let second = totalArr[mid + 1]
        median = ((first + second) / 2).toFixed(5)
        return median
    }
    else {
        median = totalArr[Math.floor(arrLength / 2)].toFixed(5);
        return median
    }
};

let test1Arr1 = [1, 2]
let test1Arr2 = [3, 4]

let test2Arr1 = [1, 3]
let test2Arr2 = [2]

let test3Arr1 = [3]
let test3Arr2 = [-2, -1]
console.log(findMedianSortedArrays(test1Arr1, test1Arr2));
console.log(findMedianSortedArrays(test2Arr1, test2Arr2));
console.log(findMedianSortedArrays(test3Arr1, test3Arr2));


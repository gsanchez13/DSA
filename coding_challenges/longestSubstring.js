// var lengthOfLongestSubstring = function (s) {
//     if (s.length <= 1) return s.length;
//     let start = 0;
//     let maxLength = 0;
//     let map = new Map();
//     for (let i = 0; i < s.length; i++) {
//         let curr = s[i];
//         if (map.get(curr) >= start) {
//             start = map.get(curr) + 1
//             map.set(curr, i)
//         }
//         if (i - start + 1 > maxLength) {
//             maxLength = i - start + 1
//         }
//     }
//     return maxLength
// }
var lengthOfLongestSubstring = function (s) {
    let subStr = "";
    let myset = new Set();
    for (let i = 0; i < s.length; i++) {
        let curr = s[i];
        if (curr.match(/\w/) && !subStr.includes(curr)) {
            myset.add(curr, 1)
            subStr += curr
        }
    }
    console.log(subStr)
    return subStr.length
};
let test1 = "abcabcbb"
let test2 = "bbbbb"
let test3 = "pwwkew"

console.log(lengthOfLongestSubstring(test1))
console.log(lengthOfLongestSubstring(test2))
console.log(lengthOfLongestSubstring(test3));
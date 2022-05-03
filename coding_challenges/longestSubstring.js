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
// var lengthOfLongestSubstring = function (s) {
//     let subStr = "";
//     let ans = "";
//     let myMap = new Map();
//     if (s.length === 0) return null;
//     if (s.length === 1) return 1;
//     for (let i = 0; i < s.length; i++) {
//         let curr = s[i];
//         if (!myMap.has(curr)) {
//             myMap.add(curr, 1)
//             subStr += curr
//         }
//         else {
//             if (subStr.length > ans.length) {
//                 ans = subStr
//                 subStr = ""
//                 myMap = new Set()
//                 myMap.add(curr, 1)
//             }
//             else {
//                 ans = ""
//                 for (let letter of myMap) {
//                     ans += letter
//                 }
//             }
//         }
//     }
//     if (ans.length === 0) return subStr.length
//     return ans.length
// };
var lengthOfLongestSubstring = function (s) {
    const map = new Map();
    let length = 0;
    for (let i = 0, j = 0; i < s.length; i++) {
        let curr = s[i];
        if (map.has(curr)) {
            j = Math.max(map.get(curr), j);
            //sets j =  to the larger of the two, map[curr] or j
        }
        length = Math.max(length, i - j + 1);
        //sets length =  the greater of the two, length, or  
        map.set(curr, i + 1);
    }

    return length;
};
let test1 = "abcabcbb"
let test2 = "bbbbb"
let test3 = "pwwkew"
let test4 = " "
let test5 = "au"
let test6 = "aab"

console.log(lengthOfLongestSubstring(test1));
console.log(lengthOfLongestSubstring(test2));
console.log(lengthOfLongestSubstring(test3));
console.log(lengthOfLongestSubstring(test4));
console.log(lengthOfLongestSubstring(test5));
console.log(lengthOfLongestSubstring(test6));
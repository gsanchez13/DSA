// Given a string s, return the longest palindromic substring in s.
// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Input: s = "cbbd"
// Output: "bb"

var longestPalindrome = function(s) {
    let ans = 0 ;
    let tracker = "";
    let tracker2 = "";
    for(let i = 0; i < s.length; i++){
        tracker += s[i]
        for(let j = tracker.length; j >= 0; j--){
            tracker2 += tracker[j]
        }
        if(tracker2 === tracker){
            if(tracker2.length > tracker.length){
                ans = tracker2.length
            }
        }
    }
    return ans
};
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Input: s = "()"
// Output: true
// Input: s = "()[]{}"
// Output: true
// Input: s = "(]"
// Output: false

var isValid = function (s) {
    let ans = 0;
    for (let i = 0, j = 1; i < s.length; i++, j++) {
        let curr = s[i]
        let next = s[j]
        switch (curr) {
            case "(":
                if (next === ")") {
                    ans += 1
                }
                break;
            case "[":
                if(next === "]"){
                    ans += 1
                }
            case "{":
                if(next === "}"){
                    ans += 1
                }
            default:
                break;
        }
    }
};
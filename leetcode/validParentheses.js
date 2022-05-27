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
    let ans = 0
    for (let i = 0, j = 1; i < s.length; i++, j++) {
        let curr = s[i]
        let next = s[j]
        if (curr === "(" && next === ")" || curr === "[" && next === "]" || curr === "{" && next === "}") {
            ans += 1
            i = i + 2
            j = j + 2
            console.log(curr, next)
        }
        else {
            console.log(curr, next)
            ans += 0
            break
        }
    }
    return ans >= 1 ? true : false;
};

var isValid2 = function (s) {
    const bracketsMap = {
        "(": ")",
        "[": "]",
        "{": "}",
    }
    let str = "";
    for (let i = 0; i < s.length; i++) {
        if (!bracketsMap[s[i]] && bracketsMap[str[str.length - 1]] !== s[i]) {
            return false;
        }
        str = bracketsMap[s[i]] ? str + s[i] : str.slice(0, -1);
        return str === ""
    }
}
// console.log(isValid("()[]{}"))
// console.log(isValid("(]"))
// console.log(isValid("()"))
console.log(isValid2("(){}}{"))
console.log(isValid2("()"))
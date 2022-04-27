// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
// For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.


// @param {string} s
// @return {number}

const romanToInt = (str) => {
    let result = 0;
    let obj = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    };

    for (let i = 0; i < str.length; i++) {
        let curr = obj[str[i]];
        let next = obj[str[i + 1]] || 0;
        if (next > curr) {
            result -= curr
        }
        else {
            result += curr
        }
    }

    return result;
};
//1. set result to 0 (will have value by end)
//2. set variables equal to their value in a hash/obj, key is letter and value is number
//3. begin loop and set current and next variables as current index and current index + 1 OR as 0 in case next variable has no value aka is at end of loop. this is all within the hash, wherethe index in the string ends up being the kay value numerical value in the object
//4. if the next value in the string is greater than the current, then subtract the current value from the next
//5. else if the opposite is true (curr > next) then add the current value to the result
//6. return results
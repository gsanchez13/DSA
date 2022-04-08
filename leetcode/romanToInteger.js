// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
// For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.


// @param {string} s
// @return {number}

var romanToInt = function (s) {
    let result = 0;
    let arrStr = s.split();

    let I = 1;
    let V = 5;
    let X = 10;
    let L = 50;
    let C = 100
    let D = 500;
    let M = 1000;

    for (let i = 0; i < arrStr.length; i++) {
        if (arrStr[i] === "V") {
            if (arrStr[i - 1] === "I") {
                console.log('variables before V', arrStr[i], arrStr[i - 1])
                result += 4
            }
        }
        else if (arrStr[i] === "X") {
            if (arrStr[i - 1] === "I") {
                console.log('variables before X', arrStr[i], arrStr[i - 1])
                result += 9
            }
        }
        else if (arrStr[i] === "L") {
            if (arrStr[i - 1] === "X") {
                result += 50
            }
        }
    }

    return result;
};
//1. set result to 0 (will have value by end)
//2. convert string into array to iterate through it (split)
//3. set variables equal to their value
//4. set rules to how variables should behave
//5. have them return the value of the input
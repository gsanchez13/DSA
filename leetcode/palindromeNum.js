var isPalindrome = function(x) {
    let backwardsNum = Number(x.toString().split('').reverse().join(''));
    return (x === backwardsNum && x < 0 != true ? true : false)
};
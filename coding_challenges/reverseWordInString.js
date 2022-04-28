var reverseWords = function(s) {
    let ans = "";
    let onlyStr = s.trim();
    let arrStr = onlyStr.split(" ");
    for(let i = arrStr.length -1; i >= 0; i--){
        if(typeof(arrStr[i]) === 'string' && !arrStr[i].match(/\s/)){
            ans += ' '
            ans += arrStr[i]
        }
    }
    return ans.trim()
};
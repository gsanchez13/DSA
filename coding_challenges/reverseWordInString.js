var reverseWords = function(s) {
    let ans = "";
    let onlyStr = s.trim();
    let arrStr = onlyStr.split(" ");
    for(let i = arrStr.length -1; i >= 0; i--){
        if(arrStr[i].match(/\w/)){
            ans += ' '
            ans += arrStr[i]
        }
    }
    console.log(ans.trim())
};

test1 = "a good   example"
test2 = " M6eAL   RxnYFfCA kibo     oEw    z36tp     kufsBMitF K  sMG A 1 H io"

reverseWords(test1)
reverseWords(test2)

//solves problem by using regX expression \w to make sure current string element is metacharacter aka a-zA-Z0-9_ 
//avoids adding space as one element that is concatinated to answer without losing the numerical characters in the string
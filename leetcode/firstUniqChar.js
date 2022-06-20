var firstUniqChar = function(s) {
    // step1: create object to hold character count
    // step2: iterate and fill obj
    // step3: iterate through string again
    // step4: using index of string, find value of obj and return if key = 1
    // step5: if there no value 1, return -1 
    
    let tracker = {};
    for(let i = 0; i < s.length; i++){
        let curr = s[i]
        if(!tracker[curr]){
            tracker[curr] = 1
        }
        else{
            tracker[curr] += 1
        }
    }
    for(let i = 0; i < s.length; i++){
        let curr = s[i];
        if(tracker[curr] = 1){
            return i
        }
    }
    return -1
};

let test1 = "loveleetcode"
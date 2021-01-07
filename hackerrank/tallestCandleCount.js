function birthdayCakeCandles(ar) {
    let sortedArr = ar.sort()
    let largest = sortedArr[ar.length -1]
    let tallest = 0
    if(ar.length === 0){
        return 0
    }
    for(let i = sortedArr.length -1; i >= 0; i--){
        if(sortedArr[i] === largest){
            tallest += 1
        }
        else {
            break;
        }
    }
    return tallest
    }
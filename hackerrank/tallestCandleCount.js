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

    // using js and array functions, this function is able to find the largest number from a set of numbers, then create a new, filtered array that has the criteria of finding elements that match the largest number
    // after, the length of the filtered array is returned
    // O^n time complexity
    // O^n sace complexity
    
    const birthdayCakeCandles = (arr) => {
        let tallest = Math.max(...arr)
        let onlyTallestArr = arr.filter(i => i === tallest)
        return onlyTallestArr.length
    }
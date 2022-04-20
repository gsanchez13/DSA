// Given an array of distinctive integers, determine the minimum aboslute difference between any two elements. Print all element pairs with that minimal absolute difference in ascending order.
//Ex: numbers = [6,2,4,10]
//The minimal absolute difference is 2 and the pairs with that difference are (2,4) and (4,6). When printing element pairs (i,j) they should be ordered acsending first by i and then j.
// 2 4
// 4 6
//Function Description 
//Complete the function closestNumers in the editor below. closestNumbers has the following parameter(s): int numbers[n]: an array of integers
//Returns: NONE
//Prints: distinct element pairs that share the minimal absolute difference, displayed in ascending order with each pair separated by one space on a single line.

//1. Create variable to hold key value pairs and the minimum difference that each pair will have to comply with
//2. Loop through array to find the minimum difference and build object with the minimum difference as key and the pair of integers that comply with that as the value
//3. print the values that comply with the condition of having the key as the minimum difference

const closestNums = (arr) => {
    let numPairs = {};
    let sortedArr = arr.sort((a, b) => { return a - b });
    let minDiff;

    for (let i = 0; i < sortedArr.length; i++) {
        let smaller = sortedArr[i];
        let larger = sortedArr[i + 1];
        let diff = Math.abs(larger - smaller);

        if (!minDiff) {
            minDiff = diff
        }
        else if (diff < minDiff) {
            minDiff = diff
        }
        if (!numPairs[diff]) {
            numPairs[diff] = [{
                smaller: smaller,
                larger: larger
            }]
        }
        else {
            numPairs[diff].push({
                smaller: smaller,
                larger: larger
            })
        }
    }
    let smallestDiff = numPairs[minDiff];
    smallestDiff.forEach(el => {
        console.log(el.smaller, el.larger)
    });
};
closestNums([6, 2, 4, 10])
closestNums([3, 30, 9, 15])
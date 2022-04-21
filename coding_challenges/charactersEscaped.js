//Given a string that consists of lowercase English letters and the characters '#' (ASCII value 35) and '!' (ASCII value 33), determine the number of times a character will be escaped. A character will be escaped if:
// it is a lowercase english letter
//there is a '!' character immediately before it and
// both the lowercase english letter and the '!' character are between a starting and an ending '#' character
//ex: '#ab!c#de!f'
//The string is escaped once at '!c'. The substring '!f' is not between '#' characters so it is not escaped. Return 1.
//Function Description
//Complete the numberOfCharactersEscaped function in the editor below
//numberOfCharactersEscaped function in that editor below

//1.loop through string
//2. check if it meets conditions of being lowercase, having a ! before and a # after
// let prev = str[i - 1];
// let curr = str[i];
// if ((/[a-z]/).test(curr) && prev === "!"){
//     console.log(curr)
// }
const numberOfCharactersEscaped = (str) => {
    let timesEscaped = 0;
    let hashFinder = false;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "#") {
            hashFinder = !hashFinder
            continue
        }
        let next = str[i +1];
        if ((/[a-z]/).test(next) && hashFinder && str[i] === "!") {
            timesEscaped += 1
        }
    }
    console.log(timesEscaped)
    return timesEscaped
};
numberOfCharactersEscaped('#ab!c#de!f')
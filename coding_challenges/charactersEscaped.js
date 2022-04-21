//Given a string that consists of lowercase English letters and the characters '#' (ASCII value 35) and '!' (ASCII value 33), determine the number of times a character will be escaped. A character will be escaped if:
// it is a lowercase english letter
//there is a '!' character immediately before it and
// both the lowercase english letter and the '!' character are between a starting and an ending '#' character
//ex: '#ab!c#de!f'
//The string is escaped once at '!c'. The substring '!f' is not between '#' characters so it is not escaped. Return 1.
//Function Description
//Complete the numberOfCharactersEscaped function in the editor below
//numberOfCharactersEscaped function in that editor below

//1. create a variable that returns the amount of times the character has escaped
//2. create variable that can hold boolean if there are hash pairs - first one is false, once it finds a hash pair then it can switch to true
//3. loop through string
//4. if variable is a hash, set it to the opposite. covers its grounds if it already has a pair and sets to uneven.
//5. sets variable for next character, sets check to make sure its a lowercase char, that it is between an even (true) amount of hashes, and it currenty is a "!"
//6. adds the amount of times it has "escaped" aka met conditions to return val and returns it

const numberOfCharactersEscaped = (str) => {
    let timesEscaped = 0;
    let hashFinder = false;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "#") {
            hashFinder = !hashFinder
            continue
        }
        let next = str[i + 1];
        if ((/[a-z]/).test(next) && hashFinder && str[i] === "!") {
            timesEscaped += 1
        }
    }
    return timesEscaped
};
numberOfCharactersEscaped('#ab!c#de!f')
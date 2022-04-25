//A sentence is minimally defined as a word or a group of words that end with a period. A word is considered to be a sequence of letters delimited by a non-letter character. A repreated word is a case-sensitive word that appears more than once in a sentence (e.g. 'had' = 'had' but 'had' != 'Had'). Because substrings of a word are not delimited, they are not considered to be words, (e.g. 'hard' is not repeared in 'hardly'). Determine the first repeated word in a sentece.
//ex: "We work hard because hard work pays."

//1. create object to hold key value pairs of repeated words - key is the word, value is static
//2. convert input string into array
//3. look through new array
//4. apply conditions if word is not a key. create key. if word is already a key (repeated) & is not a symbol, return repeated word
const firstRepeatedWord = (str) => {
    let repeatTracker = {};
    let strArr = str.split(' ');
    for (let i = 0; i < strArr.length; i++) {
        if (!repeatTracker[strArr[i]]) {
            repeatTracker[strArr[i]] = 1
        }
        else if (strArr[i] !== '') {
            return strArr[i]
        }
    }
};
let test = "We work hard because hard work pays."

console.log(firstRepeatedWord(test))
//find the longest word in a sentence
let str = "Which one is the longest word"
let str2 = "Which one is the 7 longest word?"
//split string into array of words
//compare the length of words
//return the first element of sorted array

//no1 with alphanumerical characters only


function findLongestWord(str) {
    let strarr = str.split(" ").sort((a, b) => b.length - a.length);
    return strarr.shift();
}

console.log(findLongestWord(str));

//no2 with non-aphanumerical characters

function findLongestWord2(str) {
    let strarr = str.split(" ").sort((a, b) => {
        return b.replace(/[^a-zA-Z]/g, "").length - a.replace(/[^a-zA-Z]/g, "").length;
    });
    return strarr.shift();
}

console.log(findLongestWord2(str2));
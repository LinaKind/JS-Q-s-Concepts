//check if a string is a palindrome

//no1 assuming all characters in a string are alphanumeric

let string1 = "tattarrattat";
let string2 = "notapalindrome";
let string3 = "tatt%arrat*_tat";

function checkIfPalindrome(str) {
    return str.split("").reverse().join("") === str;
}

console.log(checkIfPalindrome(string1)); //true
console.log(checkIfPalindrome(string2)); //false


//no2 the string may have non-alphanumeric characters

//helper to clear the string
function cleanStringAndCheck(str) {
    let cleanstr = str.replace(/[^0-9a-zA-Z]/g, "").toLowerCase();
    return checkIfPalindrome(cleanstr);
}

console.log(cleanStringAndCheck(string3)); //true
console.log(cleanStringAndCheck(string2)); //false
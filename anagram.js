const s = "anagram";
const t  = "nagaram";


const isAnagramJSON = function(s, t) {
    sArray = s.split("").sort();
    tArray = t.split("").sort();
    //method to compare two string
    const equals = (a, b) => JSON.stringify(a) === JSON.stringify(b)
    return equals(sArray, tArray);
};

//without using JSON.stringify
//this looks to be a bit slower, the same amount of memory used
const isAnagram = function(s, t) {
    sArray = s.split("").sort().join("");
    tArray = t.split("").sort().join("");
    if(sArray === tArray)return true
    else return false
};


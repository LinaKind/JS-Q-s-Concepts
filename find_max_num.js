//find maximum repeating number
let arr = [1,1,1,2,3,4,2,2,2];

//initialize an object
//iterate over an array and find count how many times each value appears, store in an object
//sort the object, last value will contain max repeated object


let obj = {};

arr.map(num => {
    //checks if obj[num] exists already - adds 1 to the previous value or 0
    obj[num] = (obj[num] || 0) + 1
})

console.log(obj);

const sortedarr = Object.keys(obj).sort((a, b ) => obj[a] - obj[b]);
const maxRepeatedNum = sortedarr.slice(-1);
console.log(+maxRepeatedNum);
let newarr = ["Jane", "John", "Tom"];
console.log(Array.isArray(newarr));


//add items to an array --push adds to the end
newarr.push("Mary");
newarr.push("Rob", "Stacey")
console.log(newarr); // ["Jane", "John", "Tom", "Mary", "Rob", "Stacey"]

//remove a specific item from an array

//with splice --uses index to remove an item from an array --modifies the array
newarr.splice(1, 1) //removes 1 item from index position 1
console.log(newarr); //["Jane", "Tom", "Mary", "Rob", "Stacey"]
newarr.splice(1, 1, "Katy"); //replaces 1 item in index position 1
console.log(newarr); //["Jane", "Katy", "Mary", "Rob", "Stacey"]
newarr.splice(2, 0, "Laura"); //inserts at index 2 does not remove anything
console.log(newarr); //["Jane", "Katy", "Laura", "Mary", "Rob", "Stacey"]

//with filter returns a NEW array with elements that passed the test
const shortNames = newarr.filter(name => name.length <= 3);
console.log(shortNames); //["Rob"]

//map array method --> CREATES A NEW COPY of the original array
const numarray = [2, 4, 6, 8, 10];
const numTwicearray = numarray.map(function(num){return num * 2});
console.log(numTwicearray); // [4, 8, 12, 16, 20];

//forEach similar to map, BUT 1. does not return a new array (but does not mutate the original either) 2. can chain map and not forEach

//find method --> returns a FIRST value in the array provided that meets testing function

const findItem = numarray.find(num => num > 5);
console.log(findItem); //6

//reduce method executes a user-apploed "reducer" callback function
//e.g. get sum f array items
const reducer = (x, y) => x + y;
console.log(numarray.reduce(reducer)); //30
console.log(numarray.reduce(reducer, 10)); //40

//find most recent date
const datesArray = [
    '2021/11/11',
    '2021/11/12',
    '2021/12/04'
]
const recentDate = datesArray.reduce((max, date) => date > max ? date : max, datesArray[0]);
console.log(recentDate); //2021/12/04


//remove array duplicates
const duplicatesArr = [1, 1, 1, 2, 3, 4, 5];

//using Set data object (ES6)
//spread operator to conver back to an array as new Set is an object that allows unique values only
const newArray = [...new Set(duplicatesArr)];
console.log(newArray);

//using filter method

const filteredArray = duplicatesArr.filter((num, index) => duplicatesArr.indexOf(num)  === index);
console.log(filteredArray);

//find duplicates using the same principle
const duplicateValues = duplicatesArr.filter((num, index) => duplicatesArr.indexOf(num)  !== index);
console.log(duplicateValues);

//using reduce --> reducer is checking if an array contains an item already
const reduceArray = duplicatesArr.reduce((unique, item) => {
    return unique.includes(item) ? unique : [...unique, item];
})
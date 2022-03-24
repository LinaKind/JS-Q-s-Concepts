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



//find Max/Min from the array

let maxminarray = [100, 3547, 2, 0, 9];

let min = Math.min(...maxminarray);
let max = Math.max(...maxminarray);
console.log(min);//0
console.log(max);//3547

//** Sorting An Array**/
//sort() method sorts the elements of an array in place and returns sorted array
//default sort order is ascending
//converting elements to strigs and compering their sequences 
let arrayToSort = ["John", "Anna", "Mary", "Jane"];
let numToSort = [1, 999, 7, 6, 24];

console.log(arrayToSort.sort());

//to compare numbers numbers not strings

// numToSort.sort(function(a, b) {
//     return a - b
// });



//ES6 syntax

numToSort.sort((a,b) => a-b);

//sort in descending order
//numToSort.sort((a,b) => b-a);

console.log(numToSort);

//** Merge an Array**/

//concat() method used to merge two or more arrays, does not change the existing arrays, but instead returns a new array
const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];

const array3 = array1.concat(array2);
console.log(array3);

//can also merge using spread operator --also creates a new array

const arrayOne = [1, 2, 3];
const arrayTwo = [4, 5, 6];

const mergedArray = [...arrayOne, ...arrayTwo];
console.log(mergedArray);

//if you DO NOT WANT to create a new array and merge with the existing one

const arrayThree = [7, 8, 9];
const arrayFour = [10, 11, 12];

arrayThree.push(...arrayFour);
console.log(arrayThree);


/** Slice vs splice
 * splice() method returns the removed item(s) in an array and slice() method returns
 * the selected element(s) in an array
 * splice() --> changes the original array
 * slice() --> does not change the original array
 * **/


//Use flatMap to loop over two arrays 
const arrayOfYear = [1992, 1995, 1988, 2000];
const arrayOfMonths = ['January', 'February', 'March', 'April'];

const newSetUp = arrayOfYear.flatMap((year) => {
    //NB need a second parenthesis .... why?
    return arrayOfMonths.map((month) => ({
        year, month
    }))
})

newSetUp.forEach(({year, month}) => {
    console.log(year, month);
})

//Use flatMap to loop over an array and an array of objects




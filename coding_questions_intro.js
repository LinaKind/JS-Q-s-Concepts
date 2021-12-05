let newvar = 10 + "20";
console.log(newvar); //1020


console.log(0.1 + 0.2 == 0.3); //false

//add(2, 5); //7

function addTwo(x, y) {
    return x + y;
}

console.log(addTwo(2, 5)); ///

//add(2)(5); //7

function addTwoAgain(x) {
    return function (y) {
        return x + y;
    }
}

//both together

function addTogether(x, y) {
    if (x && y) return x + y;
    else return function(y) {
        return x + y;
    }
}

console.log(addTogether(2, 5)); //7
console.log(addTogether(2)(5)); //7

console.log(addTwoAgain(2)(5)); //7

//what value is returned ? -- reversed string
console.log("Hello there".split("").reverse().join(""));

let arr = [];
arr.push(1);
arr.push(2);
console.log(arr.length); //2

let obj = {n:1};
let obj2 = obj;
obj.x = obj2 = {n:2};
console.log(obj.x);


// console.log('one');
// setTimeout(function() {
//   console.log('two');
// }, 0);
// Promise.resolve().then(function() {
//   console.log('three');
// })
// console.log('four');

//one four three two
//one & four straightforward console logs promise process in JobQueue & Answer is timeout in EventLoop Queue
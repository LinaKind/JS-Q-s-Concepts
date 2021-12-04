// for - loops through a block of code
// for/in loops through the properties of an object
// for/of loops through the values of an iterable object
// while loops through a block of code while specified condition is met
// do/while loops through a block of code while a specified condition is true


//* for loop */

let newarr = [1, 2, 3, 4, 5];

for (let y =0; y < newarr.length; y ++) {
    console.log(newarr[y]);
}

//* for/in loop * --objects/
const newObj = {
    type: "cat",
    name: "Prince",
    age: "6 months",
}

for (let y in newObj) {
    console.log(y);
    console.log(newObj[y]);
}

//* for/of loop  * --arrays/

for (let y of newarr) {
    console.log(y);
}

//* while loop */
let count = 1;
while (count <= 5) {
    console.log(`Number is ${count}`)
    count++;
}

//* do while loop */
do {
    console.log(`Number is ${count}`)
    count++
} 
while (count <= 10);